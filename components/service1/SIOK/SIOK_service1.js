import React from "react";
import useTranslation from "next-translate/useTranslation";
import {
  SIOKImage,
  SIOKTitle,
  SIOKContainer,
  SIOKTextContainer,
  SIOKParagraph,
  SIOKImageText,
  SIOKImageContainer,
  SIOKGraf2Heading,
  SIOKGraf2Sub,
} from "./SIOK.styled";

import { useRouter } from "next/router";

const SIOK_service1 = (props) => {
  const { t, lang } = useTranslation();

  const { locale } = useRouter();

  const header1 = t("service1:service1_SIOKheading1");
  const header2 = t("service1:service1_SIOKheading2");
  const paragraph = t("service1:service1_SIOKparagraph");
  const imageText = t("service1:service1_SIOKImageSub");

  return (
    <>
      <SIOKContainer {...props}>
        <SIOKImage
          className="desktop"
          src={"/Service1/SIOKgraf1_desktop1_" + locale + ".png"}
        ></SIOKImage>
        <SIOKTitle_desktop className="desktop">{header1}</SIOKTitle_desktop>

        <SIOKTitle className="mobile">{header1}</SIOKTitle>
        <SIOKImage className="mobile" src="/Service1/SIOKgraf.png"></SIOKImage>
        <SIOKTitle className="mobile">{header2}</SIOKTitle>
        <SIOKTextContainer className="mobile">
          <SIOKParagraph>{paragraph}</SIOKParagraph>
        </SIOKTextContainer>
        <SIOKImageContainer className="mobile">
          <SIOKImage
            className="mobile"
            src="/Service1/SiOKgraf2.png"
          ></SIOKImage>
          <SIOKImageText className="mobile">{imageText}</SIOKImageText>
        </SIOKImageContainer>
        <SIOKGraf2Heading>
          V vprašalnik SiOK je vključenih 12 klimatskih kategorij
        </SIOKGraf2Heading>
        <SIOKImage
          className="desktop"
          src={"/Service1/SIOKgraf2_desktop_" + locale + ".png"}
        ></SIOKImage>
        <SIOKGraf2Sub>* Vsi prikazani podatki so simbolični.</SIOKGraf2Sub>
      </SIOKContainer>
    </>
  );
};

import styled from "styled-components";
import { BodyText4 } from "../../../basic_components/texts/Texts";
const SIOKTitle_desktop = styled.h1`
  display: none !important;
`;

export default SIOK_service1;
