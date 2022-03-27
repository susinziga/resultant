import React, { useState, useEffect, useRef } from "react";
import {
  MainContentContainer,
  MainContentContent,
  MainContentHeading,
  MainContentLine,
  MainContentNavBar,
} from "./MainContent.styled";
import useTranslation from "next-translate/useTranslation";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

import gsap from "gsap";
import MainContentSlider from "./MainContentSlider_about.js/MainContentSlider";

const MainContent_about = (props) => {
  const [transition, setTransition] = useState(false);
  const [initial, setInitial] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(1);
  const lineAnimation = useRef(null);
  const navAnimation = useRef(null);
  const contentAnimation = useRef(null);
  const sliderAnimation = useRef(null);

  const { t, lang } = useTranslation();

  const navItem1 = t("about:nav_item1");
  const navItem2 = t("about:nav_item2");
  const navItem3 = t("about:nav_item3");
  const navItem4 = t("about:nav_item4");

  const [centered, setCentered] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", (e, contentRef) => {
      handleScroll(e, contentRef);
    });
  }, []);

  let selected = 1;
  let counter = 1;

  const nextSection = () => {
    selected++;
    setSelectedMenu(selected);
  };

  const prevSection = () => {
    selected--;
    setSelectedMenu(selected);
  };

  const handleEnd = () => {};

  const handleScroll = (e) => {
    let contentPosition = contentRef.current.getBoundingClientRect().y;
    console.log(contentPosition);
    if (contentPosition < 1) {
      counter = 0;
      gsap.to(lineAnimation, {
        duration: 2.5,
        width: 0,
      });
      gsap.to(navAnimation, {
        width: "30%",
        paddingLeft: "0.1%",
        duration: 2,
        fontSize: "3rem",
      });
      gsap.to(contentAnimation, {
        paddingTop: "15%",
        width: "70%",
        duration: 2,
      });

      setInitial(false);
      setTransition(true);
      disableBodyScroll(document.getElementsByTagName("body")[0]);
      setCentered(true);
    }
  };

  return (
    <>
      <MainContentContainer
        {...props}
        ref={contentRef}
        transition={transition}
        onScroll={handleScroll}
      >
        <MainContentNavBar ref={(el) => (navAnimation = el)}>
          <MainContentHeading
            initial={initial}
            selected={selectedMenu === 1}
            transition={transition}
          >
            {navItem1}
          </MainContentHeading>
          <MainContentLine ref={(el) => (lineAnimation = el)}></MainContentLine>
          <MainContentHeading
            selected={selectedMenu === 2}
            transition={transition}
          >
            {navItem2}
          </MainContentHeading>
          <MainContentHeading
            selected={selectedMenu === 3}
            transition={transition}
          >
            {navItem3}
          </MainContentHeading>
          <MainContentHeading
            selected={selectedMenu === 4}
            transition={transition}
          >
            {navItem4}
          </MainContentHeading>
        </MainContentNavBar>
        <MainContentContent ref={(el) => (contentAnimation = el)}>
          {selectedMenu == 1 ? (
            <MainContentSlider
              nextSection={nextSection}
              prevSection={prevSection}
              handleEnd={handleEnd}
            />
          ) : (
            ""
          )}
          {selectedMenu == 2 ? "" : ""}
        </MainContentContent>
      </MainContentContainer>
    </>
  );
};

export default MainContent_about;
