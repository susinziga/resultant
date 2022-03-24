import React from "react";

import * as Styled from "./References_home.styled";

import { Header2 } from "../../../basic_components/texts/Texts";
import useTranslation from "next-translate/useTranslation";
import References_slider from "./references_slider/References_slider";

const References_home = (props) => {
  const { t, lang } = useTranslation("common");

  const references = [
    { name: "Dars", img: "./References/dars.png", hex: "#004984" },

    { name: "Sij Group", img: "./References/sij.png", hex: "#005293" },
    { name: "Luka Koper", img: "./References/luka koper.png", hex: "#0E375F" },
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
    { name: "Sava Infod", img: "./References/sava infond.png", hex: "#00A181" },
    { name: "Sava Pokoj", img: "./References/sava pokoj.png", hex: "#00A181" },
    { name: "Sava Zavar", img: "./References/sava zavar.png", hex: "#00A181" },
  ];

  return (
    <Styled.ReferencesContainer {...props}>
      <Styled.TitleContainer>
        <Header2>{t("references")}</Header2>
        <Styled.TitleLine></Styled.TitleLine>
      </Styled.TitleContainer>
      <References_slider references={references}></References_slider>
    </Styled.ReferencesContainer>
  );
};

export default References_home;
