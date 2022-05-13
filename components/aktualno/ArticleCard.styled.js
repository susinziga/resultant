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
} from "../../basic_components/texts/Texts";

export const NewsText = styled(BodyText2)`
  width: 95%;
  font-size: 1rem;
  transition: all 0.25s ease;
  display: block;
  height: calc(1.2rem * 6);

  filter: drop-shadow(0px 16px 40px rgba(0, 71, 103, 0.12));

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
    /* min-height: 12rem; */
  }

  @media only screen and (min-width: 992px) {
    padding-top: 0;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 1.1rem;
    /* min-height: 8rem; */
  }
`;

export const NewsHeading = styled.h3`
  font-size: 1.2rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.25s ease;

  margin: 0 0 10% 0;
  filter: drop-shadow(0px 16px 40px rgba(0, 71, 103, 0.12));

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    font-size: 1.2rem;
    min-height: 5rem;
  }

  @media (min-width: 1600px) {
    font-size: 1.4rem;
  }
`;

export const NewsContainer = styled.a`
  // background: white;
  background: none;
  position: relative;
  width: 100%;
  cursor: pointer;
  /* margin: 20% auto; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /*filter: drop-shadow(0px 16px 20px rgba(0, 71, 103, 0.09));*/
  /* box-shadow: 0px 16px 20px rgba(0, 71, 103, 0.09); */
  border: 1px solid #000000;
  /* box-sizing: border-box; */
  border-radius: 16px;
  /* padding-bottom: 5%; */

  ${(props) => {
    return props.isActive
      ? `background: white; 
          `
      : "";
  }}
  /* border-radius: 12px; */
  /* min-height: 570px; */
  transition: all 0.25s ease;

  &:hover {
    background: #316888;
    color: white !important;
  }

  &:hover ${NewsHeading}, &:hover ${NewsText} {
    color: white;
  }

  @media only screen and (min-width: 768px) {
    min-height: 550px;
    width: 100%;
  }

  @media only screen and (min-width: 992px) {
    padding-top: 0;
    width: 100%;
    min-height: 590px;
  }

  @media only screen and (min-width: 1600px) {
    min-height: 630px;
  }
`;

export const NewsImage = styled.img`
  /* width: 100%; */

  /*filter: drop-shadow(0px 16px 40px rgba(0, 71, 103, 0.12));*/
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  object-fit: cover;
  height: 120px;
  width: 100%;
  transition: all 0.25s ease;

  @media only screen and (min-width: 768px) {
    height: 150px;
  }

  @media only screen and (min-width: 992px) {
    height: 200px;
  }
`;

export const NewsTextContainer = styled.div`
  width: 80%;
  padding: 10% 0% 0% 10%;
  flex: 1;
`;

export const NewsButton = styled.p`
  padding-bottom: 5%;
  padding-left: 10%;

  @media only screen and (min-width: 768px) {
    padding-bottom: 10%;
    padding-left: 10%;
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
    padding-bottom: 5%;
  }
`;
