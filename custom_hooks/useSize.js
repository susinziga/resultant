import React from "react";

const useSize = () => {
  const isDesktop = () => {
    return window.innerWidth > 599;
  };
  return { isDesktop };
};

export default useSize;
