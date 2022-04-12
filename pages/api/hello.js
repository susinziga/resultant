// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
  console.log(req.body);
  let { email } = JSON.parse(req.body);

  console.log(email);
  const url = "https://api.mailerlite.com/api/v2/subscribers";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "X-MailerLite-ApiKey":
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZTdjNDM5NDFiY2MzZmUxMGFhOWNjNGQ3YWU2MjZiOTVkYjY3ZGQzOGJkZWQwZTAyMWNjYmFmZDEyOTE1NWIxMDBkNTBiMDY0NzljZTI2MzUiLCJpYXQiOjE2NDk3ODA4OTAuNDE0MTMsIm5iZiI6MTY0OTc4MDg5MC40MTQxMzMsImV4cCI6NDgwNTQ1NDQ5MC40MTA2MjksInN1YiI6IjM0MTYzIiwic2NvcGVzIjpbXX0.I-MhIckF20QSJEzuzS-QZ1r_LUbVY3vQRoClraoQAIsS4KDWvWNertoeM_sTPd-wIHI1YzA01bWf9Tx7FEC0BS8xHuCiPPg5HLdL8PYrUiquuswmsXw0gIeS6GyAJMf90Gkx6KnX186SWRCzGesv0hPZQmmpSUt8mG5oK_uHrqbsnow7LuuPCkxcwIf0IlghoX7h--tJSX4LbwG9OdEPiCrWS_Ld3T0kF87yMXOWFRelcM90PgUHbnCD4KFq0sWW7nEhRvbndliAKtmMbHU-ufBo56WPlFoWBaFvyXr6vuFAiO4nU6jSQwpiH68gPFdv-74iGJs2r44TwMsTYBNi7SOkBhFoBO8yedz-awp51jBDiEyg9DLUVNbugpKmc_i477PUlYK7rBIiLIJxwOW-I_IkmuXskmnPPs1pRApCDFF5XF6qN6bDN7xRFsuypuWRKHE1332BNKB21jXz8B62BEfUlwXbtxvkO3N64PF4uDvW7C2QEkfthS6VOGFEToUUTCKGAxefT7W_hFaLL7Ed6Hi3UX2xWm5CTjXyhABrvsG-rLeK3zF6TclMDuebYsq2U6raBx9ituhNsHK3JdzgY_eOCpcBLMENAW4zPoDp_JvuZKhWu2TV2hlEidj52P5Ehpb7qm0YmlsyF90sbFGmXC2HwcVs9ZOupPZKOI8MSMQ",
    },
    body: JSON.stringify({
      email,
    }),
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      return res.status(200).json({ data });
    })
    .catch((e) => {
      return res.status(400).json({ e });
    });
}
