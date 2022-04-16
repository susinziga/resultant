import React from "react";
import {
  ContactHeading,
  ContactLine,
  ContactSectionContainer,
  FlexDesktopContainer,
  PersonContainer,
  PersonMail,
  PersonName,
} from "./ContactSection.styled";

const ContactSection_support = ({ props, heading }) => {
  return (
    <>
      <ContactLine className="desktop"></ContactLine>
      <ContactSectionContainer>
        <ContactLine className="mobile"></ContactLine>
        <ContactHeading>{heading}</ContactHeading>
        <FlexDesktopContainer>
          {props.map((person) => {
            return (
              <PersonContainer>
                <PersonName>{person.name}</PersonName>
                <PersonMail>
                  <a href={"mailto:" + person.mail}>{person.mail}</a>
                </PersonMail>
              </PersonContainer>
            );
          })}
        </FlexDesktopContainer>
      </ContactSectionContainer>
    </>
  );
};

export default ContactSection_support;
