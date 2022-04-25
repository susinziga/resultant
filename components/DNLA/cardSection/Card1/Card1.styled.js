import styled from "styled-components";
import { BodyText1, Title2 } from "../../../../basic_components/texts/Texts";

export const CardContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: white;
  margin-bottom: 10%;

  background: #316888;
  border: 0px solid #316888;
  border-radius: 12px;

  @media only screen and (min-width: 768px) {
    flex-direction: row !important;
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const CardImage = styled.img`
  @media only screen and (min-width: 768px) {
    width: 40%;
    height: 100%;
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const TextContainer = styled.div`
  width: 80%;
  margin: auto;
  /* display: flex:
    flex-direction: column;
    gap: 1rem;
    margin: 5% auto;
    margin-bottom: 10%;
    padding-bottom: 10%; */

  @media only screen and (min-width: 768px) {
    margin: 3% auto;
    padding-bottom: 0%;
  }

  @media only screen and (min-width: 992px) {
    margin: 3% auto;
    padding-bottom: 0%;
    padding-left: 5%;
  }

  @media only screen and (min-width: 1600px) {
    padding-left: 5%;
  }
`;

export const CardHeading = styled(Title2)`
  font-size: 1.2rem;
  color: white !important;
  margin-bottom: 5%;

  @media only screen and (min-width: 768px) {
    margin-bottom: 2%;
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 992px) {
    margin-bottom: 2%;
    font-size: 1.2rem;
  }

  @media only screen and (min-width: 1600px) {
    margin-bottom: 2%;
    font-size: 1.8rem;
  }
`;

export const CardTitle = styled(BodyText1)`
  color: white !important;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5%;

  @media only screen and (min-width: 768px) {
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
    font-size: 1.5rem;
  }
`;

export const List = styled.ul`
  width: 100%;
  list-style-type: disc;
  padding: 10% 10%;
  padding-top: 5%;

  @media only screen and (min-width: 768px) {
    padding-top: 1%;
    padding: 3% 2.5%;
  }

  @media only screen and (min-width: 992px) {
    padding-top: 1%;
    padding: 4% 2.5%;
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const Bullet = styled.li`
  margin: 5% 0;
  font-size: 0.8rem;
  font-family: "NeusaThin";

  @media only screen and (min-width: 768px) {
    margin: 1% 0;
    font-size: 0.6rem;
  }

  @media only screen and (min-width: 992px) {
    margin: 1% 0;
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 1600px) {
    margin: 1% 0;
    font-size: 1.2rem;
  }
`;

export const ButtonContainer = styled.div`
  margin-bottom: 10%;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0%;
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
  }
`;
