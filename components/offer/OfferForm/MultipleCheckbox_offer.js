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
    { content: "A", label: label1 },
    { content: "B", label: label2 },
    { content: "C", label: label3 },
    { content: "D", label: label4 },
  ];

  return (
    <>
      <CheckboxContainer>
        <TopLabel>{checkboxHeading}</TopLabel>
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
                      console.log(e.target);
                      temp.forEach((element) => {
                        if (element !== e.target) {
                          element.checked = false;
                        }
                      });

                      props.onChange(prop.label, e.target.checked);
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
