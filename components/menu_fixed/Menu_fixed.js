import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useRef, useState } from "react";

import * as Styled from "./Menu_fixed.styled";

import { Waypoint } from "react-waypoint";
import useSize from "../../custom_hooks/useSize";

const Menu_fixed = (props) => {
  const { t, lang } = useTranslation("home");

  const { isDesktop } = useSize();

  return (
    <>
      {isDesktop() ? (
        <>
          <Styled.MenuFixedContainer {...props} id="fixedM">
            <Styled.MenuItem>{t("menu_item1")}</Styled.MenuItem>
            <Styled.MenuItem>{t("menu_item2")}</Styled.MenuItem>
            <Styled.MenuItem>{t("menu_item3")}</Styled.MenuItem>
          </Styled.MenuFixedContainer>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Menu_fixed;
