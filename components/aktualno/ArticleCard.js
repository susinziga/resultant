import React from "react";
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
