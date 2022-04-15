import styledComponents from "styled-components";
import {
  BodyText4,
  Title2,
} from "../../../../../../basic_components/texts/Texts";

export const ReferencesItemContainer = styledComponents.div`

    width: 85%;
    margin-left: 2%;
  
    border: 1px solid black;
    border-radius: 12px;
    padding: 8%;

    min-height:18.5rem;
  

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
  
    ${(props) => {
      return props.isActive
        ? ` 
            background-color: var(--pillar-color);
            transition: background 0.5s ease;
          `
        : "";
    }}

    @media(min-width:768px){
      min-height: 10.5rem;
      max-height:10.5rem;
    }


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

export const ButtonsContainer = styledComponents.div`
display:flex;
z-index: 99999;
@media(min-width:768px){
  position:relative;
  gap:1rem;
  width:fit-content;
  left:15%;
  margin-top:2rem;
}




`;
