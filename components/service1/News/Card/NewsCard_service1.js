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
  GuestBadge,
} from "./NewsCard.styled";

import { useRouter } from "next/router";
import Button from "../../../../basic_components/button/Button";
import Link from "next/link";

const NewsCard_service1 = ({ news, isActive }) => {
  const { locale } = useRouter();
  let { heading, hasGuestAuthor, text, image, link, id } = news;

  return (
    <Link
      href={"/" + locale + "/clanek/" + (id != undefined ? id + "/" : link)}
    >
      <NewsContainer>
        <div>
          <NewsImage src={image}></NewsImage>
          <NewsTextContainer>
            {hasGuestAuthor && <GuestBadge>Z gostom</GuestBadge>}
            <NewsHeading>{heading}</NewsHeading>
            <NewsText>
              {text.length > 110 ? text.substr(0, 110) + "..." : text}
            </NewsText>
          </NewsTextContainer>
        </div>
        <NewsButton>
          Preberi več{" "}
          <span style={{ width: ".25rem", display: "inline-block" }}></span>{" "}
          {">"}
        </NewsButton>
      </NewsContainer>
    </Link>
  );
};

export default NewsCard_service1;
