import React from "react";
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
import Input from "../../../../basic_components/input/Input";
import Textarea from "../../../../basic_components/textarea/Textarea";
import Button from "../../../../basic_components/button/Button";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
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

const textField = {
  si: "Kako ste izvedeli za nas?",
  en: "Your message",
};

const ContactForm_service1 = () => {
  const { t, lang } = useTranslation();
  const { locale } = useRouter();

  const title = t("service1:service1_contactHeader");
  const button = t("service1:service1_buttonText1");

  return (
    <>
      <ContactContainer>
        <HeaderContainer>
          <ContactHeader>{title}</ContactHeader>
          <HeadingLine className="desktop"></HeadingLine>
        </HeaderContainer>
        <FormContainer>
          {inputProps[locale].map((input) => {
            return (
              <>
                <Input
                  id="desktop"
                  props={input}
                  style={{ marginBottom: "2%" }}
                ></Input>
              </>
            );
          })}
          <TextareaContainer>
            <Textarea
              id="TextDesktop"
              props={{ label: textField[locale], required: "*" }}
              style={{ fontSize: "1.5rem" }}
            ></Textarea>
          </TextareaContainer>
          <ButtonContainer>
            <SubmitButton type="submit" value={button}></SubmitButton>
          </ButtonContainer>
        </FormContainer>
      </ContactContainer>
    </>
  );
};

export default ContactForm_service1;
