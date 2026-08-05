import React from "react";
import {
  HeadingContainer,
  HeadingUpperHeading,
  Paragraph,
  HeadingLine,
  DesktopFlex,
} from "../components/support/Support.styled";
import styled from "styled-components";
import ArticleCard from "../components/aktualno/ArticleCard";
import LatestCard from "../components/aktualno/LatestCard";
import { BodyText3 } from "../basic_components/texts/Texts";
import FilterDropdown from "../components/aktualno/FilterDropdown";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import {RESULTANT } from "../pages/people";
// TODO: set this in your .env file
const WP_API_URL = process.env.WP_API_URL || "https://yourwordpresssite.com/wp-json/wp/v2";

// Maps each known author name to whether they're a guest (true) or a Resultant
// employee (false). Keys must match the ACF "autor" field value exactly.

// Maps a raw WordPress post (with ?_embed) into the shape ArticleCard/LatestCard expect:
// { id, heading, text, image, imageAlt, hasGuestAuthor }
const getArticleFromWpData = (post) => {
  // ACF "author" field is a list (array) - can hold multiple author names per post
  const rawAuthor = post.acf?.author;
  const authorNames = Array.isArray(rawAuthor)
    ? rawAuthor
    : rawAuthor
    ? [rawAuthor]
    : [];

  return {
    id: post.id,
    heading: post.title.rendered,
    text: post.excerpt.rendered.replace(/<[^>]+>/g, "").replace("&#8211;", "-"), // strip HTML tags from excerpt
    image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
    imageAlt: post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || "",
    authorNames: authorNames,
    // True if ANY listed author is marked as a guest in the map
    hasGuestAuthor: authorNames.some((name) => RESULTANT[name] === false),
  };
};

export const getServerSideProps = async (context) => {
  const page = Number(context.query.page) || 1;
  const pageSize = 9;

  const categoryId = context.query.categoryId || null;
  const authorId = context.query.authorId || null; // this is now an author NAME, not a WP user ID
  // WordPress uses orderby + order separately, rather than Strapi's "field:direction" string.
  // We keep the same query-string value ("createdAt:desc") for URL/UI compatibility and split it here.
  const sort = context.query.sort || "createdAt:desc";
  const [, sortDirection] = sort.split(":");
  const order = sortDirection === "asc" ? "asc" : "desc";

  // The author dropdown is now built from our hardcoded guest map instead of WP's
  // built-in /users endpoint, since we're driving author display off the ACF "author"
  // field rather than WordPress's native author system.
  // FilterDropdown expects "resultant" (true = employee, false = guest) - same
  // convention as Blog_Header - so we invert our guest map here.
  const auths = Object.keys(RESULTANT).map((name) => ({
    id: name,
    name,
    resultant: RESULTANT[name],
  }));

  const categoriesRes = await fetch(`${WP_API_URL}/categories?per_page=100`);
  const categoriesResponse = await categoriesRes.json();
  const cats = categoriesResponse.map((element) => ({
    id: element.id,
    name: element.name,
  }));

  let articles;
  let totalPosts;
  let totalPages;

  // NOTE: WordPress's REST API can filter posts by category natively (?categories=ID),
  // but it CANNOT filter by an ACF field value out of the box - that would need a
  // custom REST modification on the WordPress side (e.g. a meta_query via a filter
  // hook, or a plugin adding ACF-based REST filters). Since we don't have that, when
  // an author name is selected we fetch a larger batch and filter + paginate manually.
  if (authorId) {
    const postsParams = new URLSearchParams({
      per_page: "100",
      orderby: "date",
      order,
      _embed: "1",
    });
    if (categoryId) postsParams.set("categories", categoryId);

    const postsRes = await fetch(`${WP_API_URL}/posts?${postsParams.toString()}`);
    const postsResponse = await postsRes.json();

    const allMatching = postsResponse
      .map(getArticleFromWpData)
      .filter((article) => article.authorNames.includes(authorId));

    totalPosts = allMatching.length;
    totalPages = Math.max(1, Math.ceil(totalPosts / pageSize));
    articles = allMatching.slice((page - 1) * pageSize, page * pageSize);
  } else {
    // No author filter -> WordPress can paginate natively, same as before.
    const postsParams = new URLSearchParams({
      page: String(page),
      per_page: String(pageSize),
      orderby: "date",
      order,
      _embed: "1",
    });
    if (categoryId) postsParams.set("categories", categoryId);

    const postsRes = await fetch(`${WP_API_URL}/posts?${postsParams.toString()}`);
    const postsResponse = await postsRes.json();

    totalPosts = Number(postsRes.headers.get("X-WP-Total")) || 0;
    totalPages = Number(postsRes.headers.get("X-WP-TotalPages")) || 1;
    articles = postsResponse.map(getArticleFromWpData);
  }

  return {
    props: {
      categories: cats,
      authors: auths,
      articles,
      pagination: {
        page,
        pageCount: totalPages,
        total: totalPosts,
      },
      categoryId,
      authorId,
      sort,
    },
  };
};

const aktualno = ({
  categories,
  authors,
  articles,
  pagination,
  categoryId,
  authorId,
  sort,
}) => {
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
            label="Storitve"
            items={[{ id: null, name: "Vse" }, ...categories]}
            onChange={(val) => {
              router.push({
                pathname: router.pathname,
                query: {
                  ...router.query,
                  categoryId: val,
                  page: 1,
                },
              });
            }}
            selectedId={categoryId}
          ></FilterDropdown>
          <FilterDropdown
            label="Avtorji"
            items={[{ id: null, name: "Vsi" }, ...authors]}
            onChange={(val) => {
              router.push({
                pathname: router.pathname,
                query: {
                  ...router.query,
                  authorId: val,
                  page: 1,
                },
              });
            }}
            selectedId={authorId}
          ></FilterDropdown>
          <FilterDropdown
            label="Datum objave"
            items={[
              {
                id: "createdAt:desc",
                name: "Od najnovejšega do najstarejšega",
              },
              { id: "createdAt:asc", name: "Od najstarejšega do najnovejšega" },
            ]}
            onChange={(val) => {
              router.push({
                pathname: router.pathname,
                query: {
                  ...router.query,
                  sort: val,
                },
              });
            }}
            selectedId={sort}
          ></FilterDropdown>
        </FiltersWrapper>
      </HeadingContainer>

      {articles.length <= 0 && (
        <BodyText3
          style={{
            textAlign: "center",
            display: "block",
            marginBottom: "60px",
          }}
        >
          Ni člankov!
        </BodyText3>
      )}

      {articles.length > 0 && (
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