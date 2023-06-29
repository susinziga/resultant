// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { data } = req.body;
  var nodemailer = require("nodemailer");
  var smtpTransport = require("nodemailer-smtp-transport");

  var transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      // host: "smtp.gmail.com",
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
    "klaric.enej@gmail.com",
    "roman.klaric@resultant.si",
    "primoz.bitenc@resultant.si",
  ];

  for (let i = 0; i < receivers.length; i++) {
    const mailOptions = {
      from: "RESULTANT POVPRAŠEVANJE <resultanthsc@gmail.com>",
      name: "RESULTANT",
      to: receivers[i],
      subject: data.subject,
      html: message,
    };

    await transporter.sendMail(mailOptions, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });

    console.log("SENT MAIL TO " + receivers[i]);
  }

  res.status(200).json({ name: "Sent" });
}
