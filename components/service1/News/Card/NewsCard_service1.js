import React from "react";
import { BodyText2 } from "../../../../basic_components/texts/Texts";
import {
  NewsContainer,
  NewsHeading,
  NewsImage,
  NewsTextContainer,
  NewsText,
  NewsButton,
} from "./NewsCard.styled";

import { useRouter } from "next/router";
import Button from "../../../../basic_components/button/Button";

const NewsCard_service1 = ({ news, isActive }) => {
  const { locale } = useRouter();
  let { heading, text, image, link, id } = news;

  return (
    <>
      <NewsContainer isActive>
        {id}
        <NewsImage src={image}></NewsImage>
        <NewsTextContainer>
          <NewsHeading>{heading}</NewsHeading>
          <NewsText>{text}</NewsText>
        </NewsTextContainer>
        <NewsButton href={"/" + locale + "/clanek/" + link}>
          Preberi več {">"}
        </NewsButton>
      </NewsContainer>
    </>
  );
};

export default NewsCard_service1;
