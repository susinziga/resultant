import React from "react";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Header from "../../../components/DNLA/subpages/Header";
import styled from "styled-components";
import { BodyText3, Subtitle2 } from "../../../basic_components/texts/Texts";
import Button from "../../../basic_components/button/Button";
import { useRouter } from "next/router";
import ArticleContent_upijcprzp from "../../../components/SRK/ArticleContent_upijcprzp";

const ucinkovita_360_povratna_informacija_je_celovit_proces_razvoja_zaposlenih_s_pomocjo_360_metode =
  () => {
    const { t, lang } = useTranslation();
    const { locale } = useRouter();

    const articleContent = (
      <>
        <PaddingX>
          <ImageDescription>
            {t("srk:upijcprzp_imageDescription")}
          </ImageDescription>
        </PaddingX>

        <Img
          className="desktop"
          src={"/SRK/UPIJCPRZP/img_" + locale + "_desktop.png"}
        ></Img>
        <Img
          className="mobile"
          src={"/SRK/UPIJCPRZP/img_" + locale + "_mobile.png"}
        ></Img>

        <PaddingX>
          <RowHeader>{t("srk:upijcprzp_item1Heading")}</RowHeader>
          <RowText>{t("srk:upijcprzp_item1Text")}</RowText>
          <RowHeader>{t("srk:upijcprzp_item2Heading")}</RowHeader>
          <RowText>{t("srk:upijcprzp_item2Text")}</RowText>
          <RowHeader>{t("srk:upijcprzp_item3Heading")}</RowHeader>
          <RowText>{t("srk:upijcprzp_item3Text")}</RowText>
          <RowHeader>{t("srk:upijcprzp_item4Heading")}</RowHeader>
          <RowText>{t("srk:upijcprzp_item4Text")}</RowText>
          <br />
          <br />
          <RowText>{t("srk:upijcprzp_item4BulletHeading")}</RowText>
          <List>
            <li>
              <BodyText3>{t("srk:upijcprzp_item4BulletText1")}</BodyText3>
            </li>
            <li>
              <BodyText3>{t("srk:upijcprzp_item4BulletText2")}</BodyText3>
            </li>
            <li>
              <BodyText3>{t("srk:upijcprzp_item4BulletText3")}</BodyText3>
            </li>
            <li>
              <BodyText3>{t("srk:upijcprzp_item4BulletText4")}</BodyText3>
            </li>
            <li>
              <BodyText3>{t("srk:upijcprzp_item4BulletText5")}</BodyText3>
            </li>
            <li>
              <BodyText3>{t("srk:upijcprzp_item4BulletText6")}</BodyText3>
            </li>
          </List>
          <RowHeader>{t("srk:upijcprzp_item5Heading")}</RowHeader>
          <RowText>{t("srk:upijcprzp_item5Text")}</RowText>
        </PaddingX>
      </>
    );

    return (
      <>
        <Head>
          <title>
            Resultant - Učinkovita 360° povratna informacija je celovit proces
            razvoja zaposlenih s pomočjo 360° metode.
          </title>
        </Head>

        <Header title={t("srk:upijcprzp_heading")}></Header>
        <ArticleWrapper>
          <ArticleContent_upijcprzp
            className={"section"}
            content={articleContent}
          ></ArticleContent_upijcprzp>
        </ArticleWrapper>
        {/* <ButtonWrapper>
          <Button
            // style={{ width: "90%", textAlign: "center" }}
            primary
            href={"/" + locale + "/offer"}
          >
            Želim pridobiti ponudbo
          </Button>
        </ButtonWrapper> */}
      </>
    );
  };

const ArticleWrapper = styled.div`
  margin-top: 15%;

  @media only screen and (min-width: 768px) {
    margin-top: 5%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 15%;

  @media only screen and (min-width: 768px) {
    padding: 3% 0%;
  }
`;

export const FirstSectionWrapper = styled.div`
  margin-bottom: 15%;
`;

export const PaddingX = styled.div`
  padding: 0% 5%;
`;

export const ImageHeader = styled(Subtitle2)`
  display: block !important;
  margin-bottom: 2%;
`;

export const ImageDescription = styled(BodyText3)``;

export const Img = styled.img`
  padding: 15% 15%;

  @media only screen and (min-width: 768px) {
    padding: 5% 0%;
  }
`;

export const RowHeader = styled(Subtitle2).attrs({ bold: true })`
  display: block !important;
  font-size: 1.2rem;
  margin: 7% 0%;

  @media only screen and (min-width: 768px) {
    margin: 4% 0%;
  }
`;
export const RowText = styled(BodyText3)``;

export const List = styled.ul`
  list-style: disc;
  margin-left: 3%;
  padding-top: 3%;
`;

export default ucinkovita_360_povratna_informacija_je_celovit_proces_razvoja_zaposlenih_s_pomocjo_360_metode;
