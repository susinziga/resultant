import React from "react";

import * as Styled from "./Button.styled";

const Button = (props) => {
  return (
    <Styled.ButtonContainer {...props}>{props.children}</Styled.ButtonContainer>
  );
};

export default Button;
