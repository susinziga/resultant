import React from "react";
import useTranslation from "next-translate/useTranslation";
import { ArticleContentWrapper } from "./ArticleContent.styled";

const ArticleContent_upijcprzp = ({ content, className }) => {
  return (
    <>
      <ArticleContentWrapper className={className}>
        {content}
      </ArticleContentWrapper>
    </>
  );
};

export default ArticleContent_upijcprzp;
