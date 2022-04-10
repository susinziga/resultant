import styledComponents from "styled-components";
import { BodyText4, Title2 } from "../../../basic_components/texts/Texts";


export const ToolsContainer = styledComponents.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 10%;

  
    @media (min-width:768px) {
        flex-direction: row;
       
    }

    @media (min-width:992px) {
        margin-bottom: 5%;
   
    }
    @media (min-width:1600px) {

        
    }
`;


export const Heading = styledComponents(Title2)`
    font-size: 1.5rem;
  
    @media (min-width:768px) {
        font-size: 1.2rem;
       
    }

    @media (min-width:992px) {
        font-size: 1.8rem;
   
    }
    @media (min-width:1600px) {
        font-size: 2rem;
        
    }
`;

export const HeadingContainer = styledComponents.div`
    width: 90%;
    margin: auto;

  
    @media (min-width:768px) {
        margin-top: 8%;
        margin-left:5%;
       
    }

    @media (min-width:992px) {
        
        margin-left:5%;
   
    }
    @media (min-width:1600px) {

        
    }
`;


export const ToolsImage = styledComponents.img`
    
  
    @media (min-width:768px) {
        width: 45%;
       
    }

    @media (min-width:992px) {
   
   
    }
    @media (min-width:1600px) {

        
    }
`;