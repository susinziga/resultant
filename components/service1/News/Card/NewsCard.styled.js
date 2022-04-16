import Image from "next/image";
import styled from "styled-components";
import {
  BodyText1,
  BodyText2,
  BodyText3,
  Subtitle1,
  Subtitle2,
  Title1,
  Title2,
} from "../../../../basic_components/texts/Texts";

export const NewsText = styled(BodyText2)`
  width: 95%;
  margin: 10% 0;
  font-size: 1rem;
  transition: all 0.25s ease;

  filter: drop-shadow(0px 16px 40px rgba(0, 71, 103, 0.12));

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
    min-height: 12rem;
  }

  @media only screen and (min-width: 992px) {
    padding-top: 0;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 1.4rem;
    min-height: 8rem;
  }
`;

export const NewsHeading = styled(Title2)`
  font-size: 1rem;
  width: 100%;
  transition: all 0.25s ease;

  margin: 0 0 10% 0;
  filter: drop-shadow(0px 16px 40px rgba(0, 71, 103, 0.12));

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    font-size: 1.3rem;
    min-height: 5rem;
  }

  @media (min-width: 1600px) {
    font-size: 1.8rem;
  }
`;

export const NewsContainer = styled.div`
  // background: white;
  background: none;
  position: relative;
  width: 95%;
  margin: 20% auto;
  /*filter: drop-shadow(0px 16px 20px rgba(0, 71, 103, 0.09));*/
  /* box-shadow: 0px 16px 20px rgba(0, 71, 103, 0.09); */
  border: 1px solid #000000;
  /* box-sizing: border-box; */
  border-radius: 16px;
  padding-bottom: 5%;

  ${(props) => {
    return props.isActive
      ? `background: white; 
          `
      : "";
  }}
  /* border-radius: 12px; */
  min-height: 460px;
  transition: all 0.25s ease;

  &:hover {
    background: #316888;
    color: white !important;
  }

  &:hover ${NewsHeading}, &:hover ${NewsText} {
    color: white;
  }

  @media only screen and (min-width: 768px) {
    min-height: 450px;
    width: 95%;
  }

  @media only screen and (min-width: 992px) {
    padding-top: 0;
    width: 95%;
    min-height: 550px;
  }

  @media only screen and (min-width: 1600px) {
    min-height: 830px;
  }
`;

export const NewsImage = styled.img`
  width: 100%;

  /*filter: drop-shadow(0px 16px 40px rgba(0, 71, 103, 0.12));*/
`;

export const NewsTextContainer = styled.div`
  width: 80%;
  padding: 10% 10%;
`;

export const NewsButton = styled.a`
  padding-bottom: 10%;
  padding-left: 10%;

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
    padding-bottom: 5%;
  }
`;
