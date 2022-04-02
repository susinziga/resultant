import styledComponents from "styled-components";
import { Header2, BodyText1, Title1, Title2 } from "../../../basic_components/texts/Texts";

export const CardItemContainer = styledComponents.div`
    width: 90%;
    background: ${(props) => props.color};
    padding: 10%;
    margin: auto;
    border-radius: 12px;
    min-height: 320px;


    @media only screen and (min-width: 768px) {
        width: 95%;
        padding: 8%;
        min-height: auto;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;




export const Text = styledComponents(BodyText1)`
    
    font-weight: bold;
    

    @media only screen and (min-width: 768px) {
       font-size: 1.2rem;
    }

    @media only screen and (min-width: 992px) {
        font-size: 1.4rem;
    }

    @media only screen and (min-width: 1600px) {
        font-size: 1.5rem;
    }
`;

export const Heading = styledComponents(Title2)`
    
    margin-bottom: 10%;

    @media only screen and (min-width: 768px) {
        margin-bottom: 10%;
        font-size: 1.5rem;
    }

    @media only screen and (min-width: 992px) {
        margin-bottom: 5%;
        font-size: 1.8rem;
    }

    @media only screen and (min-width: 1600px) {
        font-size: 2rem;
    }
`;