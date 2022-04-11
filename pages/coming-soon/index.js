import React from "react";
import Header from "../../components/DNLA/subpages/Header";
const index = () => {
  return (
    <>
      <Header title="Pozdravljeni, to stran pravkar izdelujemo. Bi želeli biti obveščeni, ko se stran objavi?"></Header>
      <Container>
        <InputLabel>Email *</InputLabel>
        <InputContainerDiv>
          <InputContainer></InputContainer>
          <ButtonContainer>Naroči se</ButtonContainer>
        </InputContainerDiv>
      </Container>
    </>
  );
};

import styled from "styled-components";

const Container = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 3rem;
  @media (min-width: 768px) {
    width: 50%;
  }
`;
export const InputContainer = styled.input`
  outline: none;
  font-family: "Neusa";
  font-size: 1rem;
  padding: var(--padding-primary);
  width: 70%;
  background-color: transparent;
  border: 2px solid var(--footer-color);
  border-top-left-radius: 31px;
  border-bottom-left-radius: 31px;
  color: var(--footer-color);
  margin-top: 0.5rem;
  display: flex;
`;

export const InputLabel = styled.label`
  font-family: "Neusa";
  font-size: 1rem;
  font-weight: 300;
  color: black;
`;

export const InputContainerDiv = styled.div`
  font-size: 1rem;
  padding: var(--padding-primary);
  width: 100%;

  border-top-left-radius: 31px;
  border-bottom-left-radius: 31px;

  margin-top: 0.5rem;
  display: flex;
`;

export const ButtonContainer = styled.button`
  font-family: "Neusa";
  font-size: 1rem;
  padding: var(--padding-primary);
  cursor: pointer;
  font-size: 0.8rem;
  width: 30%;
  margin-top: 0.5rem;
  border-top-right-radius: 31px;
  border-bottom-right-radius: 31px;
  background-color: transparent;
  border: 2px solid var(--footer-color);
  border-left: 0px;
  color: var(--footer-color);

  @media only screen and (max-width: 380px) {
    font-size: 0.8rem;
    width: 40%;
  }

  @media only screen and (min-width: 980px) {
    font-size: 1rem;
  }
`;
export default index;
