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

export const GuestBadge = styled.div`
  position: absolute;
  width: 100px;
  height: 45px;
  background-color: #00b4f0;
  border-radius: 30px;
  top: -30px;
  right: -10px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.8rem;
  text-align: center;
  color: white;
  font-family: "NeusaThin";

  transition: all 0.25s ease;

  @media (min-width: 1600px) {
    font-size: 1rem;
    width: 125px;
    height: 55px;
  }
`;

export const NewsText = styled(BodyText2)`
  width: 95%;
  margin: 10% 0;
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

export const NewsAuthorsTextWrapper = styled(BodyText3)`
  font-weight: bold;
  font-size: 1.1rem;

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const NewsAuthorText = styled.span`
  transition: all 0.25s ease;
  font-size: 0.9rem;
`;

export const NewsHeading = styled(Title2)`
  font-size: 1.2rem;
  width: 100%;
  transition: all 0.25s ease;
  cursor: pointer;

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
  cursor: pointer;
  width: 95%;
  margin: 20% auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /*filter: drop-shadow(0px 16px 20px rgba(0, 71, 103, 0.09));*/
  /* box-shadow: 0px 16px 20px rgba(0, 71, 103, 0.09); */
  border: 1px solid #000000;
  /* box-sizing: border-box; */
  border-radius: 12px;
  padding-bottom: 5%;

  ${(props) => {
    return props.isActive
      ? `background: white; 
          `
      : "";
  }}
  /* border-radius: 12px; */
  min-height: 570px;
  transition: all 0.25s ease;

  &:hover {
    background: #316888;
    color: white !important;
  }

  &:hover ${NewsHeading}, &:hover ${NewsText}, &:hover ${NewsAuthorText} {
    color: white !important;
  }

  @media only screen and (min-width: 768px) {
    min-height: 550px;
    width: 95%;
  }

  @media only screen and (min-width: 992px) {
    padding-top: 0;
    width: 95%;
    min-height: 590px;
  }

  @media only screen and (min-width: 1600px) {
    min-height: 630px;
  }
`;

export const NewsImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 200px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  /*filter: drop-shadow(0px 16px 40px rgba(0, 71, 103, 0.12));*/
`;

export const NewsTextContainer = styled.div`
  width: 80%;
  padding: 10% 0% 0% 10%;
  position: relative;
`;

export const NewsButton = styled.p`
  padding-bottom: 2%;
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
