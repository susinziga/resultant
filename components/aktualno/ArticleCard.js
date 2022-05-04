import React from "react";
import { BodyText2 } from "../../basic_components/texts/Texts";
import {
  NewsContainer,
  NewsHeading,
  NewsImage,
  NewsTextContainer,
  NewsText,
  NewsButton,
} from "./ArticleCard.styled";

import { useRouter } from "next/router";
import Button from "../../basic_components/button/Button";

const ArticleCard = ({ news }) => {
  const { locale } = useRouter();
  let { heading, text, image, link, id } = news;

  return (
    <>
      <NewsContainer isActive>
        <div>
          <NewsImage src={image}></NewsImage>
          <NewsTextContainer>
            <NewsHeading>{heading}</NewsHeading>
            <NewsText>
              {text.length > 100 ? text.substr(0, 100) + "..." : text}
            </NewsText>
          </NewsTextContainer>
        </div>
        <NewsButton href={"/" + locale + "/clanek/" + id + "/" + link}>
          Preberi več {">"}
        </NewsButton>
      </NewsContainer>
    </>
  );
};

export default ArticleCard;
