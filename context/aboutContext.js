import React, { createContext, useState, useEffect } from "react";

// create context
const AboutContext = createContext();

const AboutContextProvider = ({ children }) => {
  const [containerActive, setContainerActive] = useState(0);

  const [contentSwiperActive, setContentSwiperActive] = useState(0);

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
