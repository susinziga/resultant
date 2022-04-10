import React from "react";

import * as Styled from "./Button.styled";

/*
  BUTTON COMPONENT 

  props:  primary
          secondary
          terciary 
          arrow
          arrow-down
*/

const Button = (props) => {
  return (
    <div {...props}>
      <Styled.ButtonContainer {...props}>
        {props.children}
      </Styled.ButtonContainer>
      {props.arrow ? (
        <Styled.Arrow
          className={props.className}
          src="/Logo/Arrow.svg"
        ></Styled.Arrow>
      ) : (
        ""
      )}
      {props.arrowDown ? (
        <Styled.Arrow
          className={props.className}
          down
          src="/Logo/Arrow.svg"
        ></Styled.Arrow>
      ) : (
        ""
      )}
    </div>
  );
};

export default Button;
