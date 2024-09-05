import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 90%;
  margin: auto;

  @media only screen and (min-width: 768px) {
    padding-top: 0%;
  }

  @media only screen and (min-width: 992px) {
    padding-top: 0;
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const HeadingLine = styled.h3`
  height: 1px;
  width: 100%;
  border-top: 1px solid black;
  margin: 10% 0;

  @media screen and (min-width: 768px) {
    margin-top: 5%;
  }
`;
