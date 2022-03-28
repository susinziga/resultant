import useTranslation from "next-translate/useTranslation";
import React from "react";
import {
  BodyText1,
  BodyText4,
} from "../../../../../basic_components/texts/Texts";
import { FirstSlideContainer } from "./PartnersSlider_item.styled";

const PartnersSlider_item_first = () => {
  const { t } = useTranslation("partners");
  return (
    <FirstSlideContainer>
      <div>
        <img src="./Icons/quote.png"></img>
      </div>
      <BodyText1>{t("partners_intro")}</BodyText1>
    </FirstSlideContainer>
  );
};

export default PartnersSlider_item_first;
