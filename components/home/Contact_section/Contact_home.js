import React from 'react';
import Button from '../../../basic_components/button/Button'
import { BodyText2 } from '../../../basic_components/texts/Texts';
import { ContactContainer, ContactHeading, ContactImage, ContactTextContainer } from './Contact.styled';
import useTranslation from "next-translate/useTranslation";

const Contact_home = (props) => {
  const { t, lang } = useTranslation();

  const title = t("home:title_contact");
  const text = t("home:paragraph_contact");
  const buttonText = t("common:button_contact");

  return (<>
    <ContactContainer {...props}>
        <ContactImage src="./Home/Stik.png"></ContactImage>
      <ContactTextContainer>
        <ContactHeading>{title}</ContactHeading>
        <p style={{marginBottom: "8%"}}>
          <BodyText2>{text}</BodyText2>
        </p>
        <Button secondary>{buttonText}</Button>
      </ContactTextContainer>
    </ContactContainer>
  </>
  )
}

export default Contact_home;