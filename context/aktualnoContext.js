import React from "react";
import { useAktualno } from "../custom_hooks/useAktualno";

const AktualnoContext = React.createContext();

const AktualnoProvider = (props) => {
  const {
    filter,
    state,
    setFilter,
    setSortFilter,
    isFetching,
    paginationData,
  } = useAktualno();

  return (
    <AktualnoContext.Provider
      value={{
        filter,
        state,
        setFilter,
        setSortFilter,
        isFetching,
        paginationData,
      }}
    >
      {props.children}
    </AktualnoContext.Provider>
  );
};

export { AktualnoContext };

export default AktualnoProvider;
