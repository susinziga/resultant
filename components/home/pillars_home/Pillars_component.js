import Link from "next/link";
import React from "react";
import styled from "styled-components";
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
      <Link href={link}>
        <a>
          <Styled.PillarOuter
            style={{ cursor: "pointer" }}
          ></Styled.PillarOuter>
        </a>
      </Link>
      <Styled.PillarComponentTitle>{title}</Styled.PillarComponentTitle>
      <p>
        <BodyText4 dangerouslySetInnerHTML={{ __html: text }}></BodyText4>
      </p>

      <Styled.LogoContainer>
        <MoreButton className="button_pillar">{button}</MoreButton>
        {logo && (
          <img alt="" src={logo} width="100" className="pillar_logo"></img>
        )}
      </Styled.LogoContainer>
    </Styled.PillarComponentContainer>
  );
};

export const MoreButton = styled.div`
  color: rgb(110, 76, 0) !important;
  border: 2px solid rgb(110, 76, 0);
  border-radius: 24px;
  padding: 10px 20px;
  line-height: 25px;

  &:hover {
    background-color: var(--light);
  }
`;

export default Pillars_component;
