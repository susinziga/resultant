import React from "react";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import HeadingSection1 from "../../components/service1/HeadingSection/HeadingSection_service1";
import Quote from "../../components/service1/Quote/QuoteSection1_service1";
import CardSection from "../../components/service1/CardSection/CardTable_service1";
import Plan from "../../components/service1/PlanSection/Plan_service1";
import BigCardsSection from "../../components/UTNN/cardSection/BigCardsSection";
import BigCard from "../../components/UTNN/cardSection/Card/BigCard";
import Contact_utnn from "../../components/UTNN/Contact/Contact_utnn";
import CardSlider from "../../components/service1/News/Card/NewsSlider_section1";
import { useRouter } from "next/router";

import { fetchAPI, getArticleFromStrapiData } from "../api/strapi";

export const getServerSideProps = async () => {
  const articlesResponse = await fetchAPI("/clanki", {
    populate: "*",
    pagination: {
      page: 1,
      pageSize: 3,
    },
    sort: ["createdAt:desc"], // Adjust sorting as needed
    filters: {
      kategorijas: {
        id: {
          $eq: 4,
        },
      },
    },
  });

  const articles = articlesResponse.data.map(getArticleFromStrapiData);

  return {
    props: {
      articles,
    },
  };
};

const upravljanje_talentov_in_nasledstveno_nacrtovanje = ({ articles }) => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  const quote1 = t("utnn:utnn_quoteParagraph");

  const HeadingSection = {
    upperTitle: t("utnn:utnn_mainHeading"),
    paragraph: t("utnn:utnn_mainParagraph"),
    headerImage1: "/UTNN/utnnMainImageDesktop.webp",
    headerImage2: "/UTNN/utnnMainImageMobile.webp",
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
      color: "#DCEDFA",
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

  const bigCards = [
    <BigCard
      key="1"
      flipX
      heading={t("utnn:utnn_bigArticle1Heading")}
      content={t("utnn:utnn_bigArticle1Content")}
      img={"/UTNN/card1img"}
      mobileImgOnBottom
      href={
        "/" +
        locale +
        "/services/upravljanje-talentov-in-nasledstveno-nacrtovanje/upravljanje-talentov-in-njihovih-karier"
      }
      buttonText={t("common:button_moreMore")}
    ></BigCard>,
    <BigCard
      key="2"
      heading={t("utnn:utnn_bigArticle2Heading")}
      content={t("utnn:utnn_bigArticle2Content")}
      img={"/UTNN/card2img"}
      mobileImgOnBottom
      href={
        "/" +
        locale +
        "/services/upravljanje-talentov-in-nasledstveno-nacrtovanje/nasledstveno-nacrtovanje"
      }
      buttonText={t("common:button_moreMore")}
    ></BigCard>,
  ];

  return (
    <>
      <Head>
        <title>
          Upravljanje talentov in nasledstveno načrtovanje | Resultant
        </title>
        <meta
          name="description"
          content="S pravilnim procesom načrtovanja nasledstev natančno prepoznate ključna delovna mesta v organizaciji ter pravočasno razvijate potencialne naslednike."
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
      <BigCardsSection className="section" cards={bigCards}></BigCardsSection>
      <Contact_utnn className="section"></Contact_utnn>
      {locale === "sl" ? <CardSlider news={articles}></CardSlider> : <> </>}
    </>
  );
};

export default upravljanje_talentov_in_nasledstveno_nacrtovanje;
