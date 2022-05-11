import styled from "styled-components";
import {
  BodyText1,
  BodyText2,
  Title2,
} from "../../../../basic_components/texts/Texts";

export const CardContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: white;
  margin-bottom: 10%;

  background: #f9f4f0;
  border: 0px solid #f9f4f0;
  border-radius: 12px;

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
    flex-direction: row;
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const CardImage = styled.img`
  width: 100%;
  border-bottom-left-radius: 15px;

  @media only screen and (min-width: 768px) {
    // width: 40%;
  }

  @media only screen and (min-width: 1200px) {
    // width: 40%;
    width: 40%;
  }

  @media only screen and (min-width: 1600px) {
    width: 25%;
    height: 60%;
  }
`;

export const TextContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 5% auto;
  margin-bottom: 10%;
  padding-bottom: 5%;
  padding-top: 10%;

  @media only screen and (min-width: 768px) {
    padding: 7.5% 5%;
    margin-bottom: 0%;
    margin: 0% auto;
  }

  @media only screen and (min-width: 992px) {
    padding: 7.5% 5%;
    margin-bottom: 0%;
    margin: 0% auto;
  }

  @media only screen and (min-width: 1600px) {
    padding: 7% 5%;
  }
`;

export const Text = styled(BodyText2)`
  font-weight: 400;

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
  }
`;
