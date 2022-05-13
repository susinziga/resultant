import React from "react";
import styled from "styled-components";

import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { BodyText2 } from "../../basic_components/texts/Texts";

export const InputContainer = styled.input`
  outline: none;
  font-family: "Neusa";
  font-size: 1rem;
  padding: var(--padding-primary);
  width: 70%;
  background-color: var(--footer-color);
  border: 2px solid #f8f2ed;
  border-top-left-radius: 31px;
  border-bottom-left-radius: 31px;
  color: white;
  margin-top: 0.5rem;
  display: flex;
  transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);

  border-top-right-radius: ${(props) => (props.sent ? "31px" : "0px")};
  border-bottom-right-radius: ${(props) => (props.sent ? "31px" : "0px")};
  width: ${(props) => (props.sent ? "100%" : "70%")};

  ::placeholder {
    color: white;
    text-align: center;
  }
`;

export const InputLabel = styled.label`
  font-family: "Neusa";
  font-size: 1rem;
  font-weight: 300;
  color: #f8f2ed;
`;

export const InputContainerDiv = styled.div`
  font-size: 1rem;
  padding: var(--padding-primary);
  width: 100%;
  /* background-color: var(--primary-color) */

  border-top-left-radius: 31px;
  border-bottom-left-radius: 31px;

  margin-top: 0.5rem;
  display: flex;
`;

export const ButtonContainer = styled.button`
  font-family: "Neusa";
  font-size: 1rem;
  padding: var(--padding-primary);
  cursor: pointer;
  font-size: 0.8rem;
  width: 30%;
  margin-top: 0.5rem;
  border-top-right-radius: 31px;
  border-bottom-right-radius: 31px;
  background-color: var(--footer-color);
  border: 2px solid #f8f2ed;
  border-left: 0px;
  color: white;

  @media only screen and (max-width: 380px) {
    font-size: 0.8rem;
    width: 40%;
  }

  @media only screen and (min-width: 980px) {
    font-size: 1rem;
  }
`;

const FooterInput = () => {
  const { locale } = useRouter();
  const { t } = useTranslation();

  const [email, setEmail] = React.useState("");

  const [sent, setSent] = React.useState(false);

  const button = { sl: "Naroči se", en: "Subscribe" };
  const sendMail = () => {
    setSent(true);
    document.getElementById("footerInputContainer").value = "";
    fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSent(true);
      });
  };

  return (
    <>
      <InputLabel>Email *</InputLabel>
      <InputContainerDiv>
        <InputContainer
          id="footerInputContainer"
          sent={sent}
          onChange={(e) => {
            if (!sent) {
              setEmail(e.target.value);
            }
          }}
          placeholder={sent ? t("contact:contact_footerSuccess") : ""}
        ></InputContainer>
        {sent ? (
          <></>
        ) : (
          <ButtonContainer onClick={!sent ? sendMail : () => {}}>
            {button[locale]}
          </ButtonContainer>
        )}
      </InputContainerDiv>
    </>
  );
};

export default FooterInput;
