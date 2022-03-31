import React from "react";

import {CheckboxLabel, CheckboxContainer, Checkbox, CheckboxFlex, Seperator, CheckboxContainer1, CheckboxContainer2} from "./Checkbox.styled";

const CheckboxMultiple = (props) => {
  return (
    <>
      <CheckboxContainer >
        <CheckboxLabel>
            {props.props.label}
        </CheckboxLabel>
        <CheckboxFlex>
          
          <CheckboxContainer1>
              <Checkbox
                  type="checkbox"
                  name="Da"
              ></Checkbox>
            </CheckboxContainer1>
            <Seperator>/</Seperator>
            <CheckboxContainer2>
              <Checkbox
                  type="checkbox"
                  name="Ne"
              ></Checkbox>
              </CheckboxContainer2>
        </CheckboxFlex>
      </CheckboxContainer>
    </>
  );
};

export default CheckboxMultiple;