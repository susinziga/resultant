import styledComponents from "styled-components";
import { BodyText2, Title2, Title1 } from "../../../basic_components/texts/Texts";

export const ContactSectionContainer = styledComponents.div`
    width: 90%;
    margin: auto;

    @media screen and (min-width: 768px){
        margin-top: 5%;
        width: 70%;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
  
`;

export const ContactLine = styledComponents.div`
    height: 1px;
    width: 100%;
    border-top: 1px solid black;
    margin-top: 15%;

    @media screen and (min-width: 768px){
       width: 90%;
       margin: auto;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
  
`;

export const ContactHeading = styledComponents(Title1)`
    font-size: 2rem;
    margin: 10% 0;

    
    @media only screen and (min-width: 768px) {
        margin: 8% 0;
    }

    @media only screen and (min-width: 992px) {
        margin: 5% 0;
    }

    @media only screen and (min-width: 1600px) {
        margin:2.5% 0;
    }
`;

export const PersonContainer = styledComponents.div`
    margin: 5% 0;

    
    @media only screen and (min-width: 768px) {
     
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
        margin: 5% 0;
    }
`;

export const PersonName = styledComponents(Title2)`
    font-family: "Neusa";
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2.5%;

    
    @media only screen and (min-width: 768px) {
        font-size: 1.4rem;
    }

    @media only screen and (min-width: 992px) {
        font-size: 1.5rem;
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const PersonMail = styledComponents(BodyText2)`
    

    
    @media only screen and (min-width: 768px) {
        font-size: 1rem;
    }

    @media only screen and (min-width: 992px) {
        font-size: 1.2rem;
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;


export const FlexDesktopContainer= styledComponents.div`
    

    
    @media only screen and (min-width: 768px) {
     
    }

    @media only screen and (min-width: 992px) {
        display: flex; 
    justify-content: space-between;
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;