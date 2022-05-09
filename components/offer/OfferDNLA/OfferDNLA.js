import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../../../basic_components/input/Input";
import Checkbox from "../OfferForm/Checkbox_offer";

import Button from "../../../basic_components/button/Button";
import { useForm } from "../../../custom_hooks/useForm";

import { ButtonContainer, SubmitButton } from "../OfferForm/OfferForm.styled";
import { HeadingLine } from "../OfferForm/OfferForm.styled";

const OfferDNLA = () => {
  const { t } = useTranslation();

  const { formData, handleFormChange, sendMail } = useForm();
  const [clickedSend, setClickedSend] = useState(false);

  useEffect(() => {
    handleFormChange("subject", "DNLA Povpraševanje");
  }, []);

  const inputProps1 = [
    { label: t("offer:offer_inputProp1"), required: "*" },
    { label: t("offer:offer_inputProp2") },
    { label: t("offer:offer_inputProp3"), required: "*" },
    { label: t("offer:offer_inputProp4"), required: "*", type: "email" },
    { label: t("offer:offer_inputProp5") },
  ];

  const otherInputs = [
    { label: t("dnla:first") },
    { label: t("dnla:second"), required: "*" },
    { label: t("dnla:third"), required: "*" },
  ];

  const checkboxProps = [
    { label: t("dnla:offer_checkboxProp1"), required: "*" },
    { label: t("dnla:offer_checkboxProp2"), required: "*" },
    { label: t("dnla:offer_checkboxProp3"), required: "*" },
    { label: t("dnla:offer_checkboxProp4"), required: "*" },
  ];

  const button = t("service1:service1_buttonText1");

  return (
    <>
      <OfferContainer>
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            setClickedSend(true);

            // Check checkboxes validity
            let isValid = true;
            checkboxProps.forEach((prop) => {
              let isInvalid = formData[prop.label] === undefined;
              if (isInvalid) {
                isValid = false;
              }
            });

            if (!isValid) {
              document
                .querySelector("#checkboxLine")
                .scrollIntoView({ behavior: "smooth" });
              return;
            }

            sendMail();
            let btn = document.getElementById("submit_btn");
            btn.style.backgroundColor = "#072543";
            btn.value = t("contact:contact_sendSuccess");
            btn.disabled = true;
          }}
        >
          <InputsContainer>
            {inputProps1.map((input) => {
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
          </InputsContainer>
          {/* <hr></hr> */}
          <HeadingLine id="checkboxLine"></HeadingLine>

          <InputsContainer>
            <Input
              id="desktop"
              props={otherInputs[0]}
              style={{ marginBottom: "2%" }}
              onChange={(e) => {
                handleFormChange(otherInputs[0].label, e.target.value);
              }}
            ></Input>
            <p
              style={{
                color: "red",
                margin: "0",
                visibility:
                  clickedSend && formData[checkboxProps[0].label] === undefined
                    ? "visible"
                    : "hidden",
              }}
            >
              {t("common:text_required")}
            </p>
            <Checkbox
              props={checkboxProps[0]}
              group={"leaders"}
              onChange={(value) => {
                handleFormChange(checkboxProps[0].label, value);
              }}
            ></Checkbox>
            {formData[checkboxProps[0].label] === "Da" && (
              <Input
                id="desktop"
                props={otherInputs[1]}
                style={{ marginBottom: "2%" }}
                onChange={(e) => {
                  handleFormChange(otherInputs[1].label, e.target.value);
                }}
              ></Input>
            )}
            <p
              style={{
                color: "red",
                margin: "0",
                visibility:
                  clickedSend && formData[checkboxProps[1].label] === undefined
                    ? "visible"
                    : "hidden",
              }}
            >
              {t("common:text_required")}
            </p>
            <Checkbox
              props={checkboxProps[1]}
              group={"sales"}
              onChange={(value) => {
                handleFormChange(checkboxProps[1].label, value);
              }}
            ></Checkbox>
            {formData[checkboxProps[1].label] === "Da" && (
              <Input
                id="desktop"
                props={otherInputs[2]}
                style={{ marginBottom: "2%" }}
                onChange={(e) => {
                  handleFormChange(otherInputs[2].label, e.target.value);
                }}
              ></Input>
            )}
            <p
              style={{
                color: "red",
                margin: "0",
                visibility:
                  clickedSend && formData[checkboxProps[2].label] === undefined
                    ? "visible"
                    : "hidden",
              }}
            >
              {t("common:text_required")}
            </p>
            <Checkbox
              props={checkboxProps[2]}
              group={"feedback"}
              onChange={(value) => {
                handleFormChange(checkboxProps[2].label, value);
              }}
            ></Checkbox>
            <p
              style={{
                color: "red",
                margin: "0",
                visibility:
                  clickedSend && formData[checkboxProps[3].label] === undefined
                    ? "visible"
                    : "hidden",
              }}
            >
              {t("common:text_required")}
            </p>
            <Checkbox
              props={checkboxProps[3]}
              group={"analise"}
              onChange={(value) => {
                handleFormChange(checkboxProps[3].label, value);
              }}
            ></Checkbox>
            <br></br>
            <br></br>
            {/*<Button
              primary
              onClick={(id, value) => {
                console.log("asd");
                sendMail();
              }}
            >
              Pošlji
            </Button>*/}
            <ButtonContainer>
              <SubmitButton
                id="submit_btn"
                style={{ padding: "2% 0%", width: "100%", display: "block" }}
                value={button}
                type={"submit"}
              ></SubmitButton>
            </ButtonContainer>
          </InputsContainer>
        </FormContainer>
      </OfferContainer>
    </>
  );
};

export const OfferContainer = styled.div`
  position: relative;
  width: 90%;
  margin: auto !important;
  z-index: 1;

  @media only screen and (min-width: 768px) {
    width: 90%;
  }

  @media only screen and (min-width: 992px) {
    width: 90%;
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const FormContainer = styled.form`
  transform: scale(0.9);
  @media only screen and (min-width: 768px) {
    width: 70%;
    margin: auto;
  }

  @media only screen and (min-width: 992px) {
    width: 100%;
  }
`;

export const InputsContainer = styled.div`
  @media only screen and (min-width: 768px) {
    width: 90%;
    margin: auto;
  }

  @media only screen and (min-width: 992px) {
    width: 60%;
    margin-bottom: 2%;
  }

  @media only screen and (min-width: 1600px) {
    width: 50%;
  }
`;

export default OfferDNLA;
