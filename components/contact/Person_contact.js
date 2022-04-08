import React from 'react'
import { Heading, ImageContainer, InfoContainer, PersonContainer, SubHeading, ContactIconContainer, ContactIcon, ContactLink, ContactContainer, ContactFirmContainer, InfoFooterHeading, ContactFooterContainer, Contact } from './Person.styled';

const Person_contact = () => {
  return (
    <>
    <PersonContainer>
      <ImageContainer  className="mobile" src="/Team/Roman.png"></ImageContainer>
      <ImageContainer  className="desktop" src="/Team/Roman_desktop.png"></ImageContainer>
      <InfoContainer>
        <Heading>Roman Klarič</Heading>
        <SubHeading>Direktor in partner</SubHeading>
        <ContactContainer>
            <ContactIconContainer>
                <ContactIcon src="/Footer/-call.png"></ContactIcon>
                <ContactLink href="tel:041 231 831">041 231 831</ContactLink>
            </ContactIconContainer>
            <ContactIconContainer>
                <ContactIcon src="/Footer/-email.png"></ContactIcon>
                <ContactLink href="mailto:roman.klaric@resultant.si">roman.klaric@resultant.si</ContactLink>
           </ContactIconContainer>
        </ContactContainer>
        <ContactFirmContainer>
          <InfoFooterHeading>Resultant d.o.o.</InfoFooterHeading>
          <ContactFooterContainer>
            <Contact>Franca Pirca 8</Contact>
            <Contact>Kamnik 1241</Contact>
          </ContactFooterContainer>
        </ContactFirmContainer>

      </InfoContainer>
    </PersonContainer>
    </>
  )
}

export default Person_contact;