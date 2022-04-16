import React from "react";
import * as Styled from "./Pillar2Component.styled";
import Button from "../../../../basic_components/button/Button";
import { useRouter } from "next/router";

const Pillars2_component = ({ title, text, button, link }) => {
  const { locale } = useRouter();
  return (
    <Styled.PillarComponentContainer className="pillarContainer">
      <Styled.PillarComponentTitle>{title}</Styled.PillarComponentTitle>
      <p>
        <Styled.PillarText>{text}</Styled.PillarText>
      </p>
      <Button
        secondary
        style={{ marginTop: "5%" }}
        href={"/" + locale + link}
        target="_blank"
      >
        {button}
      </Button>
    </Styled.PillarComponentContainer>
  );
};

export default Pillars2_component;
