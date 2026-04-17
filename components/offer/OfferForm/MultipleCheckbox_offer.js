import React from "react";

import {
  TopLabel,
  Checkbox,
  CheckboxContainer,
  CheckboxContainer1,
  CheckboxContainer2,
  CheckboxContainer3,
  CheckboxContainer4,
  Container,
  CheckboxLabel,
} from "./MultipleCheckbox.styled";
import useTranslation from "next-translate/useTranslation";

const MultipleCheckbox = (props) => {
  const { t, lang } = useTranslation();

  const label1 = t("offer:offer_multipleCheckboxLabel1");
  const label2 = t("offer:offer_multipleCheckboxLabel2");
  const label3 = t("offer:offer_multipleCheckboxLabel3");
  const label4 = t("offer:offer_multipleCheckboxLabel4");
  const checkboxHeading = t("offer:offer_multipleCheckboxHeading");

  const inputProps = [
    { content: "A", label: label1, handle: "measurementOption1" },
    { content: "B", label: label2, handle: "measurementOption2" },
    { content: "C", label: label3, handle: "measurementOption3" },
    { content: "D", label: label4, handle: "measurementOption4" },
  ];

  return (
    <>
      <CheckboxContainer>
        <TopLabel>
          {checkboxHeading} <span style={{ color: "red" }}>*</span>
        </TopLabel>
        <Container>
          {inputProps.map((prop, index) => {
            return (
              <div key={index}>
                <CheckboxContainer1 props={props.content}>
                  <Checkbox
                    type="checkbox"
                    name="Da"
                    value="Da"
                    group={"Da"}
                    onChange={(e) => {
                      let temp = document.getElementsByName("Da");
                      temp.forEach((element) => {
                        if (element !== e.target) {
                          element.checked = false;
                        }
                      });

                      props.onChange(prop.handle, e.target.checked, [
                        "measurementOption1",
                        "measurementOption2",
                        "measurementOption3",
                        "measurementOption4",
                      ]);
                    }}
                  ></Checkbox>
                  <CheckboxLabel>{prop.label}</CheckboxLabel>
                </CheckboxContainer1>
              </div>
            );
          })}
          {/*
            <CheckboxContainer1>
              <Checkbox
                  type="checkbox"
                  name="Da"
              ></Checkbox>
              <CheckboxLabel>{label1}</CheckboxLabel>
            </CheckboxContainer1>
            <CheckboxContainer2>
              <Checkbox
                  type="checkbox"
                  name="Da"
              ></Checkbox>
              <CheckboxLabel>{label2}</CheckboxLabel>
            </CheckboxContainer2>
            <CheckboxContainer3>
              <Checkbox
                  type="checkbox"
                  name="Da"
              ></Checkbox>
              <CheckboxLabel>{label3}</CheckboxLabel>
            </CheckboxContainer3>
            <CheckboxContainer4>
              <Checkbox
                  type="checkbox"
                  name="Da"
              ></Checkbox>
              <CheckboxLabel>{label4}</CheckboxLabel>
            </CheckboxContainer4>
  */}
        </Container>
      </CheckboxContainer>
    </>
  );
};

export default MultipleCheckbox;
