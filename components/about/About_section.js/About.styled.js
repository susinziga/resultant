import styledComponents from "styled-components";
import { Header1, BodyText2, BodyText3 } from "../../../basic_components/texts/Texts";


export const AboutContainer = styledComponents.div`
    height: 100vh;

    @media screen and (min-width: 768px){
        padding-top: 15%;
    }
  
`;

export const AboutTextContainer = styledComponents.div`
    width: 90%;
    margin: auto;
  
`;


export const AboutUpperHeading = styledComponents(BodyText2)`
    font-weight: bold;
    font-family: "Neusa";

    @media screen and (min-width: 768px){
     
    }
  
`;

export const AboutHeading = styledComponents(Header1)`
    
    @media screen and (min-width: 768px){
        margin: 5% 0 6% 0;
    }
  
`;


export const AboutHeadingContainer = styledComponents.div`
    width: 60%;
    
    @media screen and (min-width: 768px){
       
    }
  
`;

export const AboutText = styledComponents(BodyText3)`
    
    @media screen and (min-width: 768px){
        
    }
  
`;

export const AboutLine = styledComponents.div`
    height: 1px;
    width: 100%;
    border-top: 1px solid black;

    @media screen and (min-width: 768px){
        margin-top: 5%;
    }
  
`;
