import React from "react";
import useTranslation from "next-translate/useTranslation";
import Header from "../../../components/DNLA/subpages/Header";
import ArticleContent_utnk from "../../../components/UTNN/ArticleContent/ArticleContent";
import ArticleItemList from "../../../components/UTNN/ArticleItemList/ArticleItemList";
import ArticleTextBlock from "../../../components/UTNN/ArticleBlock/ArticleTextBlock";
import Hero_utnn from "../../../components/UTNN/Hero/Hero_utnn";

const nasledstveno_nacrtovanje = () => {
  const { t, lang } = useTranslation();

  const articleContent = (
    <>
      <ArticleItemList
        className={"section"}
        title={t("utnn:nn_list_heading")}
        items={[
          t("utnn:nn_list_item1"),
          t("utnn:nn_list_item2"),
          t("utnn:nn_list_item3"),
          t("utnn:nn_list_item4"),
          t("utnn:nn_list_item5"),
          t("utnn:nn_list_item6"),
        ]}
      ></ArticleItemList>

      <ArticleTextBlock
        className={"section"}
        title={t("utnn:nn_tb1_heading")}
        text={t("utnn:nn_tb1_text")}
      ></ArticleTextBlock>
      <ArticleTextBlock
        className={"section"}
        title={t("utnn:nn_tb2_heading")}
        text={t("utnn:nn_tb2_text")}
      ></ArticleTextBlock>
      <ArticleTextBlock
        className={"section"}
        title={t("utnn:nn_tb3_heading")}
        text={t("utnn:nn_tb3_text")}
      ></ArticleTextBlock>
      <ArticleTextBlock
        className={"section"}
        title={t("utnn:nn_tb4_heading")}
        text={t("utnn:nn_tb4_text")}
      ></ArticleTextBlock>
      <ArticleTextBlock
        className={"section"}
        title={t("utnn:nn_tb5_heading")}
        text={t("utnn:nn_tb5_text")}
      ></ArticleTextBlock>
    </>
  );

  return (
    <>
      <Header title={t("utnn:nn_heading")}></Header>
      <Hero_utnn
        className={"section"}
        text={t("utnn:nn_content")}
        image={"/UTNN/NN/header_desktop.webp"}
        // buttonText={t("utnn:nn_button")}
      ></Hero_utnn>
      <ArticleContent_utnk
        className="section"
        content={articleContent}
      ></ArticleContent_utnk>
    </>
  );
};

export default nasledstveno_nacrtovanje;
