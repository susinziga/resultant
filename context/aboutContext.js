import React, { createContext, useState, useEffect } from "react";

// create context
const AboutContext = createContext();

const AboutContextProvider = ({ children }) => {
  const [containerActive, setContainerActive] = useState(0);

  const [cd, setCd] = useState(false);

  const setContentSwiperActive = (newstate, delay) => {
    if (!cd) setContentSwiperActives(newstate);
    if (typeof delay !== "undefined") {
      setCd(true);

      setTimeout(() => setCd(false), 500);
    }
  };

  const [contentSwiperActive, setContentSwiperActives] = useState(0);

  return (
    // the Provider gives access to the context to its children
    <AboutContext.Provider
      value={{
        containerActive,
        contentSwiperActive,
        setContainerActive,
        setContentSwiperActive,
      }}
    >
      {children}
    </AboutContext.Provider>
  );
};

export { AboutContext, AboutContextProvider };
