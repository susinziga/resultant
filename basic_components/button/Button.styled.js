import styledComponents from "styled-components";

export const ButtonContainer = styledComponents.a`
font-size:1rem;
padding: var(--padding-primary);
cursor:pointer;

-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */


${(props) => {
  return props.link ? "padding:var(-padding-link);" : "";
}}

${(props) => {
  return props.primary
    ? `background-color:var(--primary-color);
    color:var(--white);
    border-radius:var(--border-primary);`
    : "";
}}

${(props) => {
  return props.secondary
    ? `background-color:var(--secondary-color);
      color:var(--white);
      border-radius:var(--border-secondary);`
    : "";
}}
`;
