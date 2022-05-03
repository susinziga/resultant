import React from "react";
import { BodyText3 } from "../../../basic_components/texts/Texts";
import ContainerStyled from "./Container.styled";

const Plain_text = (props) => {
  return (
    <ContainerStyled>
      <BodyText3 {...props}>{props.children}</BodyText3>
    </ContainerStyled>
  );
};

export default Plain_text;
