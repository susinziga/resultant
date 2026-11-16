import axios from "axios";

const DEFAULTS = {
  baseUrl: process.env.FARVOICE_API_BASE_URL,
  tokenUrl: process.env.FARVOICE_TOKEN_URL,
  clientId: process.env.FARVOICE_CLIENT_ID,
  clientSecret: process.env.FARVOICE_CLIENT_SECRET,
  scope: process.env.FARVOICE_SCOPE || "farvoice:communication:execute",
  tenantId: process.env.FARVOICE_TENANT_ID,
  providerIdentifier: process.env.FARVOICE_PROVIDER_IDENTIFIER,
  accountIdentifier: process.env.FARVOICE_ACCOUNT_IDENTIFIER,
  templateId: process.env.FARVOICE_TEMPLATE_ID,
  contextGroupId: process.env.FARVOICE_CONTEXT_GROUP_ID,
};

const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// One-line summary of a failed request for the logs: Farvoice's error body if
// it sent one, otherwise the network/axios message.
const describeError = (e) => {
  const body = e.response?.data;
  if (body === undefined) return e.message;
  return typeof body === "string" ? body : JSON.stringify(body);
};

const tokenCache = { accessToken: null, expiresAt: 0 };
const REFRESH_BEFORE_MS = 60 * 1000;

const getAccessToken = async ({ tokenUrl, clientId, clientSecret, scope }) => {
  if (!tokenUrl) throw new Error("Farvoice: missing tokenUrl");
  if (!clientId) throw new Error("Farvoice: missing clientId");
  if (!clientSecret) throw new Error("Farvoice: missing clientSecret");

  const now = Date.now();
  if (
    tokenCache.accessToken &&
    now < tokenCache.expiresAt - REFRESH_BEFORE_MS
  ) {
    return tokenCache.accessToken;
  }

  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
    scope,
  });

  let data;
  try {
    const res = await axios.post(tokenUrl, body.toString(), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    data = res.data;
  } catch (e) {
    console.error(
      `[farvoice] FAIL stage=token status=${e.response?.status ?? "none"} ` +
        `error=${describeError(e)}`
    );
    const err = new Error(
      `Farvoice token request failed 1: ${e.response?.status || ""} ${
        e.response?.statusText || e.message
      }`
    );
    err.status = e.response?.status;
    err.response = e.response?.data;
    throw err;
  }

  tokenCache.accessToken = data.access_token;
  tokenCache.expiresAt = Date.now() + (data.expires_in || 3600) * 1000;
  return tokenCache.accessToken;
};

export const sendFarvoiceEmail = async ({
  to,
  templatePayload,
  contextId,
  versionCounter = 1,
  type = "transactional",
  cc = [],
  bcc = [],
  trackingEnabled = false,
  ...overrides
} = {}) => {
  const config = { ...DEFAULTS, ...overrides };

  const {
    baseUrl,
    tenantId,
    providerIdentifier,
    accountIdentifier,
    templateId,
    contextGroupId,
  } = config;

  if (!baseUrl) throw new Error("Farvoice: missing baseUrl");
  if (!tenantId) throw new Error("Farvoice: missing tenantId");
  if (!templateId) throw new Error("Farvoice: missing templateId");
  if (!to) throw new Error("Farvoice: missing 'to' address");

  const accessToken = await getAccessToken(config);

  const toAddresses = Array.isArray(to) ? to : [to];
  const payloadString =
    typeof templatePayload === "string"
      ? templatePayload
      : JSON.stringify(templatePayload);

  const emailContextId = contextId || uuidv4();

  const body = {
    versionCounter,
    emails: [
      {
        contextGroupId,
        contextId: emailContextId,
        type,
        providerIdentifier: { value: providerIdentifier },
        accountIdentifier: { value: accountIdentifier },
        templateId,
        destination: {
          toAddresses,
          ccAddresses: cc,
          bccAddresses: bcc,
        },
        templatePayload: payloadString,
        trackingEnabled,
        trackEvents: [],
        urls: [],
      },
    ],
  };

  console.log(body);

  const startedAt = Date.now();
  try {
    const res = await axios.post(`${baseUrl}/api/v2/ingest/email`, body, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "X-Tenant-ID": tenantId,
      },
    });
    // A 2xx can still carry rejected emails, so report those as a failure too.
    const rejected = res.data?.rejected || [];
    const summary =
      `status=${res.status} contextId=${emailContextId} ` +
      `durationMs=${Date.now() - startedAt} rejected=${rejected.length}`;
    if (rejected.length > 0) {
      console.error(
        `[farvoice] FAIL stage=send ${summary} error=${JSON.stringify(rejected)}`
      );
    } else {
      console.log(`[farvoice] OK ${summary}`);
    }
    return res.data;
  } catch (e) {
    console.error(
      `[farvoice] FAIL stage=send status=${e.response?.status ?? "none"} ` +
        `contextId=${emailContextId} durationMs=${Date.now() - startedAt} ` +
        `error=${describeError(e)}`
    );
    const err = new Error(
      `Farvoice request failed 2: ${e.response?.status || ""} ${
        e.response?.statusText || e.message
      }`
    );
    err.status = e.response?.status;
    err.response = e.response?.data;
    throw err;
  }
};
