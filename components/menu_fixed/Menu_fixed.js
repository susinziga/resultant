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
      <Styled.MenuFixedContainer
        {...props}
        id="fixedM"
        ref={animationContainer}
      >
        <Styled.MenuItemWrapper>
          <Styled.ImageWrapper className="desktop">
            <Styled.MenuItemImg
              width={290}
              height={225}
              quality={100}
              layout="responsive"
              src="/Home/vrednote-strokovnost_desktop.webp"
              alt="Strokovnost"
            ></Styled.MenuItemImg>
          </Styled.ImageWrapper>
          <Styled.ImageWrapper className="mobile">
            <Styled.MenuItemImg
              width={290}
              height={225}
              quality={100}
              layout="responsive"
              src="/Home/vrednote-strokovnost_mobile.webp"
              alt="Strokovnost"
            ></Styled.MenuItemImg>
          </Styled.ImageWrapper>
          <Styled.MenuItem
            dangerouslySetInnerHTML={{ __html: t("menu_item1") }}
          ></Styled.MenuItem>
        </Styled.MenuItemWrapper>
        <Styled.MenuItemWrapper>
          <Styled.ImageWrapper>
            <Styled.MenuItemImg
              width={820}
              height={638}
              layout="responsive"
              src="/Home/vrednote-usmerjenost.webp"
              alt="Usmerjenost"
            ></Styled.MenuItemImg>
          </Styled.ImageWrapper>
          <Styled.MenuItem
            dangerouslySetInnerHTML={{ __html: t("menu_item2") }}
          ></Styled.MenuItem>
        </Styled.MenuItemWrapper>
        <Styled.MenuItemWrapper>
          <Styled.ImageWrapper>
            <Styled.MenuItemImg
              width={820}
              height={638}
              layout="responsive"
              src="/Home/vrednote-zanesljivost.webp"
              alt="Zanesljivost"
            ></Styled.MenuItemImg>
          </Styled.ImageWrapper>
          <Styled.MenuItem
            dangerouslySetInnerHTML={{ __html: t("menu_item3") }}
          ></Styled.MenuItem>
        </Styled.MenuItemWrapper>
      </Styled.MenuFixedContainer>

      {/* {isDesktop() ? (
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
      )} */}
    </>
  );
};

export default Menu_fixed;
