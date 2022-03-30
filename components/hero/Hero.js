import React, { useEffect, useRef, useState } from "react";

import * as Styled from "./Hero.styled";

import Image from "next/image";

import gsap from "gsap";

import useTranslation from "next-translate/useTranslation";
import {
  BodyText2,
  BodyText3,
  Header1,
  Subtitle1,
} from "../../basic_components/texts/Texts";
import Button from "../../basic_components/button/Button";

import useSize from "../../custom_hooks/useSize";

const Hero = (props) => {
  const heroImageAnimation = useRef(null);

  const heroContainerAnimation = useRef(null);

  const lineAnimation = useRef(null);

  const [menuHeight, setMenuHeight] = useState("90px");

  const [initAnimation, setInitAnimation] = useState(true);

  const { t, lang } = useTranslation("aboveTheFold");

  const { isDesktop } = useSize();

  /* CONTENT */

  const heroImage = "./AboveTheFold/hero2.webp";
  const heroImage_mobile = "./AboveTheFold/hero_mobile.png";

  const hero_title = t("hero_title");

  const hero_paragraph = t("hero_paragraph");
  const hero_paragraph2 = t("hero_paragraph2");

  useEffect(() => {
    if (isDesktop()) {
      const menuHeightt =
        document.getElementsByClassName("menu_top_desktop")[0].offsetHeight;

      gsap.from(heroImageAnimation, {
        duration: 2,
        transform: 0,
        top: "0",
        //height: "100vh",
        scale: 1,
        delay: 1,
      });
      /*gsap.from(heroImageAnimation.childNode, {
      height: "100%",
      scale: 1,
      delay: 1,
    });*/

      gsap.from(lineAnimation, {
        duration: 2,
        width: "105%",
        left: "-5%",
        delay: 1,
      });

      gsap.to(heroContainerAnimation, {
        paddingTop: `calc(${parseInt(menuHeightt)}px + 1.5rem`,
        delay: 1,
        duration: 2,
        onComplete: setInitAnimation(false),
      });

      setMenuHeight(menuHeightt);
    }
  }, []);

  return (
    <Styled.HeroContainer
      {...props}
      ref={(el) => (heroContainerAnimation = el)}
      menuHeight={menuHeight}
    >
      <div ref={(el) => (heroImageAnimation = el)}>
        <picture>
          {" "}
          <source media="(min-width: 768px)" srcSet={heroImage} />
          <img src={heroImage_mobile}></img>
        </picture>

        <Styled.HeroTexts>
          <Header1 white className="white">
            {hero_title}
          </Header1>
          {isDesktop() ? (
            <>
              <p>
                <BodyText2 white>{hero_paragraph}</BodyText2>
              </p>
              <p>
                <BodyText2 white>{hero_paragraph2}</BodyText2>
              </p>{" "}
            </>
          ) : (
            <>
              <p>
                <Subtitle1 white>{hero_paragraph}</Subtitle1>
              </p>
              <p>
                <Subtitle1 white>{hero_paragraph2}</Subtitle1>
              </p>{" "}
            </>
          )}

          <Button primary>Izvedi več</Button>
          <Styled.WhiteLine
            ref={(el) => (lineAnimation = el)}
          ></Styled.WhiteLine>
        </Styled.HeroTexts>
      </div>
    </Styled.HeroContainer>
  );
};

export default Hero;
