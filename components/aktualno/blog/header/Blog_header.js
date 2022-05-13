import React from "react";
import {
  BlogAuthorImageWrapper,
  Blog_author,
  Blog_authors,
  Blog_author_container,
  Blog_author_image,
  Blog_author_images,
  Blog_header_container,
  Blog_title,
  GuestBadge,
  Line,
} from "./Blog_header.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Blog_Header = ({ title, authors, image }) => {
  return (
    <Blog_header_container className="section">
      <Blog_author_container>
        <Blog_title>{title}</Blog_title>
        <Blog_authors>
          {authors.map((author, i) => {
            if (i === authors.length - 1)
              return <Blog_author key={i}>{author.name}</Blog_author>;
            else
              return (
                <div key={i}>
                  <Blog_author>{author.name}</Blog_author>
                  <FontAwesomeIcon
                    icon={faCircle}
                    fontSize="0.25rem"
                    color="#00B4F0"
                    style={{ verticalAlign: ".875em", marginLeft: ".5rem" }}
                  ></FontAwesomeIcon>
                </div>
              );
          })}
        </Blog_authors>
      </Blog_author_container>
      <Blog_author_images>
        {authors.map((author, index) => {
          return (
            <BlogAuthorImageWrapper key={index}>
              <Blog_author_image
                src={author.image}
                alt={author.name}
              ></Blog_author_image>
              {author.resultant === false && <GuestBadge>Gost</GuestBadge>}
            </BlogAuthorImageWrapper>
          );
        })}
      </Blog_author_images>
      <Line></Line>
    </Blog_header_container>
  );
};

export default Blog_Header;
