import React from "react";
import useTranslation from "next-translate/useTranslation";
import {
  PlanContainer,
  PlanTableContainer,
  PlanTableHeader,
  PlanTableHeaderContainer,
  PlanTableHeaderCon,
  SubmitButton,
  ButtonContainer,
  FlexContainer,
  BackgroundVector,
} from "./Plan.styled";

import PlanItem_service1 from "./PlanTables/PlanItem/PlanItem_service1";
import QuoteSection2_service1 from "../Quote/QuoteSection2_service";

const Plan_section1 = ({ heading1, heading2, plan1, plan2, button }, props) => {
  const { t, lang } = useTranslation();
  const p1 = plan1 ?? [];
  const p2 = plan2 ?? [];

  console.log(plan1);

  return (
    <>
      <PlanContainer {...props}>
        <BackgroundVector
          className="desktop"
          src="/offer/backgroundVector.png"
        ></BackgroundVector>
        <BackgroundVector
          className="mobile"
          src="/Service1/VectorA_mobile.png"
        ></BackgroundVector>

        <PlanTableContainer>
          <PlanTableHeaderContainer>
            <PlanTableHeaderCon>
              <PlanTableHeader>{heading1}</PlanTableHeader>
            </PlanTableHeaderCon>
          </PlanTableHeaderContainer>
          <FlexContainer>
            {p1.map((item) => {
              return <PlanItem_service1 props={item}></PlanItem_service1>;
            })}
          </FlexContainer>
          <PlanTableHeaderContainer>
            <PlanTableHeaderCon>
              <PlanTableHeader>{heading2}</PlanTableHeader>
            </PlanTableHeaderCon>
          </PlanTableHeaderContainer>

          <FlexContainer>
            {p2.map((item) => {
              return <PlanItem_service1 props={item}></PlanItem_service1>;
            })}
            <ButtonContainer props={button} button={p2.length > 0}>
              <SubmitButton className="desktop" type="button">
                Želim pridobiti ponudbo
              </SubmitButton>
            </ButtonContainer>
          </FlexContainer>

          <ButtonContainer props={button}>
            <SubmitButton className="mobile" type="button">
              Želim pridobiti ponudbo
            </SubmitButton>
          </ButtonContainer>
        </PlanTableContainer>
      </PlanContainer>
    </>
  );
};

export default Plan_section1;
