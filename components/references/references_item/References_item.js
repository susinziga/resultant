import React from "react";

import * as Styled from "./References_item.styled";

const References_item = ({ reference }) => {
  const { img, hex, name } = reference;
  return (
    <Styled.ReferencesItemContainer key={name} hex={hex}>
      <img src={img} alt={name}></img>
    </Styled.ReferencesItemContainer>
  );
};

export default References_item;
