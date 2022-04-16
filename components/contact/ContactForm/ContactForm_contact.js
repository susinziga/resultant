import React from "react";
import {
  ButtonContainer,
  ContactContainer,
  FormContainer,
  SubmitButton,
  TextareaContainer,
} from "./ContactForm.styled";
import Input from "../../../basic_components/input/Input";
import Textarea from "../../../basic_components/textarea/Textarea";
import Button from "../../../basic_components/button/Button";
import { useRouter } from "next/router";

const inputProps = {
  sl: [
    { label: "Ime", required: "*" },
    { label: "Priimek", required: "*" },
    { label: "Tel. številka" },
    { label: "Email", required: "*" },
    { label: "Ime organizacije" },
  ],
  en: [
    { label: "Name" },
    { label: "Last name" },
    { label: "Mobile phone number" },
    { label: "Email", required: "*" },
    { label: "Company name" },
  ],
};

const message = { sl: "Sporočilo", en: "Message" };

const send = { sl: "Pošlji", en: "Send" };

const ContactForm_contact = () => {
  const { locale } = useRouter();
  return (
    <>
      <ContactContainer>
        <FormContainer>
          {inputProps[locale].map((input) => {
            return (
              <>
                <Input
                  id="desktop"
                  props={input}
                  style={{ marginBottom: "3%", fontSize: "1.2rem" }}
                ></Input>
              </>
            );
          })}
          <TextareaContainer>
            <Textarea
              id="TextDesktop"
              props={{ label: message[locale], required: "*" }}
              style={{ fontSize: "1.5rem" }}
            ></Textarea>
          </TextareaContainer>
          <ButtonContainer>
            <SubmitButton type="submit" value={send[locale]}></SubmitButton>
          </ButtonContainer>
        </FormContainer>
      </ContactContainer>
    </>
  );
};

export default ContactForm_contact;
