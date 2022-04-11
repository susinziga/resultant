import React from "react";
import useTranslation from "next-translate/useTranslation";
import Header from "../../../components/DNLA/subpages/Header";
import Middle from "../../../components/DNLA/subpages/Middle";

const sales_potential = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header title={t("subpages:sales_title")}></Header>
      <Middle
        img={t("subpages:sales_img")}
        text={t("subpages:sales_text")}
        button={t("dnla:dnla_buttonTextPillar")}
      ></Middle>
    </>
  );
};

export default sales_potential;
