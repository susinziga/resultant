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

const About_content = ({ initAnim, isActive }) => {
  const contentAnimation = useRef(null);

  const { contentSwiperActive } = useContext(AboutContext);

  useEffect(() => {
    if (initAnim === true) {
      gsap.to(
        contentAnimation.current,

        {
          width: "100%",
          duration: 2,
        }
      );
    }
  }, [initAnim]);

  useEffect(() => {
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
  }, [contentSwiperActive]);

  return (
    <Styled.About_content_container ref={contentAnimation} id="content_box">
      <div id="approach">
        <About_content_1
          isActive={isActive && contentSwiperActive === 0}
          className="content_panel"
        ></About_content_1>
      </div>
      <div id="team">
        <TeamSlider
          isActive={isActive && contentSwiperActive === 1}
          className="content_panel"
        ></TeamSlider>
      </div>
      <div id="partners">
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
      </div>
    </Styled.About_content_container>
  );
};

export default About_content;
