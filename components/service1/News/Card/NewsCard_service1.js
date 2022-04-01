import React from 'react'
import { NewsContainer, NewsHeading, NewsImage, NewsTextContainer,NewsText } from './NewsCard.styled';

const NewsCard_service1 = ({ news, isActive }) => {
  const { heading, text, image } = news;
  return (
    <>
      <NewsContainer isActive>
        <NewsImage src={image}></NewsImage>
        <NewsTextContainer>
          <NewsHeading>{heading}</NewsHeading>
          <NewsText>{text}</NewsText>
        </NewsTextContainer>
      </NewsContainer>
    </>
  )
}

export default NewsCard_service1;




