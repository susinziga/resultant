import React from "react";
import {
  HeadingContainer,
  HeadingUpperHeading,
  Paragraph,
  HeadingLine,
  DesktopFlex,
} from "../components/support/Support.styled";
import { fetchAPI, getArticleFromStrapiData } from "./api/strapi";
import NewsCard_service1 from "../components/service1/News/Card/NewsCard_service1";
import styled from "styled-components";
import ArticleCard from "../components/aktualno/ArticleCard";
import LatestCard from "../components/aktualno/LatestCard";
import { BodyText1 } from "../basic_components/texts/Texts";
import Query from "../components/query";
import ARTICLES_QUERY from "../apollo/queries/articles/articles";

const aktualno = () => {
  return (
    <>
      <HeadingContainer>
        <DesktopFlex>
          <HeadingUpperHeading>Aktualno</HeadingUpperHeading>
          <Paragraph>Najnovejše novice in prispevki ekipe Resultant.</Paragraph>
        </DesktopFlex>
        <HeadingLine></HeadingLine>
      </HeadingContainer>
      <Query query={ARTICLES_QUERY}>
        {({ data: clanki }) => {
          {
            const articles = clanki.clanki.data;
            console.log(articles);

            return (
              <CardWrapperParent>
                <LatestCard
                  key={articles[0].id}
                  news={getArticleFromStrapiData(articles[0])}
                ></LatestCard>
                <CardWrapper>
                  {articles.map((article, index) => {
                    // Skip first since its the latest article
                    if (index == 0) return;

                    console.log(article.attributes);

                    return (
                      <>
                        <ArticleCard
                          key={article.id}
                          news={getArticleFromStrapiData(article)}
                        ></ArticleCard>
                        <ArticleCard
                          news={getArticleFromStrapiData(article)}
                        ></ArticleCard>
                        <ArticleCard
                          news={getArticleFromStrapiData(article)}
                        ></ArticleCard>
                        <ArticleCard
                          news={getArticleFromStrapiData(article)}
                        ></ArticleCard>
                      </>
                    );
                  })}
                </CardWrapper>
              </CardWrapperParent>
            );
          }
        }}
      </Query>
    </>
  );
};

export const NoArticlesWrapper = styled.div`
  text-align: center;
`;

export const CardWrapperParent = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 20%;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  gap: 1%;

  @media only screen and (min-width: 768px) {
    grid-template-columns: auto 33% 33%;
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: auto 25% 25% 25%;
  }
`;

export default aktualno;
