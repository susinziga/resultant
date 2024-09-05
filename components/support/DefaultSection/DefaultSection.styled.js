import styled from "styled-components";
import { BodyText2, Title2 } from "../../../basic_components/texts/Texts";

export const DefaultContainer = styled.div`
  width: 80%;
  margin: 10% auto;

  @media only screen and (min-width: 768px) {
    width: 70%;
  }

  @media only screen and (min-width: 992px) {
    margin: 7.5% auto;
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const DefaultHeader = styled(Title2)`
  font-family: "Neusa";
  font-size: 1.5rem;
  font-weight: 500;
  margin: 5% 0;

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
    margin: 2.5% 0;
    font-size: 2rem;
  }
`;

export const DefaultText = styled(BodyText2)`
  font-family: "Neusa";
  font-weight: 300;

  @media only screen and (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
    font-size: 1.4rem;
  }
`;
