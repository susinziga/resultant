import React, { useEffect } from "react";
import {
  ButtonContainer,
  FormContainer,
  SubmitButton,
  TextareaContainer,
  HeadingLine,
  InputContainer,
} from "/components/DNLA/contact/ContactForm.styled.js"
import Input from "../../../basic_components/input/Input";
import Textarea from "../../../basic_components/textarea/Textarea";
import Button from "../../../basic_components/button/Button";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useForm } from "../../../custom_hooks/useForm";
import styled from "styled-components";
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
    { label: "Gsm" },
    { label: "Email", required: "*", type: "email" },
    { label: "Company name" },
  ],
};

const textAreaLabel = {
  sl: "Prostor za vaše sporočilo",
  en: "Your message",
};


export const ContactContainer = styled.div`
  width: 100%;
  margin: auto;

  @media only screen and (min-width: 768px) {
    margin-bottom: -4rem !important;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center; /* Align items to the center vertically */
  justify-content: space-between; /* Ensures space between the header and line */
  width: 90%;
`;

export const ContactHeader = styled.h2`
  font-family: "Neusa";
  font-weight: 500;
  font-size: 1.8rem;
  margin-right: 1rem; /* Add some space between the text and the line */
  white-space: nowrap; /* Prevents wrapping to a new line */


  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 2.5rem;
  }
`;

export const ContactHeaderLineWrapper = styled.div`
  flex: 1; /* Allows the line to take remaining space */
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ContactHeaderLine = styled.div`
  height: 1px;
  width: 100%;
  border-top: 1px solid black; /* Line color */
  margin-top: 8px; /* Align line with text */
`;



const ContactForm_potencial = (props) => {
  const { t, lang } = useTranslation();
  const { locale } = useRouter();

  const title = t("360potencial:contactHeading");
  const button = t("360potencial:buttonText");

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
              <ContactHeaderLineWrapper>
            <ContactHeaderLine />
          </ContactHeaderLineWrapper>
        </HeaderContainer>
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            sendMail();
            let btn = document.getElementById("submit_btn");
            btn.style.backgroundColor = "#072543";
            btn.value = t("360potencial:contact_sendSuccess");
            btn.disabled = true;
          }}
        >
          {inputProps[locale].map((input, index) => {
            return (
              <div key={index}>
                <Input
                  id="desktop"
                  props={input}
                  style={{ marginBottom: "2%" }}
                  onChange={(e) => {
                    handleFormChange(input.label, e.target.value);
                  }}
                ></Input>
              </div>
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
              value={button}
              type={"submit"}
            ></SubmitButton>
          </ButtonContainer>
        </FormContainer>
      </ContactContainer>
    </>
  );
};

export default ContactForm_potencial;
