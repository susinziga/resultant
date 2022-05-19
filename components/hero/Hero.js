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

import styled from "styled-components";

const Hero = (props) => {
  const heroImageAnimation = useRef(null);

  const heroContainerAnimation = useRef(null);

  const lineAnimation = useRef(null);

  const [menuHeight, setMenuHeight] = useState("90px");

  const [initAnimation, setInitAnimation] = useState(true);

  const { t, lang } = useTranslation();

  const { isDesktop } = useSize();

  /* CONTENT */

  const heroImage = "/AboveTheFold/hero2.webp";
  const heroImage_mobile = "/AboveTheFold/hero_mobile.webp";

  const hero_title = t("aboveTheFold:hero_title");

  const hero_paragraph = t("aboveTheFold:hero_paragraph");
  const hero_paragraph2 = t("aboveTheFold:hero_paragraph2");

  useEffect(() => {
    if (
      sessionStorage.getItem("animation2") !== "true" &&
      isDesktop() &&
      window.scrollY <= 10
    ) {
      sessionStorage.setItem("animation2", "true");
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

      gsap.from(heroContainerAnimation, {
        paddingTop: 0,
        delay: 1,
        duration: 2,
        onComplete: setInitAnimation(false),
      });

      setMenuHeight(menuHeightt);
    }
  }, [isDesktop()]);

  return (
    <Styled.HeroContainer
      id="hero"
      {...props}
      ref={(el) => (heroContainerAnimation = el)}
      menuHeight={menuHeight}
    >
      <div ref={(el) => (heroImageAnimation = el)}>
        <picture>
          <DesktopImage>
            <Image
              width={1920}
              height={1080}
              quality={100}
              layout="responsive"
              sizes="100vw"
              src={heroImage}
              loading="lazy"
              alt=""
            />
          </DesktopImage>
          <MobileImage>
            <Image
              priority
              src={heroImage_mobile}
              alt=""
              width={729}
              height={1196}
              quality={100}
              layout="responsive"
              sizes="100vw"
            ></Image>
          </MobileImage>
        </picture>

        <Styled.HeroTexts>
          <Styled.HeaderText white className="white">
            {hero_title}
          </Styled.HeaderText>
          {isDesktop() ? (
            <>
              <Styled.SubTextWrapper>
                <BodyText2 white>{hero_paragraph}</BodyText2>
              </Styled.SubTextWrapper>
              <Styled.SubTextWrapper>
                <BodyText2 white>{hero_paragraph2}</BodyText2>
              </Styled.SubTextWrapper>{" "}
            </>
          ) : (
            <>
              <p>
                <Styled.SubTextWrapperMobile white>
                  {hero_paragraph}
                </Styled.SubTextWrapperMobile>
              </p>
              <p>
                <Styled.SubTextWrapperMobile white>
                  {hero_paragraph2}
                </Styled.SubTextWrapperMobile>
              </p>{" "}
            </>
          )}

          <MoreButton
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight - 100,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            {t("common:button_moreMore")}
          </MoreButton>
          {/* <Button
            primary
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight - 100,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            {t("common:button_moreMore")}
          </Button> */}
          <Styled.WhiteLine
            ref={(el) => (lineAnimation = el)}
          ></Styled.WhiteLine>
        </Styled.HeroTexts>
      </div>
    </Styled.HeroContainer>
  );
};

export const DesktopImage = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  @media screen and (min-width: 1050px) {
    display: inline;
  }
`;

export const MobileImage = styled.div`
  width: 100%;
  height: 100%;
  display: inline;
  @media screen and (min-width: 1050px) {
    display: none;
  }
`;

export const MoreButton = styled.div`
  background-color: var(--secondary-color);
  color: var(--white);
  border-radius: 24px;
  padding: 10px 20px;
  display: inline;
  width: fit-content;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

export default Hero;
