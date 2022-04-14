import React from "react";
import useTranslation from "next-translate/useTranslation";

import { CardSectionContainer } from "./BigCardsSection.styled";

const BigCardsSection = ({ cards }, props) => {
  const { t, lang } = useTranslation();

  return (
    <>
      <CardSectionContainer {...props}>{cards}</CardSectionContainer>
    </>
  );
};

export default BigCardsSection;
