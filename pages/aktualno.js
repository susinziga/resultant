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
import { useAktualno } from "../custom_hooks/useAktualno";
import { AktualnoContext } from "../context/aktualnoContext";

export const getServerSideProps = async () => {
  const categories = await fetchAPI("/kategorije", { populate: "*" });
  const authors = await fetchAPI("/avtors", { populate: "*" });

  let cats = [];
  categories.data.forEach((element) =>
    cats.push({ id: element.id, name: element.attributes.fullName })
  );

  let auths = [];
  authors.data.forEach((element) =>
    auths.push({ id: element.id, name: element.attributes.ime })
  );

  return {
    props: {
      categories: cats,
      authors: auths,
    },
  };
};

const aktualno = ({ categories, authors }) => {
  const { filter, state, setFilter, setSortFilter } =
    useContext(AktualnoContext);

  let items = state;

  return (
    <>
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

      {items.length <= 0 ? (
        <BodyText2>Ni člankov!</BodyText2>
      ) : (
        <CardWrapperParent>
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
  margin-bottom: 80%;

  @media (min-width: 768px) {
    margin-bottom: 20%;
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  gap: 1%;

  @media only screen and (min-width: 768px) {
    grid-template-columns: auto auto auto;
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: auto auto auto;
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: auto auto auto auto;
  }
`;

export default aktualno;
