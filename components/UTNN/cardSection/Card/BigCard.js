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
          style={props.imgStyle}
          src={
            props.img === undefined
              ? props.fullImg
              : props.img + "_desktop.webp"
          }
        ></CardImage>
        <TextContainer>
          <CardHeading
            dangerouslySetInnerHTML={{ __html: props.heading }}
          ></CardHeading>
          {!props.mobileImgOnBottom && (
            <CardImage
              className="mobile"
              margin={props.margin}
              style={props.mobileImgStyle}
              src={
                props.img === undefined
                  ? props.fullImg
                  : props.img + "_desktop.webp"
              }
            ></CardImage>
          )}
          <CardContent
            dangerouslySetInnerHTML={{ __html: props.content }}
          ></CardContent>
          {props.buttonText && (
            <a href={props.href}>
              <CardButton text={props.buttonText} />
            </a>
          )}
          {props.mobileImgOnBottom && (
            <CardImage
              className="mobile"
              src={props.img + "_mobile.webp"}
            ></CardImage>
          )}
        </TextContainer>
      </CardContainer>
    </>
  );
};

export default BigCard;
