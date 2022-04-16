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
  HeaderLine,
  HeaderLineWrapperRight,
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
    { label: "Ime", required: "*" },
    { label: "Priimek", required: "*" },
    { label: "Tel. številka" },
    { label: "Email", required: "*" },
    { label: "Ime organizacije" },
  ],
  en: [
    { label: "Name", required: "*" },
    { label: "Last name", required: "*" },
    { label: "Gsm" },
    { label: "Email", required: "*" },
    { label: "Company name" },
  ],
};

const textAreaLabel = {
  sl: "Prostor za vaše sporočilo",
  en: "Your message",
};

const textField = {
  si: "Prostor za vaše sporočilo",
  en: "Your message",
};

const ContactForm_dnla = (props) => {
  const { t, lang } = useTranslation();
  const { locale } = useRouter();

  const title = t("utnn:utnn_contactHeading");
  const button = t("utnn:utnn_buttonText");

  const { formData, handleFormChange, sendMail } = useForm();

  useEffect(() => {
    handleFormChange(
      "subject",
      "Upravljanje Talentov in Nasledstveno Nacrtovanje Povpraševanje"
    );
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
        <FormContainer>
          {inputProps[locale].map((input, id) => {
            return (
              <>
                <Input
                  key={id}
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
            <Styled.InputLabel>{textAreaLabel[locale]}</Styled.InputLabel>
            <Textarea
              id="TextDesktop"
              props={{ label: textField[locale] }}
              style={{ fontSize: "1.5rem" }}
              onChange={(e) => {
                handleFormChange(textAreaLabel[locale], e.target.value);
              }}
            ></Textarea>
          </TextareaContainer>
          <ButtonContainer>
            <SubmitButton
              onClick={(id, value) => {
                sendMail();
              }}
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
