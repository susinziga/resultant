import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useRef, useState } from "react";

import * as Styled from "./Menu_fixed.styled";

import { Waypoint } from "react-waypoint";
import useSize from "../../custom_hooks/useSize";
import gsap from "gsap";

const Menu_fixed = (props) => {
  const { t, lang } = useTranslation("home");

  const { isDesktop } = useSize();

  const animationContainer = useRef();

  return (
    <>
      {isDesktop() ? (
        <>
          <Waypoint
            onEnter={() => {
              var tl = gsap.timeline({ delay: 0.2 });
              tl.to(animationContainer.current.children[0], {
                transform: "scale(1.1)",
                color: "var(--dark)",
                lineHeight: "4.2rem",
                duration: 0.5,
              });
              tl.to(animationContainer.current.children[1], {
                transform: "scale(1.1)",
                color: "var(--dark)",

                duration: 0.5,
              });
              tl.to(animationContainer.current.children[2], {
                transform: "scale(1.1)",
                color: "var(--dark)",
                lineHeight: "4.2rem",
                duration: 0.5,
              });
            }}
          >
            <Styled.MenuFixedContainer
              {...props}
              id="fixedM"
              ref={animationContainer}
            >
              <Styled.MenuItem>{t("menu_item1")}</Styled.MenuItem>
              <Styled.MenuItem>{t("menu_item2")}</Styled.MenuItem>
              <Styled.MenuItem>{t("menu_item3")}</Styled.MenuItem>
            </Styled.MenuFixedContainer>
          </Waypoint>
        </>
      ) : (
        <Waypoint
          onEnter={() => {
            var tl = gsap.timeline({ delay: 0.2 });
            tl.to(animationContainer.current.children[0], {
              transform: "scale(1.1)",
              color: "var(--dark)",
              lineHeight: "4.2rem",
              duration: 0.5,
            });
            tl.to(animationContainer.current.children[1], {
              transform: "scale(1.1)",
              color: "var(--dark)",

              duration: 0.5,
            });
            tl.to(animationContainer.current.children[2], {
              transform: "scale(1.1)",
              color: "var(--dark)",
              lineHeight: "4.2rem",
              duration: 0.5,
            });
          }}
        >
          <Styled.MenuFixedContainer
            {...props}
            id="fixedM"
            ref={animationContainer}
          >
            <Styled.MenuItem>{t("menu_item1")}</Styled.MenuItem>
            <Styled.MenuItem>{t("menu_item2")}</Styled.MenuItem>
            <Styled.MenuItem>{t("menu_item3")}</Styled.MenuItem>
          </Styled.MenuFixedContainer>
        </Waypoint>
      )}
    </>
  );
};

export default Menu_fixed;
