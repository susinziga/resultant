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
    { label: "Ime" },
    { label: "Priimek" },
    { label: "Tel. številka" },
    { label: "Email", required: "*" },
    { label: "Ime organizacije" },
  ],
  en: [
    { label: "Name" },
    { label: "Last name" },
    { label: "Gsm" },
    { label: "Email", required: "*" },
    { label: "Company name" },
  ],
};

const textAreaLabel = {
  sl: "Kako ste izvedeli za nas?",
  en: "How did you find out about us?",
};

const textField = {
  si: "Kako ste izvedeli za nas?",
  en: "How did you find out about us?",
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
                handleFormChange("Kako ste izvedeli za nas?", e.target.value);
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

export default ContactForm_srk;
