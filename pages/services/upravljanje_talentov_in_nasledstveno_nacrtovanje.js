import React from "react";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import HeadingSection1 from "../../components/service1/HeadingSection/HeadingSection_service1";
import Quote from "../../components/service1/Quote/QuoteSection1_service1";
import CardSection from "../../components/service1/CardSection/CardTable_service1";
import Plan from "../../components/service1/PlanSection/Plan_service1";
import CardSection_utnn from "../../components/UTNN/cardSection/cardSection_utnn";
import Contact_utnn from "../../components/UTNN/Contact/Contact_utnn";
import CardSlider from "../../components/service1/News/Card/NewsSlider_section1";

const upravljanje_talentov_in_nasledstveno_nacrtovanje = () => {
  const { t, lang } = useTranslation();

  const quote1 = t("utnn:utnn_quoteParagraph");

  const HeadingSection = {
    upperTitle: t("utnn:utnn_mainHeading"),
    paragraph: t("utnn:utnn_mainParagraph"),
    headerImage1: "/UTNN/UTNNMainImageDesktop.png",
    headerImage2: "/UTNN/UTNNMainImageMobile.png",
  };

  const cardProps1 = [
    {
      heading: t("utnn:utnn_card1Heading"),
      text: t("utnn:utnn_card1Text"),
      color: "#AABFD1",
    },
    {
      heading: t("utnn:utnn_card2Heading"),
      text: t("utnn:utnn_card2Text"),
      color: "#CFEDFC",
    },
  ];

  const cardProps2 = [
    {
      heading: t("utnn:utnn_card3Heading"),
      text: t("utnn:utnn_card3Text"),
      color: "#BED6E1",
    },
    {
      heading: t("utnn:utnn_card4Heading"),
      text: t("utnn:utnn_card4Text"),
      color: "#BED6E1",
    },
  ];

  const planHeading1 = t("utnn:utnn_Plan1Heading");
  const planHeading2 = t("utnn:utnn_Plan2Heading");

  const Plan1 = [
    { text: t("utnn:utnn_Plan1Card1"), number: "1" },
    { text: t("utnn:utnn_Plan1Card2"), number: "2" },
    { text: t("utnn:utnn_Plan1Card3"), number: "3" },
    { text: t("utnn:utnn_Plan1Card4"), number: "4" },
    { text: t("utnn:utnn_Plan1Card5"), number: "5" },
    { text: t("utnn:utnn_Plan1Card6"), number: "6" },
  ];

  const Plan2 = [
    { text: t("utnn:utnn_Plan2Card1"), number: "1" },
    { text: t("utnn:utnn_Plan2Card2"), number: "2" },
    { text: t("utnn:utnn_Plan2Card3"), number: "3" },
    { text: t("utnn:utnn_Plan2Card4"), number: "4" },
    { text: t("utnn:utnn_Plan2Card5"), number: "5" },
    { text: t("utnn:utnn_Plan2Card6"), number: "6" },
  ];

  const articleCard1 = {
    heading: t("utnn:utnn_article1CardHeading"),
    text: t("utnn:utnn_article1CardContent"),
    image: "/UTNN/article1_desktop.png",
  };

  const articleCard2 = {
    heading: t("utnn:utnn_article2CardHeading"),
    text: t("utnn:utnn_article1CardContent"),
    image: "/UTNN/article2_desktop.png",
  };

  const articleCard3 = {
    heading: t("utnn:utnn_article3CardHeading"),
    text: t("utnn:utnn_article3CardContent"),
    image: "/UTNN/article3_desktop.png",
  };

  return (
    <>
      <Head>
        <title>
          Resultant - Upravljanje Talentov in Nasledstveno Nacrtovanje
        </title>
      </Head>
      <HeadingSection1
        className="section"
        props={HeadingSection}
      ></HeadingSection1>
      <Quote props={quote1} className="section"></Quote>
      <CardSection
        className="section"
        cardProps1={cardProps1}
        cardProps2={cardProps2}
        plan2={[]}
        button={true}
      ></CardSection>
      <Plan
        plan1={Plan1}
        heading1={planHeading1}
        plan2={Plan2}
        heading2={planHeading2}
        hideButton={true}
        className="section"
      ></Plan>
      <CardSection_utnn className="section"></CardSection_utnn>
      <Contact_utnn className="section"></Contact_utnn>
      <CardSlider
        news={[articleCard1, articleCard2, articleCard3]}
      ></CardSlider>
    </>
  );
};

export default upravljanje_talentov_in_nasledstveno_nacrtovanje;
