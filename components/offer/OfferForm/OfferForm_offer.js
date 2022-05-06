import React, { useState, useEffect } from "react";
import {
  ButtonContainer,
  OfferContainer,
  FormContainer,
  SubmitButton,
  HeadingLine,
  BackgroundVector,
  InputsContainer,
} from "./OfferForm.styled";
import Input from "../../../basic_components/input/Input";
import Checkbox from "./Checkbox_offer";

import MultipleCheckbox from "./MultipleCheckbox_offer";
import useTranslation from "next-translate/useTranslation";

import { useForm } from "../../../custom_hooks/useForm";

const OfferForm_offer = () => {
  const { t, lang } = useTranslation();

  const { formData, handleFormChange, sendMail } = useForm();

  const button = t("service1:service1_buttonText1");

  useEffect(() => {
    handleFormChange("subject", "SiOK Povpraševanje");
  }, []);

  const inputProps1 = [
    { label: t("offer:offer_inputProp1"), required: "*" },
    { label: t("offer:offer_inputProp2"), required: "*" },
    { label: t("offer:offer_inputProp3"), required: "*" },
    { label: t("offer:offer_inputProp4"), required: "*" },
    { label: t("offer:offer_inputProp5"), required: "*" },
  ];

  const inputProps2 = [
    { label: t("offer:offer_secondInputProp1"), required: "*" },
    { label: t("offer:offer_secondInputProp2"), required: "*" },
    { label: t("offer:offer_secondInputProp3"), required: "*" },
  ];

  const checkboxProps = [
    { label: t("offer:offer_checkboxProp1"), required: "*" },
    { label: t("offer:offer_checkboxProp2"), required: "*" },
  ];

  return (
    <>
      <OfferContainer>
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
          <InputsContainer>
            {inputProps1.map((input, id) => {
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
          </InputsContainer>
          <HeadingLine></HeadingLine>
          <InputsContainer>
            {inputProps2.map((input) => {
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
          <HeadingLine></HeadingLine>
          <InputsContainer>
            {checkboxProps.map((checkbox, id) => {
              return (
                <>
                  <Checkbox
                    props={checkbox}
                    group={id}
                    onChange={(value) => {
                      handleFormChange(checkbox.label, value);
                    }}
                  ></Checkbox>
                </>
              );
            })}
          </InputsContainer>
          <HeadingLine></HeadingLine>
          <BackgroundVector src="/offer/backgroundVector.png"></BackgroundVector>
          <InputsContainer>
            <MultipleCheckbox
              onChange={(id, value) => {
                console.log(id, value);
                handleFormChange(id, value);
              }}
            ></MultipleCheckbox>
            <ButtonContainer>
              <SubmitButton
                id="submit_btn"
                style={{ padding: "2% 0%", width: "100%", display: "block" }}
                // onClick={(id, value) => {
                //   console.log("asd");
                //   sendMail();
                // }}
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

export default OfferForm_offer;
