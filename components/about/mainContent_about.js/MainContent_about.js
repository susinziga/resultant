import React, { useState, useEffect, useRef } from 'react';
import { MainContentContainer, MainContentContent, MainContentHeading, MainContentLine, MainContentNavBar } from './MainContent.styled';
import useTranslation from "next-translate/useTranslation";

import gsap from "gsap";


const MainContent_about = (props) => {
    const [selected1, setSelected1] = useState(true);
    const [selected2, setSelected2] = useState(false);
    const [selected3, setSelected3] = useState(false);
    const [selected4, setSelected4] = useState(false);
    const [transition, setTransition] = useState(false)
    const [initial, setInitial] = useState(true)
    const lineAnimation = useRef(null);
    const navAnimation = useRef(null);
    const contentAnimation = useRef(null);

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


  const handleScroll = (e) => {
    let contentPosition = contentRef.current.getBoundingClientRect().y;
    console.log(contentPosition);
    if(contentPosition < 1){
        gsap.to(lineAnimation, {
            duration: 2.5,
            width: 0,
        });
        gsap.to(navAnimation, {
            duration: 2,
            width: "40%",
            paddingLeft: "5%",
            fontSize: "3rem"
        });
        gsap.to(contentAnimation, {
            duration: 2,
            width: "60%",
        });
        setInitial(false);
       setTransition(true);
    };
  }


  return (<>
    <MainContentContainer {...props} ref={contentRef} transition={transition}  onScroll={handleScroll}>
        <MainContentNavBar ref={(el) => (navAnimation = el)}>
            <MainContentHeading initial={initial} selected={selected1} transition={transition}>{navItem1}</MainContentHeading>
            <MainContentLine  ref={(el) => (lineAnimation = el)}></MainContentLine>
            <MainContentHeading selected={selected2} transition={transition}>{navItem2}</MainContentHeading>
            <MainContentHeading selected={selected3} transition={transition}>{navItem3}</MainContentHeading>
            <MainContentHeading selected={selected4} transition={transition}>{navItem4}</MainContentHeading>
        </MainContentNavBar>
        <MainContentContent ref={(el) => (contentAnimation = el)}></MainContentContent>
    </MainContentContainer>
  </>
  )
}

export default MainContent_about;