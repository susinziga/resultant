import React from "react";
import useTranslation from "next-translate/useTranslation";
import { CardContainer, CardImage, TextContainer, Text } from "./Card2.styled";

const Card2_dnla = () => {
  const { t, lang } = useTranslation();

  const text = t("dnla:dnla_card2text");

  return (
    <>
      <CardContainer>
        <TextContainer>
          <Text dangerouslySetInnerHTML={{ __html: text }}></Text>
        </TextContainer>
        <CardImage
          className="mobile"
          src="/DNLA/cardSectionImage2_mobile.webp"
        ></CardImage>
        <CardImage
          className="desktop"
          src="/DNLA/cardSectionImage2_desktop.webp"
        ></CardImage>
      </CardContainer>
    </>
  );
};

export default Card2_dnla;
