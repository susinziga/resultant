import React from "react";

import useTranslation from "next-translate/useTranslation";

const Header = (props) => {
  return (
    <>
      <HeadingContainer {...props}>
        <HeadingHeading>{props.title}</HeadingHeading>
        <HeadingLine></HeadingLine>
      </HeadingContainer>
    </>
  );
};

import styled from "styled-components";
import {
  Header1,
  BodyText2,
  BodyText3,
  Header2,
  BodyText4,
  BodyText1,
  Title1,
  Title2,
} from "../../../basic_components/texts/Texts";

export const HeadingContainer = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 25%;
  margin-bottom: 0;

  @media only screen and (min-width: 768px) {
    padding-top: 20%;
  }

  @media only screen and (min-width: 992px) {
    padding-top: 15%;
  }

  @media only screen and (min-width: 1600px) {
    padding-top: 10%;
  }
`;

export const HeadingUpperHeading = styled(BodyText1)`
  font-weight: bold;
`;

export const HeadingHeading = styled(Title1)`
  margin-top: 5%;
`;

export const HeadingLine = styled.div`
  height: 1px;
  width: 100%;
  border-top: 1px solid black;
  margin-top: 10%;

  @media screen and (min-width: 768px) {
    margin-top: 5%;
  }
`;

export default Header;
