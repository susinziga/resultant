import React from "react";

import styled from "styled-components";

const Image = ({ src, label }) => {
  return (
    <Container>
      <img src={src}></img>
      <Label>{label}</Label>
    </Container>
  );
};

const Container = styled.div`
  width: 70%;
  margin: auto;
  text-align: center;
`;
const Label = styled.label`
  font-size: 0.9rem;
  font-style: italic;
  font-weight: 300;
  font-family: "NeusaThin";
  text-align: center;
`;

export default Image;
