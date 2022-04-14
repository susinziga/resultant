import React from "react";
import { ContactContainer, HeadingLine } from "./Contact.styled";
import ContactForm_srk from "./Form/ContactForm_srk";

const Contact_srk = (props) => {
  return (
    <>
      <ContactContainer {...props} id="forma">
        <HeadingLine className="mobile"></HeadingLine>
        <ContactForm_srk></ContactForm_srk>
      </ContactContainer>
    </>
  );
};

export default Contact_srk;
