import styledComponents from "styled-components";
import { Header2 } from "../../../basic_components/texts/Texts";

export const PillarsContainer = styledComponents.div`
    width:var(--width-90);
    margin:auto;
    display:flex;
    flex-direction:column;

    @media (min-width:768px) {
        font-size: 1rem;
       
    }

    @media (min-width:992px) {
    font-size: 1rem; 
   
    }
    
`;

export const PillarsFlex = styledComponents.div`
    display:flex;
    flex-direction:column;
   

    @media (min-width:768px) {
        font-size: 1rem;
      
        justify-content:space-around;
       
    }

    @media (min-width:992px) {
    font-size: 1rem; 
   
    }
`;

export const PillarsContainer_mobile = styledComponents.div`
    width:var(--width-90);
    margin:auto;
    display:flex;
    flex-direction:column;
    gap:2rem;

    @media (min-width:768px) {
        
    
    }

    @media (min-width:992px) {
    font-size: 1rem; 

    }
`;

export const PillarsFlex1 = styledComponents.div`
    display:flex;
    
    flex-direction:column;
   

    @media (min-width:768px) {
        flex-direction:row;
        justify-content:space-around;
    }

    @media (min-width:992px) {
 

    }
`;

export const PillarsFlex2 = styledComponents.div`
    display:flex;
    flex-direction:column;
   

   
    @media (min-width:768px) {
        flex-direction:row;
        justify-content:space-around;

    }

    @media (min-width:992px) {
 

    }
`;

export const HeadingContainer = styledComponents.div`
  
    margin-bottom: 5%;
    width: 100%;

    @media (min-width:768px) {
        display: flex;
        flex-direction: row;
        align-items:center;
        justify-content: space-between;
        text-align: right;
    }

    @media (min-width:992px) {
       
       
        
        

    }
   
 
`;

export const Heading = styledComponents(Header2)`
    font-size: 2.5rem;
    @media (min-width:768px) {
        font-size: 1.6rem;
    }

    @media (min-width:992px) {
        font-size: 3rem;
    
    }
   
`;

export const HeadingLine = styledComponents.div`
    height: 1px;
    border: 1px solid grey;
    width: 30%;

    @media (min-width:768px) {
        width: 35%;
    }

    @media (min-width:992px) {  
        width: 25%;

    }

    @media (min-width:1600px) {  
        width: 40%;

    }

   

`;

export const ButtonContainer = styledComponents.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media (min-width:768px) {
        margin-top: 5%;
    }

    @media (min-width:992px) {  
       

    }

    @media (min-width:1600px) {  
        

    }

   

`;

