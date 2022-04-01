import React, { useContext } from "react";
import { AboutContext } from "../../../context/aboutContext";
import About_content from "./About_content/About_content";

import * as Styled from "./About_main_content.styled";
import About_sidebar from "./About_sidebar/About_sidebar";

const About_main_content = (props) => {
  let { initAnim, isActive } = props;
  const { contentSwiperActive } = useContext(AboutContext);
  return (
    <Styled.About_main_content_container
      active={contentSwiperActive}
      {...props}
    >
      <About_sidebar initAnim={initAnim}></About_sidebar>
      <About_content initAnim={initAnim} isActive={isActive}></About_content>
    </Styled.About_main_content_container>
  );
};

export default About_main_content;
