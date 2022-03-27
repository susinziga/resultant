import styledComponents from "styled-components";

export const TextareaContainer = styledComponents.textarea`
font-size:1rem;
padding: var(--padding-primary);
width: 100%;
height: 100%;
font-family: "Fatface",
border: 1px solid var(--dark);
border-radius: var(--border-primary);
margin-top: 0.5rem;
border-color: black; 
outline-color: var(--secondary-color);

-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */

::-webkit-resizer {
  display: none;
}


${(props) => {
  return props.error ? `border-color: #F22727; outline-color: #F22727` : "";
}}

`;

export const TextareaLabel = styledComponents.label`
 font-size:1rem;
 color: var(--dark);

`;

export const ActionLabel = styledComponents.label`
 font-size:0.8rem;
 

    ${(props) => {
      return props.error ? `color: #F22727;` : "";
    }}

    ${(props) => {
      return props.success ? `color: #325935;` : "";
    }}

`;
