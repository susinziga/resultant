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
    { label: "Ime", handle: "firstName", required: "*" },
    { label: "Priimek", handle: "lastName", required: "*" },
    { label: "Telefonska številka", handle: "phone" },
    { label: "Email", handle: "email", required: "*", type: "email" },
    { label: "Ime organizacije", handle: "organization" },
  ],
  en: [
    { label: "Name", handle: "firstName", required: "*" },
    { label: "Last name", handle: "lastName", required: "*" },
    { label: "Telephone number", handle: "phone" },
    { label: "Email", handle: "email", required: "*", type: "email" },
    { label: "Company name", handle: "organization" },
  ],
};

const textAreaLabel = {
  sl: "Prostor za vaše sporočilo",
  en: "Your message",
};

const message = { sl: "Prostor za vaše sporočilo", en: "Your message" };

const send = { sl: "Pošlji", en: "Send" };

const ContactForm_contact = () => {
  const { t, lang } = useTranslation();
  const { locale } = useRouter();

  const { formData, handleFormChange, sendMail } = useForm();

  useEffect(() => {
    handleFormChange("subject", "Kontaktni obrazec");
  }, []);

  return (
    <>
      <ContactContainer>
        <FormContainer
          onSubmit={async (e) => {
            e.preventDefault();
            let btn = document.getElementById("submit_btn");
            try {
              await sendMail();
              btn.style.backgroundColor = "#072543";
              btn.value = t("contact:contact_sendSuccess");
              btn.disabled = true;
            } catch (err) {
              btn.style.backgroundColor = "#a33";
              btn.value = t("contact:contact_sendError");
            }
          }}
        >
          {inputProps[locale].map((input, index) => {
            return (
              <div key={index}>
                <Input
                  id="desktop"
                  props={input}
                  style={{ marginBottom: "3%", fontSize: "1.2rem" }}
                  onChange={(e) => {
                    handleFormChange(input.handle, e.target.value);
                  }}
                ></Input>
              </div>
            );
          })}
          <TextareaContainer>
            <Textarea
              id="TextDesktop"
              props={{ label: textAreaLabel[locale], handle: "message", required: "*" }}
              style={{ fontSize: "1.5rem" }}
              onChange={(e) => {
                handleFormChange("message", e.target.value);
              }}
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
