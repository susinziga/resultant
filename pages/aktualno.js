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

export const getServerSideProps = async () => {
  const categories = await fetchAPI("/kategorije", { populate: "*" });
  const authors = await fetchAPI("/avtors", { populate: "*" });

  let cats = [];
  categories.data.forEach((element) =>
    cats.push({ id: element.id, name: element.attributes.fullName })
  );

  let auths = [];
  authors.data.forEach((element) =>
    auths.push({
      id: element.id,
      name: element.attributes.ime,
      resultant: element.attributes.resultant,
    })
  );

  return {
    props: {
      categories: cats,
      authors: auths,
    },
  };
};

const aktualno = ({ categories, authors }) => {
  const { filter, state, setFilter, setSortFilter, isFetching } =
    useContext(AktualnoContext);

  let items = state;

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
        <BodyText2 style={{ textAlign: "center", display: "block" }}>
          Nalaganje...
        </BodyText2>
      )}

      {items.length <= 0 && !isFetching && (
        <BodyText2 style={{ textAlign: "center", display: "block" }}>
          Ni člankov!
        </BodyText2>
      )}

      {items.length > 0 && (
        <CardWrapperParent numArticles={items.length}>
          <LatestCard
            key={items[0].id}
            news={getArticleFromStrapiData(items[0])}
          ></LatestCard>
          <CardWrapper>
            {items.map((article, index) => {
              // Skip first since its the latest article
              if (index == 0) return;

              return (
                <ArticleCard
                  key={article.id}
                  news={getArticleFromStrapiData(article)}
                ></ArticleCard>
              );
            })}
          </CardWrapper>
        </CardWrapperParent>
      )}
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
    /* margin-bottom: 10%; */
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

  /* @media only screen and (min-width: 992px) {
    grid-template-columns: 29.11vw 29.11vw 29.11vw;
  } */

  @media only screen and (min-width: 1200px) {
    grid-template-columns: 21.66vw 21.66vw 21.66vw 21.66vw;
  }
`;

export default aktualno;
