import React from "react";
import About_main_content from "./About_main_content/About_main_content";

import * as Styled from "./About_page.styled";
import About_about from "./About_section/About_about";

const About_page = () => {
  return (
    <Styled.About_page_container>
      <About_about></About_about>
      <About_main_content></About_main_content>
    </Styled.About_page_container>
  );
};

export default About_page;
