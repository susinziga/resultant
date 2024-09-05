import React from "react";
import { useQuery } from "@apollo/react-hooks";

const Query = ({
  children,
  id,
  category,
  services = [0, 1, 2],
  authors = [0, 1, 2, 3, 4, 5],
  query,
}) => {
  const { data, loading, error } = useQuery(query, {
    variables: {
      id: id,
      category: category,
      services: services,
      authors: authors,
    },
  });

  if (loading) return <p style={{ textAlign: "center" }}>Nalaganje...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return children({ data });
};
export default Query;
