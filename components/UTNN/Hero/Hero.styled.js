import styled from "styled-components";
import { BodyText1, Subtitle2 } from "../../../basic_components/texts/Texts";

export const HeadText = styled(Subtitle2)`
  display: block;
  padding-bottom: 3%;
  font-weight: 500;
  font-size: 2rem;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 20%;
  gap: 4rem;

  > img {
    width: 100%;
    height: fit-content;
  }

  > div {
    /* width: 100%; */
  }

  @media (min-width: 768px) {
    margin-bottom: 2rem;
    margin-top: 3rem;
    flex-direction: row;
    width: 90%;

    > img {
      width: 50%;
      height: fit-content;
    }
  }
`;

export const HeroImage = styled.img`
  width: 50%;
`;

export const ContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 768px) {
    margin-top: 3%;
  }
`;

export const VSpacer = styled.div`
  height: 2rem;
`;
