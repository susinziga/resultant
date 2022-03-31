import React from 'react';
import CardTable_service1 from '../components/service1/CardSection/CardTable_service1';
import ExperienceSection_section1 from '../components/service1/ExperienceSection/ExperienceSection_section1';
import HeadingSection_service1 from '../components/service1/HeadingSection/HeadingSection_service1';
import Plan_section1 from '../components/service1/PlanSection/Plan_service1';
import QuoteSection1_service1 from '../components/service1/Quote/QuoteSection1_service1';
import QuoteSection2_service1 from '../components/service1/Quote/QuoteSection2_service';
import SIOK_service1 from '../components/service1/SIOK/SIOK_service1';


const service1 = () => {
  return (
    <>
      <HeadingSection_service1 ></HeadingSection_service1>
      <QuoteSection1_service1 className="section"></QuoteSection1_service1>
      <CardTable_service1 className="section"></CardTable_service1>
      <Plan_section1 className="section"></Plan_section1>
      <QuoteSection2_service1></QuoteSection2_service1>
      <SIOK_service1 className="section"></SIOK_service1>
      <ExperienceSection_section1 className="section"></ExperienceSection_section1>
    </>
  )
}

export default service1;