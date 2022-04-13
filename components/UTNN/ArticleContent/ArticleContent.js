import React from "react";
import useTranslation from "next-translate/useTranslation";
import { ArticleContentWrapper } from "./ArticleContent.styled";

const ArticleContent_utnk = ({ content, className }) => {
  return (
    <>
      <ArticleContentWrapper className={className}>
        {content}
      </ArticleContentWrapper>
    </>
  );
};

export default ArticleContent_utnk;
