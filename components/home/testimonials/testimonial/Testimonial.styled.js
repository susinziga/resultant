import styled from "styled-components";

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
