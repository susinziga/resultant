import React, { useContext, useEffect } from "react";
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
import styled from "styled-components";
import { useRouter } from "next/router";
import { AktualnoContext } from "../../context/aktualnoContext";
import { getArticleFromStrapiData } from "../api/strapi";

const sistematicen_razvoj_kompetenc = () => {
  const { t, lang } = useTranslation();
  const { locale } = useRouter();

  const { filter, state, setFilter, setSortFilter } =
    useContext(AktualnoContext);

  useEffect(() => {
    setFilter({
      ...filter,
      category: 3,
    });
    setSortFilter(-1);
  }, []);

  const quote1 = t("srk:srk_quoteParagraph");

  const HeadingSection = {
    upperTitle: t("srk:srk_mainHeading"),
    paragraph: t("srk:srk_mainParagraph"),
    headerImage1: "/SRK/SRKMainImageDesktop.webp",
    headerImage2: "/SRK/SRKMainImageMobile.webp",
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
      fullImg={"/SRK/bigCard1img_" + locale + ".webp"}
      href={
        "/" +
        locale +
        "/services/sistematicen-razvoj-kompetenc/modeli-kompetenc-so-temelj-za-vecino-kadrovskih-procesov"
      }
      buttonText={t("common:button_more")}
    ></BigCard>,
    <BigCard
      key={1}
      heading={t("srk:srk_bigCard2Heading")}
      content={t("srk:srk_bigCard2Content")}
      img={"/SRK/bigCard2img"}
      href={
        "/" +
        locale +
        "/services/sistematicen-razvoj-kompetenc/hitre-spremembe-v-danasnjem-poslovnem-okolju-zahtevajo-ucinkovit-razvoj-kompetenc"
      }
      buttonText={t("common:button_more")}
    ></BigCard>,
    <BigCard
      key={2}
      flipX
      heading={t("srk:srk_bigCard3Heading")}
      content={t("srk:srk_bigCard3Content")}
      imgStyle={{ height: "40rem", marginRight: "50px" }}
      mobileImgStyle={{ marginBottom: "1rem", marginTop: "1rem" }}
      fullImg={"/SRK/srk_metoda360_" + locale + ".webp"}
      href={"/" + locale + "/services/sistematicen-razvoj-kompetenc/metoda-360"}
      buttonText={t("common:button_more")}
    ></BigCard>,
    <BigCard
      key={3}
      heading={t("srk:srk_bigCard4Heading")}
      content={t("srk:srk_bigCard4Content")}
      img={"/SRK/bigCard4img"}
      href={
        "/" +
        locale +
        "/services/sistematicen-razvoj-kompetenc/360-proces-povratne-informacije"
      }
      buttonText={t("common:button_more")}
    ></BigCard>,
  ];

  let articles = [];
  state.forEach((element) => {
    articles.push(getArticleFromStrapiData(element));
  });

  return (
    <>
      <Head>
        <title>Sistematičen razvoj kompetenc | Resultant</title>
        <meta
          name="description"
          content="Temeljna vrednost vsake organizacije je potencial zaposlenih. Z razvojem kompetenc podjetje bolje obvladuje spremembe in zagotavlja inovativno okolje."
        />
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
      {locale === "sl" ? <CardSlider news={articles}></CardSlider> : <> </>}
    </>
  );
};

export default sistematicen_razvoj_kompetenc;
