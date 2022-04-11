import React from "react";
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

const OfferForm_offer = () => {
  const { t, lang } = useTranslation();

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
          <HeadingLine></HeadingLine>
          <InputsContainer>
            {inputProps2.map((input) => {
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
          <HeadingLine></HeadingLine>
          <InputsContainer>
            {checkboxProps.map((checkbox, id) => {
              return (
                <>
                  <Checkbox props={checkbox} group={id}></Checkbox>
                </>
              );
            })}
          </InputsContainer>
          <HeadingLine></HeadingLine>
          <BackgroundVector src="/offer/backgroundVector.png"></BackgroundVector>
          <InputsContainer>
            <MultipleCheckbox></MultipleCheckbox>
            <ButtonContainer>
              <SubmitButton type="submit" value="Pošlji"></SubmitButton>
            </ButtonContainer>
          </InputsContainer>
        </FormContainer>
      </OfferContainer>
    </>
  );
};

export default OfferForm_offer;
