import React from "react";
import styled from "styled-components";
import { BodyText2, BodyText3 } from "../../../../basic_components/texts/Texts";
const Blog_image_excerpt = ({ image, excerpt, excerpt2 }) => {
  return (
    <Blog_ie_container>
      <Blog_ie_image src={image}></Blog_ie_image>
      <Blog_ie_excerpt>
        <BodyText2>{excerpt}</BodyText2>
      </Blog_ie_excerpt>
    </Blog_ie_container>
  );
};

const Blog_ie_container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
const Blog_ie_image = styled.img`
  border-radius: 16px;
  height: 300px;
  object-fit: cover;
  transition: all 0.25s ease;

  @media (min-width: 1024px) {
    height: 450px;
  }

  @media (min-width: 1600px) {
    height: 600px;
  }
`;
const Blog_ie_excerpt = styled.div`
  border: 1px solid #282828;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 4rem 1.5rem;
  text-align: center;
  @media (min-width: 768px) {
    padding: 5rem 7rem;
  }
`;

export default Blog_image_excerpt;
