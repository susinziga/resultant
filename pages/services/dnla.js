import React from "react";
import HeadingSection1 from "../../components/service1/HeadingSection/HeadingSection_service1";
import Quote from "../../components/service1/Quote/QuoteSection1_service1";
import CardSection from "../../components/service1/CardSection/CardTable_service1";
import useTranslation from "next-translate/useTranslation";
import Plan from "../../components/service1/PlanSection/Plan_service1";
import Pillars1 from "../../components/DNLA/pillars1/Pillars1_dnla";
import ToolsHeading_dnla from "../../components/DNLA/toolsHeading/ToolsHeading_dnla";
import Pillars2_dnla from "../../components/DNLA/pillars2/Pillars2_dnla";
import BulletSection_dnla from "../../components/DNLA/BulletSection/BulletSection_dnla";
import CardSection_dnla from "../../components/DNLA/cardSection/CardSection_dnla";
import ContactForm_dnla from "../../components/DNLA/contact/ContactForm_dnla";
import Head from "next/head";
import CardSlider from "../../components/service1/News/Card/NewsSlider_section1";

const dnla = () => {
  const { t, lang } = useTranslation();

  const HeadingSection = {
    upperTitle: t("dnla:dnla_mainHeading"),
    paragraph: t("dnla:dnla_mainParagraph"),
    headerImage1: "/DNLA/dnlaMainImageMobile.png",
    headerImage2: "/DNLA/dnlaMainImageDesktop.png",
  };
  const quote1 = t("dnla:dnla_quoteParagraph");
  const quote2 = t("dnla:dnla_quoteParagraph2");

  const cardProps1 = [
    {
      heading: t("dnla:dnla_card1Heading"),
      text: t("dnla:dnla_card1Text"),
      color: "#AABFD1",
    },
    {
      heading: t("dnla:dnla_card2Heading"),
      text: t("dnla:dnla_card2Text"),
      color: "#CFEDFC",
    },
  ];

  const cardProps2 = [
    {
      heading: t("dnla:dnla_card3Heading"),
      text: t("dnla:dnla_card3Text"),
      color: "#BED6E1",
    },
    {
      heading: t("dnla:dnla_card4Heading"),
      text: t("dnla:dnla_card4Text"),
      color: "#DCEDFA",
    },
  ];

  const heading1 = t("dnla:dnla_PlanHeading1");

  const Plan1 = [
    { text: t("dnla:dnla_PlanCard1"), number: "1" },
    { text: t("dnla:dnla_PlanCard2"), number: "2" },
    { text: t("dnla:dnla_PlanCard3"), number: "3" },
    { text: t("dnla:dnla_PlanCard4"), number: "4" },
    { text: t("dnla:dnla_PlanCard5"), number: "5" },
    { text: t("dnla:dnla_PlanCard6"), number: "6" },
  ];

  const articleCard1 = {
    heading: t("dnla:dnla_article1CardHeading"),
    text: t("dnla:dnla_article1CardContent"),
    image: "/DNLA/article1_desktop.png",
    link: "enostavni-pristopi-razvijanja-socialnih-kompetenc",
  };

  const articleCard2 = {
    heading: t("dnla:dnla_article2CardHeading"),
    text: t("dnla:dnla_article1CardContent"),
    image: "/DNLA/article2_desktop.png",
    link: "DNLA-sistem-ponuja-celovito-strokovno-podporo-drugim-kadrovskim-procesom",
  };

  const articleCard3 = {
    heading: t("dnla:dnla_article3CardHeading"),
    text: t("dnla:dnla_article3CardContent"),
    image: "/DNLA/article3_desktop.png",
    link: "pet-vprasanj-aleksandru-tychyju-o-razvoju-potenciala-z-dnla-orodjem",
  };

  return (
    <>
      <Head>
        <title>Resultant - DNLA</title>
      </Head>
      <HeadingSection1
        className="section"
        props={HeadingSection}
      ></HeadingSection1>
      <Quote className="section" props={quote1}></Quote>
      <CardSection
        className="section"
        cardProps1={cardProps1}
        cardProps2={cardProps2}
        button={true}
      ></CardSection>
      <Plan plan1={Plan1} heading1={heading1} bgImg className="section"></Plan>
      <Pillars1 className="section"></Pillars1>
      <ToolsHeading_dnla className="section"></ToolsHeading_dnla>
      <Pillars2_dnla className="section"></Pillars2_dnla>
      <BulletSection_dnla className="section"></BulletSection_dnla>
      <Quote props={quote2} className="section"></Quote>
      <CardSection_dnla className="section"></CardSection_dnla>
      <ContactForm_dnla className="section"></ContactForm_dnla>
      <CardSlider
        news={[articleCard1, articleCard2, articleCard3]}
      ></CardSlider>
    </>
  );
};

export default dnla;
