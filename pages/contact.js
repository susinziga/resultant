import ContactForm_contact from "../components/contact/ContactForm/ContactForm_contact";
import HeadingSection_contact from "../components/contact/HeadingSection_contact";
import Person_contact from "../components/contact/Person_contact";


export default function Contact() {
  return (
    <>
        <HeadingSection_contact className="section"></HeadingSection_contact>
        <ContactForm_contact className="section"></ContactForm_contact>
        <Person_contact className="section"></Person_contact>
    </>
  );
}