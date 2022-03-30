import React from "react";

import {CheckboxLabel, CheckboxContainer, Checkbox, CheckboxFlex, Seperator, CheckboxContainer1, CheckboxContainer2} from "./Checkbox.styled";

/*
  INPUT COMPONENT 

  props:  label --> Naslov inputa
          placeholder ...
          required --> dodaj poljuben znak( ponavadi "*")
          messege --> Podaj le v primeru neke akcije( zraven se se doda styled prop ; success ; error)

  styled-props: error --> doda rdeč outline in error messege spodaj  
                sucess --> doda poljuben zelen sucess messege

*/

const CheckboxItem = (props) => {
  return (
    <>
      <CheckboxContainer>
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

export default CheckboxItem;