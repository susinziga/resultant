import useTranslation from "next-translate/useTranslation";
import React from "react";

import * as Styled from "./Menu_fixed.styled";

const Menu_fixed = (props) => {
  const { t, lang } = useTranslation("home");
  return (
    <Styled.MenuFixedContainer {...props}>
      <Styled.MenuItem active>{t("menu_item1")}</Styled.MenuItem>
      <Styled.MenuItem>{t("menu_item2")}</Styled.MenuItem>
      <Styled.MenuItem>{t("menu_item3")}</Styled.MenuItem>
    </Styled.MenuFixedContainer>
  );
};

export default Menu_fixed;
