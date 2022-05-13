import styled from "styled-components";
import {
  Header1,
  BodyText2,
  BodyText3,
  Header2,
  BodyText4,
  BodyText1,
  Title1,
  Title2,
} from "../../basic_components/texts/Texts";

export const HeadingContainer = styled.div`
  width: 90%;
  margin: auto;

  margin-bottom: 0;

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const HeadingUpperHeading = styled(BodyText3)`
  font-weight: 500;
  display: block;
  margin-top: 5%;
  font-family: "Neusa";
`;

export const HeadingHeading = styled(Title1)`
  font-size: 2rem;

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const HeadingLine = styled.div`
  height: 1px;
  width: 100%;
  border-top: 1px solid black;
  margin-top: 10%;

  @media screen and (min-width: 768px) {
    margin-top: 5%;
  }
`;
