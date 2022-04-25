// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
  const { email, items } = JSON.parse(req.body);
  console.log(email);
  const url =
    "https://a.klaviyo.com/api/v2/list/Sz4Mty/members?api_key=pk_3254f58026ed75c8e9f439d68979fff25c";
  const options = {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      profiles: [{ email: email, items: items }],
    }),
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));

  /*
  fetch(
    "https://a.klaviyo.com/api/v2/list/Sz4Mty/members?api_key=pk_3254f58026ed75c8e9f439d68979fff25c",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        profiles: [
          { email: "george.washington@klaviyo.com" },
          { phone_number: "+13239169023", sms_consent: true },
        ],
      }),
    }
  )
    .then((response) => {
      console.log("asd");
      console.log(response);
      response.json();
    })
    .then((data) => console.log(data));*/

  res.status(200).send({ data: "send" });
}
