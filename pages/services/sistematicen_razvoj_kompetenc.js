import React from "react";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import HeadingSection1 from "../../components/service1/HeadingSection/HeadingSection_service1";
import Quote from "../../components/service1/Quote/QuoteSection1_service1";
import CardSection from "../../components/service1/CardSection/CardTable_service1";
import Plan from "../../components/service1/PlanSection/Plan_service1";
import BigCardsSection from "../../components/UTNN/cardSection/BigCardsSection";
import BigCard from "../../components/UTNN/cardSection/Card/BigCard";
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
      margin
      heading={t("srk:srk_bigCard1Heading")}
      content={t("srk:srk_bigCard1Content")}
      img={"/SRK/bigCard1img"}
      href={
        "/services/sistematicen_razvoj_kompetenc/modeli_kompetenc_so_temelj_za_vecino_kadrovskih_procesov"
      }
    ></BigCard>,
    <BigCard
      key={1}
      heading={t("srk:srk_bigCard2Heading")}
      content={t("srk:srk_bigCard2Content")}
      img={"/SRK/bigCard2img"}
      href={
        "/services/sistematicen_razvoj_kompetenc/kako_ucinkovito_razvijati_kompetence_in_vescine_sodelavcev"
      }
    ></BigCard>,
    <BigCard
      key={2}
      flipX
      heading={t("srk:srk_bigCard3Heading")}
      content={t("srk:srk_bigCard3Content")}
      img={"/SRK/bigCard3img"}
      href={
        "/services/sistematicen_razvoj_kompetenc/kaj_je_povratna_informacija_po_metodi_360"
      }
    ></BigCard>,
    <BigCard
      key={3}
      heading={t("srk:srk_bigCard4Heading")}
      content={t("srk:srk_bigCard4Content")}
      img={"/SRK/bigCard4img"}
      href={
        "/services/sistematicen_razvoj_kompetenc/ucinkovita_360_povratna_informacija_je_celovit_proces_razvoja_zaposlenih_s_pomocjo_360_metode"
      }
    ></BigCard>,
  ];

  const articles = [
    {
      id: 1,
      heading: t("srk:srk_article1CardHeading"),
      text: t("srk:srk_article1CardContent"),
      image: "/SRK/article1_desktop.png",
      link: "razvoj-notranjih-trenerjev",
    },
    {
      id: 2,
      heading: t("srk:srk_article2CardHeading"),
      text: t("srk:srk_article2CardContent"),
      image: "/SRK/article2_desktop.png",
      link: "DNLA-sistem-ponuja-celovito-strokovno-podporo-drugim-kadrovskim-procesom",
    },

    {
      id: 3,
      heading: t("service1:service1_newsHeader1"),
      text: t("service1:service1_newsText1"),
      image: "/Service1/NewsCard1.png",
      link: "kako-do-vecje-zavzetosti-vasih-zaposlenih",
    },
    {
      id: 4,
      heading: t("service1:service1_newsHeader2"),
      text: t("service1:service1_newsText2"),
      image: "/Service1/NewsCard2.png",
      link: "spremljanje-in-spreminjanje-organizacijske-klime-in-kulture",
    },
    {
      id: 5,
      heading: t("service1:service1_newsHeader3"),
      text: t("service1:service1_newsText3"),
      image: "/Service1/NewsCard3.png",
      link: "visoka-zavzetost-sodelavcev-prinasa-organizaciji-veliko-prednost",
    },

    {
      id: 6,
      heading: t("utnn:utnn_article1CardHeading"),
      text: t("utnn:utnn_article1CardContent"),
      image: "/UTNN/article1_desktop.png",
      link: "prepoznavanje-talentov",
    },
    {
      id: 7,
      heading: t("utnn:utnn_article2CardHeading"),
      text: t("utnn:utnn_article2CardContent"),
      image: "/UTNN/article2_desktop.png",
      link: "mlajse-generacije-prevzemajo-kljucne-vloge-v-organizacijah",
    },
    {
      id: 8,
      heading: t("utnn:utnn_article3CardHeading"),
      text: t("utnn:utnn_article3CardContent"),
      image: "/UTNN/article3_desktop.png",
      link: "zivljenjski-cikel-zaposlenih",
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
