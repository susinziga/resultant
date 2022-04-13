import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 20%;
  gap: 2rem;

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
    width: 95%;

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
    margin-top: 5%;
  }
`;

export const VSpacer = styled.div`
  height: 2rem;
`;
