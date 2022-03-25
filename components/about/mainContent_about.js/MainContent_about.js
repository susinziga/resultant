import React, { useState, useEffect, useRef } from 'react';
import { MainContentContainer, MainContentHeading, MainContentLine, MainContentNavBar } from './MainContent.styled';
import useTranslation from "next-translate/useTranslation";

import gsap from "gsap";


const MainContent_about = (props) => {
    const [selected1, setSelected1] = useState(true);
    const [selected2, setSelected2] = useState(false);
    const [selected3, setSelected3] = useState(false);
    const [selected4, setSelected4] = useState(false);
    const lineAnimation = useRef(null);

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
    if(contentPosition === 0){
        gsap.to(lineAnimation, {
            duration: 0.5,
            width: 0,
          });
    };
    
     
  }
 

  return (<>
    <MainContentContainer {...props} ref={contentRef} onScroll={handleScroll}>
        <MainContentNavBar>
            <MainContentHeading selected={selected1}>{navItem1}</MainContentHeading>
            <MainContentLine  ref={(el) => (lineAnimation = el)}></MainContentLine>
            <MainContentHeading selected={selected2}>{navItem2}</MainContentHeading>
            <MainContentHeading selected={selected3}>{navItem3}</MainContentHeading>
            <MainContentHeading selected={selected4}>{navItem4}</MainContentHeading>
        </MainContentNavBar>
    </MainContentContainer>
  </>
  )
}

export default MainContent_about;