import React, { useEffect, useContext } from "react";
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
    <CenterContent>
      <References_quote_content></References_quote_content>
    </CenterContent>
  );
};

export default References_quote;
