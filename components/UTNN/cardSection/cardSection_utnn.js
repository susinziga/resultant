import React from "react";
import useTranslation from "next-translate/useTranslation";
import Card_utnn from "./Card/Card_utnn";
import { CardSectionContainer } from "./cardSection.styled";

const CardSection_utnn = (props) => {
  const { t, lang } = useTranslation();

  return (
    <>
      <CardSectionContainer {...props}>
        <Card_utnn
          flipX
          heading={t("utnn:utnn_bigArticle1Heading")}
          content={t("utnn:utnn_bigArticle1Content")}
          img={"/UTNN/card1img"}
          href="/services/upravljanje_talentov_in_nasledstveno_nacrtovanje/upravljanje_talentov_in_njihovih_karier"
        ></Card_utnn>
        <Card_utnn
          heading={t("utnn:utnn_bigArticle2Heading")}
          content={t("utnn:utnn_bigArticle2Content")}
          img={"/UTNN/card2img"}
          href="/services/upravljanje_talentov_in_nasledstveno_nacrtovanje/nasledstveno_nacrtovanje"
        ></Card_utnn>
      </CardSectionContainer>
    </>
  );
};

export default CardSection_utnn;
