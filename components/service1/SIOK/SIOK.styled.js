import styledComponents from "styled-components";
import { BodyText1, BodyText2, BodyText3, BodyText4, Title1 } from "../../../basic_components/texts/Texts";


export const SIOKContainer = styledComponents.div`
    width: 100%;
    margin: auto;
    padding: 20% 0;
    text-align: center;
    background: #F6FBFE;


    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;


export const SIOKTitle = styledComponents(Title1)`
    margin: 7.5% 0;
    font-family: "Neusa";
    font-weight: bold;


    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const SIOKImage = styledComponents.img`
    margin: auto;
    width: 90%;

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const SIOKTextContainer = styledComponents.div`
    width: 90%;

    text-align: left;
    padding: 5%;
    background: #004767;
    box-shadow: 0px 16px 40px rgba(0, 71, 103, 0.12);
    border-radius: 16px;
    margin: 10% auto;

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;


export const SIOKParagraph = styledComponents(BodyText1)`
    color: white;
    font-size: 2rem;
    font-weight: bold;

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const SIOKImageText = styledComponents(BodyText3)`
    font-weight: bold;
    margin-top:2.5%;

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;


export const SIOKImageContainer = styledComponents.div`
    width: 90%;
    text-align: center;
    margin: auto;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;