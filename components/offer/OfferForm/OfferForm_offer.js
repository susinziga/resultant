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
  const [clickedSend, setClickedSend] = useState(false);
  const [isRadioSelected, setIsRadioSelected] = useState(false);
  const [submitButtonText, setsubmitButtonText] = useState(
    t("service1:service1_buttonText1")
  );

  useEffect(() => {
    handleFormChange("subject", "SiOK Povpraševanje");
  }, []);

  const inputProps1 = [
    { label: t("offer:offer_inputProp1"), required: "*" },
    { label: t("offer:offer_inputProp2") },
    { label: t("offer:offer_inputProp3"), required: "*" },
    { label: t("offer:offer_inputProp4"), required: "*", type: "email" },
    { label: t("offer:offer_inputProp5") },
  ];

  const inputProps2 = [
    { label: t("offer:offer_secondInputProp1") },
    { label: t("offer:offer_secondInputProp2") },
    { label: t("offer:offer_secondInputProp3") },
    { label: t("offer:offer_secondInputProp4") },
  ];

  const checkboxProps = [
    { label: t("offer:offer_checkboxProp1"), required: "*" },
    { label: t("offer:offer_checkboxProp2"), required: "*" },
  ];

  return (
    <>
      <OfferContainer style={{ overflow: "hidden" }}>
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
                .scrollIntoView({ behavior: "smooth", block: "center" });
              return;
            }

            // Check radio buttons validity
            if (!isRadioSelected) {
              let target = document.querySelector("#radioLine");
              target.scrollIntoView({ behavior: "smooth", block: "center" });
              return;
            }

            sendMail();
            let btn = document.getElementById("submit_btn");
            setsubmitButtonText(t("contact:contact_sendSuccess"));
            btn.style.backgroundColor = "#072543";
            btn.disabled = true;
          }}
        >
          <InputsContainer>
            {inputProps1.map((input, id) => {
              return (
                <div key={id}>
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
          </InputsContainer>
          <HeadingLine></HeadingLine>
          <InputsContainer>
            {inputProps2.map((input, index) => {
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
          </InputsContainer>
          <HeadingLine id="checkboxLine"></HeadingLine>
          <InputsContainer>
            {checkboxProps.map((checkbox, id) => {
              return (
                <div key={id}>
                  <p
                    style={{
                      color: "red",
                      margin: "0",
                      visibility:
                        clickedSend && formData[checkbox.label] === undefined
                          ? "visible"
                          : "hidden",
                    }}
                  >
                    {t("common:text_required")}
                  </p>
                  <Checkbox
                    props={checkbox}
                    group={id}
                    onChange={(value) => {
                      handleFormChange(checkbox.label, value);
                    }}
                  ></Checkbox>
                  <p style={{ visibility: "hidden" }}>_</p>
                </div>
              );
            })}
          </InputsContainer>
          <HeadingLine></HeadingLine>
          <BackgroundVector
            id="radioLine"
            src="/offer/backgroundVector.webp"
          ></BackgroundVector>
          <InputsContainer>
            <p
              style={{
                color: "red",
                marginBottom: "1rem",
                visibility:
                  clickedSend && !isRadioSelected ? "visible" : "hidden",
              }}
            >
              {t("common:text_required")}
            </p>
            <MultipleCheckbox
              onChange={(id, value) => {
                id, value;
                handleFormChange(id, value);
                setIsRadioSelected(true);
              }}
            ></MultipleCheckbox>
            <ButtonContainer>
              <SubmitButton
                id="submit_btn"
                style={{ padding: "2% 0%", width: "100%", display: "block" }}
                value={submitButtonText}
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
