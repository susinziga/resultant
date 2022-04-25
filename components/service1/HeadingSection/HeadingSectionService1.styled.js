import styled from "styled-components";
import {
  BodyText1,
  Subtitle1,
  Title1,
  Title2,
} from "../../../basic_components/texts/Texts";

export const HeadingContainer = styled.div`
  width: 90%;
  margin: auto;

  @media only screen and (min-width: 768px) {
    margin-bottom: 7.5%;
  }
`;

export const Flex = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const HeadingSeparator = styled.div`
  @media only screen and (min-width: 768px) {
    width: 55%;
    margin: 0 0 10% 5%;
  }

  @media only screen and (min-width: 992px) {
    margin: 0% 0 10% 5%;
  }

  @media only screen and (min-width: 1600px) {
    margin: 0% 0 10% 2.5%;
  }
`;

export const ImageSeparator = styled.div`
  @media only screen and (min-width: 768px) {
    width: 45%;
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const HeadingUpperHeading = styled(BodyText1)`
  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 992px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 1.6rem;
  }
`;

export const HeadingHeading = styled(Title1)`
  margin: 0 0 10% 0;
  font-size: 2.5rem;

  @media only screen and (min-width: 768px) {
    margin: 0% 0 5% 0;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 992px) {
    font-size: 2.5rem;
    margin: 0% 0 5% 0;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 3.5rem;
    margin: 0 0 5% 0;
  }
`;

export const HeadingLine = styled.div`
  height: 1px;
  width: 100%;
  border-top: 1px solid black;
  margin: 10% 0 15% 0;

  @media screen and (min-width: 768px) {
    margin-top: 5%;
  }

  @media screen and (min-width: 992px) {
    margin-top: 10%;
  }
`;

export const HeaderImage = styled.img`
  border-radius: 12px;
  filter: drop-shadow(0px 16px 40px rgba(0, 71, 103, 0.12));

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
    width: 80%;
  }
`;
