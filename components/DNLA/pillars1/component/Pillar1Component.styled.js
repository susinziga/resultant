import styled from "styled-components";
import { BodyText4, Title2 } from "../../../../basic_components/texts/Texts";

export const PillarComponentContainer = styled.div`
  &.pillarContainer {
    @media (min-width: 768px) {
      width: 32%;
    }

    @media (min-width: 992px) {
    }

    @media (min-width: 1600px) {
    }
  }

  border-radius: 12px;
  border: 1px solid var(--pillar-color);

  transition: 0.5s all;
  margin: 0.5%;
  padding: 3%;
  padding-bottom: 7%;
  display: flex;
  flex-direction: column;

  > * {
    margin-bottom: 1rem;
  }

  :hover * {
    visibility: visible;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 5%;
  }

  @media screen and (min-width: 992px) {
    padding-bottom: 10%;
  }
  @media screen and (min-width: 1124px) {
    padding-bottom: 7%;
  }
`;

export const PillarComponentTitle = styled(Title2)`
  font-size: 1.4rem;
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1600px) {
    font-size: 2rem;
  }
`;

export const PillarOuter = styled.a`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const LogoContainer = styled.div`
  width: 100%;
  text-align: right;
`;

export const PillarText = styled(BodyText4)`
  visibility: hidden;

  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 0.8rem;
  }

  @media (min-width: 992px) {
    font-size: 1rem;
  }
  @media (min-width: 1600px) {
    font-size: 1rem;
  }
`;
