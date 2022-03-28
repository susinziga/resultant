import React from 'react';
import { ButtonContainer, ContactContainer, FormContainer, SubmitButton, TextareaContainer } from './ContactForm.styled';
import Input from '../../../basic_components/input/Input'
import Textarea from '../../../basic_components/textarea/Textarea';
import Button from '../../../basic_components/button/Button';

const inputProps = [
  {label: "Ime"},
  {label: "Priimek"},
  {label: "Tel. številka"},
  {label: "Email", required: "*"},
  {label: "Ime organizacije"}
]


const ContactForm_contact = () => {
  return (<>
      <ContactContainer>
        <FormContainer>
        {
          inputProps.map((input) => {
            return(
              <Input props={input} style={{marginBottom: "5%", fontSize: "1.5rem"}}></Input>
            )
          })
        }
        <TextareaContainer>
          <Textarea props={{label: "Sporočilo"}}  style={{fontSize: "1.5rem"}}></Textarea>
        </TextareaContainer>
        <ButtonContainer>
          <SubmitButton type="submit" value="Pošlji"></SubmitButton>
        </ButtonContainer>
        </FormContainer>
      </ContactContainer>
  </>
  )
}

export default ContactForm_contact;