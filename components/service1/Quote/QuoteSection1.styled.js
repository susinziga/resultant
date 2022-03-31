import styledComponents from "styled-components";
import { BodyText1 } from "../../../basic_components/texts/Texts";

export const QuoteContainer = styledComponents.div`
    width: 100%;
    background-color: #004767;
    display: flex;
    padding:12%;


    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const QuoteImageContainer = styledComponents.div`
    width: 35%;
    padding-right: 10%;
    margin: 5% 0;

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;


export const QuoteImage = styledComponents.img`
    width: 80%;
    float: right;
    color: white;
    
   
    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;


export const QuoteTextContainer = styledComponents.div`
    width: 65%;
    margin: 5% 0;

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;


export const QuoteText = styledComponents(BodyText1)`
    color: white;
    font-size: 2rem;
    

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;
