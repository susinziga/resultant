import styled from "styled-components";

export const Title = styled.p`
  font-size: 1.5rem;
  margin-bottom: 10%;

  // FONT NI PRAVI, MORAL BI BIT Neusa Next Pro WEIGHT 500 (medium)
  font-weight: bold;

  @media only screen and (min-width: 768px) {
    height: 90px;
    font-size: 1.8rem;
    margin-bottom: 0;
  }

  @media only screen and (min-width: 992px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 2.5rem;
  }
`;

export const Text = styled.p`
  font-family: "NeusaThin";
  font-size: 1.1rem;
`;
