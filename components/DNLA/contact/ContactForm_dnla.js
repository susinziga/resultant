import React, { useEffect } from "react";
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
} from "./ContactForm.styled";
import Input from "../../../basic_components/input/Input";
import Textarea from "../../../basic_components/textarea/Textarea";
import Button from "../../../basic_components/button/Button";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useForm } from "../../../custom_hooks/useForm";
import * as Styled from "../../../basic_components/input/Input.styled";

const inputProps = {
  sl: [
    { label: "Ime", required: "*" },
    { label: "Priimek", required: "*" },
    { label: "Tel. številka" },
    { label: "Email", required: "*", type: "email" },
    { label: "Ime organizacije" },
  ],
  en: [
    { label: "Name", required: "*" },
    { label: "Last name", required: "*" },
    { label: "Gsm" },
    { label: "Email", required: "*", type: "email" },
    { label: "Company name" },
  ],
};

const textAreaLabel = {
  sl: "Prostor za vaše sporočilo",
  en: "Your message",
};

const ContactForm_dnla = (props) => {
  const { t, lang } = useTranslation();
  const { locale } = useRouter();

  const title = t("dnla:dnla_contactHeading");
  const button = t("dnla:dnla_buttonText");

  const { formData, handleFormChange, sendMail } = useForm();

  useEffect(() => {
    handleFormChange("subject", "Forma");
  }, []);

  return (
    <>
      <ContactContainer {...props}>
        <HeaderContainer>
          <ContactHeader
            dangerouslySetInnerHTML={{ __html: title }}
          ></ContactHeader>
        </HeaderContainer>
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
          {inputProps[locale].map((input) => {
            return (
              <>
                <Input
                  id="desktop"
                  props={input}
                  style={{ marginBottom: "2%" }}
                  onChange={(e) => {
                    handleFormChange(input.label, e.target.value);
                  }}
                ></Input>
              </>
            );
          })}
          <TextareaContainer>
            <Textarea
              id="TextDesktop"
              props={{ label: textAreaLabel[locale], required: "*" }}
              style={{ fontSize: "1.5rem" }}
              onChange={(e) => {
                handleFormChange(textAreaLabel[locale], e.target.value);
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

export default ContactForm_dnla;
