import React from "react";
import {
  HeadingContainer,
  HeadingUpperHeading,
  Paragraph,
  HeadingLine,
  DesktopFlex,
} from "../components/support/Support.styled";
import { fetchAPI } from "./api/strapi";
import NewsCard_service1 from "../components/service1/News/Card/NewsCard_service1";

export async function getStaticProps() {
  const articles = await fetchAPI("/clanki", { populate: "*" });

  return {
    props: { articles: articles.data },
  };
}

const aktualno = ({ articles }) => {
  return (
    <>
      <HeadingContainer>
        <DesktopFlex>
          <HeadingUpperHeading>Aktualno</HeadingUpperHeading>
          <Paragraph>Najnovejše novice in prispevki ekipe Resultant.</Paragraph>
        </DesktopFlex>
        <HeadingLine></HeadingLine>
      </HeadingContainer>
      {articles.map((article) => {
        console.log(article.attributes);
        const link = article.attributes.naslov
          .replace("/s/g", "-")
          .toLowerCase();
        console.log(link);

        let _article = {
          heading: article.attributes.naslov,
          text: article.attributes.podnaslov,
          image: article.attributes.glavnaSlika,
          link: link,
        };
        return <NewsCard_service1 news={_article}></NewsCard_service1>;
      })}
    </>
  );
};

export default aktualno;
