import React from "react";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Hero_utnn from "../../../components/UTNN/Hero/Hero_utnn";
import Plan from "../../../components/service1/PlanSection/Plan_service1";
import Header from "../../../components/DNLA/subpages/Header";
import { useRouter } from "next/router";

const modeli_kompetenc_so_temelj_za_vecino_kadrovskih_procesov = () => {
  const { t, lang } = useTranslation();
  const { locale } = useRouter();

  const planHeading1 = t("srk:mktvkp_Plan1Heading");

  const Plan1 = [
    { text: t("srk:mktvkp_PlanCard1"), number: "1" },
    { text: t("srk:mktvkp_PlanCard2"), number: "2" },
    { text: t("srk:mktvkp_PlanCard3"), number: "3" },
    { text: t("srk:mktvkp_PlanCard4"), number: "4" },
    { text: t("srk:mktvkp_PlanCard5"), number: "5" },
    { text: t("srk:mktvkp_PlanCard6"), number: "6" },
  ];

  return (
    <>
      <Head>
        <title>
          Resultant - Modeli kompetenc so temelj za večino kadrovskih procesov
        </title>
      </Head>
      <Header title={t("srk:mktvkp_heading")}></Header>
      <Hero_utnn
        image={"/SRK/bigCard1img_" + locale + ".webp"}
        text={t("srk:mktvkp_content")}
        // buttonText={t("srk:mktvkp_button")}
      ></Hero_utnn>
      <Plan plan1={Plan1} heading1={planHeading1}></Plan>
    </>
  );
};

export default modeli_kompetenc_so_temelj_za_vecino_kadrovskih_procesov;
