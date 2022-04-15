import React from "react";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Header from "../../../components/DNLA/subpages/Header";
import styled from "styled-components";
import Hero_utnn from "../../../components/UTNN/Hero/Hero_utnn";
import { BodyText3, Subtitle2 } from "../../../basic_components/texts/Texts";
import ArticleContent_utnk from "../../../components/UTNN/ArticleContent/ArticleContent";

const kaj_je_povratna_informacija_po_metodi_360 = () => {
  const { t, lang } = useTranslation();

  const articleContent = (
    <>
      <BodyText3
        dangerouslySetInnerHTML={{ __html: t("srk:kpim_topText") }}
      ></BodyText3>
      <SecondTextHeading>{t("srk:kpim_secondTextHeading")}</SecondTextHeading>
      <List>
        <ListItem>
          <BodyText3>{t("srk:kpim_listItem1")}</BodyText3>
        </ListItem>
        <ListItem>
          <BodyText3>{t("srk:kpim_listItem2")}</BodyText3>
        </ListItem>
        <ListItem>
          <BodyText3>{t("srk:kpim_listItem3")}</BodyText3>
        </ListItem>
        <ListItem>
          <BodyText3>{t("srk:kpim_listItem4")}</BodyText3>
        </ListItem>
      </List>
      <BodyText3>{t("srk:kpim_secondTextBottom")}</BodyText3>
    </>
  );

  return (
    <>
      <Head>
        <title>Resultant - Kaj je povratna informacija po metodi 360°?</title>
      </Head>

      <Header title={t("srk:kpim_heading")}></Header>
      <Hero_utnn
        image={"/SRK/KPIM/header_desktop.png"}
        text={t("srk:kpim_content")}
        buttonText={t("srk:kpim_button")}
      ></Hero_utnn>
      <ArticleContent_utnk
        className={"section"}
        content={articleContent}
      ></ArticleContent_utnk>
    </>
  );
};

export const SecondTextHeading = styled(Subtitle2)`
  display: block;
  padding-top: 20%;
  padding-bottom: 8%;
  font-size: 2rem;

  @media only screen and (min-width: 768px) {
    padding-bottom: 2%;
    padding-top: 5%;
  }
`;

export const List = styled.ul`
  list-style: disc;
  padding-left: 3%;
  padding-bottom: 5%;

  @media only screen and (min-width: 768px) {
    padding-bottom: 1%;
  }
`;

export const ListItem = styled.li`
  padding: 1% 0;

  @media only screen and (min-width: 768px) {
    padding: 0.25% 0;
  }
`;

export default kaj_je_povratna_informacija_po_metodi_360;
