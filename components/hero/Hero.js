import React, { useEffect, useRef, useState } from "react";

import * as Styled from "./Hero.styled";

import Image from "next/image";

import gsap from "gsap";

import useTranslation from "next-translate/useTranslation";
import { BodyText3, Header1 } from "../../basic_components/texts/Texts";
import Button from "../../basic_components/button/Button";

const Hero = () => {
  const heroImageAnimation = useRef(null);

  const heroContainerAnimation = useRef(null);

  const lineAnimation = useRef(null);

  const [menuHeight, setMenuHeight] = useState("90px");

  const { t, lang } = useTranslation("");

  /* CONTENT */

  const heroImage = "./AboveTheFold/hero2.webp";

  const hero_title = t("home:hero_title");

  const hero_paragraph = t("home:hero_paragraph");

  useEffect(() => {
    gsap.from(heroImageAnimation, {
      duration: 2,
      transform: 0,
      top: "-10%",
      scale: 1,
      delay: 0.2,
    });

    gsap.from(lineAnimation, {
      duration: 2,
      width: "120%",
      left: "-20%",
      delay: 0.2,
    });

    const menuHeightt =
      document.getElementsByClassName("menu_top_desktop")[0].offsetHeight;

    setMenuHeight(menuHeightt);
  }, []);

  return (
    <Styled.HeroContainer
      ref={(el) => (heroContainerAnimation = el)}
      menuHeight={menuHeight}
    >
      <img ref={(el) => (heroImageAnimation = el)} src={heroImage}></img>
      <Styled.HeroTexts>
        <Header1 white className="white">
          {hero_title}
        </Header1>
        <p>
          <BodyText3 white>{hero_paragraph}</BodyText3>
        </p>
        <Button primary>Izvedi več</Button>
        <Styled.WhiteLine ref={(el) => (lineAnimation = el)}></Styled.WhiteLine>
      </Styled.HeroTexts>
    </Styled.HeroContainer>
  );
};

export default Hero;
