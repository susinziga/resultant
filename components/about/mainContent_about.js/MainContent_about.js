import React, { useState } from 'react';
import { MainContentContainer, MainContentHeading, MainContentLine, MainContentNavBar } from './MainContent.styled';
import useTranslation from "next-translate/useTranslation";


const MainContent_about = (props) => {
    const [selected1, setSelected1] = useState(true);
    const [selected2, setSelected2] = useState(false);
    const [selected3, setSelected3] = useState(false);
    const [selected4, setSelected4] = useState(false);

  const { t, lang } = useTranslation();

  const navItem1 = t("about:nav_item1");
  const navItem2 = t("about:nav_item2");
  const navItem3 = t("about:nav_item3");
  const navItem4 = t("about:nav_item4");

  const handleScroll = (e) => {
    console.log("gas2");
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) { 
        console.log("gas");
     }
  }
 

  return (<>
    <MainContentContainer {...props} onScroll={handleScroll}>
        <MainContentNavBar>
            <MainContentHeading selected={selected1}>{navItem1}</MainContentHeading>
            <MainContentLine ></MainContentLine>
            <MainContentHeading selected={selected2}>{navItem2}</MainContentHeading>
            <MainContentHeading selected={selected3}>{navItem3}</MainContentHeading>
            <MainContentHeading selected={selected4}>{navItem4}</MainContentHeading>
        </MainContentNavBar>
    </MainContentContainer>
  </>
  )
}

export default MainContent_about;