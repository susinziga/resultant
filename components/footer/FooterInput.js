import React from "react";
import styledComponents from "styled-components";

export const InputContainer = styledComponents.input`
outline: none;
font-family: "Neusa";
font-size:1rem;
padding: var(--padding-primary);
width: 70%;
background-color: var(--footer-color);
border: 2px solid #F8F2ED;
border-top-left-radius: 31px;
border-bottom-left-radius: 31px;
color: white;
margin-top: 0.5rem;
display: flex;


`;

export const InputLabel = styledComponents.label`
font-family: "Neusa";
 font-size:1rem;
 font-weight: 300;
 color: #F8F2ED;

`;

export const InputContainerDiv = styledComponents.div`

font-size:1rem;
padding: var(--padding-primary);
width: 100%;
background-color: var(--primary-color)

border-top-left-radius: 31px;
border-bottom-left-radius: 31px;

margin-top: 0.5rem;
display: flex;
`;

export const ButtonContainer = styledComponents.button`
font-family: "Neusa";
font-size:1rem;
padding: var(--padding-primary);
cursor:pointer;
font-size: 0.8rem;
width: 30%;
margin-top: 0.5rem;
border-top-right-radius: 31px;
border-bottom-right-radius: 31px;
background-color: var(--footer-color);
border: 2px solid #F8F2ED;
border-left: 0px;
color: white;


@media only screen and (max-width: 380px) {
    font-size: 0.8rem;
    width: 40%;
}

@media only screen and (min-width: 980px) {
    font-size: 1rem;
}



`;

const FooterInput = () => {
  return (
    <>
      <InputLabel>Email *</InputLabel>
      <InputContainerDiv>
        <InputContainer></InputContainer>
        <ButtonContainer>Naroči se</ButtonContainer>
      </InputContainerDiv>
    </>
  );
};

export default FooterInput;
