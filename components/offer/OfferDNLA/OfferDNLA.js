import useTranslation from "next-translate/useTranslation";
import React from "react";
import styled from "styled-components";
import Input from "../../../basic_components/input/Input";
import Checkbox from "../OfferForm/Checkbox_offer";

import { Button } from "../../../basic_components/button/Button";

const OfferDNLA = () => {
  const { t } = useTranslation();
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
          ></Input>
          <Checkbox props={checkboxProps[0]} group={"leaders"}></Checkbox>
          <Input
            id="desktop"
            props={otherInputs[1]}
            style={{ marginBottom: "2%" }}
          ></Input>
          <Checkbox props={checkboxProps[1]} group={"sales"}></Checkbox>
          <Input
            id="desktop"
            props={otherInputs[2]}
            style={{ marginBottom: "2%" }}
          ></Input>
          <Checkbox props={checkboxProps[3]} group={"feedback"}></Checkbox>
          <Checkbox props={checkboxProps[4]} group={"analise"}></Checkbox>
          <Button primary></Button>
        </InputsContainer>
      </FormContainer>
    </OfferContainer>
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
