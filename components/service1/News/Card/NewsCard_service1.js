import React from "react";
import { BodyText2 } from "../../../../basic_components/texts/Texts";
import {
  NewsContainer,
  NewsHeading,
  NewsImage,
  NewsTextContainer,
  NewsText,
  NewsButton,
  NewsAuthorsTextWrapper,
  NewsAuthorText,
} from "./NewsCard.styled";

import { useRouter } from "next/router";
import Button from "../../../../basic_components/button/Button";

const NewsCard_service1 = ({ news, isActive }) => {
  const { locale } = useRouter();
  let { heading, authors, text, image, link, id } = news;

  return (
    <>
      <NewsContainer
        href={
          "/" + locale + "/clanek/" + (id != undefined ? id + "/" : "") + link
        }
        isActive
      >
        <div>
          <NewsImage src={image}></NewsImage>
          <NewsTextContainer>
            <NewsAuthorsTextWrapper>
              {authors.map((author, index) => (
                <NewsAuthorText>
                  {author} {index === authors.length - 1 ? "" : "- "}
                </NewsAuthorText>
              ))}
            </NewsAuthorsTextWrapper>
            <NewsHeading>{heading}</NewsHeading>
            <NewsText>
              {text.length > 110 ? text.substr(0, 110) + "..." : text}
            </NewsText>
          </NewsTextContainer>
        </div>
        <NewsButton>Preberi več {">"}</NewsButton>
      </NewsContainer>
    </>
  );
};

export default NewsCard_service1;
