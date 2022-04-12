import useTranslation from "next-translate/useTranslation";
import React, { useEffect } from "react";
import styled from "styled-components";
import Input from "../../../basic_components/input/Input";
import Checkbox from "../OfferForm/Checkbox_offer";

import Button from "../../../basic_components/button/Button";
import { useForm } from "../../../custom_hooks/useForm";

import { ButtonContainer, SubmitButton } from "../OfferForm/OfferForm.styled";

const OfferDNLA = () => {
  const { t } = useTranslation();

  const { formData, handleFormChange, sendMail } = useForm();

  useEffect(() => {
    handleFormChange("subject", "DNLA Povpraševanje");
  }, []);

  const inputProps1 = [
    { label: t("offer:offer_inputProp1") },
    { label: t("offer:offer_inputProp2") },
    { label: t("offer:offer_inputProp3") },
    { label: t("offer:offer_inputProp4") },
    { label: t("offer:offer_inputProp5") },
  ];

  const otherInputs = [
    { label: t("dnla:first") },
    { label: t("dnla:second") },
    { label: t("dnla:third") },
  ];

  const checkboxProps = [
    { label: t("dnla:offer_checkboxProp1") },
    { label: t("dnla:offer_checkboxProp2") },
    { label: t("dnla:offer_checkboxProp3") },
    { label: t("dnla:offer_checkboxProp4") },
  ];

  return (
    <>
      <OfferContainer>
        <FormContainer>
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
          <hr></hr>

          <InputsContainer>
            <Input
              id="desktop"
              props={otherInputs[0]}
              style={{ marginBottom: "2%" }}
              onChange={(e) => {
                handleFormChange(otherInputs[0].label, e.target.value);
              }}
            ></Input>
            <Checkbox
              props={checkboxProps[0]}
              group={"leaders"}
              onChange={(value) => {
                handleFormChange(checkboxProps[0].label, value);
              }}
            ></Checkbox>
            <Input
              id="desktop"
              props={otherInputs[1]}
              style={{ marginBottom: "2%" }}
              onChange={(e) => {
                handleFormChange(otherInputs[1].label, e.target.value);
              }}
            ></Input>
            <Checkbox
              props={checkboxProps[1]}
              group={"sales"}
              onChange={(value) => {
                handleFormChange(checkboxProps[1].label, value);
              }}
            ></Checkbox>
            <Input
              id="desktop"
              props={otherInputs[2]}
              style={{ marginBottom: "2%" }}
              onChange={(e) => {
                handleFormChange(otherInputs[2].label, e.target.value);
              }}
            ></Input>
            <Checkbox
              props={checkboxProps[2]}
              group={"feedback"}
              onChange={(value) => {
                handleFormChange(checkboxProps[2].label, value);
              }}
            ></Checkbox>
            <Checkbox
              props={checkboxProps[3]}
              group={"analise"}
              onChange={(value) => {
                handleFormChange(checkboxProps[3].label, value);
              }}
            ></Checkbox>
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
                onClick={(id, value) => {
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
