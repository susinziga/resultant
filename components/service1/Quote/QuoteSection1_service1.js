import React from "react";
import {
  QuoteContainer,
  QuoteImage,
  QuoteImageContainer,
  QuoteText,
  QuoteTextContainer,
} from "./QuoteSection1.styled";
import useTranslation from "next-translate/useTranslation";

const QuoteSection1_service1 = ({ props }) => {
  return (
    <>
      <QuoteContainer {...props}>
        <QuoteImageContainer>
          <QuoteImage src="/Icons/QuoteWhite.webp"></QuoteImage>
        </QuoteImageContainer>
        <QuoteTextContainer>
          <QuoteText>{props}</QuoteText>
        </QuoteTextContainer>
      </QuoteContainer>
    </>
  );
};

export default QuoteSection1_service1;
