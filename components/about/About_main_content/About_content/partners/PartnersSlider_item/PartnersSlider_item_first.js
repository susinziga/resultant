import useTranslation from "next-translate/useTranslation";
import React from "react";
import { BodyText1 } from "../../../../../../basic_components/texts/Texts";
import { FirstSlideContainer } from "./PartnersSlider_item.styled";

const Partners_quote_content = ({ active }) => {
  const { t } = useTranslation("partners");
  return (
    <FirstSlideContainer active={active}>
      <div>
        <img src="./Icons/quote.png" className="quote"></img>
      </div>
      <BodyText1>{t("partners_intro")}</BodyText1>
    </FirstSlideContainer>
  );
};

export default Partners_quote_content;
