import React from "react";
import useTranslation from "next-translate/useTranslation";
import { HeroWrapper, HeroImage, ContentWrapper, VSpacer } from "./Hero.styled";
import { useRouter } from "next/router";
import Button from "../../../basic_components/button/Button";
import { BodyText2 } from "../../../basic_components/texts/Texts";

const Hero_utnn = (props) => {
  const { t, lang } = useTranslation();
  const { locale } = useRouter();

  return (
    <>
      <HeroWrapper {...props}>
        <HeroImage src={props.image} alt={props.alt} />
        <ContentWrapper>
          <BodyText2>{t(props.text)}</BodyText2>
          <VSpacer />
          <Button primary href={"/" + locale + "/offer"}>
            {props.buttonText}
          </Button>
        </ContentWrapper>
      </HeroWrapper>
    </>
  );
};

export default Hero_utnn;
