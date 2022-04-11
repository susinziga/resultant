import React from "react";

import * as Styled from "./References_home.styled";

import { Header2 } from "../../../basic_components/texts/Texts";
import useTranslation from "next-translate/useTranslation";
import References_slider from "./references_slider/References_slider";

const References_home = (props) => {
  const { t, lang } = useTranslation("common");

  const references = [
    { name: "Dars", img: "/References/dars.png", hex: "#004984" },
    { name: "Sava Re", img: "/References/sava re.png", hex: "#00A181" },
    { name: "Sij Group", img: "/References/sij.png", hex: "#005293" },
    { name: "Luka Koper", img: "/References/luka koper.png", hex: "#0E375F" },
    { name: "Hit", img: "/References/hit.png", hex: "#FAB033" },
    { name: "Petrol", img: "/References/petrol.png", hex: "#00A181" },
    { name: "Domel", img: "/References/domel.png", hex: "#0E375F" },
    { name: "Ukc", img: "/References/ukc lj.png", hex: "#183C8E" },
    { name: "Mol", img: "/References/mol.png", hex: "#95C12C" },
    {
      name: "Sava Zavarovalnica",
      img: "/References/sava zavar.png",
      hex: "#00A181",
    },
    { name: "Titus", img: "/References/titus.png", hex: "#00437F" },
    { name: "Hse", img: "/References/hse.png", hex: "#8EC647" },
    { name: "Hrastnik", img: "/References/hrastnik.png", hex: "#ED6D2D" },
    { name: "Ebm", img: "/References/ebm.png", hex: "#0071BD" },
    { name: "Seng", img: "/References/seng.png", hex: "#00A3B6" },
    {
      name: "Baby Center",
      img: "/References/baby center.png",
      hex: "#01B1DA",
    },
    { name: "kolektor", img: "/References/kolektor.png", hex: "#00386B" },
    { name: "iskra", img: "/References/iskra.png", hex: "#EF4129" },
    { name: "posta", img: "/References/posta.png", hex: "#FFCB05" },
    {
      name: "Banka Slovenije",
      img: "/References/banka slo.png",
      hex: "#808000",
    },
    { name: "el mb", img: "/References/el mb.png", hex: "#D71920" },
    { name: "merithp", img: "/References/merithp.png", hex: "#A7A9AC" },
    { name: "onkoloski", img: "/References/onkoloski.png", hex: "#7D2128" },
    { name: "porsche", img: "/References/porsche.png", hex: "#161615" },
    { name: "sij acron", img: "/References/sij acron.png", hex: "#005B97" },
    { name: "Anni", img: "/References/anni.png", hex: "#00AEEF" },
    { name: "sijmetal", img: "/References/sijmetal.png", hex: "#005293" },
    { name: "summit", img: "/References/summit.png", hex: "#44ACD3" },
    { name: "sijravne", img: "/References/sijravne.png", hex: "#005293" },
    { name: "el ce", img: "/References/el ce.png", hex: "#01BACE" },
    { name: "tes", img: "/References/tes.png", hex: "#0092C7" },
    {
      name: "Energija Plus",
      img: "/References/energija plus.png",
      hex: "#E50000",
    },
    { name: "ukcmb", img: "/References/ukcmb.png", hex: "#DB1B33" },

    {
      name: "premogovnik",
      img: "/References/premogovnik.png",
      hex: "#A90209",
    },
    { name: "Sava Pokoj", img: "/References/sava pokoj.png", hex: "#00A181" },
    { name: "dem", img: "/References/dem.png", hex: "#374F5A" },
    { name: "Sava Infod", img: "/References/sava infond.png", hex: "#00A181" },
    { name: "sumida", img: "/References/sumida.png", hex: "#007CC2" },
    { name: "sijele", img: "/References/sijele.png", hex: "#005293" },
    { name: "mmk", img: "/References/mmk.png", hex: "#056B44" },
    { name: "vita", img: "/References/vita.png", hex: "#28007D" },
    { name: "sanolabor", img: "/References/sanolabor.png", hex: "#B4008C" },
    { name: "merkur", img: "/References/merkur.png", hex: "#64B32C" },
    { name: "maar", img: "/References/maar.png", hex: "#ED3237" },
    {
      name: "ministrstvo",
      img: "/References/ministrstvo.png",
      hex: "#529EB8",
    },
    { name: "sid", img: "/References/sid.png", hex: "#004878" },
    { name: "t2", img: "/References/t2.png", hex: "#F27310" },
    { name: "trimo", img: "/References/trimo.png", hex: "#58585A" },
    { name: "fluid", img: "/References/fluid.png", hex: "#E51B24" },
    { name: "comland", img: "/References/comland.png", hex: "#386585" },
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
