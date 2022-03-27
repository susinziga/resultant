import React from "react";

import { Container } from "./MainContentSlider.styled";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import References_item from "../../../references/references_item/References_item";
import { useRef, useState, useEffect } from "react";
import Content_item from "../contentSliderItem.js/ContentSliderItem";
import useEventListener from "../../../../custom_hooks/useEventListener";

SwiperCore.use([Mousewheel, Pagination]);

const MainContentSlider = ({
  nextSection,
  prevSection,
  isActive,
  initSlide = 0,
}) => {
  const items = [
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
  ];

  let swip = useSwiper();

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);

    return () => {
      return window.removeEventListener("wheel", handleWheel);
    };
  }, [isActive]);

  const handleWheel = (e) => {
    console.log(isActive);
    if (isActive) {
      if (e.deltaY > 0) {
        if (swip.isEnd) {
          nextSection(e);
        } else swip.slideNext(500);
      } else {
        if (swip.isBeginning) {
          prevSection(e);
        } else swip.slidePrev(500);
      }
    }
  };

  const setInstance = (instance) => {
    swip = instance;
  };

  return (
    <Container>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        initialSlide={initSlide}
        onSwiper={(swiper) => (swip = swiper)}
        direction={"horizontal"}
        className="mySwiper"
      >
        <SwiperInstance setInstance={setInstance}></SwiperInstance>
        {items.map((ref, id) => (
          <SwiperSlide key={id}>
            {({ isActive }) => (
              <Content_item reference={ref} isActive={isActive}></Content_item>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

const SwiperInstance = ({ setInstance }) => {
  let swiperInstance = useSwiper();
  setInstance(swiperInstance);
  return <></>;
};

export default MainContentSlider;
