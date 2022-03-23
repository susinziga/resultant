import React, { useEffect, useRef, useState } from "react";

import * as Styled from "./Hero.styled";

import Image from "next/image";

import gsap from "gsap";

import useTranslation from "next-translate/useTranslation";
import { BodyText3, Header1 } from "../../basic_components/texts/Texts";
import Button from "../../basic_components/button/Button";

const Hero = (props) => {
  const heroImageAnimation = useRef(null);

  const heroContainerAnimation = useRef(null);

  const lineAnimation = useRef(null);

  const [menuHeight, setMenuHeight] = useState("90px");

  const { t, lang } = useTranslation("aboveTheFold");

  /* CONTENT */

  const heroImage = "./AboveTheFold/hero2.webp";

  const hero_title = t("hero_title");

  const hero_paragraph = t("hero_paragraph");
  const hero_paragraph2 = t("hero_paragraph2");

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
      width: "105%",
      left: "-5%",
      delay: 0.2,
    });

    const menuHeightt =
      document.getElementsByClassName("menu_top_desktop")[0].offsetHeight;

    setMenuHeight(menuHeightt);
  }, []);

  return (
    <Styled.HeroContainer
      {...props}
      ref={(el) => (heroContainerAnimation = el)}
      menuHeight={menuHeight}
    >
      <div ref={(el) => (heroImageAnimation = el)}>
        <img src={heroImage}></img>
      </div>
      <Styled.HeroTexts>
        <Header1 white className="white">
          {hero_title}
        </Header1>
        <p>
          <BodyText3 white>{hero_paragraph}</BodyText3>
        </p>
        <p>
          <BodyText3 white>{hero_paragraph2}</BodyText3>
        </p>
        <Button primary>Izvedi več</Button>
        <Styled.WhiteLine ref={(el) => (lineAnimation = el)}></Styled.WhiteLine>
      </Styled.HeroTexts>
    </Styled.HeroContainer>
  );
};

export default Hero;
