import React from "react";
import Button from "../../../basic_components/button/Button";
import { BodyText4, Title2 } from "../../../basic_components/texts/Texts";
import * as Styled from "./Pillars_component.styled";

const Pillars_component = ({ title, text, link, button }) => {
  const mouseEnter = (e) => {
    console.log("ENTER");
    console.log(e.target);
    let selected = e.target;
    if (!selected.classList.contains("pillarContainer")) {
      selected = selected.parentNode;
      if (!selected.classList.contains("pillarContainer")) return;
    }
    selected.classList.add("pillarActive");
    let parent = e.target.parentNode;
    let children = parent.children;

    for (let index = 0; index < children.length; index++) {
      if (!children[index].classList.contains("pillarActive"))
        children[index].classList.add("pillarShrink");
    }
  };

  const mouseLeave = (e) => {
    let selected = e.target;
    if (!selected.classList.contains("pillarContainer")) return;
    let parent = e.target.parentNode;
    let children = parent.children;

    for (let index = 0; index < children.length; index++) {
      children[index].classList.remove("pillarShrink");
      children[index].classList.remove("pillarActive");
    }
  };

  return (
    <Styled.PillarComponentContainer
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className="pillarContainer"
    >
      <Styled.PillarComponentTitle>{title}</Styled.PillarComponentTitle>
      <p>
        <BodyText4>{text}</BodyText4>
      </p>
      <Button secondary>{button}</Button>
    </Styled.PillarComponentContainer>
  );
};

export default Pillars_component;
