import React from "react";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import HeadingSection1 from "../../components/service1/HeadingSection/HeadingSection_service1";
import Quote from "../../components/service1/Quote/QuoteSection1_service1";
import CardSection from "../../components/service1/CardSection/CardTable_service1";
import Plan from "../../components/service1/PlanSection/Plan_service1";
import BigCardsSection from "../../components/UTNN/cardSection/cardSection_utnn";
import BigCard from "../../components/UTNN/CardSection/Card/Card_utnn";
import Contact_srk from "../../components/SRK/Contact/Contact_srk";
import CardSlider from "../../components/service1/News/Card/NewsSlider_section1";

const sistematicen_razvoj_kompetenc = () => {
  const { t, lang } = useTranslation();

  const quote1 = t("srk:srk_quoteParagraph");

  const HeadingSection = {
    upperTitle: t("srk:srk_mainHeading"),
    paragraph: t("srk:srk_mainParagraph"),
    headerImage1: "/SRK/SRKMainImageDesktop.png",
    headerImage2: "/SRK/SRKMainImageMobile.png",
  };

  const cardProps1 = [
    {
      heading: t("srk:srk_card1Heading"),
      text: t("srk:srk_card1Text"),
      color: "#AABFD1",
    },
    {
      heading: t("srk:srk_card2Heading"),
      text: t("srk:srk_card2Text"),
      color: "#CFEDFC",
    },
  ];

  const cardProps2 = [
    {
      heading: t("srk:srk_card3Heading"),
      text: t("srk:srk_card3Text"),
      color: "#BED6E1",
    },
  ];

  const planHeading1 = t("srk:srk_Plan1Heading");
  const planHeading2 = t("srk:srk_Plan2Heading");

  const Plan1 = [
    { text: t("srk:srk_Plan1Card1"), active: true },
    { text: t("srk:srk_Plan1Card2") },
    { text: t("srk:srk_Plan1Card3") },
    { text: t("srk:srk_Plan1Card4") },
    { text: t("srk:srk_Plan1Card5"), active: true },
    { text: t("srk:srk_Plan1Card6") },
    { text: t("srk:srk_Plan1Card7") },
    { text: t("srk:srk_Plan1Card8") },
    { text: t("srk:srk_Plan1Card9"), active: true },
  ];

  const Plan2 = [
    { text: t("srk:srk_Plan2Card1"), number: "1" },
    { text: t("srk:srk_Plan2Card2"), number: "2" },
    { text: t("srk:srk_Plan2Card3"), number: "3" },
    { text: t("srk:srk_Plan2Card4"), number: "4" },
    { text: t("srk:srk_Plan2Card5"), number: "5" },
    { text: t("srk:srk_Plan2Card6"), number: "6" },
  ];

  const bigCards = [
    <BigCard
      key={0}
      flipX
      heading={t("srk:srk_bigCard1Heading")}
      content={t("srk:srk_bigCard1Content")}
      img={"/SRK/bigCard1img"}
    ></BigCard>,
    <BigCard
      key={1}
      heading={t("srk:srk_bigCard2Heading")}
      content={t("srk:srk_bigCard2Content")}
      img={"/SRK/bigCard2img"}
    ></BigCard>,
    <BigCard
      key={2}
      flipX
      heading={t("srk:srk_bigCard3Heading")}
      content={t("srk:srk_bigCard3Content")}
      img={"/SRK/bigCard3img"}
    ></BigCard>,
    <BigCard
      key={3}
      heading={t("srk:srk_bigCard4Heading")}
      content={t("srk:srk_bigCard4Content")}
      img={"/SRK/bigCard4img"}
    ></BigCard>,
  ];

  const articles = [
    {
      heading: t("srk:srk_article1CardHeading"),
      text: t("srk:srk_article1CardContent"),
      image: "/SRK/article1_desktop.png",
    },
    {
      heading: t("srk:srk_article2CardHeading"),
      text: t("srk:srk_article2CardContent"),
      image: "/SRK/article2_desktop.png",
    },
    {
      heading: t("srk:srk_article3CardHeading"),
      text: t("srk:srk_article3CardContent"),
      image: "/SRK/article3_desktop.png",
    },
  ];

  return (
    <>
      <Head>
        <title>Resultant - Sistematičen razvoj kompetenc</title>
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
      ></CardSection>
      <Plan
        plan1={Plan1}
        heading1={planHeading1}
        plan2={Plan2}
        heading2={planHeading2}
        Plan1CardStyle
        hideButton={true}
        className="section"
      ></Plan>
      <BigCardsSection cards={bigCards} className="section"></BigCardsSection>
      <Contact_srk className="section"></Contact_srk>
      <CardSlider news={articles}></CardSlider>
    </>
  );
};

export default sistematicen_razvoj_kompetenc;
