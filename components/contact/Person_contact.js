import React from 'react'
import { Heading, ImageContainer, InfoContainer, PersonContainer, SubHeading, ContactIconContainer, ContactIcon, ContactLink, ContactContainer } from './Person.styled';

const Person_contact = () => {
  return (
    <>
    <PersonContainer>
      <ImageContainer src="./Team/Šef.png"></ImageContainer>
      <InfoContainer>
        <Heading>Roman Klarič</Heading>
        <SubHeading>Direktor in partner</SubHeading>
        <ContactContainer>
            <ContactIconContainer>
                <ContactIcon src="./Footer/-call.png"></ContactIcon>
                <ContactLink href="tel:041 231 831">041 231 831</ContactLink>
            </ContactIconContainer>
            <ContactIconContainer>
                <ContactIcon src="./Footer/-email.png"></ContactIcon>
                <ContactLink href="mailto:roman.klaric@resultant.si">roman.klaric@resultant.si</ContactLink>
           </ContactIconContainer>
        </ContactContainer>
      </InfoContainer>
   


    </PersonContainer>
    </>
  )
}

export default Person_contact;