import styled from "styled-components";
import {
  BodyText1,
  BodyText2,
  BodyText3,
  Header2,
  Title1,
  Title2,
} from "../../../../../basic_components/texts/Texts";

export const PlanItemContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15%;

  ${(props) => {
    if (props.CardStyle)
      return `
        border: 1px solid #27B4E9;
        box-sizing: border-box;
        border-radius: 12px;
        padding: 8%;
        margin-bottom: 3% !important;
        min-height: 12rem !important;
        width: 100%;
          `;
  }}

  ${(props) => {
    if (props.CardStyle && props.active)
      return `
        background: #004767;
        border: 1px solid #004767;
          `;
  }}

  @media only screen and (min-width: 768px) {
    width: 30%;
    margin: auto;
    margin-bottom: 7.5%;

    ${(props) => {
      if (props.CardStyle)
        return `
        width: 32%;
        padding: 2%;
          `;
    }}
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const PlanCardText = styled(BodyText3)`
  width: 100%;
  font-size: 1.5rem;
  font-family: "Neusa";

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 992px) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 1.35rem;
  }

  ${(props) => {
    if (props.active)
      return `
        color: white !important;
          `;
  }}
`;

export const PlanText = styled(BodyText1)`
  width: 100%;
  font-size: 1.5rem;

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 992px) {
    font-size: 1.1rem;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 1.35rem;
  }
`;

export const PlanTextContainer = styled.div`
  width: 110%;
  margin-bottom: 10%;

  ${(props) => {
    if (props.CardStyle)
      return `
        width: 100%;
          `;
  }}

  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 80px;
  }

  @media only screen and (min-width: 992px) {
    width: 100%;
    height: 50px;
    padding-right: 10%;
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const PlanNumberContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const PlanNumber = styled(Title1)`
  width: 35%;
  font-family: "Fatface";

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const PlanUnderlineContainer = styled.div`
  width: 60%;
  height: auto;
  border-bottom: 2px solid #27b4e9;
  margin-bottom: 11px;

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
  }
`;
