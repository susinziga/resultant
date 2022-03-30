import styledComponents from "styled-components";
import { Title2 } from "../../../basic_components/texts/Texts";

export const CountersContainer = styledComponents.div`
   background-color: var(--pillar-color);
   display: flex;
   flex-direction:column;
   padding: 2rem 10rem;
   
       
    @media screen and (min-width: 768px){
        width: 100%;
        flex-direction:row;
        padding: 0;
        
   
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
    gap:1rem;
    margin-bottom:1rem;
    
       
    @media screen and (min-width: 768px){
        width: 33.3%;
        gap:0;
        margin: 2% 0;

        >p {
            padding: 0 18%;
        }
    }

    @media screen and (min-width: 1600px){
        width: 33.3%;        
    }

    > h2 *{
        color:white;
        font-family:"Fatface";
    }
  
`;

export const Counter = styledComponents.span`
 
    @media screen and (min-width: 768px){
        margin: 10% 0;
    }

    @media screen and (min-width: 1600px){
        width: 33.3%;        
    }

`;
