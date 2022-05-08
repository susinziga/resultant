import React from "react";
import * as Styled from "./Pillar2Component.styled";
import Button from "../../../../basic_components/button/Button";
import { useRouter } from "next/router";

const Pillars2_component = ({ title, text, button, link }) => {
  const { locale } = useRouter();
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
      <Styled.Flex>
        <Styled.PillarOuter></Styled.PillarOuter>
        <Styled.PillarComponentTitle>{title}</Styled.PillarComponentTitle>
        <p>
          <Styled.PillarText>{text}</Styled.PillarText>
        </p>
      </Styled.Flex>
      <Styled.ButtonContainer>
        <Button secondary href={"/" + locale + link} target="_blank">
          {button}
        </Button>
      </Styled.ButtonContainer>
    </Styled.PillarComponentContainer>
  );
};

export default Pillars2_component;
