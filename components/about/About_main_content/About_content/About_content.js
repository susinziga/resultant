import React, { useRef, useEffect, useState, useContext } from "react";

import * as Styled from "./About_content.styled";

import gsap from "gsap";

import About_content_1 from "./MainContentSlider_about/About_content_1";
import { AboutContext } from "../../../../context/aboutContext";
import TeamSlider from "./teamSlider/TeamSlider";

import Partners_quote from "./partners/Partners_quote";
import Partners_content from "./partners/Partners_content";
import References_quote from "./references/References_quote";
import References_content from "./references/References_content";
import useTranslation from "next-translate/useTranslation";

const About_content = ({ initAnim, isActive }) => {
  const contentAnimation = useRef(null);

  const { t } = useTranslation("about");

  const nav_items = [t("nav_item1")];

  useEffect(() => {
    if (initAnim) {
      gsap.to(document.getElementById("content_box"), {
        transform: "translateX(0)",
        duration: 1,
        delay: 1,
      });
    }
  }, [initAnim]);

  /*useEffect(() => {
    switch (contentSwiperActive) {
      case 0:
        document
          .getElementById("approach")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case 1:
        document.getElementById("team").scrollIntoView({ behavior: "smooth" });
        break;
      case 2:
        document
          .getElementById("partners")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case 3:
        document
          .getElementById("partners2")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case 4:
        document
          .getElementById("references")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case 5:
        document
          .getElementById("references2")
          .scrollIntoView({ behavior: "smooth" });
        break;
    }
  }, [contentSwiperActive]);*/

  return (
    <Styled.About_content_container ref={contentAnimation} id="content_box">
      <div id="approach">
        <About_content_1
          isActive={isActive && contentSwiperActive === 0}
          className="content_panel"
          title={nav_items[0]}
        ></About_content_1>
      </div>
      <div id="team">
        <TeamSlider
          isActive={isActive && contentSwiperActive === 1}
          className="content_panel"
        ></TeamSlider>
      </div>
      {/*<div id="partners">
        <Partners_quote
          isActive={isActive && contentSwiperActive === 2}
          className="content_panel"
        ></Partners_quote>
      </div>
      <div id="partners2">
        <Partners_content
          isActive={isActive && contentSwiperActive === 3}
          className="content_panel"
        ></Partners_content>
      </div>
      <div id="references">
        <References_quote
          isActive={isActive && contentSwiperActive === 4}
          className="content_panel"
        ></References_quote>
      </div>
      <div id="references2">
        <References_content
          isActive={isActive && contentSwiperActive === 5}
          className="content_panel"
        ></References_content>
  </div>*/}
    </Styled.About_content_container>
  );
};

export default About_content;
