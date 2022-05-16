import React from "react";

import { useSwiper } from "swiper/react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Title1, Title2 } from "../../../basic_components/texts/Texts";
import * as Styled from "./Team_cards.styled";
import Card from "./card/Card";

const Team_cards = (props) => {
  const { title, cards } = props._data;
  return (
    <Styled.Container {...props}>
      <Title2 style={{ fontSize: "3rem", marginBottom: "2rem" }}>
        {title}
      </Title2>

      <Swiper
        breakpoints={{
          0: { slidesPerView: 1.25, spaceBetween: 25, centeredSlides: true },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 50,
            centeredSlides: false,
          },
        }}
        autoHeight={false}
      >
        {cards.map((card, id) => {
          return (
            <SwiperSlide key={id}>
              <Card text={card} bg={id}></Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Styled.Container>
  );
};

export default Team_cards;
