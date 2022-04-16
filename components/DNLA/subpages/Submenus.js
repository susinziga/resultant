import React from "react";
import Button from "../../../basic_components/button/Button";
import { Wrapper, ItemWrapper } from "./Submenus.styled";

const Submenus = (props) => {
  return (
    <Wrapper>
      {props.items.map((item) => {
        return <ItemWrapper>{item}</ItemWrapper>;
      })}
    </Wrapper>
  );
};

export default Submenus;
