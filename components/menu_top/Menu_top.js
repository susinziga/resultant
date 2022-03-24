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

  //-1 začetno
  //0 na vrhu
  //1 scroll dol
  //2 scroll gor
  const [navState, setNavState] = useState(-1);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (navState === -1 && window.scrollY <= 10) {
      gsap.from(letterAnimation, {
        duration: 2,
        top: "500%",
        left: "100%",
        scale: "22",

        delay: 0.2,
      });

      gsap.from(LogoAnimation, {
        opacity: 0,
        duration: 0.5,

        delay: 1.8,
      });

      /*gsap.to(letterAnimation, {
      duration: 0.1,
      opacity: 0,

      delay: 2,
    });*/

      gsap.from(MenuAnimation, {
        backgroundColor: "transparent",
        duration: 0.1,

        delay: 2,
      });
    }
  }, []);

  useEffect(() => {
    handleNavStateChange();
  }, [navState]);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setNavState(1);
    } else {
      setNavState(0);
    }
  };

  const handleNavStateChange = () => {
    console.log("ddd");
    switch (navState) {
      case 0: {
        gsap.to(letterAnimation, {
          duration: 0.5,
          top: "-21%",
          left: "57%",
          scale: "0.5",
        });

        gsap.to(LogoAnimation, {
          duration: 0.1,
          delay: 0.2,

          opacity: "1",
        });

        gsap.to(MenuAnimation, {
          filter: "none",
          duration: 0.5,
        });

        gsap.to(".nav_item", {
          opacity: 1,
          duration: 0.1,
        });
        break;
      }
      case 1: {
        gsap.to(letterAnimation, {
          duration: 0.5,
          top: "0%",
          left: "57%",
          scale: "0.5",
        });

        gsap.to(LogoAnimation, {
          duration: 0.1,

          opacity: "0",
          delay: 0.1,
        });

        gsap.to(MenuAnimation, {
          filter: "drop-shadow(0px 16px 40px rgba(0, 0, 0, 0.2))",
          duration: 0.5,
        });

        gsap.to(".nav_item", {
          opacity: 0,
          duration: 0.1,
        });

        break;
      }
      case 2: {
        gsap.to(".nav_item", {
          opacity: 1,
          duration: 0.1,
        });

        break;
      }
    }
  };

  return (
    <Styled.Fixed
      className="menu_top_desktop"
      ref={(el) => (MenuAnimation = el)}
    >
      <Styled.MenuContainer display={navState <= 0}>
        <Styled.LogoContainer>
          <img ref={(el) => (LogoAnimation = el)} src="./Logo/logo1.svg"></img>
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
