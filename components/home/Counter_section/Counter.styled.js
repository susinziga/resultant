import styledComponents from "styled-components";
import { Title2 } from "../../../basic_components/texts/Texts";

export const CountersContainer = styledComponents.div`
   background-color: var(--pillar-color);
   display: flex;
   flex-direction:column;
   padding: 2rem 5rem;
   
       
    @media screen and (min-width: 768px){
        width: 100%;
        flex-direction:row;
        padding: 0;
        justify-content: center;
        
   
    }

    @media screen and (min-width: 1600px){
        width: 100%;
        justify-content: center;
        
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

    >p {
        padding: 0 0%;
    }
    
       
    @media screen and (min-width: 768px){
        width: 33.3%;
        margin: 4% 0 5% 0; 
        gap:0;
        

        >p {
            padding: 0 10%;
        }

       
    }

    @media screen and (min-width: 992px){
        width: 33.3%;
        margin: 5% 0 6% 0; 
        gap:0;
        

        >p {
            padding: 0 12%;
        }
    }

    @media screen and (min-width: 1600px){
        width: 33.3%;    
        
        
        >p {
            padding: 0 15%;
        }
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
