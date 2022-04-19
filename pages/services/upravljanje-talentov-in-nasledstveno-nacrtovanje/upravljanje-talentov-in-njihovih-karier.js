import React from "react";
import useTranslation from "next-translate/useTranslation";
import Header from "../../../components/DNLA/subpages/Header";
import ArticleContent_utnk from "../../../components/UTNN/ArticleContent/ArticleContent";
import ArticleItemList from "../../../components/UTNN/ArticleItemList/ArticleItemList";
import ArticleTextBlock from "../../../components/UTNN/ArticleBlock/ArticleTextBlock";
import Hero_utnn from "../../../components/UTNN/Hero/Hero_utnn";

const upravljanje_talentov_in_njihovih_karier = () => {
  const { t, lang } = useTranslation();

  const articleContent = (
    <>
      <ArticleItemList
        className={"section"}
        title={t("utnn:utnk_list_heading")}
        items={[
          t("utnn:utnk_list_item1"),
          t("utnn:utnk_list_item2"),
          t("utnn:utnk_list_item3"),
          t("utnn:utnk_list_item4"),
          t("utnn:utnk_list_item5"),
        ]}
      ></ArticleItemList>

      <ArticleTextBlock
        className={"section"}
        title={t("utnn:utnk_tb1_heading")}
        text={t("utnn:utnk_tb1_text")}
      ></ArticleTextBlock>
      <ArticleTextBlock
        className={"section"}
        title={t("utnn:utnk_tb2_heading")}
        text={t("utnn:utnk_tb2_text")}
      ></ArticleTextBlock>
      <ArticleTextBlock
        className={"section"}
        title={t("utnn:utnk_tb3_heading")}
        text={t("utnn:utnk_tb3_text")}
      ></ArticleTextBlock>
    </>
  );

  return (
    <>
      <Header title={t("utnn:utnk_heading")}></Header>
      <Hero_utnn
        image={"/UTNN/UTNK/header_desktop.png"}
        text={t("utnn:utnk_content")}
        // buttonText={t("utnn:utnk_button")}
      ></Hero_utnn>
      <ArticleContent_utnk
        className="section"
        content={articleContent}
      ></ArticleContent_utnk>
    </>
  );
};

export default upravljanje_talentov_in_njihovih_karier;
