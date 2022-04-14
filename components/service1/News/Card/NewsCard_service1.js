import React from "react";
import { BodyText2 } from "../../../../basic_components/texts/Texts";
import {
  NewsContainer,
  NewsHeading,
  NewsImage,
  NewsTextContainer,
  NewsText,
} from "./NewsCard.styled";

import { useRouter } from "next/router";
import Button from "../../../../basic_components/button/Button";

// TODO: add button to the bottom
const NewsCard_service1 = ({ news, isActive }) => {
  const { locale } = useRouter();
  const { heading, text, image } = news;
  return (
    <>
      <a href={"/" + locale + "/coming-soon"}>
        <NewsContainer isActive>
          <NewsImage src={image}></NewsImage>
          <NewsTextContainer>
            <NewsHeading>{heading}</NewsHeading>
            <NewsText>
              <BodyText2>{text}</BodyText2>
            </NewsText>
          </NewsTextContainer>
        </NewsContainer>
      </a>
    </>
  );
};

export default NewsCard_service1;
