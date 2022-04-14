import React from "react";
import { ContactContainer, HeadingLine } from "./Contact.styled";
import ContactForm_utnn from "./Form/ContactForm_srk";

const Contact_srk = (props) => {
  return (
    <>
      <ContactContainer {...props} id="forma">
        <HeadingLine className="mobile"></HeadingLine>
        <ContactForm_utnn></ContactForm_utnn>
      </ContactContainer>
    </>
  );
};

export default Contact_srk;
