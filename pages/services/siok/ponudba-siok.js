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
        <title>Želite pridobiti informativno ponudbo? | SiOK | Resultant</title>
        <meta
          name="description"
          content="Slovenska organizacijska klima - analiza notranjega okolja v organizaciji in primerjava z aktualnim slovenskim povprečjem. Zavzeti zaposleni so ključ do uspeha."
        />
      </Head>
      <HeadingSection_offer></HeadingSection_offer>
      <OfferForm_offer className="section"></OfferForm_offer>
    </>
  );
}
