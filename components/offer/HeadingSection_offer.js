import React from "react";

import {
  HeadingContainer,
  HeadingUpperHeading,
  HeadingHeading,
  HeadingLine,
} from "./HeadingSectionOffer.styled";
import useTranslation from "next-translate/useTranslation";

const HeadingSection_offer = (props) => {
  const { t, lang } = useTranslation();

  const upperTitle = t("offer:offer_upperHeading");
  const title = t("offer:offer_mainHeading");

  return (
    <>
      <HeadingContainer {...props}>
        <HeadingUpperHeading>{upperTitle}</HeadingUpperHeading>
        <HeadingHeading>{title}</HeadingHeading>
        <HeadingLine></HeadingLine>
      </HeadingContainer>
    </>
  );
};

export default HeadingSection_offer;
