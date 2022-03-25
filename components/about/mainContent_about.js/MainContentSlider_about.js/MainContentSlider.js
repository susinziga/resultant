import React from "react";

import {Container } from "./MainContentSlider.styled";

import { useSwiper } from "swiper/react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import References_item from "../../../references/references_item/References_item";
import { useRef, useState } from "react";
import Content_item from "../contentSliderItem.js/ContentSliderItem";

const MainContentSlider = () => {

  const items = [
    {name: "1. Poglobljena analiza stanja", desc:"Projekte začnemo s pridobivanjem poglobljenega razumevanja poslovne situacije in zahtev naših naročnikov. Podrobno analiziramo obstoječe stanje, pri čemer uporabljamo preverjena orodja in metodologije."},
    {name: "2. Opredelitev projektnih standardov", desc:"Opredelimo standarde, kriterije in merila, ki jih kasneje vpeljemo v projekt. Izhodišče nam predstavlja strategija naročnika. Ne osredotočamo se le na kratkoročne rezultate, ampak na izgradnjo celostne rešitve, ki zagotavlja trajno uspešnost."},
    {name: "3. Implementacija nove rešitve", desc:"Skupaj z osebjem naročnika izvedemo implementacija rešitev in želenih izboljšav v poslovni proces naročnika. Naš pristop zagotavlja individualno obravnavo posebnosti in izzivov vsakega naročnika, na osnovi katerih pripravimo inovativne pristope in po meri naročnika ustvarjene rešitve"},
    {name: "4. Usposabljanje vodij ", desc:"Nove rešitve bodo v praksi delovale samo, če jih bodo uporabniki znali pravilno in celovito uporabljati. Zato v tem koraku usposobimo vodje in strokovno osebje za trajno uporabo implementiranih rešitev. Ob tem še posebej poskrbimo, da se zagotovi trajen prenos znanja za upravljanje rešitev na interno osebje naročnika."},
    {name: "5. Vzdrževanje in podpora ", desc:"Po zaključenem procesu izvedemo monitoring delovanja novega procesa. V večini primerov ponovno izvedemo merjenje obstoječega stanja notranjega okolja in spremljamo trende v organizacijski klimi. Po potrebi izvedemo nadgradnjo vpeljane nove rešitve. Ob tem stalno in sistemsko podpiramo interne skrbnike novo implementiranih rešitev do zaključene vpeljave v prakso."}
  ];

  const swiperInstance = useSwiper();
  const [swip, setSwip] = useState();

  const slide = (nr) => {
    for (let index = 0; index < nr; index++) {
      swip.slideNext(1500);
    }
  };

  const slideBack = (nr) => {
    for (let index = 0; index < nr; index++) {
      swip.slidePrev(2000);
    }
  };

  return (
    <Container>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => (swip = swiper)}
      >
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

export default MainContentSlider;
