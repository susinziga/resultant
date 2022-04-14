import React from "react";
import {
  ButtonContainer,
  ContactContainer,
  ContactHeader,
  FormContainer,
  SubmitButton,
  TextareaContainer,
  HeadingLine,
  HeaderLine,
  HeaderLineWrapperRight,
  HeaderContainer,
  InputContainer,
} from "./ContactForm.styled";
import Input from "../../../../basic_components/input/Input";
import Textarea from "../../../../basic_components/textarea/Textarea";
import Button from "../../../../basic_components/button/Button";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import * as Styled from "../../../../basic_components/input/Input.styled";

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
          {/* <HeadingLine className="desktop"></HeadingLine> */}
          <HeaderLineWrapperRight className="desktop">
            <HeaderLine></HeaderLine>
          </HeaderLineWrapperRight>
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
            <Styled.InputLabel>{textAreaLabel[locale]}</Styled.InputLabel>
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
