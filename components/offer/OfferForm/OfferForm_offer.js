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

const OfferForm_offer = ({ formSubject = "SiOK Povpraševanje" }) => {
  const { t, lang } = useTranslation();

  const { formData, handleFormChange, sendMail } = useForm();
  const [clickedSend, setClickedSend] = useState(false);
  const [isRadioSelected, setIsRadioSelected] = useState(false);
  const [submitButtonText, setsubmitButtonText] = useState(
    t("service1:service1_buttonText1")
  );

  useEffect(() => {
    handleFormChange("subject", formSubject);
  }, []);

  const inputProps1 = [
    { label: t("offer:offer_inputProp1"), handle: "companyName", required: "*" },
    { label: t("offer:offer_inputProp2"), handle: "address" },
    { label: t("offer:offer_inputProp3"), handle: "contactPerson", required: "*" },
    { label: t("offer:offer_inputProp4"), handle: "email", required: "*", type: "email" },
    { label: t("offer:offer_inputProp5"), handle: "phone" },
  ];

  const inputProps2 = [
    { label: t("offer:offer_secondInputProp1"), handle: "employeeCount" },
    { label: t("offer:offer_secondInputProp2"), handle: "remoteQuestionnaires" },
    { label: t("offer:offer_secondInputProp3"), handle: "printedQuestionnaires" },
    { label: t("offer:offer_secondInputProp4"), handle: "organizationalUnits" },
  ];

  const checkboxProps = [
    { label: t("offer:offer_checkboxProp1"), handle: "presentationToBoard", required: "*" },
    { label: t("offer:offer_checkboxProp2"), handle: "leaderEmployeeComparison", required: "*" },
  ];

  return (
    <>
      <OfferContainer style={{ overflow: "hidden" }}>
        <FormContainer
          onSubmit={async (e) => {
            e.preventDefault();
            setClickedSend(true);

            // Check checkboxes validity
            let isValid = true;
            checkboxProps.forEach((prop) => {
              let isInvalid = formData[prop.handle] === undefined;
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

            let btn = document.getElementById("submit_btn");
            try {
              await sendMail();
              setsubmitButtonText(t("contact:contact_sendSuccess"));
              btn.style.backgroundColor = "#072543";
              btn.disabled = true;
            } catch (err) {
              setsubmitButtonText(t("contact:contact_sendError"));
              btn.style.backgroundColor = "#a33";
            }
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
                      handleFormChange(input.handle, e.target.value);
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
                      handleFormChange(input.handle, e.target.value);
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
                        clickedSend && formData[checkbox.handle] === undefined
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
                      handleFormChange(checkbox.handle, value);
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
              onChange={(handle, value, allHandles) => {
                allHandles.forEach((h) => {
                  handleFormChange(h, false);
                });

                handleFormChange(handle, value);
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
