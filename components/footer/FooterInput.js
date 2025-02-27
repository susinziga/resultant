import React from "react";
import styled from "styled-components";

import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import {
  BodyText1,
  BodyText2,
  BodyText3,
  BodyText4,
} from "../../basic_components/texts/Texts";
import {
  Checkbox,
  CheckboxContainer1,
} from "../offer/OfferForm/Checkbox.styled";
import Checkbox_offer from "../offer/OfferForm/Checkbox_offer";
import Link from "next/link";

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

export const TermsContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
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
  cursor: ${(props) =>
    props.terms && props.email ? "pointer" : "not-allowed"};
  font-size: 0.8rem;
  width: 30%;
  margin-top: 0.5rem;
  border-top-right-radius: 31px;
  border-bottom-right-radius: 31px;
  background-color: var(--footer-color);
  border: 2px solid #f8f2ed;
  border-left: 0px;
  color: ${(props) => (props.terms && props.email ? "white" : "gray")};

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

  const [terms, setTerms] = React.useState(false);

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
      <InputLabel htmlFor="footerInputContainer">Email *</InputLabel>
      <br />
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
          <ButtonContainer
            terms={terms}
            email={email}
            onClick={!sent && terms && email.length > 0 ? sendMail : () => {}}
          >
            {button[locale]}
          </ButtonContainer>
        )}
      </InputContainerDiv>
      <TermsContainer>
        <input
          checked={terms}
          onChange={() =>
            setTerms((prevState) => {
              return !prevState;
            })
          }
          type={"checkbox"}
          id={"splosni-pogoji"}
        />
        <label
          htmlFor={"splosni-pogoji"}
          style={{ color: "white", userSelect: "none", cursor: "pointer" }}
        >
          Strinjam se s{" "}
          <Link href={"pravilnik-o-zasebnosti"}>
            <span style={{ textDecoration: "underline", color: "white" }}>
              splošnimi pogoji
            </span>
          </Link>
        </label>
      </TermsContainer>
    </>
  );
};

export default FooterInput;
