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
      <CardContainer
        style={{ backgroundColor: props.color, borderRadius: "12px" }}
        flipX={props.flipX}
        margin={props.margin}
      >
        <CardImage
          flipX={props.flipX}
          className="desktop"
          src={props.img + "_desktop.webp"}
        ></CardImage>
        <TextContainer>
          <CardHeading
            dangerouslySetInnerHTML={{ __html: props.heading }}
          ></CardHeading>
          {!props.mobileImgOnBottom && (
            <CardImage
              className="mobile"
              margin={props.margin}
              src={props.img + "_mobile.webp"}
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
        </TextContainer>
        {props.mobileImgOnBottom && (
          <CardImage
            mobileImgOnBottom={props.mobileImgOnBottom}
            className="mobile"
            src={props.img + "_mobile.webp"}
          ></CardImage>
        )}
      </CardContainer>
    </>
  );
};

export default BigCard;
