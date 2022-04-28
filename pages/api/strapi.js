import qs from "qs";

export function getArticleFromStrapiData(article) {
  // Turn title into link
  const link = article.attributes.naslov.replace(" ", "-").toLowerCase();

  // Get link to main img
  const mainImgUrl =
    getStrapiURL() + article.attributes.glavnaSlika.data.attributes.url;

  return {
    id: article.id,
    heading: article.attributes.naslov,
    text: article.attributes.podnaslov,
    image: mainImgUrl,
    link: link,
  };
}

export function getStrapiURL(path = "") {
  return `${
    process.env.NODE_ENV == "production"
      ? process.env.STRAPI_API_URL
      : "http://127.0.0.1:1337"
  }${path}`;
}

export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    options,
  };

  // Build Request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
}
