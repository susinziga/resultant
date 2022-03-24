import styledComponents from "styled-components";
import { Title2 } from "../../../basic_components/texts/Texts";


export const CountersContainer = styledComponents.div`
   background-color: var(--pillar-color);
   display: flex;
   
       
    @media screen and (min-width: 768px){
        width: 100%;
        
   
    }

    @media screen and (min-width: 1600px){
        width: 100%;
        
    }
  
  ${(props) => {
    return props.down
      ? `transform: rotate(90deg);
      `
      : "";
  }}
`;

export const CounterContainer = styledComponents.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; 
    
       
    @media screen and (min-width: 768px){
        width: 33.3%;
        margin: 2% 0;

        >p {
            padding: 0 18%;
        }
    }

    @media screen and (min-width: 1600px){
        width: 33.3%;        
    }
  
`;

export const Counter = styledComponents.span`
    color: white;
    @media screen and (min-width: 768px){
        margin: 10% 0;
    }

    @media screen and (min-width: 1600px){
        width: 33.3%;        
    }

`