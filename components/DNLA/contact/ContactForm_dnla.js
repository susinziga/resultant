import React from 'react';
import { ButtonContainer, ContactContainer, ContactHeader, FormContainer, SubmitButton, TextareaContainer, HeadingLine, HeaderContainer, InputContainer } from './ContactForm.styled';
import Input from '../../../basic_components/input/Input';
import Textarea from '../../../basic_components/textarea/Textarea';
import Button from '../../../basic_components/button/Button';
import useTranslation from "next-translate/useTranslation";

const inputProps = [
    {label: "Ime"},
    {label: "Priimek"},
    {label: "Tel. številka"},
    {label: "Email", required: "*"},
    {label: "Ime organizacije"}
  ]
  

const ContactForm_dnla = (props) => {
    const { t, lang } = useTranslation();

    const title = t("dnla:dnla_contactHeading");
    const button = t("dnla:dnla_buttonText");
  
  return (<>
      <ContactContainer {...props}>
          <HeaderContainer>
              <ContactHeader dangerouslySetInnerHTML={{__html: title}}></ContactHeader>
              
          </HeaderContainer>
        <FormContainer>
        {
          inputProps.map((input) => {
            return(<>
         
              <Input id="desktop" props={input} style={{marginBottom: "5%", fontSize: "1.5rem"}}></Input>
              
              </>
            )
          })
        }
        <TextareaContainer > 
          <Textarea id="TextDesktop" props={{label: "Kako ste izvedeli za nas?"}} style={{fontSize: "1.5rem"}}></Textarea>
        </TextareaContainer>
        <ButtonContainer>
          <SubmitButton type="submit" value={button}></SubmitButton>
        </ButtonContainer>
        </FormContainer>
      </ContactContainer>
  </>
  )
}

export default ContactForm_dnla;