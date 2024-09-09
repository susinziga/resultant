import { useState, useEffect } from "react";
import { fetchAPI } from "../pages/api/strapi";
import { useRouter } from "next/router";

const perPage = 9;
export const useAktualno = () => {
  const router = useRouter();

  const [isFetching, setIsFetching] = useState(false);

  const [filteredState, setFilteredState] = useState([]);
  const [state, setState] = useState([]);
  const [paginationData, setPaginationData] = useState({
    page: router.query.page || 1,
    pageSize: perPage,
    pageCount: 1,
    total: 0,
  });
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
    setIsFetching(true);
    console.log(router.query.page);
    let data = await fetchAPI("/clanki", {
      populate: "*",
      sort: "createdAt:" + (sortFilter == -1 ? "desc" : "asc"),
      pagination: {
        page: router.query.page || 1,
        pageSize: perPage,
      },
    });
    setState(data.data);
    setPaginationData(data.meta.pagination);
    setIsFetching(false);
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

  return {
    filter,
    setFilter,
    setSortFilter,
    state: filteredState,
    isFetching,
    paginationData,
  };
};
