import React from "react";
import Button from "../../../basic_components/button/Button";
import { BodyText2 } from "../../../basic_components/texts/Texts";
import {
  ContactContainer,
  ContactHeading,
  ContactImage,
  ContactTextContainer,
} from "./Contact.styled";
import useTranslation from "next-translate/useTranslation";
import useSize from "../../../custom_hooks/useSize";
import { useRouter } from "next/router";

const Contact_home = (props) => {
  const { locale } = useRouter();
  const { t, lang } = useTranslation();

  const title = t("home:title_contact");
  const text = t("home:paragraph_contact");
  const buttonText = t("common:button_contact");

  const { isDesktop } = useSize();

  return (
    <>
      <ContactContainer {...props}>
        {isDesktop() ? <ContactImage src="/Home/Stik.png"></ContactImage> : ""}
        <ContactTextContainer>
          <ContactHeading>{title}</ContactHeading>
          <p style={{ marginBottom: "8%" }}>
            <BodyText2>{text}</BodyText2>
          </p>
          <Button
            className="mobile"
            secondary
            href={"/" + locale + "/o-nas#ekipa"}
          >
            {buttonText}
          </Button>
          {!isDesktop() ? (
            <ContactImage src="/Home/Stik.png"></ContactImage>
          ) : (
            ""
          )}
          <Button
            className="desktop"
            secondary
            href={"/" + locale + "/o-nas#ekipa"}
          >
            {buttonText}
          </Button>
        </ContactTextContainer>
      </ContactContainer>
    </>
  );
};

export default Contact_home;
