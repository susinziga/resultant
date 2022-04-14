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

const BigCard = (props) => {
  const { t, lang } = useTranslation();

  return (
    <>
      <CardContainer flipX={props.flipX}>
        <CardImage
          flipX={props.flipX}
          className="desktop"
          src={props.img + "_desktop.png"}
        ></CardImage>
        <TextContainer>
          <CardHeading>{props.heading}</CardHeading>
          {!props.mobileImgOnBottom && (
            <CardImage
              className="mobile"
              src={props.img + "_mobile.png"}
            ></CardImage>
          )}
          <CardContent>{props.content}</CardContent>
          <CardButton>
            Izvedi več
            <CardButtonArrowWrapper>
              <img width={5} src="/UTNN/button_arrow_right.png"></img>
            </CardButtonArrowWrapper>
          </CardButton>
          {props.mobileImgOnBottom && (
            <CardImage
              className="mobile"
              src={props.img + "_mobile.png"}
            ></CardImage>
          )}
        </TextContainer>
      </CardContainer>
    </>
  );
};

export default BigCard;
