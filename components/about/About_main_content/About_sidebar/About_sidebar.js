import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useRef } from "react";

import * as Styled from "./About_sidebar.styled";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

const About_sidebar = () => {
  const { t, lang } = useTranslation();

  const navAnimation = useRef(null);

  const navItem1 = t("about:nav_item1");
  const navItem2 = t("about:nav_item2");
  const navItem3 = t("about:nav_item3");
  const navItem4 = t("about:nav_item4");

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(navAnimation.current, {
      width: "100%",

      duration: 2,
      background: "red",

      fontSize: "3rem",
      scrollTrigger: { trigger: navAnimation.current, start: "top top" },
    });

    /* gsap.to(lineAnimation, {
      duration: 2.5,
      width: 0,
      scrollTrigger: { trigger: contentRef.current, start: "top-=10% top" },
    });*/

    /*gsap.to(contentAnimation, {
      paddingTop: "15%",
      width: "70%",
      duration: 2,
      scrollTrigger: { trigger: contentRef.current, start: "top-=10% top" },
      onComplete: () => {},
    });*/
  }, []);

  return (
    <Styled.About_sidebar_container ref={navAnimation}>
      <Styled.Sidebar_title selected={true}>{navItem1}</Styled.Sidebar_title>
      <Styled.Sidebar_title selected={true}>{navItem2}</Styled.Sidebar_title>
      <Styled.Sidebar_title selected={true}>{navItem3}</Styled.Sidebar_title>
      <Styled.Sidebar_title selected={true}>{navItem4}</Styled.Sidebar_title>
    </Styled.About_sidebar_container>
  );
};

export default About_sidebar;
