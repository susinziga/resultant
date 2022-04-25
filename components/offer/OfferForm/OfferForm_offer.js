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

  useEffect(() => {
    handleFormChange("subject", "SiOK Povpraševanje");
  }, []);

  const inputProps1 = [
    { label: t("offer:offer_inputProp1") },
    { label: t("offer:offer_inputProp2") },
    { label: t("offer:offer_inputProp3") },
    { label: t("offer:offer_inputProp4") },
    { label: t("offer:offer_inputProp5") },
  ];

  const inputProps2 = [
    { label: t("offer:offer_secondInputProp1") },
    { label: t("offer:offer_secondInputProp2") },
    { label: t("offer:offer_secondInputProp3") },
  ];

  const checkboxProps = [
    { label: t("offer:offer_checkboxProp1") },
    { label: t("offer:offer_checkboxProp2") },
  ];

  return (
    <>
      <OfferContainer>
        <FormContainer>
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
                style={{ padding: "2% 0%", width: "100%", display: "block" }}
                onClick={(id, value) => {
                  console.log("asd");
                  sendMail();
                }}
              >
                Pošlji
              </SubmitButton>
            </ButtonContainer>
          </InputsContainer>
        </FormContainer>
      </OfferContainer>
    </>
  );
};

export default OfferForm_offer;
