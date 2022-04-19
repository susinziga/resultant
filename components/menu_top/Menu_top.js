import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

import * as Styled from "./Menu_top.styled";

import gsap from "gsap";
import useTranslation from "next-translate/useTranslation";

import Menu_list from "./menu_list/Menu_list";

import { useRouter } from "next/router";
import useSize from "../../custom_hooks/useSize";
import Mobile_menu from "./mobile_menu/Mobile_menu";
import LanguagePicker from "./LanguagePicker";

const Menu_top = ({}) => {
  const { t, lang } = useTranslation("aboveTheFold");

  const letterAnimation = useRef(null);

  const LogoAnimation = useRef(null);

  const MenuAnimation = useRef(null);

  const { asPath, pathname, locale } = useRouter();

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

  const [first, setFirst] = useState(false);

  useEffect(() => {
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
        top: "900%",
        left: "-700%",
        scale: "35",

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
      });
      gsap.from(LogoAnimation, {
        opacity: 0,
        duration: 0.5,

        delay: 2.5,
      });

      gsap.from(MenuAnimation, {
        backgroundColor: "transparent",
        duration: 1,

        delay: 2.5,
        onComplete: () => {
          console.log("add event");
          window.addEventListener("wheel", handleScroll);
        },
      });

      gsap.from(MenuAnimation, { color: "white", duration: 1, delay: 1 });
    } else {
      if (first === true) {
        window.addEventListener("wheel", handleScroll);
      }
    }

    /*}*/
    setFirst(true);
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
          top: "0",
          left: "0",
          scale: "1",
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
          top: "20%",
          left: "0",
          scale: "1",
        });

        gsap.to(LogoAnimation, {
          duration: 0.1,

          opacity: 0,
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
      id="menu_top"
      className="menu_top_desktop"
      ref={(el) => (MenuAnimation = el)}
    >
      <Styled.MenuContainer display={navState <= 0}>
        <Styled.LogoContainer>
          <a href={"/" + locale}></a>
          <img
            id="logo"
            ref={(el) => (LogoAnimation = el)}
            src={t("logo_link")}
          ></img>
          {/*<object
            type="application/x-shockwave-flash"
            ref={(el) => (letterAnimation = el)}
            data={"/Logo/letter.svg"}
            width="300"
            height="300"
  ></object>*/}
          <a href={"/" + locale}>
            <img
              id="letter"
              ref={(el) => (letterAnimation = el)}
              src="/Logo/letter_svg.svg"
            ></img>
          </a>
        </Styled.LogoContainer>

        {size[0] >= 768 ? (
          <Styled.Flex>
            <Styled.Flex_language className="nav_item">
              <LanguagePicker></LanguagePicker>
            </Styled.Flex_language>
            <Menu_list state={navState}></Menu_list>
          </Styled.Flex>
        ) : (
          <>
            <a
              style={{ zIndex: "999999" }}
              onClick={() => {
                setMenu_opened((prev) => !prev);
              }}
            >
              <img
                style={{ height: "100%" }}
                src="/Buttons/Menu.svg"
                id="hamburger_icon"
              ></img>
            </a>
            <Mobile_menu menu_opened={menu_opened}></Mobile_menu>
          </>
        )}
      </Styled.MenuContainer>
    </Styled.Fixed>
  );
};

export default Menu_top;
