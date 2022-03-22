import React from "react";

import * as Styled from "./Button.styled";

/*
  BUTTON COMPONENT 

  props:  primary
          secondary
          terciary 
          arrow
*/

const Button = (props) => {
  return (
    <div>
      <Styled.ButtonContainer {...props}>
        {props.children}
      </Styled.ButtonContainer>
      {props.arrow ? <Styled.Arrow src="./Arrow.svg"></Styled.Arrow> : ""}
    </div>
  );
};

export default Button;
