import styled from "styled-components";

export const Outer = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 0.7rem;
  }
`;

export const ButtonContainerParagraph = styled.p`
  font-size: 1rem;
  padding: var(--padding-primary);
  cursor: pointer;

  display: inline-block;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  ${(props) => {
    return props.link ? "padding:var(--padding-link);" : "";
  }}

  ${(props) => {
    return props.primary
      ? `background-color:var(--secondary-color);
    color:var(--white);
    border-radius:var(--border-primary);
    &:hover {
      background-color: var(--primary-color);
      color: white;
    }`
      : "";
  }}

${(props) => {
    return props.secondary
      ? `background-color:var(--white);
      color:var(--terciary-color)!important;
      border: 2px solid var(--terciary-color);
      border-radius:var(--border-secondary);
      &:hover {
      background-color: var(--light)
    }`
      : "";
  }}

${(props) => {
    return props.terciary
      ? `/*background-color:var(--white);*/
      color:var(--black);
      
      &:hover {
      color:var(--grey);
      
    }`
      : "";
  }}

${(props) => {
    return props.arrow || props.arrowDown
      ? `padding-right: 10px;
    }`
      : "";
  }}
`;

export const ButtonContainer = styled.a`
  font-size: 1rem;
  padding: var(--padding-primary);
  cursor: pointer;

  display: inline-block;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  ${(props) => {
    return props.link ? "padding:var(--padding-link);" : "";
  }}

  ${(props) => {
    return props.primary
      ? `background-color:var(--secondary-color);
    color:var(--white);
    border-radius:var(--border-primary);
    &:hover {
      background-color: var(--primary-color);
      color: white;
    }`
      : "";
  }}

${(props) => {
    return props.secondary
      ? `
      color: #6e4c00 !important;
      border: 2px solid #6e4c00;
      border-radius:var(--border-secondary);
      &:hover {
      background-color: var(--light)
    }`
      : "";
  }}

${(props) => {
    return props.terciary
      ? `/*background-color:var(--white);*/
      color:var(--black);
      
      &:hover {
      color:var(--grey);
      
    }`
      : "";
  }}

${(props) => {
    return props.arrow || props.arrowDown
      ? `padding-right: 10px;
    }`
      : "";
  }}
`;

export const Arrow = styled.img`
  padding-bottom: 3%;

  ${(props) => {
    return props.down
      ? `transform: rotate(90deg);
      `
      : "";
  }}
`;
