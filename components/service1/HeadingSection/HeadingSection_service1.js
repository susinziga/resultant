import React from "react";

import {
  HeadingContainer,
  HeadingUpperHeading,
  HeadingHeading,
  HeadingLine,
  HeaderImage,
  HeadingSeparator,
  ImageSeparator,
  Flex,
} from "./HeadingSectionService1.styled";
import useTranslation from "next-translate/useTranslation";

const HeadingSection_service1 = (props) => {
  const { t, lang } = useTranslation();

  const upperTitle = t("service1:service1_Heading");
  const paragraph = t("service1:service1_mainParagraph");

  return (
    <>
      <HeadingContainer {...props}>
        <Flex>
          <HeadingSeparator>
            <HeadingHeading>{upperTitle}</HeadingHeading>
            <HeadingUpperHeading>{paragraph}</HeadingUpperHeading>
            <HeadingLine className="desktop"></HeadingLine>
          </HeadingSeparator>
          <HeadingLine className="mobile"></HeadingLine>
          <ImageSeparator>
            <HeaderImage
              className="mobile"
              src="/Service1/HeadingPhoto.png"
            ></HeaderImage>
            <HeaderImage
              className="desktop"
              src="/Service1/HeadingPhoto_desktop.png"
            ></HeaderImage>
          </ImageSeparator>
        </Flex>
      </HeadingContainer>
    </>
  );
};

export default HeadingSection_service1;
