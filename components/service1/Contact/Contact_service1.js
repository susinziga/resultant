import React from 'react';
import { ContactContainer, HeadingLine } from './Contact.styled';
import ContactForm_service1 from './Form/ContactForm_section1';


const Contact_service1 = (props) => {
  return (
    <>  
        <ContactContainer {...props}>
            <HeadingLine className='mobile'></HeadingLine>
            <ContactForm_service1></ContactForm_service1>
        </ContactContainer>
    </>
  )
}

export default Contact_service1;