import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useRef, useState } from "react";

import * as Styled from "./Menu_fixed.styled";

import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

const Menu_fixed = (props) => {
  const { t, lang } = useTranslation("home");
  const contentRef = useRef(null);

  const [centered, setCentered] = useState(false);

  const [menuSelected, setMenuSelected] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      console.log("adasdasd");
      handleScroll(e, contentRef);
    });
  }, []);
  /*useEffect(() => {
    window.addEventListener("scroll", (e) => {
      e.preventDefault();
    });
  }, []);*/

  useEffect(() => {
    if (centered) {
      window.addEventListener("wheel", handleWheel);
    }
  }, [centered]);

  let lastY = 0;
  let direction = "not yet";
  const handleScroll = (e) => {
    console.log("SCROLL_HANDLE_MENU");

    let contentPosition = contentRef.current.getBoundingClientRect();
    let windowHeight = window.innerHeight;

    if (!centered) {
      if (
        windowHeight / 2 - 60 > contentPosition.y &&
        windowHeight / 2 - 80 < contentPosition.y
      ) {
        setCentered(true);
        disableBodyScroll(document.getElementsByTagName("body")[0]);
      } else {
      }
    } else {
    }
  };

  const handleWheel = (e) => {
    let selected = 0;
    if (e.deltaY > 0) {
      setMenuSelected((prev) => {
        if (prev < 2) {
          selected = prev + 1;
          return prev + 1;
        } else {
          selected = prev;
          return prev;
        }
      });
      direction = "down";
    } else {
      setMenuSelected((prev) => {
        if (prev > 0) {
          selected = prev - 1;
          return prev - 1;
        } else {
          selected = prev;
          return prev;
        }
      });
      direction = "up";
    }

    console.log(selected);
    if (selected === 0 && direction === "up") {
      enableBodyScroll(document.getElementsByTagName("body")[0]);
      window.scrollBy(0, -50);
      setCentered(false);
      window.removeEventListener("wheel", handleWheel);
    }

    if (selected === 2 && direction === "down") {
      enableBodyScroll(document.getElementsByTagName("body")[0]);
      window.scrollBy(0, 50);
      setCentered(false);
      window.removeEventListener("wheel", handleWheel);
    }
  };
  return (
    <Styled.MenuFixedContainer ref={contentRef} {...props} id="fixedM">
      <Styled.MenuItem active={menuSelected === 0}>
        {t("menu_item1")}
      </Styled.MenuItem>
      <Styled.MenuItem active={menuSelected === 1}>
        {t("menu_item2")}
      </Styled.MenuItem>
      <Styled.MenuItem active={menuSelected === 2}>
        {t("menu_item3")}
      </Styled.MenuItem>
    </Styled.MenuFixedContainer>
  );
};

export default Menu_fixed;
