import React from "react";
import { useAktualno } from "../custom_hooks/useAktualno";

const AktualnoContext = React.createContext();

const AktualnoProvider = (props) => {
  const { filter, state, setFilter, setSortFilter, isFetching } = useAktualno();

  return (
    <AktualnoContext.Provider
      value={{ filter, state, setFilter, setSortFilter, isFetching }}
    >
      {props.children}
    </AktualnoContext.Provider>
  );
};

export { AktualnoContext };

export default AktualnoProvider;
