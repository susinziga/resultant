import React from "react";
import Button from "../../../basic_components/button/Button";
import { BodyText2 } from "../../../basic_components/texts/Texts";
import {
  AboutContainer,
  AboutUpperHeading,
  AboutTextContainer,
  AboutHeading,
  AboutText,
  AboutHeadingContainer,
  AboutLine,
  AboutImage,
  ImageContainer,
} from "./About.styled";
import useTranslation from "next-translate/useTranslation";

const About_about = (props) => {
  const { t, lang } = useTranslation();

  const upperTitle = t("about:about_upperHeading");
  const title = t("about:about_mainHeading");
  const p = t("about:about_paragraph");
  const image = "/About/about_hero.png";

  return (
    <>
      <AboutContainer {...props} className="section">
        <ImageContainer>
          <AboutImage src={image}></AboutImage>
        </ImageContainer>
        <AboutTextContainer>
          <AboutHeading>{title}</AboutHeading>
          <AboutHeadingContainer>
            <AboutText>{p}</AboutText>
          </AboutHeadingContainer>
          <AboutLine></AboutLine>
        </AboutTextContainer>
      </AboutContainer>
    </>
  );
};

export default About_about;
