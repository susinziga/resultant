import React from "react";

import * as Styled from "./Textarea.styled";

/*
  TEXTAREA COMPONENT 

  props:  label --> Naslov inputa
          placeholder ...
          required --> dodaj poljuben znak( ponavadi "*")
          messege --> Podaj le v primeru neke akcije( zraven se se doda styled prop ; success ; error)

  styled-props: error --> doda rdeč outline in error messege spodaj  
                sucess --> doda poljuben zelen sucess messege

*/

const Textfield = (props) => {
  return (
    <>
      <Styled.TextareaLabel>
        {props.props.label}
        <span style={{ color: "red" }}> {props.props.required}</span>
      </Styled.TextareaLabel>
      <Styled.TextareaContainer
        {...props}
        placeholder={props.props.placeholder}
      ></Styled.TextareaContainer>
      <Styled.ActionLabel {...props}>{props.props.message}</Styled.ActionLabel>
    </>
  );
};

export default Textfield;
