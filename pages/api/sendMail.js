// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { data } = req.body;

  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(
    "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"
  );

  let message = "";
  for (let id in data) {
    message += "<b>" + id + "</b>" + " : " + data[id] + "<br/>";
  }

  const msg = {
    from: "resultanthsc@gmail.com",
    subject: "RESULTANT POVPRAŠEVANJE",
    html: message,
  };

  const receivers = [
    // "klaric.enej@gmail.com",
    // "roman.klaric@resultant.si",
    // "primoz.bitenc@resultant.si",
    "icevx1@gmail.com",
    "thecrazy.marko@gmail.com",
  ];

  sgMail
    .send({
      ...msg,
      to: receivers,
    })
    .then(
      () => {
        console.log("SENT EMAILS");

        res.status(200).json({ name: "Sent", message: "SENT EMAILS" });
      },
      (error) => {
        console.error("ERROR SENDING EMAILS");
        console.error(error);

        res.status(200).json({ name: "Sent", message: error });
      }
    );
}
