import React from "react";
import CardTable_service1 from "../../components/service1/CardSection/CardTable_service1";
import Contact_service1 from "../../components/service1/Contact/Contact_service1";
import HeadingSection_service1 from "../../components/service1/HeadingSection/HeadingSection_service1";
import Plan_section1 from "../../components/service1/PlanSection/Plan_service1";
import QuoteSection1_service1 from "../../components/service1/Quote/QuoteSection1_service1";
import QuoteSection2_service1 from "../../components/service1/Quote/QuoteSection2_service";
import SIOK_service1 from "../../components/service1/SIOK/SIOK_service1";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { useRouter } from "next/router";
import BulletSection_siok from "../../components/service1/BulletSection/BulletSection_siok";
import BigCardsSection from "../../components/UTNN/cardSection/BigCardsSection";
import BigCard from "../../components/service1/Card/BigCard";
import { getArticleFromStrapiData, fetchAPI } from "../api/strapi";
import CardSlider from "../../components/service1/News/Card/NewsSlider_section1";

export const getServerSideProps = async () => {
  const articlesResponse = await fetchAPI("/clanki", {
    populate: "*",
    pagination: {
      page: 1,
      pageSize: 1,
    },
    sort: ["createdAt:desc"], // Adjust sorting as needed
    filters: {
      kategorijas: {
        id: {
          $eq: 2,
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

const service1 = ({ articles }) => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  const HeadingSection = {
    upperTitle: t("service1:service1_Heading"),
    paragraph: t("service1:service1_mainParagraph"),
    headerImage1: "/Service1/HeadingPhoto.webp",
    headerImage2: "/Service1/HeadingPhoto_desktop.webp",
  };

  const quote1 = t("service1:service1_quoteParagraph");

  const cardProps1 = [
    {
      heading: t("service1:service1_card1Heading"),
      text: t("service1:service1_card1Text"),
      color: "#AABFD1",
    },
    {
      heading: t("service1:service1_card3Heading"),
      text: t("service1:service1_card3Text"),
      color: "#CFEDFC",
    },
  ];

  const cardProps2 = [
    {
      heading: t("service1:service1_card2Heading"),
      text: t("service1:service1_card2Text"),
      color: "#BED6E1",
    },
  ];

  const heading1 = t("service1:service1_PlanHeading1");
  const heading2 = t("service1:service1_PlanHeading2");

  const Plan1 = [
    { text: t("service1:service1_PlanCard1"), number: "1" },
    { text: t("service1:service1_PlanCard2"), number: "2" },
    { text: t("service1:service1_PlanCard3"), number: "3" },
    { text: t("service1:service1_PlanCard4"), number: "4" },
    { text: t("service1:service1_PlanCard5"), number: "5" },
    { text: t("service1:service1_PlanCard6"), number: "6" },
  ];

  const Plan2 = [
    { text: t("service1:service1_Plan2Card1"), number: "1" },
    { text: t("service1:service1_Plan2Card2"), number: "2" },
    { text: t("service1:service1_Plan2Card3"), number: "3" },
    { text: t("service1:service1_Plan2Card4"), number: "4" },
    { text: t("service1:service1_Plan2Card5"), number: "5" },
    { text: t("service1:service1_Plan2Card6"), number: "6" },
    { text: t("service1:service1_Plan2Card7"), number: "7" },
    { text: t("service1:service1_Plan2Card8"), number: "8" },
  ];

  const bigCards = [
    <BigCard
      key="1"
      heading={t("service1:service1_bigCard1Heading")}
      content={t("service1:service1_bigCard1Text")}
      img={"/Service1/bigCard1img"}
      color={"#F9F4F0"}
      mobileImgOnBottom
    ></BigCard>,
    <BigCard
      key="2"
      flipX
      heading={t("service1:service1_bigCard2Heading")}
      content={t("service1:service1_bigCard2Text")}
      img={"/Service1/bigCard2img"}
      color={"#DEE6ED"}
      mobileImgOnBottom
    ></BigCard>,
  ];

  return (
    <>
      <Head>
        <title>SiOK | Slovenska organizacijska klima | Resultant</title>
        <meta
          name="description"
          content="Slovenska organizacijska klima - analiza notranjega okolja v organizaciji in primerjava z aktualnim slovenskim povprečjem. Zavzeti zaposleni so ključ do uspeha."
        />
      </Head>
      <HeadingSection_service1
        className="section"
        props={{
          ...HeadingSection,
          offerHref: "/" + locale + "/services/siok/ponudba-siok",
        }}
      ></HeadingSection_service1>
      <QuoteSection1_service1 props={quote1}></QuoteSection1_service1>
      <CardTable_service1
        cardProps1={cardProps1}
        cardProps2={cardProps2}
      ></CardTable_service1>
      <Plan_section1
        className="section"
        plan1={Plan1}
        plan2={Plan2}
        heading1={heading1}
        heading2={heading2}
        button={true}
      ></Plan_section1>
      <QuoteSection2_service1></QuoteSection2_service1>
      <SIOK_service1 className="section"></SIOK_service1>
      <BulletSection_siok className="section "></BulletSection_siok>
      <BigCardsSection className="section" cards={bigCards}></BigCardsSection>
      <Contact_service1 className="section"></Contact_service1>
      {locale === "sl" ? <CardSlider news={articles}></CardSlider> : <> </>}
    </>
  );
};

export default service1;
