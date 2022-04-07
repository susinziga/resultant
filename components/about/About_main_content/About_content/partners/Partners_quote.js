import React, { useEffect, useContext } from "react";
import { Waypoint } from "react-waypoint";
import { Title2 } from "../../../../../basic_components/texts/Texts";
import { AboutContext } from "../../../../../context/aboutContext";
import useSize from "../../../../../custom_hooks/useSize";
import { CenterContent } from "../About_content.styled";
import Partners_quote_content from "./PartnersSlider_item/PartnersSlider_item_first";

const Partners_quote = ({ isActive, title }) => {
  const { contentSwiperActive, setContentSwiperActive } =
    useContext(AboutContext);

  const { isDesktop } = useSize();

  const preventDefault = (e) => {
    if (isActive) {
      e.preventDefault();
      if (Date.now() - 500 > isScrolling) {
        if (e.deltaY < 0) {
          /*document.getElementById("content_box").scrollBy(0, e.deltaY);*/
          document
            .getElementById("team")
            .scrollIntoView({ behavior: "smooth" });
          setContentSwiperActive((prev) => prev - 1);
        }
        if (e.deltaY > 0) {
          /*document.getElementById("content_box").scrollBy(0, e.deltaY);*/
          document
            .getElementById("partners2")
            .scrollIntoView({ behavior: "smooth" });
          setContentSwiperActive((prev) => prev + 1);
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
      bottomOffset={"50%"}
      onEnter={() => {
        setContentSwiperActive(2);
      }}
      onLeave={(a) => {
        if ((a.currentPosition = "above")) setContentSwiperActive(3);
      }}
    >
      <div>
        {isDesktop() ? (
          ""
        ) : (
          <Title2
            style={{
              width: "var(--width-90)",
              margin: "auto",
              marginBottom: "4rem",
            }}
          >
            {title}
          </Title2>
        )}
        <Partners_quote_content></Partners_quote_content>
      </div>
    </Waypoint>
  );
};

export default Partners_quote;
