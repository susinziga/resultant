import React from "react";

import styled from "styled-components";

const Image = ({ src, label, className }) => {
  return (
    <Container className={className}>
      <img
        style={{ width: className == "mobile" ? "80%" : "100%" }}
        src={src}
      ></img>
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
const Label = styled.label`
  font-size: 0.9rem;
  font-style: italic;
  font-weight: 300;
  font-family: "NeusaThin";
  text-align: center;
`;

export default Image;
