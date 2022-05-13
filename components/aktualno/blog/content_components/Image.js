import React from "react";

import styled from "styled-components";

const Image = ({ src, label }) => {
  return (
    <Container>
      <ComponentImage src={src}></ComponentImage>
      <Label>{label}</Label>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;

  @media (min-width: 768px) {
    width: 70%;
  }
`;
const ComponentImage = styled.img`
  border-radius: 16px;
`;
const Label = styled.label`
  font-size: 0.9rem;
  font-style: italic;
  font-weight: 300;
  font-family: "NeusaThin";
  text-align: center;
`;

export default Image;
