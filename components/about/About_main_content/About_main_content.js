import React from "react";
import { Waypoint } from "react-waypoint";
import useSize from "../../../custom_hooks/useSize";
import About_content from "./About_content/About_content";
import * as Styled from "./About_main_content.styled";
import About_sidebar from "./About_sidebar/About_sidebar";

const About_main_content = (props) => {
  let { initAnim, isActive, setInit } = props;

  const { isDesktop } = useSize();

  return (
    <Waypoint
      topOffset="20%"
      bottomOffset={"100%"}
      onEnter={() => {
        console.log("entered");
        setInit(true);
      }}
      onLeave={() => {
        console.log("leave");
      }}
    >
      <Styled.About_main_content_container {...props}>
        {isDesktop() ? <About_sidebar initAnim={initAnim}></About_sidebar> : ""}

        <About_content initAnim={initAnim} isActive={isActive}></About_content>
      </Styled.About_main_content_container>
    </Waypoint>
  );
};

export default About_main_content;
