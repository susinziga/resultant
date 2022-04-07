import React from "react";
import {
  Blog_author,
  Blog_author_container,
  Blog_author_image,
  Blog_header_container,
  Blog_title,
  Line,
} from "./Blog_header.styled";

const Blog_Header = ({ title, author, image }) => {
  return (
    <Blog_header_container className="section">
      <Blog_author_container>
        <Blog_title>{title}</Blog_title>
        <Blog_author>{author}</Blog_author>
      </Blog_author_container>
      <Blog_author_image src={image}></Blog_author_image>
      <Line></Line>
    </Blog_header_container>
  );
};

export default Blog_Header;
