import styled from "styled-components";
import {
  BodyText2,
  Title2,
  Title1,
} from "../../../basic_components/texts/Texts";

export const ContactSectionContainer = styled.div`
  width: 90%;
  margin: auto;

  @media screen and (min-width: 768px) {
    margin-top: 5%;
    width: 70%;
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const ContactLine = styled.div`
  height: 1px;
  width: 100%;
  border-top: 1px solid black;
  margin-top: 15%;
  display: block;

  @media screen and (min-width: 768px) {
    width: 90%;
    margin: auto;
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const ContactHeading = styled(Title1)`
  font-size: 2rem;
  margin: 10% 0;

  @media only screen and (min-width: 768px) {
    margin: 8% 0;
  }

  @media only screen and (min-width: 992px) {
    margin: 5% 0;
  }

  @media only screen and (min-width: 1600px) {
    margin: 2.5% 0;
  }
`;

export const PersonContainer = styled.div`
  margin: 5% 0;

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
    margin: 5% 0;
  }
`;

export const PersonName = styled(Title2)`
  font-family: "Neusa";
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2.5%;

  @media only screen and (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media only screen and (min-width: 992px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const PersonMail = styled(BodyText2)`
  font-weight: 400;
  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 992px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const FlexDesktopContainer = styled.div`
  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (min-width: 1600px) {
  }
`;
