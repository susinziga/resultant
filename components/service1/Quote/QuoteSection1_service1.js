import React from 'react';
import { QuoteContainer, QuoteImage, QuoteImageContainer, QuoteText, QuoteTextContainer } from './QuoteSection1.styled';
import useTranslation from "next-translate/useTranslation";

const QuoteSection1_service1 = () => {
    const { t, lang } = useTranslation();

    const paragraph = t("service1:service1_quoteParagraph");

  return (
    <>
        <QuoteContainer>
            <QuoteImageContainer>
                <QuoteImage src="./Icons/QuoteWhite.png"></QuoteImage>
            </QuoteImageContainer>
            <QuoteTextContainer>
                <QuoteText>{paragraph}</QuoteText>
            </QuoteTextContainer>
        </QuoteContainer>
    </>
  )
}

export default QuoteSection1_service1;