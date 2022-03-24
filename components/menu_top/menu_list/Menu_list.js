import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";
import Button from "../../../basic_components/button/Button";

import * as Styled from "./Menu_list.styled";

const Menu_list = () => {
  const { t, lang } = useTranslation("aboveTheFold");

  const [active, setActive] = useState(3);

  return (
    <Styled.MenuList>
      <Button className="nav_item" terciary>
        {t("nav_item1")}
      </Button>
      <Button className="nav_item" terciary arrowDown>
        {t("nav_item2")}
      </Button>
      <Button className="nav_item" terciary>
        {t("nav_item3")}
      </Button>
      <Button primary>{t("nav_item4")}</Button>
    </Styled.MenuList>
  );
};

export default Menu_list;
