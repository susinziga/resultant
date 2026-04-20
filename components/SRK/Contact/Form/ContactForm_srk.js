import React, { useState, useEffect } from "react";
import {
  ButtonContainer,
  ContactContainer,
  ContactHeader,
  FormContainer,
  SubmitButton,
  TextareaContainer,
  HeadingLine,
  HeaderContainer,
  InputContainer,
  HeaderLineWrapperRight,
  HeaderLine,
} from "./ContactForm.styled";
import Input from "../../../../basic_components/input/Input";
import Textarea from "../../../../basic_components/textarea/Textarea";
import Button from "../../../../basic_components/button/Button";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import * as Styled from "../../../../basic_components/input/Input.styled";

import { useForm } from "../../../../custom_hooks/useForm";

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
    { label: "Gsm", handle: "phone" },
    { label: "Email", handle: "email", required: "*", type: "email" },
    { label: "Company name", handle: "organization" },
  ],
};

const textAreaLabel = {
  sl: "Prostor za vaše sporočilo",
  en: "Your message",
};

const textField = {
  sl: "Prostor za vaše sporočilo",
  en: "Your message",
};

const ContactForm_srk = (props) => {
  const { t, lang } = useTranslation();
  const { locale } = useRouter();

  const title = t("srk:srk_contactHeading");
  const button = t("srk:srk_contactButtonText");

  const { formData, handleFormChange, sendMail } = useForm();

  useEffect(() => {
    handleFormChange("subject", "Sistematičen razvoj kompetenc Povpraševanje");
  }, []);

  return (
    <>
      <ContactContainer {...props}>
        <HeaderContainer>
          <ContactHeader
            dangerouslySetInnerHTML={{ __html: title }}
          ></ContactHeader>
          <HeaderLineWrapperRight className="desktop">
            <HeaderLine></HeaderLine>
          </HeaderLineWrapperRight>
        </HeaderContainer>
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
          {inputProps[locale].map((input, id) => {
            return (
              <div key={id}>
                <Input
                  id="desktop"
                  props={input}
                  style={{ marginBottom: "2%" }}
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
              props={{ label: textField[locale], handle: "message", required: "*" }}
              style={{ fontSize: "1.5rem" }}
              onChange={(e) => {
                handleFormChange("message", e.target.value);
              }}
            ></Textarea>
          </TextareaContainer>
          <ButtonContainer>
            <SubmitButton
              id="submit_btn"
              // onClick={(id, value) => {
              //   sendMail();
              // }}
              value={button}
              type={"submit"}
            ></SubmitButton>
          </ButtonContainer>
        </FormContainer>
      </ContactContainer>
    </>
  );
};

export default ContactForm_srk;
