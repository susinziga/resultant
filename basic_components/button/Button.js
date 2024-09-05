import React from "react";

import * as Styled from "./Button.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
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
    <Styled.Outer {...props}>
      {props.isParagraph ? (
        <Styled.ButtonContainerParagraph {...props} onClick={() => {}}>
          {props.children}
        </Styled.ButtonContainerParagraph>
      ) : (
        <Styled.ButtonContainer {...props} onClick={() => {}}>
          {props.children}
        </Styled.ButtonContainer>
      )}
      {props.arrow ? <FontAwesomeIcon icon={faChevronRight} /> : ""}
      {props.arrowDown ? <FontAwesomeIcon icon={faChevronDown} /> : ""}
    </Styled.Outer>
  );
};

export default Button;
