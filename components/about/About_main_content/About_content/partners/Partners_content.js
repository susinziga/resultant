import useTranslation from "next-translate/useTranslation";
import React, { useContext, useEffect } from "react";
import { Waypoint } from "react-waypoint";
import {
  BodyText3,
  BodyText4,
} from "../../../../../basic_components/texts/Texts";
import { AboutContext } from "../../../../../context/aboutContext";

import * as Styled from "./Partners_content.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Partners_content = ({ isActive }) => {
  const { t } = useTranslation("partners");

  const partners = [
    { text: t("text1"), link: t("link1"), page: "" },
    { text: t("text2"), link: t("link2"), page: "" },
    { text: t("text3"), link: t("link3"), page: "" },
    { text: t("text4"), link: t("link4"), page: "" },
    { text: t("text5"), link: t("link5"), page: "www.inspire4future.com" },
  ];

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
            .getElementById("partners")
            .scrollIntoView({ behavior: "smooth" });
          setContentSwiperActive((prev) => prev - 1);
        }
        if (e.deltaY > 0) {
          /*document.getElementById("content_box").scrollBy(0, e.deltaY);*/
          document
            .getElementById("references")
            .scrollIntoView({ behavior: "smooth" });
          setContentSwiperActive((prev) => prev + 1);
        }

        isScrolling = Date.now();
      }
    }
    // window.scrollBy(0, e.deltaY);
  };

  return (
    <Styled.Partners_container>
      {partners.map((partner, id) => {
        return <Partner_item key={id} partner={partner}></Partner_item>;
      })}
    </Styled.Partners_container>
  );
};

const Partner_item = ({ partner }) => {
  return (
    <>
      <Styled.Partners_item_container>
        <div>
          <img src={partner.link}></img>
        </div>
        <div>
          <BodyText3>{partner.text}</BodyText3>
          {partner.page !== "" ? (
            <Styled.Partner_link href={partner.page} target="_blank">
              <BodyText4>{partner.page}</BodyText4>
              <FontAwesomeIcon icon={faChevronRight} />
            </Styled.Partner_link>
          ) : (
            ""
          )}
        </div>
      </Styled.Partners_item_container>
    </>
  );
};

export default Partners_content;
