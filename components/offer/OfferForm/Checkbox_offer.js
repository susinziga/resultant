import { useRouter } from "next/router";
import React from "react";

import {
  CheckboxLabel,
  CheckboxContainer,
  Checkbox,
  CheckboxFlex,
  Seperator,
  CheckboxContainer1,
  CheckboxContainer2,
} from "./Checkbox.styled";

const CheckboxMultiple = (props) => {
  const { locale } = useRouter();

  const onClickHandler = (e) => {
    let temp = document.getElementsByName(props.group);
    e.target;
    temp.forEach((element) => {
      if (element !== e.target) {
        element.checked = false;
      }
    });

    props.onChange(e.target.value);
  };

  return (
    <>
      <CheckboxContainer>
        <CheckboxLabel>
          {props.props.label}{" "}
          <span style={{ color: "red" }}>{props.props.required}</span>
        </CheckboxLabel>
        <CheckboxFlex>
          <CheckboxContainer1 locale={locale}>
            <Checkbox
              type="checkbox"
              value="Da"
              name={props.group}
              onChange={onClickHandler}
            ></Checkbox>
          </CheckboxContainer1>
          <Seperator>/</Seperator>
          <CheckboxContainer2 locale={locale}>
            <Checkbox
              type="checkbox"
              value="Ne"
              name={props.group}
              onChange={onClickHandler}
            ></Checkbox>
          </CheckboxContainer2>
        </CheckboxFlex>
      </CheckboxContainer>
    </>
  );
};

export default CheckboxMultiple;
