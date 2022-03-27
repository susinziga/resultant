import React from 'react';
import Button from '../../../basic_components/button/Button'
import { BodyText2 } from '../../../basic_components/texts/Texts';
import { AboutContainer, AboutUpperHeading, AboutTextContainer, AboutHeading, AboutText, AboutHeadingContainer, AboutLine } from './About.styled';
import useTranslation from "next-translate/useTranslation";

const About_about = (props) => {
  const { t, lang } = useTranslation();

  const upperTitle = t("about:about_upperHeading");
  const title = t("about:about_mainHeading");
  const p = t("about:about_paragraph")

  return (<>
    <AboutContainer {...props}>
      <AboutTextContainer>
        <AboutUpperHeading>{upperTitle}</AboutUpperHeading>
        <AboutHeading>{title}</AboutHeading>
        <AboutHeadingContainer>
            <AboutText>{p}</AboutText>
        </AboutHeadingContainer>
        <AboutLine></AboutLine>
      </AboutTextContainer>
      
    </AboutContainer>
  </>
  )
}

export default About_about;