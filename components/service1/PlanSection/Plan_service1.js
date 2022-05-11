import React from "react";
import useTranslation from "next-translate/useTranslation";
import {
  PlanContainer,
  PlanTableContainer,
  PlanTableHeaderFirst,
  PlanTableHeaderSecond,
  PlanTableHeaderContainer,
  PlanTableHeaderCon,
  SubmitButton,
  ButtonContainer,
  FlexContainer,
  BackgroundVector,
  PlanTableHeaderLineWrapperLeft,
  PlanTableHeaderLineWrapperRight,
  PlanTableHeaderLine,
} from "./Plan.styled";

import PlanItem_service1 from "./PlanTables/PlanItem/PlanItem_service1";
import QuoteSection2_service1 from "../Quote/QuoteSection2_service";

import { useRouter } from "next/router";

const Plan_section1 = (
  {
    heading1,
    heading2,
    plan1,
    plan2,
    button,
    hideButton,
    Plan1CardStyle,
    Plan2CardStyle,
    bgImg,
  },
  props
) => {
  const { t, lang } = useTranslation();
  const p1 = plan1 ?? [];
  const p2 = plan2 ?? [];
  const { locale } = useRouter();

  const getOffer = {
    sl: "Želim pridobiti ponudbo",
    en: "I'd like to recieve an offer",
  };

  return (
    <>
      <PlanContainer {...props}>
        {(p2.length > 0 || bgImg) && (
          <>
            <BackgroundVector
              className="desktop"
              src="/offer/backgroundVector.webp"
            ></BackgroundVector>
            <BackgroundVector
              className="mobile"
              src="/Service1/VectorA_mobile.webp"
            ></BackgroundVector>
          </>
        )}

        <PlanTableContainer>
          <PlanTableHeaderContainer>
            <PlanTableHeaderCon>
              <PlanTableHeaderFirst>{heading1}</PlanTableHeaderFirst>
              <PlanTableHeaderLineWrapperRight className="desktop">
                <PlanTableHeaderLine></PlanTableHeaderLine>
              </PlanTableHeaderLineWrapperRight>
            </PlanTableHeaderCon>
          </PlanTableHeaderContainer>
          <FlexContainer>
            {p1.map((item, index) => {
              return (
                <PlanItem_service1
                  key={index}
                  props={{ ...item, CardStyle: Plan1CardStyle }}
                ></PlanItem_service1>
              );
            })}
          </FlexContainer>

          <PlanTableHeaderContainer>
            <PlanTableHeaderCon>
              <PlanTableHeaderLineWrapperLeft
                show={p2.length > 0}
                className="desktop"
              >
                <PlanTableHeaderLine></PlanTableHeaderLine>
              </PlanTableHeaderLineWrapperLeft>
              <PlanTableHeaderSecond>{heading2}</PlanTableHeaderSecond>
            </PlanTableHeaderCon>
          </PlanTableHeaderContainer>
          <FlexContainer>
            {p2.map((item, index) => {
              return (
                <PlanItem_service1
                  key={index}
                  props={{ ...item, CardStyle: Plan2CardStyle }}
                ></PlanItem_service1>
              );
            })}
            <ButtonContainer
              props={button}
              button={!hideButton && p2.length > 0}
            >
              <SubmitButton
                className="desktop"
                type="button"
                href={"/" + locale + "/services/siok/ponudba-siok"}
              >
                {getOffer[locale]}
              </SubmitButton>
            </ButtonContainer>
          </FlexContainer>

          <ButtonContainer
            props={button}
            button={!hideButton && p2.length > 0}
            onClick={() => {
              window.scrollBy({
                top: document.getElementById("forma").getBoundingClientRect()
                  .top,
                behavior: "smooth",
              });
            }}
          >
            <SubmitButton
              className="mobile"
              type="button"
              href={"/" + locale + "/services/siok/ponudba-siok"}
            >
              {getOffer[locale]}
            </SubmitButton>
          </ButtonContainer>
        </PlanTableContainer>
      </PlanContainer>
    </>
  );
};

export default Plan_section1;
