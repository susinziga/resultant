// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { data } = req.body;
  var nodemailer = require("nodemailer");
  var smtpTransport = require("nodemailer-smtp-transport");

  var transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: "resultanthsc@gmail.com",
        pass: "Enej123!",
      },
    })
  );

  let message = "";
  for (let id in data) {
    message += "<b>" + id + "</b>" + " : " + data[id] + "<br/>";
  }

  console.log(message);

  var mailOptions = {
    from: "RESULTANT POVPRAŠEVANJE <resultanthsc@gmail.com>",
    name: "RESULTANT",
    to: "klaric.enej@gmail.com",
    subject: data.subject,
    html: message,
  };

  console.log("SENT MAIL TO " + mailOptions.to);
  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
        if (err) {
            console.error(err);
            reject(err);
        } else {
            console.log(info);
            resolve(info);
        }
    });
});
  
  res.status(200).json({ name: "Sent" });
}
