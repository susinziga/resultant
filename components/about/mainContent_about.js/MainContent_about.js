import React, { useState, useEffect, useRef } from 'react';
import { MainContentContainer, MainContentContent, MainContentHeading, MainContentLine, MainContentNavBar } from './MainContent.styled';
import useTranslation from "next-translate/useTranslation";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

import gsap from "gsap";
import MainContentSlider from './MainContentSlider_about.js/MainContentSlider';


const MainContent_about = (props) => {
    const [selected1, setSelected1] = useState(true);
    const [selected2, setSelected2] = useState(false);
    const [selected3, setSelected3] = useState(false);
    const [selected4, setSelected4] = useState(false);
    const [transition, setTransition] = useState(false);
    const [initial, setInitial] = useState(true);
    const [selectedMenu, setSelectedMenu] = useState(1);
    const lineAnimation = useRef(null);
    const navAnimation = useRef(null);
    const contentAnimation = useRef(null);
    const sliderAnimation = useRef(null);

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

  useEffect(() => {
    if (centered) {
      window.addEventListener("wheel", handleWheel);
    }
  }, [centered]);

  let selected = 1;
  const handleWheel = (e) => {
    console.log(e.deltaY);
    if (e.deltaY > 0) {
      selected++;
      console.log(selected);
      setSelectedMenu(selected);
    } else {
      selected--;
      setSelectedMenu(selected);
    }

    if(selected == 1) {
      setSelected1(true);
      setSelected2(false);
      setSelected3(false);
      setSelected4(false);
      
    } else if (selected == 2) {
      setSelected1(false);
      setSelected2(true);
      setSelected3(false);
      setSelected4(false);
  
    } else if (selected == 3) {
      setSelected1(false);
      setSelected2(false);
      setSelected3(true);
      setSelected4(false);

    } else if (selected == 4) {
      setSelected1(false);
      setSelected2(false);
      setSelected3(false);
      setSelected4(true);
  } else if(selected > 4) {
    selected = 4; 
  }

  if(selected == 0){
    enableBodyScroll(document.getElementsByTagName("body")[0]);
    
  }
}

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
            paddingLeft: "5%",
            width: "30%",
            fontSize: "3rem"
        });
        gsap.to(contentAnimation, {
           
            paddingTop: "12%",
            width: "65%",
            duration: 2,
           
        });
     
        setInitial(false);
        setTransition(true);
        disableBodyScroll(document.getElementsByTagName("body")[0]);
        setCentered(true);
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
        <MainContentContent ref={(el) => (contentAnimation = el)}>
          {
            selectedMenu == 1 ? <MainContentSlider /> : ""
            
          }
          {
            selectedMenu == 2 ? "" : ""
          }

        </MainContentContent>
    </MainContentContainer>
  </>
  )
}

export default MainContent_about;