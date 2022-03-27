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

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import gsap from "gsap";
import MainContentSlider from "./MainContentSlider_about/MainContentSlider";
import TeamSlider from "./teamSlider/TeamSlider";

const MainContent_about = (props) => {
  const [transition, setTransition] = useState(false);
  const [initial, setInitial] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(1);
  const [isContainerActive, setIsContainerActive] = useState(false);

  const lineAnimation = useRef(null);
  const navAnimation = useRef(null);
  const contentAnimation = useRef(null);

  const { t, lang } = useTranslation();

  const navItem1 = t("about:nav_item1");
  const navItem2 = t("about:nav_item2");
  const navItem3 = t("about:nav_item3");
  const navItem4 = t("about:nav_item4");

  const contentRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  /*useEffect(() => {
    window.addEventListener("wheel", (e, contentRef) => {
      handleScroll(e, contentRef);
    });
    return () => {
      return window.removeEventListener("wheel", (e, contentRef) => {
        handleScroll(e, contentRef);
      });
    };
  }, []);*/

  useEffect(() => {
    ScrollTrigger.create({
      trigger: contentRef.current,
      start: "top-=10% top",

      // end: "bottom 50%+=100px",
      onToggle: (self) => {
        setInitial(false);
        setTransition(true);

        setIsContainerActive(self.isActive);
        /*disableBodyScroll(document.getElementsByTagName("body")[0], {
          reserveScrollBarGap: true,
        });*/
      },
    });

    gsap.to(navAnimation, {
      width: "30%",
      paddingLeft: "0.1%",
      duration: 2,

      fontSize: "3rem",
      scrollTrigger: { trigger: contentRef.current, start: "top-=10% top" },
    });

    gsap.to(lineAnimation, {
      duration: 2.5,
      width: 0,
      scrollTrigger: { trigger: contentRef.current, start: "top-=10% top" },
    });

    gsap.to(contentAnimation, {
      paddingTop: "15%",
      width: "70%",
      duration: 2,
      scrollTrigger: { trigger: contentRef.current, start: "top-=10% top" },
      onComplete: () => {},
    });
  }, []);

  useEffect(() => {
    if (isContainerActive) {
      disableBodyScroll(document.getElementsByTagName("body")[0], {
        reserveScrollBarGap: true,
      });
    } else {
      enableBodyScroll(document.getElementsByTagName("body")[0]);
    }
  }, [isContainerActive]);

  let selected = 1;

  const nextSection = (e = 0) => {
    console.log("NEXT");
    let tempS = selectedMenu;
    tempS++;

    setSelectedMenu(tempS);
  };

  const prevSection = (e) => {
    let tempS = selectedMenu;
    console.log("PREV");
    tempS--;
    console.log(tempS);

    if (tempS < 1) {
      window.scrollBy({
        top: e.deltaY,

        behavior: "smooth",
      });
      enableBodyScroll(document.getElementsByTagName("body")[0]);
      setIsContainerActive((prevState) => {
        return !prevState;
      });
    }
    setSelectedMenu(tempS);
  };

  const forceSetSelected = (id) => {
    setSelectedMenu(id);
  };

  return (
    <>
      <MainContentContainer
        {...props}
        ref={contentRef}
        transition={transition}
        id="haha"
      >
        <MainContentNavBar ref={(el) => (navAnimation = el)}>
          <a onClick={() => forceSetSelected(1)}>
            <MainContentHeading
              initial={initial}
              selected={selectedMenu <= 1}
              transition={transition}
            >
              {navItem1}
            </MainContentHeading>
          </a>
          <MainContentLine ref={(el) => (lineAnimation = el)}></MainContentLine>
          <a onClick={() => forceSetSelected(2)}>
            <MainContentHeading
              selected={selectedMenu === 2}
              transition={transition}
            >
              {navItem2}
            </MainContentHeading>
          </a>
          <a onClick={() => forceSetSelected(3)}>
            <MainContentHeading
              selected={selectedMenu === 3}
              transition={transition}
            >
              {navItem3}
            </MainContentHeading>
          </a>
          <a onClick={() => forceSetSelected(4)}>
            <MainContentHeading
              selected={selectedMenu === 4}
              transition={transition}
            >
              {navItem4}
            </MainContentHeading>
          </a>
        </MainContentNavBar>
        <MainContentContent ref={(el) => (contentAnimation = el)}>
          {selectedMenu <= 1 ? (
            <MainContentSlider
              isActive={isContainerActive}
              nextSection={nextSection}
              prevSection={prevSection}
            />
          ) : (
            ""
          )}
          {selectedMenu == 2 ? (
            <TeamSlider
              isActive={isContainerActive}
              nextSection={nextSection}
              prevSection={prevSection}
            ></TeamSlider>
          ) : (
            ""
          )}
        </MainContentContent>
      </MainContentContainer>
    </>
  );
};

export default MainContent_about;
