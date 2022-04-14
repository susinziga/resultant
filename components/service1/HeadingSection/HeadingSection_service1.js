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

const HeadingSection_service1 = ({ props }) => {
  return (
    <>
      <HeadingContainer {...props}>
        <Flex>
          <HeadingSeparator>
            <HeadingHeading>{props.upperTitle}</HeadingHeading>
            <HeadingUpperHeading>{props.paragraph}</HeadingUpperHeading>
            {/* TODO: HEADING LINE DESKTOP DOES NOT SHOW UP */}
            <HeadingLine className="desktop"></HeadingLine>
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
