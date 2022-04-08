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

  const references = [
    [
      { name: "Dars", img: "./References/dars.png", hex: "#004984" },

      { name: "Sij Group", img: "./References/sij.png", hex: "#005293" },
      {
        name: "Luka Koper",
        img: "./References/luka koper.png",
        hex: "#0E375F",
      },
      { name: "Hit", img: "./References/hit.png", hex: "#FAB033" },
      { name: "Petrol", img: "./References/dars.png", hex: "#00A181" },
      { name: "Anni", img: "./References/anni.png", hex: "#00A181" },
      {
        name: "Baby Center",
        img: "./References/baby center.png",
        hex: "#00A181",
      },
      { name: "banka", img: "./References/banka.png", hex: "#00A181" },

      {
        name: "Banka Slovenije",
        img: "./References/banka slo.png",
        hex: "#004984",
      },
      { name: "Comland", img: "./References/comland.png", hex: "#00A181" },
      { name: "Dem", img: "./References/dem.png", hex: "#005293" },
      { name: "Domel", img: "./References/domel.png", hex: "#0E375F" },
    ],
    [
      { name: "Ebm", img: "./References/ebm.png", hex: "#FAB033" },
      { name: "Elektro Celje", img: "./References/el ce.png", hex: "#00A181" },
      { name: "Elektrode", img: "./References/elektrode.png", hex: "#00A181" },
      {
        name: "Elektro Maribor",
        img: "./References/el mb.png",
        hex: "#00A181",
      },
      {
        name: "Energija Plus",
        img: "./References/energija plus.png",
        hex: "#00A181",
      },

      { name: "Sava Re", img: "./References/sava re.png", hex: "#00A181" },
      {
        name: "Sava Infod",
        img: "./References/sava infond.png",
        hex: "#00A181",
      },
      {
        name: "Sava Pokoj",
        img: "./References/sava pokoj.png",
        hex: "#00A181",
      },
      {
        name: "Sava Zavar",
        img: "./References/sava zavar.png",
        hex: "#00A181",
      },
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
          <Swiper slidesPerView={1}>
            {references.map((ref, id) => {
              return (
                <SwiperSlide>
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
      </Container>
    </Waypoint>
  );
};

const Container = styledComponents.div`
margin-top:15rem;
    width:70%;
    margin-left:15%;
    margin-bottom:10rem;
`;

export default References_content;
