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
} from "./SIOK.styled";

const SIOK_service1 = (props) => {
  const { t, lang } = useTranslation();

  const header1 = t("service1:service1_SIOKheading1");
  const header2 = t("service1:service1_SIOKheading2");
  const paragraph = t("service1:service1_SIOKparagraph");
  const imageText = t("service1:service1_SIOKImageSub");

  return (
    <>
      <SIOKContainer {...props}>
        <SIOKImage
          className="desktop"
          src="/Service1/SIOKgraf1_desktop.png"
        ></SIOKImage>
        <SIOKTitle className="mobile">{header1}</SIOKTitle>
        <SIOKImage className="mobile" src="/Service1/SIOKgraf.png"></SIOKImage>
        <SIOKTitle className="mobile">{header2}</SIOKTitle>
        <SIOKTextContainer className="mobile">
          <SIOKParagraph>{paragraph}</SIOKParagraph>
        </SIOKTextContainer>
        <SIOKImageContainer className="mobile">
          <SIOKImage
            className="mobile"
            src="/Service1/SIOKgraf2.png"
          ></SIOKImage>
          <SIOKImageText className="mobile">{imageText}</SIOKImageText>
        </SIOKImageContainer>
        <SIOKImage
          className="desktop"
          src="/Service1/SIOKgraf2_desktop.png"
        ></SIOKImage>
      </SIOKContainer>
    </>
  );
};

export default SIOK_service1;
