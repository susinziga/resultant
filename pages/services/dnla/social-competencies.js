import React from "react";
import useTranslation from "next-translate/useTranslation";
import Header from "../../../components/DNLA/subpages/Header";
import Middle from "../../../components/DNLA/subpages/Middle";

const social_competencies = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header title={t("subpages:social_title")}></Header>
      <Middle
        img={t("subpages:social_img")}
        text={t("subpages:social_text")}
        button={t("dnla:dnla_buttonTextPillar")}
      ></Middle>
    </>
  );
};

export default social_competencies;
