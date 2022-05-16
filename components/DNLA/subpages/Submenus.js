import React from "react";
import Button from "../../../basic_components/button/Button";
import { Wrapper, ItemWrapper } from "./Submenus.styled";

const Submenus = (props) => {
  return (
    <Wrapper>
      {props.items.map((item, i) => {
        return <ItemWrapper key={i}>{item}</ItemWrapper>;
      })}
    </Wrapper>
  );
};

export default Submenus;
