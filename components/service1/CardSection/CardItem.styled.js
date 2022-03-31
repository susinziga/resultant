import styledComponents from "styled-components";
import { Header2, BodyText1 } from "../../../basic_components/texts/Texts";

export const CardItemContainer = styledComponents.div`
    width: 90%;
    background: ${(props) => props.color};
    padding: 10%;
    margin: auto;
    border-radius: 12px;
    min-height: 320px;


    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const Text = styledComponents(BodyText1)`
    font-size: 2rem;
    font-weight: bold;
    

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const Heading = styledComponents(Header2)`
    font-size: 2.5rem;
    margin-bottom: 10%;

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;