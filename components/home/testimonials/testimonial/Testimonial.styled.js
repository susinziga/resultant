import styled from "styled-components";
import { Title2 } from "../../../../basic_components/texts/Texts";

export const Title = styled(Title2)`
  font-size: 2rem;
  @media only screen and (min-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  > :nth-child(1) {
    margin-bottom: 1rem;
  }
  > :nth-child(2) {
    width: 100%;
    margin: auto;
    margin-bottom: 2rem;
    > * {
      color: #5c5c5c;
    }
  }

  > :nth-child(4) {
    color: #5c5c5c;
  }

  @media (min-width: 768px) {
    margin: auto;

    > :nth-child(1) {
      margin-bottom: 2rem;
    }
    > :nth-child(2) {
      width: 70%;
      margin: auto;
      margin-bottom: 2rem;
      > * {
        color: #5c5c5c;
      }
    }

    > :nth-child(4) {
      color: #5c5c5c;
    }
  }
`;
