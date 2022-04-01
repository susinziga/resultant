import useTranslation from "next-translate/useTranslation";
import React from "react";
import { BodyText1 } from "../../../../../basic_components/texts/Texts";
import { FirstSlideContainer } from "../partners/PartnersSlider_item/PartnersSlider_item.styled";

const References_quote_content = () => {
  const { t } = useTranslation("references");
  return (
    <FirstSlideContainer>
      <div>
        <img src="./Icons/quote.png"></img>
      </div>
      <BodyText1>{t("references_intro")}</BodyText1>
    </FirstSlideContainer>
  );
};

export default References_quote_content;
