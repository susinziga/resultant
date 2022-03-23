import React, { useState, useRef, useEffect } from "react";

import * as Styled from "./Menu_top.styled";

import gsap from "gsap";
import useTranslation from "next-translate/useTranslation";

import Link from "next/link";
import Button from "../../basic_components/button/Button";
import Menu_list from "./menu_list/Menu_list";

const Menu_top = () => {
  const { t, lang } = useTranslation("aboveTheFold");

  const letterAnimation = useRef(null);

  const LogoAnimation = useRef(null);

  const MenuAnimation = useRef(null);

  useEffect(() => {
    gsap.to(letterAnimation, {
      duration: 2,
      top: "-21%",
      left: "57%",
      scale: "0.5",

      delay: 0.2,
    });

    gsap.from(LogoAnimation, {
      opacity: 0,
      duration: 0.5,

      delay: 1.8,
    });

    gsap.to(letterAnimation, {
      duration: 0.1,
      opacity: 0,

      delay: 2,
    });

    gsap.to(MenuAnimation, {
      backgroundColor: "#FFF",
      duration: 0.1,

      delay: 2,
    });
  }, []);

  return (
    <Styled.Fixed
      className="menu_top_desktop"
      ref={(el) => (MenuAnimation = el)}
    >
      <Styled.MenuContainer>
        <Styled.LogoContainer>
          <img ref={(el) => (LogoAnimation = el)} src="./Logo/logo.svg"></img>
          <object
            ref={(el) => (letterAnimation = el)}
            data={"./Logo/letter.svg"}
            width="300"
            height="300"
          ></object>
        </Styled.LogoContainer>
        <Menu_list></Menu_list>
      </Styled.MenuContainer>
    </Styled.Fixed>
  );
};

export default Menu_top;
