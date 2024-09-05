import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";
import Button from "../../../basic_components/button/Button";
import Menu_dropdown from "./Menu_dropdown";

import * as Styled from "./Menu_list.styled";

import { useRouter } from "next/router";

const Menu_list = ({ state }) => {
  const { t, lang } = useTranslation("aboveTheFold");

  const { locale } = useRouter();

  return (
    <Styled.MenuList state={state}>
      <Button href={"/" + locale} className="nav_item" terciary>
        {t("nav_item0")}
      </Button>
      <Button href={"/" + locale + "/o-nas"} className="nav_item" terciary>
        {t("nav_item1")}
      </Button>
      <div
        className="drop-button par"
        style={{ marginRight: locale == "en" ? "1.8rem" : "0" }}
      >
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
      </div>
      <Menu_dropdown></Menu_dropdown>
      {/*<Button className="nav_item" terciary>
        {t("nav_item3")}
        </Button>*/}
      {locale == "sl" ? (
        <Button href={"/" + locale + "/aktualno"} className="nav_item" terciary>
          Aktualno
        </Button>
      ) : (
        <></>
      )}
      <Button href={"/" + locale + "/kontakt"} primary>
        {t("nav_item4")}
      </Button>
    </Styled.MenuList>
  );
};

export default Menu_list;
