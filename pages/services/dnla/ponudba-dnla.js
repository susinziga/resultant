import Head from "next/head";
import React from "react";
import HeadingSection_offer from "../../../components/offer/HeadingSection_offer";
import OfferDNLA from "../../../components/offer/OfferDNLA/OfferDNLA";
import OfferForm_offer from "../../../components/offer/OfferForm/OfferForm_offer";

const offer_dnla = () => {
  return (
    <>
      <Head>
        <title>
          Želite pridobiti informativno ponudbo? | DNLA | Resultant{" "}
        </title>
        <meta
          name="description"
          content="DNLA Expert System - digitalno orodje za merjenje in razvoj potenciala zaposlenih na področju socialnih kompetenc, vodenja in prodaje. Spoznajte orodje."
        />
      </Head>
      <HeadingSection_offer></HeadingSection_offer>
      <OfferDNLA></OfferDNLA>
    </>
  );
};

export default offer_dnla;
