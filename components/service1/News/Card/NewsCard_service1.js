import React from "react";
import { BodyText2 } from "../../../../basic_components/texts/Texts";
import {
  NewsContainer,
  NewsHeading,
  NewsImage,
  NewsTextContainer,
  NewsText,
} from "./NewsCard.styled";

const NewsCard_service1 = ({ news, isActive }) => {
  const { heading, text, image } = news;
  return (
    <>
      <NewsContainer isActive>
        <NewsImage src={image}></NewsImage>
        <NewsTextContainer>
          <NewsHeading>{heading}</NewsHeading>
          <NewsText>
            <BodyText2>{text}</BodyText2>
          </NewsText>
        </NewsTextContainer>
      </NewsContainer>
    </>
  );
};

export default NewsCard_service1;
