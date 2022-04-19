import React from "react";

import {
  HeadingContainer,
  HeadingUpperHeading,
  HeadingHeading,
  HeadingLine,
} from "./HeadingSection.styled";
import useTranslation from "next-translate/useTranslation";

const HeadingSection_contact = (props) => {
  const { t, lang } = useTranslation();

  const upperTitle = t("contact:contact_upperHeading");
  const title = t("contact:contact_mainHeading");

  return (
    <>
      <HeadingContainer {...props}>
        {/* <HeadingUpperHeading>{upperTitle}</HeadingUpperHeading> */}
        <HeadingHeading>{title}</HeadingHeading>
        <HeadingLine></HeadingLine>
      </HeadingContainer>
    </>
  );
};

export default HeadingSection_contact;
