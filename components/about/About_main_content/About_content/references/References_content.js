import React, { useContext, useEffect } from "react";
import { Waypoint } from "react-waypoint";
import styledComponents from "styled-components";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { AboutContext } from "../../../../../context/aboutContext";
import useSize from "../../../../../custom_hooks/useSize";
import References_item from "../../../../references/references_item/References_item";
import { CenterContent } from "../About_content.styled";
import References_slider_item from "./References_slider_item/References_slider_item";

const References_content = ({ isActive }) => {
  const { contentSwiperActive, setContentSwiperActive } =
    useContext(AboutContext);

  const { isDesktop } = useSize();

  let swip = useSwiper();

  const references = [
    [
      { name: "Dars", img: "/References/dars.webp", hex: "#004984" },
      { name: "Sava Re", img: "/References/sava re.webp", hex: "#00A181" },
      { name: "Sij Group", img: "/References/sij.webp", hex: "#005293" },
      {
        name: "Luka Koper",
        img: "/References/luka koper.webp",
        hex: "#0E375F",
      },
      { name: "Hit", img: "/References/hit.webp", hex: "#FAB033" },
      { name: "Petrol", img: "/References/petrol.webp", hex: "#00A181" },
      { name: "Domel", img: "/References/domel.webp", hex: "#0E375F" },
      { name: "Ukc", img: "/References/ukc lj.webp", hex: "#183C8E" },
      { name: "Mol", img: "/References/mol.webp", hex: "#95C12C" },
      {
        name: "Sava Zavarovalnica",
        img: "/References/sava zavar.webp",
        hex: "#00A181",
      },
      { name: "Titus", img: "/References/titus.webp", hex: "#00437F" },
      { name: "Hse", img: "/References/hse.webp", hex: "#8EC647" },
    ],
    [
      { name: "Hrastnik", img: "/References/hrastnik.webp", hex: "#ED6D2D" },
      { name: "Ebm", img: "/References/ebm.webp", hex: "#0071BD" },
      { name: "Seng", img: "/References/seng.webp", hex: "#00A3B6" },
      {
        name: "Baby Center",
        img: "/References/baby center.webp",
        hex: "#01B1DA",
      },
      { name: "kolektor", img: "/References/kolektor.webp", hex: "#00386B" },
      { name: "iskra", img: "/References/iskra.webp", hex: "#EF4129" },
      { name: "posta", img: "/References/posta.webp", hex: "#FFCB05" },
      {
        name: "Banka Slovenije",
        img: "/References/banka slo.webp",
        hex: "#808000",
      },
      { name: "el mb", img: "/References/el mb.webp", hex: "#D71920" },
      { name: "merithp", img: "/References/merithp.webp", hex: "#A7A9AC" },
      { name: "onkoloski", img: "/References/onkoloski.webp", hex: "#7D2128" },
      { name: "porsche", img: "/References/porsche.webp", hex: "#161615" },
    ],
    [
      { name: "sij acron", img: "/References/sij acron.webp", hex: "#005B97" },
      { name: "Anni", img: "/References/anni.webp", hex: "#00AEEF" },
      { name: "sijmetal", img: "/References/sijmetal.webp", hex: "#005293" },
      { name: "summit", img: "/References/summit.webp", hex: "#44ACD3" },
      { name: "sijravne", img: "/References/sijravne.webp", hex: "#005293" },
      { name: "el ce", img: "/References/el ce.webp", hex: "#01BACE" },
      { name: "tes", img: "/References/tes.webp", hex: "#0092C7" },
      {
        name: "Energija Plus",
        img: "/References/energija plus.webp",
        hex: "#E50000",
      },
      { name: "ukcmb", img: "/References/ukcmb.webp", hex: "#DB1B33" },

      {
        name: "premogovnik",
        img: "/References/premogovnik.webp",
        hex: "#A90209",
      },
      {
        name: "Sava Pokoj",
        img: "/References/sava pokoj.webp",
        hex: "#00A181",
      },
      { name: "dem", img: "/References/dem.webp", hex: "#374F5A" },
    ],
    [
      {
        name: "Sava Infod",
        img: "/References/sava infond.webp",
        hex: "#00A181",
      },
      { name: "sumida", img: "/References/sumida.webp", hex: "#007CC2" },
      { name: "sijele", img: "/References/sijele.webp", hex: "#005293" },
      { name: "mmk", img: "/References/mmk.webp", hex: "#056B44" },
      { name: "vita", img: "/References/vita.webp", hex: "#28007D" },
      { name: "sanolabor", img: "/References/sanolabor.webp", hex: "#B4008C" },
      { name: "merkur", img: "/References/merkur.webp", hex: "#64B32C" },
      { name: "maar", img: "/References/maar.webp", hex: "#ED3237" },
      {
        name: "ministrstvo",
        img: "/References/ministrstvo.webp",
        hex: "#529EB8",
      },
      { name: "sid", img: "/References/sid.webp", hex: "#004878" },
      { name: "t2", img: "/References/t2.webp", hex: "#F27310" },
      { name: "trimo", img: "/References/trimo.webp", hex: "#58585A" },
    ],
    [
      { name: "fluid", img: "/References/fluid.webp", hex: "#E51B24" },
      { name: "comland", img: "/References/comland.webp", hex: "#386585" },
    ],
  ];

  useEffect(() => {
    window.addEventListener("wheel", preventDefault, { passive: false });
    return () => {
      window.removeEventListener("wheel", preventDefault, {
        passive: false,
      });
    };
  }, [isActive]);

  let isScrolling = Date.now();

  const preventDefault = (e) => {
    if (isActive) {
      e.preventDefault();
      if (Date.now() - 500 > isScrolling) {
        if (e.deltaY < 0) {
          /*document.getElementById("content_box").scrollBy(0, e.deltaY);*/
          document
            .getElementById("references")
            .scrollIntoView({ behavior: "smooth" });
          setContentSwiperActive((prev) => prev - 1);
        }
        if (e.deltaY > 0) {
          window.scrollBy(0, e.deltaY);
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
      topOffset="10%"
      bottomOffset={"10%"}
      onEnter={() => {
        /*setContentSwiperActive(5);*/
      }}
    >
      <Container>
        {isDesktop() ? (
          <Swiper slidesPerView={1} loop={true} autoplay={true}>
            <SwiperInstance setInstance={setInstance}></SwiperInstance>
            {references.map((ref, id) => {
              return (
                <SwiperSlide key={id}>
                  <References_slider_item
                    references={ref}
                    key={id}
                  ></References_slider_item>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <Swiper slidesPerView={1.5} centeredSlides="true" loop={true}>
            {references.map((ref, id) => {
              return ref.map((ref1) => {
                return (
                  <SwiperSlide>
                    <References_item reference={ref1}></References_item>
                  </SwiperSlide>
                );
              });
            })}
          </Swiper>
        )}
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

import styled from "styled-components";
const ButtonsContainer = styled.div`
  display: flex;
  @media (min-width: 768px) {
    position: relative;
    gap: 1rem;
    width: 90%;

    margin-left: auto;
    margin-right: auto;

    justify-content: end;
    margin-top: 2rem;
  }
  > img {
    width: 1.5rem;
    :hover {
      cursor: pointer;
    }
  }
`;

const Container = styledComponents.div`


margin-top:2rem;
    width:100%;
    // margin-left:15%;
    margin-bottom:1rem;

    @media(min-width:768px){
      margin-top:15rem;
    }
`;

export default References_content;
