import styled from "styled-components";
import { BodyText1, Title2 } from "../../../basic_components/texts/Texts";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 90%;
  margin: 0 auto;

  margin-bottom: 15%;
  /* padding-right: 5%; */
  /* padding-left: 5%; */

  @media only screen and (min-width: 1024px) {
    height: 70vh;
    margin-bottom: 3%;
    flex-direction: row;
    /* padding-left: 0px; */
    /* padding-right: 5%; */

    ${(props) =>
      props.flipX &&
      `
        flex-direction: row-reverse;
        padding-right: 0px;
        padding-left: 5%;
    `}

    ${(props) =>
      props.margin &&
      `
        padding-right: 5%;
    `}
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const CardImage = styled.img`
  width: 100%;
  margin: 0px;
  height: 40vh;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  /* padding: 5% 0px; */

  ${(props) =>
    props.mobileImgOnBottom &&
    `
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    `}

  ${(props) =>
    props.margin &&
    `
        margin-top: 5%;
        margin-bottom: 10%;
    `}

  @media only screen and (min-width: 1024px) {
    height: 100%;
    width: 50%;
    margin-left: 0px;
    margin-right: 5%;

    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;

    ${(props) =>
      props.flipX &&
      `
        margin-left: 5%;
        margin-right: 0px;
    `}
  }
`;

export const TextContainer = styled.div`
  padding: 5%;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    padding-right: 4rem;
    padding-left: 0;

    ${(props) =>
      props.flipX &&
      `
      padding-right: 0;
      padding-left: 4rem;
    `}
  }
`;

export const CardHeading = styled(Title2)`
  margin-bottom: 5%;

  font-size: 2rem;

  @media only screen and (min-width: 992px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 2rem;
  }
`;

export const CardContent = styled(BodyText1)`
  font-size: 1rem;
  font-weight: 300;

  @media only screen and (min-width: 992px) {
    font-size: 1.1rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 1.2rem;
  }
`;

export const CardButton = styled.a`
  width: fit-content;
  display: block;
  margin-top: 5%;
  border: none;
  border-bottom: 2px solid #9f7312;
  background: none;
  color: #282828;
  padding-bottom: 10px;
  font-family: "NeusaThin";
  cursor: pointer;
`;

export const CardButtonArrowWrapper = styled.span`
  padding-left: 15px;
  padding-right: 5px;
`;
