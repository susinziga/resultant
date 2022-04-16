import React from "react";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Hero_utnn from "../../../components/UTNN/Hero/Hero_utnn";
import Header from "../../../components/DNLA/subpages/Header";
import BulletSection_srk from "../../../components/SRK/BulletSection_srk";
import FirstSection_kukvs from "../../../components/SRK/ArticleSection/FirstSection_kurkvs";
import SecondSection_kukvs from "../../../components/SRK/ArticleSection/SecondSection_kurkvs";
import Button from "../../../basic_components/button/Button";
import styled from "styled-components";
import { useRouter } from "next/router";
import ArticleContent_upijcprzp from "../../../components/SRK/ArticleContent_upijcprzp";

const kako_ucinkovito_razvijati_kompetence_in_vescine_sodelavcev = () => {
  const { t, lang } = useTranslation();
  const { locale } = useRouter();

  const articleContent = (
    <>
      <FirstSection_kukvs />
      <SecondSection_kukvs />
    </>
  );

  return (
    <>
      <Head>
        <title>
          Resultant - Kako učinkovito razvijati kompetence in veščine
          sodelavcev?
        </title>
      </Head>
      <Header title={t("srk:kurkvs_heading")}></Header>
      <Hero_utnn
        className={"section"}
        image={"/SRK/KURKVS/header_desktop.png"}
        text={t("srk:kurkvs_content")}
        headText={t("srk:kurkvs_headText")}
      ></Hero_utnn>
      <BulletSection_srk className="section"></BulletSection_srk>
      <ArticleContent_upijcprzp
        className={"section"}
        content={articleContent}
      ></ArticleContent_upijcprzp>
      <ButtonWrapper>
        <Button primary href={"/" + locale + "/offer"}>
          Želim pridobiti ponudbo
        </Button>
      </ButtonWrapper>
    </>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 3% 0%;
`;

export default kako_ucinkovito_razvijati_kompetence_in_vescine_sodelavcev;
