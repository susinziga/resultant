import React from "react";
import useTranslation from "next-translate/useTranslation";
import {
  CardContainer,
  CardHeading,
  CardImage,
  TextContainer,
  ButtonContainer,
  Text,
} from "./Card3.styled";
import Button from "../../../../basic_components/button/Button";

import { useRouter } from "next/router";

const Card3_dnla = () => {
  const { t, lang } = useTranslation();

  const heading = t("dnla:dnla_card3heading");
  const text = t("dnla:dnla_card3text");
  const button = t("dnla:dnla_pillar2Button");

  const { locale } = useRouter();

  return (
    <>
      <CardContainer>
        <CardImage
          className="mobile"
          src="/clanki/tychy/image1.png"
        ></CardImage>
        <CardImage
          className="desktop"
          src="/DNLA/cardSectionImage3_desktop.png"
        ></CardImage>
        <TextContainer>
          <CardHeading>{heading}</CardHeading>
          <Text>{text}</Text>

          <ButtonContainer>
            <Button
              secondary
              href={
                "/" +
                locale +
                "/clanek/pet-vprasanj-aleksandru-tychyju-o-razvoju-potenciala-z-dnla-orodjem"
              }
            >
              {button}
            </Button>
          </ButtonContainer>
        </TextContainer>
      </CardContainer>
    </>
  );
};

export default Card3_dnla;
