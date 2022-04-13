import React from "react";
import {
  ListTitle,
  ListItem,
  ListUnorderedList,
} from "./ArticleItemList.styled";

const ArticleItemList = ({ title, items, className }) => {
  const listItems = items.map((text) => <ListItem>{text}</ListItem>);

  return (
    <div className={className}>
      <ListTitle>{title}</ListTitle>
      <ListUnorderedList>{listItems}</ListUnorderedList>
    </div>
  );
};

export default ArticleItemList;
