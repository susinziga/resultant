import React from 'react';
import HeadingSection1 from '../../components/service1/HeadingSection/HeadingSection_service1';
import Quote from '../../components/service1/Quote/QuoteSection1_service1';
import CardSection from '../../components/service1/CardSection/CardTable_service1';
import useTranslation from "next-translate/useTranslation";
import Plan from '../../components/service1/PlanSection/Plan_service1';
import Pillars1 from '../../components/DNLA/pillars1/Pillars1_dnla';

const dnla = () => {
  const { t, lang } = useTranslation();

  const HeadingSection = {upperTitle: t("dnla:dnla_mainHeading"), paragraph:t("dnla:dnla_mainParagraph"), headerImage1: "/DNLA/dnlaMainImageMobile.png", headerImage2: "/DNLA/dnlaMainImageDesktop.png"};
  const quote1 = t("dnla:dnla_quoteParagraph");
  const quote2 = t("dnla:dnla_quoteParagraph2");

  const cardProps1 = [
    {heading: t("dnla:dnla_card1Heading"), text: t("dnla:dnla_card1Text"), color: "#AABFD1"},
    {heading: t("dnla:dnla_card2Heading"), text: t("dnla:dnla_card2Text"), color: "#CFEDFC"},
  
  ] 

  const cardProps2 = [
    {heading: t("dnla:dnla_card3Heading"), text: t("dnla:dnla_card3Text"), color: "#BED6E1"},
    {heading: t("dnla:dnla_card4Heading"), text: t("dnla:dnla_card4Text"), color: "#BED6E1"},

  ]

  const heading1 =  t("dnla:dnla_PlanHeading1");

  const Plan1 = [
        {text: t("dnla:dnla_PlanCard1"), number: "1"},
        {text: t("dnla:dnla_PlanCard2"), number: "2"},
        {text: t("dnla:dnla_PlanCard3"), number: "3"},
        {text: t("dnla:dnla_PlanCard4"), number: "4"},
        {text: t("dnla:dnla_PlanCard5"), number: "5"},
        {text: t("dnla:dnla_PlanCard6"), number: "6"}
  ]  


  return (
    <>
    <HeadingSection1 className="section" props={HeadingSection}></HeadingSection1>
    <Quote className="section" props={quote1}></Quote>
    <CardSection className="section" cardProps1={cardProps1} cardProps2={cardProps2} plan2={[]} button={true}></CardSection>
    <Plan plan1={Plan1} heading1={heading1} className="section"></Plan>
    <Pillars1 className="section"></Pillars1>


    <Quote props={quote2} className="section"></Quote>
    
    </>
  )
}

export default dnla;