// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sendFarvoiceEmail } from "../../lib/farvoice";

export default async function handler(req, res) {
  const { data } = req.body;

  console.log(data);

  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(
    "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"
  );

  const handleLabels = {
    firstName: "Ime",
    lastName: "Priimek",
    phone: "Telefonska številka",
    email: "Email",
    organization: "Ime organizacije",
    message: "Sporočilo",
    subject: "Zadeva",
    companyName: "Ime podjetja",
    address: "Naslov",
    contactPerson: "Kontaktna oseba",
    employeeCount: "Število zaposlenih",
    remoteQuestionnaires: "Število e-vprašalnikov",
    printedQuestionnaires: "Število tiskanih vprašalnikov",
    organizationalUnits: "Organizacijske enote",
    presentationToBoard: "Predstavitev rezultatov upravi",
    leaderEmployeeComparison: "Primerjava vodje/zaposleni",
    measurementOption1: "Izvedba z vodenimi delavnicami",
    measurementOption2: "Merjenje na daljavo z e-vprašalnikom",
    measurementOption3: "Izvedba s tiskanimi vprašalniki",
    measurementOption4: "Kombinacija",
    totalPeople: "Skupno število oseb",
    leadersCount: "Število vodij",
    salesCount: "Število prodajalcev",
    includeLeaders: "Sodelujejo vodje",
    includeSales: "Sodeluje prodajno osebje",
    provideFeedback: "Povratna informacija",
    customAnalysis: "Prilagojena analiza",
  };

  const name = [data.firstName, data.lastName].filter(Boolean).join(" ");
  const email = data.email || "";

  const excluded = new Set(["firstName", "lastName", "email"]);
  let message = "";
  for (let id in data) {
    if (excluded.has(id)) continue;
    const label = handleLabels[id] || id;
    message += "\n<b>" + label + "</b>: " + data[id] + "<br/>";
  }

  const msg = {
    // from: "resultanthsc@gmail.com",
    // subject: "RESULTANT POVPRAŠEVANJE",
    ime: name,
    email,
    sporocilo: message,
  };

  console.log(msg);

  try {
    await sendFarvoiceEmail({
      // to: "ziga.susin@gmail.com",
      // to: "enej.klaric@resultant.si",
      // to: "enej19@gmail.com",
      to: "klaric.enej@gmail.com",
      templatePayload: msg,
    });

    return res.status(200).json({ name: "Sent", message: "SENT EMAILS" });
  } catch (e) {
    console.error("ERROR SENDING EMAILS", e);
    return res
      .status(e.status || 500)
      .json({ name: "Error", message: e.message, response: e.response });
  }
}
