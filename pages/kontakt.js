import Head from "next/head";
import ContactForm_contact from "../components/contact/ContactForm/ContactForm_contact";
import HeadingSection_contact from "../components/contact/HeadingSection_contact";
import Person_contact from "../components/contact/Person_contact";
import { ContactSeparator } from "../styled/contact.styled";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Stopite z nami v stik | Resultant</title>
        <meta
          name="description"
          content="Poslovni odnos gradimo na trdnem partnerstvu. Več kot 100 projektov. Zaupa nam več kot 150 podjetij. Za vsa vprašanja smo vam vedno na voljo. Spoznajte nas."
        />
      </Head>
      <HeadingSection_contact className=""></HeadingSection_contact>
      <ContactSeparator className="">
        <ContactForm_contact className=""></ContactForm_contact>
        <Person_contact className=""></Person_contact>
      </ContactSeparator>
    </>
  );
}
