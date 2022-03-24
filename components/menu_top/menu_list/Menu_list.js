import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";
import Button from "../../../basic_components/button/Button";

import * as Styled from "./Menu_list.styled";

const Menu_list = () => {
  const { t, lang } = useTranslation("aboveTheFold");

  const [active, setActive] = useState(0);

  return (
    <Styled.MenuList>
      <Button primary={active === 0} terciary={active !== 0} href="">
        {t("nav_item1")}
      </Button>
      <Button primary={active === 1} terciary={active !== 1} arrowDown>
        {t("nav_item2")}
      </Button>
      <Button primary={active === 2} terciary={active !== 2}>
        {t("nav_item3")}
      </Button>
      <Button primary={active === 3} terciary={active !== 3}>
        {t("nav_item4")}
      </Button>
    </Styled.MenuList>
  );
};

export default Menu_list;
