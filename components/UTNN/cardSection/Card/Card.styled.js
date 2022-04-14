import styled from "styled-components";
import { BodyText1, Title2 } from "../../../../basic_components/texts/Texts";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 15%;
  padding-right: 5%;
  padding-left: 5%;

  @media only screen and (min-width: 768px) {
    margin-bottom: 3%;
    flex-direction: row;
    padding-left: 0px;
    padding-right: 70px;

    ${(props) =>
      props.flipX &&
      `
        flex-direction: row-reverse;
        padding-right: 0px;
        padding-left: 70px;
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
  /* padding: 5% 0px; */

  @media only screen and (min-width: 768px) {
    width: 50%;
    margin-left: 0px;
    margin-right: 5%;

    ${(props) =>
      props.flipX &&
      `
        margin-left: 5%;
        margin-right: 0px;
    `}
  }
`;

export const TextContainer = styled.div``;

export const CardHeading = styled(Title2)`
  margin-bottom: 5%;

  font-size: 2rem;

  @media only screen and (min-width: 992px) {
    font-size: 1.7rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 2rem;
  }
`;

export const CardContent = styled(BodyText1)`
  font-size: 1.4rem;
  font-weight: 300;

  @media only screen and (min-width: 992px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 1.4rem;
  }
`;

export const CardButton = styled.button`
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
