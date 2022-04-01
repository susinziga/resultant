import styledComponents from "styled-components";
import {
  BodyText4,
  Title2,
} from "../../../../../../basic_components/texts/Texts";

export const ReferencesItemContainer = styledComponents.div`

    width: 75%;
    margin-left: 2%;
  
    border: 1px solid black;
    border-radius: 12px;
    padding: 8%;
    min-height: 160px;
    
  
    ${(props) => {
      return props.isActive
        ? ` 
            background-color: var(--pillar-color);
            transition: background 0.5s ease;
          `
        : "";
    }}


`;

export const Heading = styledComponents(Title2)`
    font-family: "Neusa";
    font-size: 1.5rem;
    padding-bottom: 1rem;

    
    ${(props) => {
      return props.isActive
        ? ` 
           color: white;
           transition: color 0.5s ease;
          `
        : "";
    }}



`;

export const Text = styledComponents(BodyText4)`

${(props) => {
  return props.isActive
    ? ` 
       color: white;
       transition: color 0.5s ease;
      `
    : "";
}}
    


`;
