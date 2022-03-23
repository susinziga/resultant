import React from "react";
import Button from "../../../basic_components/button/Button";
import { BodyText4, Title2 } from "../../../basic_components/texts/Texts";
import * as Styled from "./Pillars_component.styled";

const Pillars_component = ({ title, text, link, button }) => {
  return (
    <Styled.PillarComponentContainer>
      <Styled.PillarComponentTitle>{title}</Styled.PillarComponentTitle>
      <p>
        <BodyText4>{text}</BodyText4>
      </p>
      <Button secondary>{button}</Button>
    </Styled.PillarComponentContainer>
  );
};

export default Pillars_component;
