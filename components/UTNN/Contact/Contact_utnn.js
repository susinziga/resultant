import React from "react";
import { ContactContainer, HeadingLine } from "./Contact.styled";
import ContactForm_utnn from "./Form/ContactForm_utnn";

const Contact_utnn = (props) => {
  return (
    <>
      <ContactContainer {...props} id="forma">
        <HeadingLine className="mobile"></HeadingLine>
        <ContactForm_utnn></ContactForm_utnn>
      </ContactContainer>
    </>
  );
};

export default Contact_utnn;
