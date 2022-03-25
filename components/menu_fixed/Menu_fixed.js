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
      e.preventDefault();
      handleScroll(e, contentRef);
    });

    /*window.addEventListener("scroll", (e) => {
      e.preventDefault();
    });*/
    disableBodyScroll(document.getElementsByTagName("body")[0]);
  }, []);

  /*useEffect(() => {
    if (centered) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
  }, [centered]);
*/
  const handleScroll = (e) => {
    console.log("SCROLL_HANDLE_MENU");

    let contentPosition = contentRef.current.getBoundingClientRect();
    let windowHeight = window.innerHeight;
    if (!centered) {
      if (
        windowHeight / 2 - 50 > contentPosition.y &&
        windowHeight / 2 - 100 < contentPosition.y
      ) {
        setCentered(true);
      } else {
        setCentered(false);
      }
    } else {
    }
  };
  return (
    <Styled.MenuFixedContainer ref={contentRef} {...props} id="fixedM">
      <Styled.MenuItem active>{t("menu_item1")}</Styled.MenuItem>
      <Styled.MenuItem>{t("menu_item2")}</Styled.MenuItem>
      <Styled.MenuItem>{t("menu_item3")}</Styled.MenuItem>
    </Styled.MenuFixedContainer>
  );
};

export default Menu_fixed;
