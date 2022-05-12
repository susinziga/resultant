import styled from "styled-components";
import {
  Header1,
  BodyText2,
  BodyText3,
  Header2,
  BodyText4,
  BodyText1,
  Title2,
  Title1,
} from "../../basic_components/texts/Texts";

export const HeadingContainer = styled.div`
  width: 90%;
  margin: auto;

  display: flex;
  flex-direction: column;
  margin-bottom: 5%;

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const DesktopFlex = styled.div`
  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const HeadingUpperHeading = styled(Title1)`
  font-size: 2rem;
  margin-bottom: 5%;

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
    width: 50%;
    margin-bottom: 0;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 2.5rem;
  }
`;

export const Paragraph = styled(Title2)`
  margin-top: 5%;
  font-family: "Neusa";
  font-size: 1.5rem;

  @media only screen and (min-width: 768px) {
    width: 50%;
    font-size: 2rem;
  }

  @media only screen and (min-width: 992px) {
    margin-top: 1%;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 2rem;
  }
`;

export const HeadingLine = styled.div`
  height: 1px;
  width: 100%;
  border-top: 1px solid black;
  margin-top: 15%;

  @media screen and (min-width: 768px) {
    margin-top: 5%;
  }
`;
