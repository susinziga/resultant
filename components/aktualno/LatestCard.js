import React from "react";
import {
  NewsContainer,
  NewsHeading,
  NewsImage,
  NewsTextContainer,
  NewsText,
  ContainerInnerWrapper,
} from "./LatestCard.styled";

import { useRouter } from "next/router";

const LatestCard = ({ news }) => {
  const { locale } = useRouter();
  let { heading, text, image, link, id, imageAlt } = news;

  return (
    <>
      <NewsContainer href={"/" + locale + "/clanek/" + id} isActive>
        <ContainerInnerWrapper>
          <NewsImage alt={imageAlt} src={image}></NewsImage>
          <NewsTextContainer>
            <NewsHeading>{heading}</NewsHeading>
            <NewsText>{text}</NewsText>
            <p>
              Preberi več{" "}
              <span style={{ width: ".25rem", display: "inline-block" }}></span>{" "}
              {">"}
            </p>
          </NewsTextContainer>
        </ContainerInnerWrapper>
      </NewsContainer>
    </>
  );
};

export default LatestCard;
