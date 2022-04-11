import React, { useContext } from "react";

import { Container } from "./MainContentSlider.styled";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
//import References_item from "../../../references/references_item/References_item";
import { useRef, useState, useEffect } from "react";
import Content_item from "./About_content_1_item/ContentSliderItem";
import { AboutContext } from "../../../../../context/aboutContext";
import { ButtonsContainer } from "./About_content_1_item/ContentSliderItem.styled";
import { Title2 } from "../../../../../basic_components/texts/Texts";
import useSize from "../../../../../custom_hooks/useSize";
import { Waypoint } from "react-waypoint";
import { useRouter } from "next/router";

SwiperCore.use([Mousewheel, Pagination]);

const About_content_1 = ({ isActive, initSlide = 0, title }) => {
  const { contentSwiperActive, setContentSwiperActive } =
    useContext(AboutContext);
  let swip = useSwiper();

  const { locale } = useRouter();

  const { isDesktop } = useSize();
  const items = {
    sl: [
      {
        name: "1. Poglobljena analiza stanja",
        desc: "Projekte začnemo s pridobivanjem poglobljenega razumevanja poslovne situacije in zahtev naših naročnikov. Podrobno analiziramo obstoječe stanje, pri čemer uporabljamo preverjena orodja in metodologije.",
      },
      {
        name: "2. Opredelitev projektnih standardov",
        desc: "Opredelimo standarde, kriterije in merila, ki jih kasneje vpeljemo v projekt. Izhodišče nam predstavlja strategija naročnika. Ne osredotočamo se le na kratkoročne rezultate, ampak na izgradnjo celostne rešitve, ki zagotavlja trajno uspešnost.",
      },
      {
        name: "3. Implementacija nove rešitve",
        desc: "Skupaj z osebjem naročnika izvedemo implementacija rešitev in želenih izboljšav v poslovni proces naročnika. Naš pristop zagotavlja individualno obravnavo posebnosti in izzivov vsakega naročnika, na osnovi katerih pripravimo inovativne pristope in po meri naročnika ustvarjene rešitve",
      },
      {
        name: "4. Usposabljanje vodij ",
        desc: "Nove rešitve bodo v praksi delovale samo, če jih bodo uporabniki znali pravilno in celovito uporabljati. Zato v tem koraku usposobimo vodje in strokovno osebje za trajno uporabo implementiranih rešitev. Ob tem še posebej poskrbimo, da se zagotovi trajen prenos znanja za upravljanje rešitev na interno osebje naročnika.",
      },
      {
        name: "5. Vzdrževanje in podpora ",
        desc: "Po zaključenem procesu izvedemo monitoring delovanja novega procesa. V večini primerov ponovno izvedemo merjenje obstoječega stanja notranjega okolja in spremljamo trende v organizacijski klimi. Po potrebi izvedemo nadgradnjo vpeljane nove rešitve. Ob tem stalno in sistemsko podpiramo interne skrbnike novo implementiranih rešitev do zaključene vpeljave v prakso.",
      },
    ],
    en: [
      {
        name: "1. An in-depth examination of the situation",
        desc: "We begin each assignment by acquiring a thorough grasp of our clients' business status and needs. We thoroughly examine the current situation, employing tried-and-true techniques and methodologies.",
      },
      {
        name: "2. Definition of project standards",
        desc: "Standards, criteria, and benchmarks are developed and implemented in the project. The client's plan serves as our starting point. We are not only concerned with short-term outcomes but also with developing an integrated solution that will offer long-term success.",
      },
      {
        name: "3. Implementing a new solution",
        desc: "We integrate the solutions and desired improvements into the client's business process in collaboration with the client's team. Our methodology ensures that each client's unique needs and challenges are addressed individually, resulting in new methods and customised solutions.",
      },
      {
        name: "4. Training leaders",
        desc: "New solutions will only be effective in practice if users understand how to use them correctly and fully. As a result, we teach managers and professional employees to use the established solutions on a consistent basis. In doing so, we take extra care to ensure that the knowledge required to manage the solution is permanently passed to the client's internal team.",
      },
      {
        name: "5. Maintenance and support",
        desc: "We will monitor the performance of the new process after it has been completed. In most situations, we re-assess the current status of the internal environment and track trends in the organizational climate. If necessary, we upgrade the newly implemented solution. Furthermore, we provide ongoing and systematic support to newly introduced solutions' internal administrators until they are fully integrated into practice.",
      },
    ],
  };

  let isScrolling = Date.now();

  const preventDefault = (e) => {
    console.log(Date.now());
    console.log(isScrolling);
    if (isActive) {
      e.preventDefault();
      if (Date.now() - 500 > isScrolling) {
        console.log(isActive);

        if (e.deltaY < 0) {
          if (swip.isBeginning) {
            window.scrollBy(0, e.deltaY);
          } else swip.slidePrev(1500);
        }
        if (e.deltaY > 0) {
          if (swip.isEnd) {
            /*document
              .getElementById("content_box")
              .scrollIntoView();*/
            document
              .getElementById("team")
              .scrollIntoView({ behavior: "smooth" });
            setContentSwiperActive((prev) => prev + 1);
          } else swip.slideNext(1500);
        }

        isScrolling = Date.now();
      }
    }
    // window.scrollBy(0, e.deltaY);
  };

  const setInstance = (instance) => {
    swip = instance;
  };

  return (
    <Waypoint
      scrollableAncestor={"window"}
      topOffset={"0%"}
      bottomOffset="50%"
      onEnter={() => {
        setContentSwiperActive(0);
      }}
    >
      <Container>
        {isDesktop() ? (
          ""
        ) : (
          <Title2
            style={{
              width: "var(--width-90)",
              margin: "auto",
              marginBottom: "2rem",
            }}
          >
            {title}
          </Title2>
        )}
        <Swiper
          onScroll={true}
          spaceBetween={50}
          slidesPerView={1.5}
          initialSlide={initSlide}
          centeredSlides={false}
          direction={"horizontal"}
          className="mySwiper"
          autoHeight={true}
        >
          <SwiperInstance setInstance={setInstance}></SwiperInstance>
          {items[locale].map((ref, id) => (
            <SwiperSlide key={id}>
              {({ isActive }) => (
                <Content_item
                  reference={ref}
                  isActive={isActive}
                ></Content_item>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {isDesktop() ? (
          <ButtonsContainer>
            <img
              width="50"
              src="/Buttons/arrow_prev.svg"
              onClick={() => {
                swip.slidePrev(1000);
              }}
              className="cursor"
            ></img>
            <img
              width="50"
              src="/Buttons/arrow_next.svg"
              onClick={() => {
                swip.slideNext(1000);
              }}
              className="cursor"
            ></img>
          </ButtonsContainer>
        ) : (
          ""
        )}
      </Container>
    </Waypoint>
  );
};

const SwiperInstance = ({ setInstance }) => {
  let swiperInstance = useSwiper();
  setInstance(swiperInstance);
  return <></>;
};

export default About_content_1;
