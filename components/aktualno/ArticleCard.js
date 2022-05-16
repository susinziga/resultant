import React from "react";
import { BodyText2 } from "../../basic_components/texts/Texts";
import {
  NewsContainer,
  NewsHeading,
  NewsImage,
  NewsTextContainer,
  NewsText,
  NewsButton,
  GuestBadge,
} from "./ArticleCard.styled";

import { useRouter } from "next/router";
import Button from "../../basic_components/button/Button";

const ArticleCard = ({ news }) => {
  const { locale } = useRouter();
  let { heading, text, hasGuestAuthor, image, link, id, imageAlt } = news;

  return (
    <>
      <NewsContainer href={"/" + locale + "/clanek/" + id} isActive>
        <div>
          <NewsImage src={image} alt={imageAlt}></NewsImage>
          <NewsTextContainer>
            {hasGuestAuthor && <GuestBadge>Z gostom</GuestBadge>}
            <NewsHeading>{heading}</NewsHeading>
            <NewsText>
              {text.length > 100 ? text.substr(0, 100) + "..." : text}
            </NewsText>
          </NewsTextContainer>
        </div>
        <NewsButton>
          Preberi več{" "}
          <span style={{ width: ".25rem", display: "inline-block" }}></span>{" "}
          {">"}
        </NewsButton>
      </NewsContainer>
    </>
  );
};

export default ArticleCard;
