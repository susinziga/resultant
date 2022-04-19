import React from "react";
import {
  CardContainer,
  CardImage,
  TextContainer,
  CardHeading,
  CardContent,
} from "./BigCard.styled";
import CardButton from "./CardButton";
import useTranslation from "next-translate/useTranslation";

const BigCard = (props) => {
  const { t, lang } = useTranslation();

  return (
    <>
      <CardContainer flipX={props.flipX} margin={props.margin}>
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
              margin={props.margin}
              src={props.img + "_mobile.png"}
            ></CardImage>
          )}
          <CardContent>{props.content}</CardContent>
          <a href={props.href}>
            <CardButton text={t("common:button_more")} />
          </a>
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
