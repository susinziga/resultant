import React from "react";
import {
  HeadingContainer,
  HeadingUpperHeading,
  Paragraph,
  HeadingLine,
  DesktopFlex,
} from "./Support.styled";
import useTranslation from "next-translate/useTranslation";
import BulletSection_support from "./BulletSection/BulletSection_support";
import DefaultSection_support from "./DefaultSection/DefaultSection_support";
import ContactSection_support from "./ContactSection/ContactSection_support";

const Support_support = (props) => {
  const { t, lang } = useTranslation();

  const upperTitle = t("support:support_mainHeading");
  const p = t("support:support_mainParagraph");

  const bulletHeading = t("support:support_bulletSectionHeader");

  const bullets = [
    { text: t("support:support_bulletSectionText1") },
    { text: t("support:support_bulletSectionText2") },
    { text: t("support:support_bulletSectionText3") },
    { text: t("support:support_bulletSectionText4") },
  ];

  const defaultProps = [
    {
      heading: t("support:support_defaultHeading1"),
      text: t("support:support_defaultText1"),
    },
    {
      heading: t("support:support_defaultHeading2"),
      text: t("support:support_defaultText2"),
    },
    {
      heading: t("support:support_defaultHeading3"),
      text: t("support:support_defaultText3"),
    },
    {
      heading: t("support:support_defaultHeading4"),
      text: t("support:support_defaultText4"),
    },
    {
      heading: t("support:support_defaultHeading5"),
      text: t("support:support_defaultText5"),
    },
    {
      heading: t("support:support_defaultHeading6"),
      text: t("support:support_defaultText6"),
    },
  ];

  const personHeading = t("support:support_personHeading");

  const personProps = [
    {
      name: t("support:support_personName1"),
      mail: t("support:support_personMail1"),
    },
    {
      name: t("support:support_personName2"),
      mail: t("support:support_personMail2"),
    },
    {
      name: t("support:support_personName3"),
      mail: t("support:support_personMail3"),
    },
  ];

  return (
    <>
      <HeadingContainer {...props}>
        <DesktopFlex>
          <HeadingUpperHeading>{upperTitle}</HeadingUpperHeading>
          <Paragraph>{p}</Paragraph>
        </DesktopFlex>
        <HeadingLine></HeadingLine>
      </HeadingContainer>
      <BulletSection_support
        heading={bulletHeading}
        bulletList={bullets}
      ></BulletSection_support>
      {defaultProps.map((prop) => {
        return <DefaultSection_support props={prop}></DefaultSection_support>;
      })}
      <ContactSection_support
        heading={personHeading}
        props={personProps}
      ></ContactSection_support>
    </>
  );
};

export default Support_support;
