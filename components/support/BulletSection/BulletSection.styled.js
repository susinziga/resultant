import styled from "styled-components";
import { Title2 } from "../../../basic_components/texts/Texts";

export const BulletContainer = styled.div`
  width: 80%;
  margin: 3% auto;

  @media only screen and (min-width: 768px) {
    width: 70%;
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const DefaultContainer = styled.div`
  width: 80%;
  margin: 10% auto;

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const BulletHeader = styled(Title2)`
  font-family: "Neusa";
  font-size: 1.5rem;
  font-weight: 500;

  @media only screen and (min-width: 768px) {
    margin-bottom: 5%;
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
    font-size: 2rem;
  }
`;

export const BulletList = styled.ul`
  padding-left: 5%;

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
  }
`;
export const Bullet = styled.li`
  list-style: disc;
  margin: 8% 0;
  font-family: "Neusa";
  font-weight: 300;

  @media only screen and (min-width: 768px) {
    margin: 5% 0;
  }

  @media only screen and (min-width: 992px) {
    margin: 2.5% 0;
    font-size: 1.2rem;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 1.4rem;
  }
`;
