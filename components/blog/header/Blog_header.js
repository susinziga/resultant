import React from "react";
import {
  Blog_author,
  Blog_authors,
  Blog_author_container,
  Blog_author_image,
  Blog_author_images,
  Blog_header_container,
  Blog_title,
  Line,
} from "./Blog_header.styled";

const Blog_Header = ({ title, authors, image }) => {
  return (
    <Blog_header_container className="section">
      <Blog_author_container>
        <Blog_title>{title}</Blog_title>
        <Blog_authors>
          {authors.map((author) => {
            return <Blog_author>{author.name}</Blog_author>;
          })}
        </Blog_authors>
      </Blog_author_container>
      <Blog_author_images>
        {authors.map((author) => {
          return <Blog_author_image src={author.image}></Blog_author_image>;
        })}
      </Blog_author_images>
      <Line></Line>
    </Blog_header_container>
  );
};

export default Blog_Header;
