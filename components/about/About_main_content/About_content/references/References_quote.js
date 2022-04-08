import React, { useEffect, useContext } from "react";
import { Waypoint } from "react-waypoint";
import { AboutContext } from "../../../../../context/aboutContext";
import { CenterContent } from "../About_content.styled";
import References_quote_content from "./References_quote_item";

const References_quote = ({ isActive }) => {
  const { contentSwiperActive, setContentSwiperActive } =
    useContext(AboutContext);

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
            .getElementById("partners2")
            .scrollIntoView({ behavior: "smooth" });
          setContentSwiperActive((prev) => prev - 1);
        }
        if (e.deltaY > 0) {
          /*document.getElementById("content_box").scrollBy(0, e.deltaY);*/
          document
            .getElementById("references2")
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
        setContentSwiperActive(4);
      }}
      onLeave={(a) => {
        console.log(a);
        if (a.currentPosition == "above") setContentSwiperActive(5);
        if (a.currentPosition == "below") setContentSwiperActive(3);
      }}
    >
      <div id="test">
        <References_quote_content
          active={contentSwiperActive}
        ></References_quote_content>
      </div>
    </Waypoint>
  );
};

export default References_quote;
