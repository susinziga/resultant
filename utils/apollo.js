import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "apollo-cache-inmemory";
import withApollo from "next-with-apollo";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";
import { getStrapiURL } from "../pages/api/strapi";

const link = createHttpLink({
  fetch,
  uri: getStrapiURL() + "/graphql",
});

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: link,
      cache: new InMemoryCache().restore(initialState || {}),
    })
);
