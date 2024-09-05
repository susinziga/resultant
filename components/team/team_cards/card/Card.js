import React from "react";
import { Title2 } from "../../../../basic_components/texts/Texts";
import * as Styles from "./Card.styled";

const Card = ({ text, bg }) => {
  const bg_array = { 0: "#AABFD1", 1: "#BED6E1", 2: "#CFEDFC" };

  return (
    <Styles.Container bg={bg_array[bg % 3]}>
      <h4>{text}</h4>
      <Styles.Line></Styles.Line>
    </Styles.Container>
  );
};

export default Card;
