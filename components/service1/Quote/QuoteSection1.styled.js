import styledComponents from "styled-components";
import { BodyText1 } from "../../../basic_components/texts/Texts";

export const QuoteContainer = styledComponents.div`
    width: 100%;
    background-color: #004767;
    display: flex;
    justify-content: center;
    // padding:12%;
    padding: 12% 0;
    margin-top: 12%;

    @media only screen and (min-width: 768px) {
        padding:5%;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
        padding:2.5%;
    }
`;

export const QuoteImageContainer = styledComponents.div`
    // width: 35%;
    padding-right: 10%;
    margin: 5% 0;

    @media only screen and (min-width: 768px) {
        padding-right: 8%;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
        padding-right: 7.5%;
    }
`;

export const QuoteImage = styledComponents.img`
    // width: 80%;
    // float: right;
    color: white;
    height: auto;
    width: 60%;
    float: right;
    
   
    @media only screen and (min-width: 768px) {
        // width: 80%;
        width: 40%;
        float: none;
    }

    @media only screen and (min-width: 992px) {
        width: 60%;
    }

    @media only screen and (min-width: 1600px) {
        width: 80%;
    }
`;

export const QuoteTextContainer = styledComponents.div`
    width: 55%;
    margin: 5% 0;

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
        // padding-right: 10%;
    }
`;

export const QuoteText = styledComponents(BodyText1)`
    color: white;
  
    

    @media only screen and (min-width: 768px) {
       font-size: 1.2rem;
    }

    @media only screen and (min-width: 992px) {
        font-size: 1.4rem;
    }

    @media only screen and (min-width: 1600px) {
        font-size: 1.8rem;
     
    }
`;
