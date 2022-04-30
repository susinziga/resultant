import { useQuery } from "@apollo/client";
import ApolloClient from "apollo-client";
import { useState, useEffect } from "react";
import ARTICLES_QUERY from "../apollo/queries/articles/articles";
import { fetchAPI } from "../pages/api/strapi";

export const useAktualno = () => {
  const [state, setState] = useState([]);
  const [filter, setFilter] = useState({
    category: -1,
    author: -1,
    sort: -1,
  });

  useEffect(async () => {
    await updateStateFromApi();
    filteredState();
  }, [filter]);

  const updateStateFromApi = async () => {
    let data = await fetchAPI("/clanki", {
      populate: "*",
      sort: "createdAt:" + (filter.sort == -1 ? "desc" : "asc"),
    });
    setState(data.data);
  };

  const filteredState = () => {
    if (filter.category == -1 && filter.author == -1) {
      return state;
    }

    let temp = state;
    let filtered = temp;

    filtered = filterCategories(filtered);
    filtered = filterAuthors(filtered);

    return filtered;
  };

  const filterCategories = (items) => {
    if (filter.category == -1) {
      return items;
    }

    let filtered = [];

    items.forEach((item) => {
      let tempCats = item.attributes.kategorijas.data;
      let cats = [];
      tempCats.forEach((cat) => {
        cats.push(cat.id);
      });

      if (cats.includes(filter.category)) {
        filtered.push(item);
      }
    });

    return filtered;
  };

  const filterAuthors = (items) => {
    if (filter.author == -1) {
      return items;
    }

    let filtered = [];

    items.forEach((item) => {
      let temp = item.attributes.avtors.data;
      let authors = [];
      temp.forEach((aut) => {
        authors.push(aut.id);
      });

      if (authors.includes(filter.author)) {
        filtered.push(item);
      }
    });

    return filtered;
  };

  return { filter, state, setFilter, filteredState };
};
