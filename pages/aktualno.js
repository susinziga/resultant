import React, { useContext } from "react";
import {
  HeadingContainer,
  HeadingUpperHeading,
  Paragraph,
  HeadingLine,
  DesktopFlex,
} from "../components/support/Support.styled";
import { fetchAPI, getArticleFromStrapiData } from "./api/strapi";
import styled from "styled-components";
import ArticleCard from "../components/aktualno/ArticleCard";
import LatestCard from "../components/aktualno/LatestCard";
import { BodyText2 } from "../basic_components/texts/Texts";
import FilterDropdown from "../components/aktualno/FilterDropdown";
import { AktualnoContext } from "../context/aktualnoContext";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

export const getServerSideProps = async (context) => {
  const page = Number(context.query.page) || 1;
  const pageSize = 9;

  const [categoriesResponse, authorsResponse, articlesResponse] =
    await Promise.all([
      fetchAPI("/kategorije", { populate: "*" }),
      fetchAPI("/avtors", { populate: "*" }),
      fetchAPI("/clanki", {
        populate: "*",
        pagination: {
          page,
          pageSize,
        },
        sort: ["createdAt:desc"], // Adjust sorting as needed
      }),
    ]);

  const cats = categoriesResponse.data.map((element) => ({
    id: element.id,
    name: element.attributes.fullName,
  }));

  const auths = authorsResponse.data.map((element) => ({
    id: element.id,
    name: element.attributes.ime,
    resultant: element.attributes.resultant,
  }));

  const articles = articlesResponse.data.map(getArticleFromStrapiData);

  return {
    props: {
      categories: cats,
      authors: auths,
      articles,
      pagination: articlesResponse.meta.pagination,
    },
  };
};

const aktualno = ({ categories, authors, articles, pagination }) => {
  const { filter, setFilter, setSortFilter, isFetching } =
    useContext(AktualnoContext);

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Preberite najnovejše novice in prispevke | Resultant</title>
        <meta
          name="description"
          content="Kakšno je delo kadrovskega svetovalca pri podjetju Resultant? Preberite najnovejše novice in prispevke, če želite pridobiti poglobljeno znanje."
        />
      </Head>
      <HeadingContainer>
        <DesktopFlex>
          <HeadingUpperHeading>Aktualno</HeadingUpperHeading>
          <Paragraph>Najnovejše novice in prispevki ekipe Resultant.</Paragraph>
        </DesktopFlex>
        <HeadingLine></HeadingLine>
        <FiltersWrapper>
          <FilterDropdown
            id="Storitve"
            items={[{ id: -1, name: "Vse" }, ...categories]}
            onValuePicked={(val) => {
              setFilter({
                ...filter,
                category: val,
              });
            }}
          ></FilterDropdown>
          <FilterDropdown
            id="Avtorji"
            items={[{ id: -1, name: "Vsi" }, ...authors]}
            onValuePicked={(val) => {
              setFilter({
                ...filter,
                author: val,
              });
            }}
          ></FilterDropdown>
          <FilterDropdown
            id="Datum objave"
            items={[
              { id: -1, name: "Od najnovejšega do najstarejšega" },
              { id: 1, name: "Od najstarejšega do najnovejšega" },
            ]}
            onValuePicked={(val) => {
              setSortFilter(val);
            }}
          ></FilterDropdown>
        </FiltersWrapper>
      </HeadingContainer>

      {isFetching && (
        <BodyText2
          style={{
            textAlign: "center",
            display: "block",
            marginBottom: "50px",
          }}
        >
          Nalaganje...
        </BodyText2>
      )}

      {articles.length <= 0 && !isFetching && (
        <BodyText2 style={{ textAlign: "center", display: "block" }}>
          Ni člankov!
        </BodyText2>
      )}

      {articles.length > 0 && !isFetching && (
        <CardWrapperParent numArticles={articles.length}>
          <LatestCard
            key={articles[0].id}
            news={Array.from(articles)[0]}
          ></LatestCard>
          <CardWrapper>
            {Array.from(articles)
              .filter((article) => article.id != articles[0].id) // Skip first since its the latest article
              .map((article) => {
                return (
                  <ArticleCard key={article.id} news={article}></ArticleCard>
                );
              })}
          </CardWrapper>
        </CardWrapperParent>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Link
          href={{
            pathname: router.pathname,
            query: {
              ...router.query,
              page: Math.max(1, pagination.page - 1),
            },
          }}
          replace
        >
          <a>
            <img src="/Buttons/arrow_prev2.svg" alt="Previous page" />
          </a>
        </Link>

        <p style={{ textAlign: "center", fontSize: "1.3rem" }}>
          {pagination.page} / {pagination.pageCount}
        </p>

        <Link
          href={{
            pathname: router.pathname,
            query: {
              ...router.query,
              page: Math.min(pagination.pageCount, pagination.page + 1),
            },
          }}
          replace
        >
          <a>
            <img src="/Buttons/arrow_next.svg" alt="Next page" />
          </a>
        </Link>
      </div>
    </>
  );
};

export const FiltersWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 0;
    height: 100px;
  }
`;

export const FiltersTitle = styled.div`
  color: #b5b5b5;
  font-family: "NeusaThin";
`;

export const NoArticlesWrapper = styled.div`
  text-align: center;
`;

export const CardWrapperParent = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: ${(props) => (props.numArticles * 1.5).toString() + "rem"};

  @media (min-width: 768px) {
    margin-bottom: ${(props) => (props.numArticles * 1).toString() + "%"};
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  gap: 1vw;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 29.11vw 29.11vw 29.11vw;
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: 21.66vw 21.66vw 21.66vw 21.66vw;
  }
`;

export default aktualno;
