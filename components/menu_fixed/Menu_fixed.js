import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useRef, useState } from "react";

import * as Styled from "./Menu_fixed.styled";

import disableScroll from "disable-scroll";
import { Waypoint } from "react-waypoint";

const Menu_fixed = (props) => {
  const { t, lang } = useTranslation("home");
  const contentRef = useRef(null);

  const [centered, setCentered] = useState(false);

  const [menuSelected, setMenuSelected] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
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
    }
  }, [centered]);

  let direction = "not yet";
  const handleScroll = (e) => {
    //console.log("SCROLL_HANDLE_MENU");

    let contentPosition = contentRef.current.getBoundingClientRect();
    let windowHeight = window.innerHeight;

    if (!centered) {
      if (
        windowHeight / 2 - 60 > contentPosition.y &&
        windowHeight / 2 - 80 < contentPosition.y
      ) {
        window.addEventListener("wheel", handleWheel);
        setCentered(true);
        disableScroll.on(null, {
          authorizedInInputs: [32, 37, 38, 39, 40],
          disableKeys: true,
          disableScroll: true,
          disableWheel: false,
          keyboardKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40],
        });
      } else {
      }
    } else {
    }
  };

  const handleWheel = (e) => {
    let selected = 0;
    if (e.deltaY > 0) {
      setMenuSelected((prev) => {
        if (prev < 14) {
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

    if (selected === 0 && direction === "up") {
      //enableBodyScroll(document.getElementsByTagName("body")[0]);
      window.scrollBy(0, -50);

      disableScroll.off();
      window.removeEventListener("wheel", handleWheel);
    }

    if (selected === 14 && direction === "down") {
      //enableBodyScroll(document.getElementsByTagName("body")[0]);
      window.scrollBy(0, 50);
      disableScroll.off();
      window.removeEventListener("wheel", handleWheel);
    }
  };
  return (
    <Waypoint
      /*onEnter={({}) => {
        window.addEventListener("wheel", handleWheel);
        //setCentered(true);
        disableScroll.on(null, {
          authorizedInInputs: [32, 37, 38, 39, 40],
          disableKeys: true,
          disableScroll: true,
          disableWheel: false,
          keyboardKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40],
        });
      }}
      onLeave={() => console.log("LEFT")}*/

      topOffset={0}
      bottomOffset={700}
      //debug={true}
    >
      <Styled.MenuFixedContainer ref={contentRef} {...props} id="fixedM">
        <Styled.MenuItem active={menuSelected < 5}>
          {t("menu_item1")}
        </Styled.MenuItem>
        <Styled.MenuItem active={menuSelected >= 5 && menuSelected <= 10}>
          {t("menu_item2")}
        </Styled.MenuItem>
        <Styled.MenuItem active={menuSelected > 10}>
          {t("menu_item3")}
        </Styled.MenuItem>
      </Styled.MenuFixedContainer>
    </Waypoint>
  );
};

export default Menu_fixed;
