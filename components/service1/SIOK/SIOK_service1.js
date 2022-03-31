import React from 'react';
import useTranslation from "next-translate/useTranslation";
import { SIOKImage, SIOKTitle, SIOKContainer, SIOKTextContainer, SIOKParagraph, SIOKImageText, SIOKImageContainer } from './SIOK.styled';

const SIOK_service1 = () => {
  const { t, lang } = useTranslation();

  const header1 = t("service1:service1_SIOKheading1");
  const header2 = t("service1:service1_SIOKheading2");
  const paragraph = t("service1:service1_SIOKparagraph");
  const imageText = t("service1:service1_SIOKImageSub");

  return (
    <>
    <SIOKContainer>
        <SIOKTitle>{header1}</SIOKTitle>
        <SIOKImage src="./Service1/SiOKgraf.png"></SIOKImage>
        <SIOKTitle>{header2}</SIOKTitle>
        <SIOKTextContainer>
            <SIOKParagraph>{paragraph}</SIOKParagraph>
        </SIOKTextContainer>
        <SIOKImageContainer>
            <SIOKImage src="./Service1/SiOKgraf2.png"></SIOKImage>
            <SIOKImageText>{imageText}</SIOKImageText>
        </SIOKImageContainer>
    </SIOKContainer>
    </>
  )
}

export default SIOK_service1;