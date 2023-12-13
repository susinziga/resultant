import { useQuery } from "@apollo/client";
import ApolloClient from "apollo-client";
import React, { useState, useEffect } from "react";
import ARTICLES_QUERY from "../apollo/queries/articles/articles";
import { fetchAPI } from "../pages/api/strapi";

export const useAktualno = () => {
  const [filteredState, setFilteredState] = useState([]);
  const [state, setState] = useState([]);
  const [filter, setFilter] = useState({
    category: -1,
    author: -1,
  });
  const [sortFilter, setSortFilter] = useState(-1);

  useEffect(async () => {
    await updateStateFromApi();
  }, []);

  useEffect(async () => {
    await updateStateFromApi();
  }, [sortFilter]);

  useEffect(() => {
    filterState();
  }, [filter, state]);

  const updateStateFromApi = async () => {
    let data = await fetchAPI("/clanki", {
      populate: "*",
      sort: "createdAt:" + (sortFilter == -1 ? "desc" : "asc"),
      pagination: {
        page: 1,
        pageSize: 200,
      },
    });
    setState(data.data);
  };

  const filterState = () => {
    let filtered = [...state];

    filtered = filterCategories(filtered);
    filtered = filterAuthors(filtered);

    setFilteredState(filtered);
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

  return { filter, setFilter, setSortFilter, state: filteredState };
};
