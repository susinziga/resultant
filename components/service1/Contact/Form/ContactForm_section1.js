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

const inputProps = [
  { label: "Ime", required: "*" },
  { label: "Priimek", required: "*" },
  { label: "Tel. številka" },
  { label: "Email", required: "*" },
  { label: "Ime organizacije" },
];

const ContactForm_service1 = () => {
  const { t, lang } = useTranslation();

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
          {inputProps.map((input) => {
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
              props={{ label: "Prostor za vaše sporočilo", required: "*" }}
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
