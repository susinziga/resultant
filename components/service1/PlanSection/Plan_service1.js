import React from 'react';
import useTranslation from "next-translate/useTranslation";
import { PlanContainer, PlanTableContainer, PlanTableHeader, PlanTableHeaderContainer,  PlanTableHeaderCon, SubmitButton, ButtonContainer, FlexContainer, BackgroundVector } from './Plan.styled';


import PlanItem_service1 from './PlanTables/PlanItem/PlanItem_service1';
import QuoteSection2_service1 from '../Quote/QuoteSection2_service';

const Plan_section1 = (props) => {
  const { t, lang } = useTranslation();

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
        <PlanContainer {...props}>
            <BackgroundVector className="desktop" src="./offer/backgroundVector.png"></BackgroundVector>
            <BackgroundVector className="mobile" src="./Service1/VectorA_mobile.png"></BackgroundVector>
            
            <PlanTableContainer>
                <PlanTableHeaderContainer>
                    <PlanTableHeaderCon>
                        <PlanTableHeader>{heading1}</PlanTableHeader>
                    </PlanTableHeaderCon>
                </PlanTableHeaderContainer>
                <FlexContainer>
                    {
                        Plan1.map((item)=>{
                            return (
                                <PlanItem_service1 props={item}></PlanItem_service1>
                            )
                        })
                    }
                </FlexContainer>
                <PlanTableHeaderContainer>
                    <PlanTableHeaderCon>
                        <PlanTableHeader>{heading2}</PlanTableHeader>
                    </PlanTableHeaderCon>
                </PlanTableHeaderContainer>
                <FlexContainer>
                    {
                        Plan2.map((item) => {
                            return(
                                <PlanItem_service1 props={item}></PlanItem_service1>
                            )
                        })
                    }
                    <ButtonContainer>
                        <SubmitButton className='desktop' type="button">Želim pridobiti ponudbo</SubmitButton>
                    </ButtonContainer>

                </FlexContainer>

                <ButtonContainer>
                    <SubmitButton className='mobile' type="button">Želim pridobiti ponudbo</SubmitButton>
                </ButtonContainer>

            </PlanTableContainer>
           
        
        </PlanContainer>
    </>
  )
}

export default Plan_section1;