import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";
import Button from "../../../basic_components/button/Button";
import Menu_dropdown from "./Menu_dropdown";

import * as Styled from "./Menu_list.styled";

const Menu_list = ({ state }) => {
  const { t, lang } = useTranslation("aboveTheFold");

  return (
    <Styled.MenuList state={state}>
      <Button href="/" className="nav_item" terciary>
        {t("nav_item0")}
      </Button>
      <Button href="/about" className="nav_item" terciary>
        {t("nav_item1")}
      </Button>
      <Button
        className="nav_item drop-button"
        terciary
        arrowDown
        onClick={() => {
          document.getElementById("ddown").classList.toggle("show");
        }}
      >
        {t("nav_item2")}
      </Button>
      <Menu_dropdown></Menu_dropdown>
      <Button className="nav_item" terciary>
        {t("nav_item3")}
      </Button>
      <Button href="/contact" primary>
        {t("nav_item4")}
      </Button>
    </Styled.MenuList>
  );
};

export default Menu_list;
