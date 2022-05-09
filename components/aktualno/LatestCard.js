import React from "react";
import { BodyText2 } from "../../basic_components/texts/Texts";
import {
  NewsContainer,
  NewsHeading,
  NewsImage,
  NewsTextContainer,
  NewsText,
  NewsButton,
  ContainerInnerWrapper,
} from "./LatestCard.styled";

import { useRouter } from "next/router";
import Button from "../../basic_components/button/Button";

const LatestCard = ({ news }) => {
  const { locale } = useRouter();
  let { heading, text, image, link, id } = news;

  return (
    <>
      <NewsContainer
        href={"/" + locale + "/clanek/" + id + "/" + link}
        isActive
      >
        <ContainerInnerWrapper>
          <NewsImage src={image}></NewsImage>
          <NewsTextContainer>
            <NewsHeading>{heading}</NewsHeading>
            <NewsText>{text}</NewsText>
            <NewsButton>
              Preberi več{" "}
              <span style={{ width: ".25rem", display: "inline-block" }}></span>{" "}
              {">"}
            </NewsButton>
          </NewsTextContainer>
        </ContainerInnerWrapper>
      </NewsContainer>
    </>
  );
};

export default LatestCard;
