import React from "react";
import styledComponents from "styled-components";
import Share from "./content_components/Share";
import Blog_Header from "./header/Blog_header";
import Blog_image_excerpt from "./image_excerpt/Blog_image_excerpt";

const Blog_page = (props) => {
  const { title, authors, image, excerpt } = props._data;
  return (
    <Container>
      <Blog_Header title={title} authors={authors}></Blog_Header>

      <Blog_image_excerpt image={image} excerpt={excerpt}></Blog_image_excerpt>

      {props.children}
      <Share></Share>
    </Container>
  );
};

const Container = styledComponents.div`


    
    width:90%;
    margin:auto;

    @media(min-width:768px){

    }
    
`;
export default Blog_page;
