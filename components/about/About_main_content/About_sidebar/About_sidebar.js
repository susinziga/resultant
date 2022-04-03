import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useRef, useContext } from "react";

import * as Styled from "./About_sidebar.styled";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { AboutContext } from "../../../../context/aboutContext";

const About_sidebar = ({ initAnim }) => {
  const { t, lang } = useTranslation();

  const lineAnimation = useRef(null);
  const navAnimation = useRef(null);
  const contentAnimation = useRef(null);

  let { contentSwiperActive, setContentSwiperActive } =
    useContext(AboutContext);

  const navItem1 = t("about:nav_item1");
  const navItem2 = t("about:nav_item2");
  const navItem3 = t("about:nav_item3");
  const navItem4 = t("about:nav_item4");

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (initAnim === true) {
      console.log("ANIMATION");

      gsap.to(
        navAnimation.current,

        {
          background: "transparent",
          duration: 1,
          delay: 1,
        }
      );

      gsap.to(".sidebar", {
        transform: " scale(1) translateX(0) ",
        lineHeight: "4.5rem",
        opacity: 1,
        duration: 2,
        delay: 0,
      });
    }
  }, [initAnim]);

  return (
    <Styled.About_sidebar_container ref={navAnimation} initAnim={initAnim}>
      <Styled.Sidebar_title
        initAnim={!initAnim}
        onClick={() => setContentSwiperActive(0)}
        className="sidebar"
        selected={contentSwiperActive === 0}
      >
        {navItem1}
      </Styled.Sidebar_title>

      <Styled.Sidebar_title
        onClick={() => setContentSwiperActive(1)}
        className="sidebar"
        selected={contentSwiperActive === 1}
      >
        {navItem2}
      </Styled.Sidebar_title>
      <Styled.Sidebar_title
        onClick={() => setContentSwiperActive(2)}
        className="sidebar"
        selected={contentSwiperActive === 2 || contentSwiperActive === 3}
      >
        {navItem3}
      </Styled.Sidebar_title>
      <Styled.Sidebar_title
        onClick={() => setContentSwiperActive(4)}
        className="sidebar"
        selected={contentSwiperActive === 4 || contentSwiperActive === 5}
      >
        {navItem4}
      </Styled.Sidebar_title>
    </Styled.About_sidebar_container>
  );
};

export default About_sidebar;
