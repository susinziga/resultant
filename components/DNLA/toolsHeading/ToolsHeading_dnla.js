import React from 'react';
import useTranslation from "next-translate/useTranslation";
import { Heading, HeadingContainer, ToolsContainer, ToolsImage } from './ToolsHeading.styled';

const ToolsHeading_dnla = (props) => {
    const { t, lang } = useTranslation();

    const heading = t("dnla:dnla_toolsHeading");
  return (
    <>
        <ToolsContainer>
            <ToolsImage className='mobile' src="/DNLA/toolsImageMobile.png"></ToolsImage>
            <ToolsImage className='desktop' src="/DNLA/toolsImageDesktop.png"></ToolsImage>
            <HeadingContainer>
            <Heading>{heading}</Heading>
            </HeadingContainer>
        </ToolsContainer>
    </>
  )
}

export default ToolsHeading_dnla;