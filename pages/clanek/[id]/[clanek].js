import { useRouter } from "next/router";
import React from "react";
import {
  BodyText3,
  Subtitle2,
  Subtitle1,
  Title2,
} from "../../../basic_components/texts/Texts";
import Container, {
  Container_border,
} from "../../../components/aktualno/blog/content_components/Container.styled";
import Image from "../../../components/aktualno/blog/content_components/Image";
import NewParagraph, {
  NewRow,
} from "../../../components/blog/content_components/Margin.styled";
import Query from "../../../components/query";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Blog_page from "../../../components/aktualno/blog/Blog_page";
import mkstyle from "./markdown-styles.module.css";
import Head from "next/head";
import { HttpLink, InMemoryCache } from "@apollo/react-hooks";
import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { getStrapiURL } from "../../api/strapi";
import { graphql } from "graphql";
import { ApolloServer, gql, makeExecutableSchema } from "apollo-server-micro";
import ARTICLES_QUERY from "../../../apollo/queries/articles/articles";

const link = createHttpLink({
  fetch,
  uri: getStrapiURL() + "/graphql",
});

const client = new ApolloClient({
  ssrMode: true,
  link: link,
  cache: new InMemoryCache(),
});

export async function getStaticProps({ params }) {
  let res = await client.query({ query: ARTICLE_QUERY, variables: { id: id } });
  console.log(res);
}

export async function getStaticPaths() {
  const clanki = await client.query({ query: ARTICLES_QUERY });
  console.log("clanki: ");
  console.log(clanki.data.clanki.data);
  const paths = clanki.data.clanki.data.map((clanek) => {
    return {
      params: { id: String(clanek.id) },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

const Clanek = ({ clanek }) => {
  console.log(clanek);
  return <h1>halo</h1>;
};

export default Clanek;
