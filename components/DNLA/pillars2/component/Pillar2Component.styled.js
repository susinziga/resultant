import styled from "styled-components";
import { BodyText4, Title2 } from "../../../../basic_components/texts/Texts";

export const PillarComponentContainer = styled.div`
  &.pillarContainer {
    min-height: 200px;
    justify-content: space-between;

    @media (min-width: 768px) {
      width: 32%;
      max-height: 450px;
    }

    @media (min-width: 992px) {
      max-height: 500px;
    }

    @media (min-width: 1600px) {
      max-height: 650px;
    }
  }

  border-radius: 12px;
  border: 1px solid var(--pillar-color);

  transition: 0.5s all;
  margin: 0.5%;
  padding: 4%;
  display: flex;
  flex-direction: column;

  p {
    max-height: 50%;
  }

  > * {
    margin-bottom: 1rem;
  }
`;

export const PillarComponentTitle = styled(Title2)`
  margin-bottom: 1rem;
  font-size: 1.4rem;
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media (min-width: 992px) {
    font-size: 1.8rem;
  }
`;

export const PillarOuter = styled.a`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const PillarText = styled(BodyText4)`
  font-size: 1.1rem;
  @media (min-width: 768px) {
    font-size: 0.8rem;
  }

  @media (min-width: 992px) {
    font-size: 1rem;
  }
  @media (min-width: 1600px) {
    font-size: 1.3rem;
  }
`;

export const ButtonContainer = styled.div`
  @media (min-width: 768px) {
    // margin-top: 45%;
  }

  @media (min-width: 992px) {
    // margin-top: 20%;
  }
  @media (min-width: 1600px) {
    // margin-top: 25%;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;
