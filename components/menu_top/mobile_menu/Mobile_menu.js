import React, { useState, useEffect } from "react";

import Button from "../../../basic_components/button/Button";

import gsap from "gsap";

const Mobile_menu = ({ menu_opened }) => {
  const { t, lang } = useTranslation("aboveTheFold");

  const [opened, setOpened] = useState(false);

  const [subMenuOpened, setSubMenuOpened] = useState(false);

  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    let tl = gsap.timeline({ paused: true });
    tl.to(".mobile_nav_menu", { transform: "translateX(0)" });
    tl.to("#hamburger_icon", { filter: "invert(1)", duration: 0.5 }, 0.1);
    tl.to(".mobile_nav1", { transform: "translateX(0)" }, 0.1);
    tl.to(".mobile_nav2", { transform: "translateX(0)" }, 0.2);
    tl.to(".mobile_nav3", { transform: "translateX(0)" }, 0.3);
    tl.to(".mobile_nav4", { transform: "translateX(0)" }, 0.4);
    tl.to(".mobile_nav5", { transform: "translateX(0)" }, 0.5);
    setAnimation(tl);
  }, []);

  useEffect(() => {
    if (animation == null) return;
    console.log("asd");
    if (menu_opened) {
      setOpened(menu_opened);

      animation.play();
    } else {
      setSubMenuOpened(false);
      setOpened(menu_opened);

      console.log(animation);
      animation.reverse();
    }
  }, [menu_opened]);

  return (
    <>
      <Container opened={opened} className="mobile_nav_menu">
        <Button
          href="/"
          className="nav_item mobile_nav1"
          terciary
          opened={opened}
        >
          {t("nav_item0")}
        </Button>
        <Button href="/o-nas" className="nav_item mobile_nav2" terciary>
          {t("nav_item1")}
        </Button>
        <Button
          className="nav_item drop-button mobile_nav3"
          terciary
          arrowDown
          onClick={() => {
            console.log("OPEN");
            setSubMenuOpened((prev) => !prev);
          }}
        >
          {t("nav_item2")}
        </Button>
        <Mobile_menu_dropdown opened={subMenuOpened}></Mobile_menu_dropdown>
        {/*<Button className="nav_item mobile_nav4" terciary>
          {t("nav_item3")}
        </Button>*/}
        <Button href="/kontakt" primary className="contact mobile_nav5">
          {t("nav_item4")}
        </Button>
      </Container>
    </>
  );
};

import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import Mobile_menu_dropdown from "./Mobile_menu_dropdown";

const Container = styled.div`
  /*transition: 2s all;

  ${(props) =>
    props.opened
      ? "transform: translateX(0);"
      : "transform: translateX(-100%);"}*/
  transform: translateX(-100%);
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  padding-top: 1rem;

  align-items: center;
  display: flex;
  flex-direction: column;

  z-index: 999998;
  background-color: var(--blue);

  color: #fff;

  gap: 1rem;

  a.contact {
    font-size: 1.7rem;
  }

  /* .mobile_nav {
    ${(props) =>
    props.opened
      ? "transition:1.5s all;transform: translateX(0);"
      : "transition:1.5s all;transform: translateX(-100%);"}
  }*/

  .mobile_nav1,
  .mobile_nav2,
  .mobile_nav3,
  .mobile_nav4,
  .mobile_nav5 {
    transform: translateX(-100%);
    font-size: 2.5rem;
  }

  .mobile_nav3 img {
    filter: invert(1);
  }
`;

export default Mobile_menu;
