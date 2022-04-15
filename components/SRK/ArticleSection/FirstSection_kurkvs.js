import React from "react";
import useTranslation from "next-translate/useTranslation";
import {
  ImageDescription,
  ImageHeader,
  OrderedList,
  RowHeader,
  RowText,
  Img,
  PaddingX,
  FirstSectionWrapper,
} from "./FirstSection.styled";

const FirstSection_kukvs = () => {
  const { t, lang } = useTranslation();

  return (
    <FirstSectionWrapper>
      <PaddingX>
        <ImageHeader bold>{t("srk:kurkvs_s1_imgHeading")}</ImageHeader>
        <ImageDescription>{t("srk:kurkvs_s1_imgDescription")}</ImageDescription>
      </PaddingX>

      <Img
        className="desktop"
        src={"/SRK/KURKVS/firstSectionImg_desktop.png"}
      ></Img>
      <Img
        className="mobile"
        src={"/SRK/KURKVS/firstSectionImg_mobile.png"}
      ></Img>

      <PaddingX>
        <RowHeader>{t("srk:kurkvs_s1_item1Heading")}</RowHeader>
        <RowText>{t("srk:kurkvs_s1_item1Text")}</RowText>
        <RowHeader>{t("srk:kurkvs_s1_item2Heading")}</RowHeader>
        <RowText>{t("srk:kurkvs_s1_item2Text")}</RowText>
        <RowHeader>{t("srk:kurkvs_s1_item3Heading")}</RowHeader>
        <RowText>{t("srk:kurkvs_s1_item3Text")}</RowText>
        <RowHeader>{t("srk:kurkvs_s1_item4Heading")}</RowHeader>
        <RowText>
          {t("srk:kurkvs_s1_item4BulletHeading")}
          <OrderedList>
            <li>{t("srk:kurkvs_s1_item4Bullet1Text")}</li>
            <li>{t("srk:kurkvs_s1_item4Bullet2Text")}</li>
            <li>{t("srk:kurkvs_s1_item4Bullet2Text")} </li>
          </OrderedList>
          {t("srk:kurkvs_s1_item4Text")}
        </RowText>
      </PaddingX>
    </FirstSectionWrapper>
  );
};

export default FirstSection_kukvs;
