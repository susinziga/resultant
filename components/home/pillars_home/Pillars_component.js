import React from "react";
import Button from "../../../basic_components/button/Button";
import { BodyText4, Title2 } from "../../../basic_components/texts/Texts";
import * as Styled from "./Pillars_component.styled";

const Pillars_component = ({ title, text, link, button, logo }) => {
  const mouseEnter = (e) => {
    let selected = e.target;
    if (!selected.classList.contains("pillarContainer")) {
      selected = selected.parentNode;
      if (!selected.classList.contains("pillarContainer")) {
        selected = selected.parentNode;
        if (!selected.classList.contains("pillarContainer")) return;
      }
      if (!selected.classList.contains("pillarContainer")) return;
    }
    let temp = document.getElementsByClassName("pillarActive");
    for (let index = 0; index < temp.length; index++) {
      temp[index].classList.remove("pillarActive");
    }

    selected.classList.add("pillarActive");
    let parent = selected.parentNode;
    let children = parent.children;

    for (let index = 0; index < children.length; index++) {
      if (!children[index].classList.contains("pillarActive"))
        children[index].classList.add("pillarShrink");
    }
  };

  const mouseLeave = (e) => {
    let temp = document.getElementsByClassName("pillarContainer");

    for (let index = 0; index < temp.length; index++) {
      temp[index].classList.remove("pillarShrink");
      temp[index].classList.remove("pillarActive");
    }
  };

  return (
    <Styled.PillarComponentContainer
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className="pillarContainer"
    >
      <Styled.PillarOuter href={link}></Styled.PillarOuter>
      <Styled.PillarComponentTitle>{title}</Styled.PillarComponentTitle>
      <p>
        <BodyText4>{text}</BodyText4>
      </p>

      <Styled.LogoContainer>
        <Button className="button_pillar" secondary>
          {button}
        </Button>
        {logo && <img src={logo} width="100" className="pillar_logo"></img>}
      </Styled.LogoContainer>
    </Styled.PillarComponentContainer>
  );
};

export default Pillars_component;
