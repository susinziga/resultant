import React from "react";
import CardTable_service1 from "../../components/service1/CardSection/CardTable_service1";
import Contact_service1 from "../../components/service1/Contact/Contact_service1";
import ExperienceSection_section1 from "../../components/service1/ExperienceSection/ExperienceSection_section1";
import HeadingSection_service1 from "../../components/service1/HeadingSection/HeadingSection_service1";
import News_service1 from "../../components/service1/News/News_service1";
import Plan_section1 from "../../components/service1/PlanSection/Plan_service1";
import QuoteSection1_service1 from "../../components/service1/Quote/QuoteSection1_service1";
import QuoteSection2_service1 from "../../components/service1/Quote/QuoteSection2_service";
import SIOK_service1 from "../../components/service1/SIOK/SIOK_service1";
import useTranslation from "next-translate/useTranslation";

const service1 = () => {

  const { t, lang } = useTranslation();
  const HeadingSection = {upperTitle: t("service1:service1_Heading"), paragraph:t("service1:service1_mainParagraph"), headerImage1: "/Service1/HeadingPhoto.png", headerImage2: "/Service1/HeadingPhoto_desktop.png"};

  const quote1 = t("service1:service1_quoteParagraph");

  const cardProps1 = [
    {heading: t("service1:service1_card1Heading"), text: t("service1:service1_card1Text"), color: "#AABFD1"},
    {heading: t("service1:service1_card3Heading"), text: t("service1:service1_card3Text"), color: "#CFEDFC"},
  
  ] 

  const cardProps2 = [
    {heading: t("service1:service1_card2Heading"), text: t("service1:service1_card2Text"), color: "#BED6E1"},

  ]

  const heading1 =  t("service1:service1_PlanHeading1");
  const heading2 =  t("service1:service1_PlanHeading2");

  const Plan1 = [
        {text: t("service1:service1_PlanCard1"), number: "1"},
        {text: t("service1:service1_PlanCard2"), number: "2"},
        {text: t("service1:service1_PlanCard3"), number: "3"},
        {text: t("service1:service1_PlanCard4"), number: "4"},
        {text: t("service1:service1_PlanCard5"), number: "5"},
        {text: t("service1:service1_PlanCard6"), number: "6"}
  ]  

  const Plan2 = [
        {text: t("service1:service1_Plan2Card1"), number: "1"},
        {text: t("service1:service1_Plan2Card2"), number: "2"},
        {text: t("service1:service1_Plan2Card3"), number: "3"},
        {text: t("service1:service1_Plan2Card4"), number: "4"},
        {text: t("service1:service1_Plan2Card5"), number: "5"},
        {text: t("service1:service1_Plan2Card6"), number: "6"},
        {text: t("service1:service1_Plan2Card7"), number: "7"},
        {text: t("service1:service1_Plan2Card8"), number: "8"}
  ] 

  return (
    <>
      <HeadingSection_service1 className="section" props={HeadingSection}></HeadingSection_service1>
      <QuoteSection1_service1 props={quote1}></QuoteSection1_service1>
      <CardTable_service1 cardProps1={cardProps1} cardProps2={cardProps2}></CardTable_service1>
      <Plan_section1 className="section" plan1={Plan1} plan2={Plan2} heading1={heading1} heading2={heading2}></Plan_section1>
      <QuoteSection2_service1></QuoteSection2_service1>
      <SIOK_service1 className="section"></SIOK_service1>
      <ExperienceSection_section1 className="section "></ExperienceSection_section1>
      <Contact_service1 className="section"></Contact_service1>
      <News_service1></News_service1>
    </>
  );
};

export default service1;
