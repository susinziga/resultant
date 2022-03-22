import React from "react";

import * as Styled from "./Input.styled";

/*
  INPUT COMPONENT 

  props:  label --> Naslov inputa
          placeholder ...
          required --> dodaj poljuben znak( ponavadi "*")
          messege --> Podaj le v primeru neke akcije( zraven se se doda styled prop ; success ; error)

  styled-props: error --> doda rdeč outline in error messege spodaj  
                sucess --> doda poljuben zelen sucess messege

*/

const Input = (props) => {
  return (
    <>
      <Styled.InputLabel>
        {props.props.label}
        <span style={{ color: "red" }}> {props.props.required}</span>
      </Styled.InputLabel>
      <Styled.InputContainer
        {...props}
        placeholder={props.props.placeholder}
      ></Styled.InputContainer>
      <Styled.ActionLabel {...props}>{props.props.message}</Styled.ActionLabel>
    </>
  );
};

export default Input;
