// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { data } = req.body;
  var nodemailer = require("nodemailer");
  var smtpTransport = require("nodemailer-smtp-transport");

  var transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      // host: "smtp.gmail.com",
      // secureConnection: true,
      // secure: true,
      secure: false,
      auth: {
        user: "resultanthsc@gmail.com",
        pass: "pioyrizwplkrmsfu",
      },
    })
  );

  let message = "";
  for (let id in data) {
    message += "<b>" + id + "</b>" + " : " + data[id] + "<br/>";
  }

  const receivers = [
    // "klaric.enej@gmail.com",
    // "roman.klaric@resultant.si",
    // "primoz.bitenc@resultant.si",
    "icevx1@gmail.com",
    "thecrazy.marko@gmail.com",
  ];

  for (let i = 0; i < receivers.length; i++) {
    const mailOptions = {
      from: "RESULTANT POVPRAŠEVANJE <resultanthsc@gmail.com>",
      name: "RESULTANT",
      to: receivers[i],
      subject: data.subject,
      html: message,
    };

    console.log("SENDING EMAIL TO " + receivers[i]);
    await transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.error("ERROR SENDING MAIL TO " + receivers[i]);
        console.error(err);
      } else {
        console.log("SENT EMAIL TO " + receivers[i]);
        console.log(info);
      }
    });
  }

  res.status(200).json({ name: "Sent" });
}
