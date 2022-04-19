import ContactForm_contact from "../components/contact/ContactForm/ContactForm_contact";
import HeadingSection_contact from "../components/contact/HeadingSection_contact";
import Person_contact from "../components/contact/Person_contact";
import { ContactSeparator } from "../styled/contact.styled";

export default function Contact() {
  return (
    <>
      <HeadingSection_contact className=""></HeadingSection_contact>
      <ContactSeparator className="">
        <ContactForm_contact className=""></ContactForm_contact>
        <Person_contact className=""></Person_contact>
      </ContactSeparator>
    </>
  );
}
