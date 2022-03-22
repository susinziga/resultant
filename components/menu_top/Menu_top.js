import React, { useState } from "react";

import * as Styled from "./Menu_top.styled";

const Menu_top = () => {
  return (
    <Styled.MenuContainer>
      <Styled.LogoContainer>
        <img src="./Logo/logo.svg"></img>
        <object data={"./Logo/letter.svg"} width="300" height="300">
          {" "}
        </object>
      </Styled.LogoContainer>
    </Styled.MenuContainer>
  );
};

export default Menu_top;
