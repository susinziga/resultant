import OfferForm_offer from "../../../components/offer/OfferForm/OfferForm_offer";
import HeadingSection_offer from "../../../components/offer/HeadingSection_offer";
import Head from "next/head";

/*
  TODO: horizontal scroll is possible. Fix
*/

export default function Offer() {
  return (
    <>
      <Head>
        <title>
          Želite pridobiti informativno ponudbo? | 360Potencial | Resultant
        </title>
      </Head>
      <HeadingSection_offer></HeadingSection_offer>
      <OfferForm_offer
        className="section"
        formSubject="360Potencial Povpraševanje"
      ></OfferForm_offer>
    </>
  );
}
