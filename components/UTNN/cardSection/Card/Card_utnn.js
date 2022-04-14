import React from "react";
import useTranslation from "next-translate/useTranslation";
import {
  CardContainer,
  CardImage,
  TextContainer,
  CardHeading,
  CardContent,
  CardButton,
  CardButtonArrowWrapper,
} from "./Card.styled";

const Card_utnn = (props) => {
  const { t, lang } = useTranslation();

  return (
    <>
      <CardContainer flipX={props.flipX}>
        <CardImage
          className="mobile"
          src={props.img + "_mobile.png"}
        ></CardImage>
        <CardImage
          flipX={props.flipX}
          className="desktop"
          src={props.img + "_desktop.png"}
        ></CardImage>
        <TextContainer>
          <CardHeading>{props.heading}</CardHeading>
          <CardContent>{props.content}</CardContent>
          <CardButton href={props.href}>
            Želim vedeti več{" "}
            <CardButtonArrowWrapper>
              <img width={5} src="/UTNN/button_arrow_right.png"></img>
            </CardButtonArrowWrapper>
          </CardButton>
        </TextContainer>
      </CardContainer>
    </>
  );
};

export default Card_utnn;
