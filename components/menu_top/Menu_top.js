import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

import * as Styled from "./Menu_top.styled";

import gsap from "gsap";
import useTranslation from "next-translate/useTranslation";

import Link from "next/link";
import Button from "../../basic_components/button/Button";
import Menu_list from "./menu_list/Menu_list";

import { useRouter } from "next/router";
import useSize from "../../custom_hooks/useSize";
import Mobile_menu from "./mobile_menu/Mobile_menu";

const Menu_top = ({}) => {
  const { t, lang } = useTranslation("aboveTheFold");

  const letterAnimation = useRef(null);

  const LogoAnimation = useRef(null);

  const MenuAnimation = useRef(null);

  const { asPath, pathname } = useRouter();

  const [size, setSize] = useState([]);

  const { isDesktop } = useSize();

  const [menu_opened, setMenu_opened] = useState(false);

  useEffect(() => {
    setSizes();
    window.addEventListener("resize", setSizes);

    handleNavStateChange();
    return () => window.removeEventListener("resize", setSizes);
  }, []);

  const setSizes = () => {
    setSize([window.innerWidth, window.innerHeight]);
  };

  //-1 začetno
  //0 na vrhu
  //1 scroll dol
  //2 scroll gor
  const [navState, setNavState] = useState(-1);
  useEffect(() => {}, []);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    if (
      sessionStorage.getItem("animation") !== "true" &&
      isDesktop() &&
      pathname === "/" &&
      window.scrollY <= 10
    ) {
      document.getElementsByTagName("body")[0].classList.add("is-loading");
      sessionStorage.setItem("animation", "true");
      /*if (navState === -1 && window.scrollY <= 10) {*/
      /*window.addEventListener(
        "wheel",
        (e) => {
          e.preventDefault();
        },
        { passive: false }
      );*/
      gsap.from(letterAnimation, {
        duration: 2,
        top: "500%",
        left: "30%",
        scale: "17",

        delay: 1,
        pin: true,
        scrollTrigger: {
          trigger: document.getElementById("hero"),
          start: "top top",
        },
        onComplete: () => {
          document
            .getElementsByTagName("body")[0]
            .classList.remove("is-loading");
        },
        /*onComplete: window.removeEventListener(
          "wheel",
          (e) => {
            e.preventDefault();
          },
          { passive: false }
        ),*/
      });
      gsap.from(LogoAnimation, {
        opacity: 0,
        duration: 0.5,

        delay: 2.5,
      });

      /*gsap.to(letterAnimation, {
      duration: 0.1,
      opacity: 0,

      delay: 2,
    });*/

      gsap.from(MenuAnimation, {
        backgroundColor: "transparent",
        duration: 1,

        delay: 2.5,
      });

      gsap.from(MenuAnimation, { color: "white", duration: 1, delay: 1 });
    }
    /*}*/
  }, [isDesktop()]);

  useEffect(() => {
    handleNavStateChange();
  }, [navState]);

  const handleScroll = (e) => {
    if (window.scrollY >= 50) {
      if (e.deltaY > 0) {
        setNavState(1);
      } else {
        setNavState(2);
      }
    } else {
      setNavState(0);
    }
  };

  const handleNavStateChange = () => {
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
          {" "}
          <a href="/"></a>
          <img
            id="logo"
            ref={(el) => (LogoAnimation = el)}
            src="/Logo/logo1.svg"
          ></img>
          {/*<object
            type="application/x-shockwave-flash"
            ref={(el) => (letterAnimation = el)}
            data={"/Logo/letter.svg"}
            width="300"
            height="300"
  ></object>*/}
          <a href="/">
            <img
              id="letter"
              ref={(el) => (letterAnimation = el)}
              width="300"
              height="300"
              src="/Logo/letter.svg"
            ></img>
          </a>
        </Styled.LogoContainer>

        {size[0] >= 768 ? (
          <Menu_list state={navState}></Menu_list>
        ) : (
          <>
            <a
              style={{ zIndex: "999999" }}
              onClick={() => {
                setMenu_opened((prev) => !prev);
              }}
            >
              <img style={{ height: "100%" }} src="/Buttons/Menu.svg"></img>
            </a>
            <Mobile_menu menu_opened={menu_opened}></Mobile_menu>
          </>
        )}
      </Styled.MenuContainer>
    </Styled.Fixed>
  );
};

export default Menu_top;
