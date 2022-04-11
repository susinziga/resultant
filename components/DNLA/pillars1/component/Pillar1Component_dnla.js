import React from "react";
import * as Styled from "./Pillar1Component.styled";

const Pillars_component = ({ title, text, link }) => {
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
    let temp = document.getElementsByClassName("pillarActiveDNLA");
    for (let index = 0; index < temp.length; index++) {
      temp[index].classList.remove("pillarActiveDNLA");
    }

    selected.classList.add("pillarActiveDNLA");
    let parent = selected.parentNode;
    let children = parent.children;

    for (let index = 0; index < children.length; index++) {
      if (!children[index].classList.contains("pillarActiveDNLA"))
        children[index].classList.add("pillarShrinkDNLA");
    }
  };

  const mouseLeave = (e) => {
    let temp = document.getElementsByClassName("pillarContainer");

    for (let index = 0; index < temp.length; index++) {
      console.log(temp[index]);
      temp[index].classList.remove("pillarShrinkDNLA");
      temp[index].classList.remove("pillarActiveDNLA");
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
      <TextContainer>
        <Styled.PillarText>{text}</Styled.PillarText>
      </TextContainer>
    </Styled.PillarComponentContainer>
  );
};

import styled from "styled-components";
const TextContainer = styled.p`
  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    height: 15rem;
  }
  @media (min-width: 1600px) {
    height: 10rem;
  }
`;

export default Pillars_component;
