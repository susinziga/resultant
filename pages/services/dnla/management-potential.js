import useTranslation from "next-translate/useTranslation";
import React from "react";
import Header from "../../../components/DNLA/subpages/Header";
import Middle from "../../../components/DNLA/subpages/Middle";

const management_potential = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header title={t("subpages:management_title")}></Header>
      <Middle
        img={t("subpages:management_img")}
        text={t("subpages:management_text")}
        button={t("dnla:dnla_buttonTextPillar")}
      ></Middle>
    </>
  );
};

export default management_potential;
