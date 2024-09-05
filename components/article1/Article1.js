import React from "react";
import {
  ArticleContainer,
  Text,
  HeadingContainer,
  Image,
  DesktopFlex,
  HeadingLine,
} from "./Articel1.styled";
import useTranslation from "next-translate/useTranslation";

const Article1 = () => {
  const { t, lang } = useTranslation();

  const heading = t("article1:article1_heading");
  const paragraph = t("article1:article1_paragraph");
  return (
    <>
      <ArticleContainer>
        <HeadingContainer>{heading}</HeadingContainer>
        <HeadingLine className="desktop"></HeadingLine>

        <DesktopFlex>
          <Text dangerouslySetInnerHTML={{ __html: paragraph }}></Text>
          <Image className="mobile" src="/articleImage1.webp"></Image>
          <Image className="desktop" src="/articleImage1_desktop.webp"></Image>
        </DesktopFlex>
      </ArticleContainer>
    </>
  );
};

export default Article1;
