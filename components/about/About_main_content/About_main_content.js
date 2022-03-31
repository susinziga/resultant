import React from "react";
import About_content from "./About_content/About_content";

import * as Styled from "./About_main_content.styled";
import About_sidebar from "./About_sidebar/About_sidebar";

const About_main_content = () => {
  return (
    <Styled.About_main_content_container>
      <About_sidebar></About_sidebar>
      <About_content></About_content>
    </Styled.About_main_content_container>
  );
};

export default About_main_content;
