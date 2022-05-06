import React from "react";
import {
  Heading,
  ImageContainer,
  InfoContainer,
  PersonContainer,
  SubHeading,
  ContactIconContainer,
  ContactIcon,
  ContactLink,
  ContactContainer,
  ContactFirmContainer,
  InfoFooterHeading,
  ContactFooterContainer,
  Contact,
} from "./Person.styled";

const Person_contact = () => {
  return (
    <>
      <PersonContainer>
        <ImageContainer
          className="mobile"
          src="/Kontakt/Kontakt.png"
        ></ImageContainer>
        <ImageContainer
          className="desktop"
          src="/Kontakt/Kontakt.png"
        ></ImageContainer>
        <InfoContainer>
          <ContactFirmContainer>
            <InfoFooterHeading>Resultant d.o.o.</InfoFooterHeading>
            <ContactFooterContainer>
              <Contact>Franca Pirca 8</Contact>
              <Contact>Kamnik 1241</Contact>
            </ContactFooterContainer>
          </ContactFirmContainer>
          <ContactContainer>
            <ContactIconContainer>
              <ContactIcon src="/Footer/-call.png"></ContactIcon>
              <ContactLink href="tel:041 231 831">041 231 831</ContactLink>
            </ContactIconContainer>
            <ContactIconContainer>
              <ContactIcon src="/Footer/-email.png"></ContactIcon>
              <ContactLink href="mailto:info@resultant.si">
                info@resultant.si
              </ContactLink>
            </ContactIconContainer>
          </ContactContainer>
        </InfoContainer>
      </PersonContainer>
    </>
  );
};

export default Person_contact;
