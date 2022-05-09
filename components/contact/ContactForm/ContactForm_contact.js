import React, { useEffect } from "react";
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

import { useForm } from "../../../custom_hooks/useForm";
import useTranslation from "next-translate/useTranslation";

const inputProps = {
  sl: [
    { label: "Ime", required: "*" },
    { label: "Priimek", required: "*" },
    { label: "Telefonska številka" },
    { label: "Email", required: "*", type: "email" },
    { label: "Ime organizacije" },
  ],
  en: [
    { label: "Name", required: "*" },
    { label: "Last name", required: "*" },
    { label: "Mobile phone number" },
    { label: "Email", required: "*", type: "email" },
    { label: "Company name" },
  ],
};

const message = { sl: "Prostor za vaše sporočilo", en: "Your message" };

const send = { sl: "Pošlji", en: "Send" };

const ContactForm_contact = () => {
  const { t, lang } = useTranslation();
  const { locale } = useRouter();

  const { formData, handleFormChange, sendMail } = useForm();

  useEffect(() => {
    handleFormChange("subject", "SiOK");
  }, []);

  return (
    <>
      <ContactContainer>
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            sendMail();
            let btn = document.getElementById("submit_btn");
            btn.style.backgroundColor = "#072543";
            btn.value = t("contact:contact_sendSuccess");
            btn.disabled = true;
          }}
        >
          {inputProps[locale].map((input, index) => {
            return (
              <div key={index}>
                <Input
                  id="desktop"
                  props={input}
                  style={{ marginBottom: "3%", fontSize: "1.2rem" }}
                ></Input>
              </div>
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
            <SubmitButton
              id="submit_btn"
              type="submit"
              value={send[locale]}
            ></SubmitButton>
          </ButtonContainer>
        </FormContainer>
      </ContactContainer>
    </>
  );
};

export default ContactForm_contact;
