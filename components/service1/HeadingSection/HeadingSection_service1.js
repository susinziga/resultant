import React from "react";

import {
  HeadingContainer,
  HeadingUpperHeading,
  HeadingHeading,
  HeadingLine,
  HeaderImage,
  HeadingSeparator,
  ImageSeparator,
  Flex,
} from "./HeadingSectionService1.styled";

import { useRouter } from "next/router";
import { SubmitButton } from "../PlanSection/Plan.styled";

const HeadingSection_service1 = ({ props }) => {
  const { locale } = useRouter();

  const getOffer = {
    sl: "Želim pridobiti ponudbo",
    en: "Get the offer",
  };

  return (
    <>
      <HeadingContainer {...props}>
        <Flex>
          <HeadingSeparator>
            <HeadingHeading>{props.upperTitle}</HeadingHeading>
            <HeadingUpperHeading>{props.paragraph}</HeadingUpperHeading>
            <HeadingLine className="desktop"></HeadingLine>
            {props.offerHref ? (
              <div style={{ marginTop: "50px" }}>
                <SubmitButton type="button" href={props.offerHref}>
                  {getOffer[locale]}
                </SubmitButton>
              </div>
            ) : undefined}
          </HeadingSeparator>
          <HeadingLine className="mobile"></HeadingLine>
          <ImageSeparator>
            <HeaderImage
              className="mobile"
              src={props.headerImage1}
            ></HeaderImage>
            <HeaderImage
              className="desktop"
              src={props.headerImage2}
            ></HeaderImage>
          </ImageSeparator>
        </Flex>
      </HeadingContainer>
    </>
  );
};

export default HeadingSection_service1;
