import React from "react";
import useTranslation from "next-translate/useTranslation";
import {
  HeroWrapper,
  HeroImage,
  ContentWrapper,
  VSpacer,
  HeadText,
} from "./Hero.styled";
import { useRouter } from "next/router";
import Button from "../../../basic_components/button/Button";
import {
  BodyText1,
  BodyText2,
  BodyText4,
} from "../../../basic_components/texts/Texts";

const Hero_utnn = (props) => {
  const { t, lang } = useTranslation();
  const { locale } = useRouter();

  return (
    <>
      <HeroWrapper {...props}>
        <HeroImage src={props.image} alt={props.alt} />
        <ContentWrapper>
          {props.headText && <HeadText>{props.headText}</HeadText>}
          <BodyText2>{t(props.text)}</BodyText2>
          <VSpacer />
          {props.buttonText && (
            <Button primary href={"/" + locale + "/offer"}>
              {props.buttonText}
            </Button>
          )}
        </ContentWrapper>
      </HeroWrapper>
    </>
  );
};

export default Hero_utnn;
