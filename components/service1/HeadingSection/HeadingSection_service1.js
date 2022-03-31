import React from 'react';

import { HeadingContainer, HeadingUpperHeading, HeadingHeading, HeadingLine, HeaderImage } from './HeadingSectionService1.styled';
import useTranslation from "next-translate/useTranslation";

const HeadingSection_service1 = (props) => {
  const { t, lang } = useTranslation();

  const upperTitle = t("service1:service1_Heading");
  const paragraph = t("service1:service1_mainParagraph");


  return (<>
    <HeadingContainer {...props}>
        <HeadingHeading>{upperTitle}</HeadingHeading>
        <HeadingUpperHeading>{paragraph}</HeadingUpperHeading>
        
        <HeadingLine></HeadingLine>
        <HeaderImage src="./Service1/HeadingPhoto.png"></HeaderImage>
    </HeadingContainer>
  </>
  )
}

export default HeadingSection_service1;