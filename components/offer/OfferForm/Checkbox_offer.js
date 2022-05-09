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
  const onClickHandler = (e) => {
    let temp = document.getElementsByName(props.group);
    console.log(e.target);
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
          <CheckboxContainer1>
            <Checkbox
              type="checkbox"
              value="Da"
              name={props.group}
              onChange={onClickHandler}
            ></Checkbox>
          </CheckboxContainer1>
          <Seperator>/</Seperator>
          <CheckboxContainer2>
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
