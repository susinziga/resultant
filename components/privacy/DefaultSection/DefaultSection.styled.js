import styledComponents from "styled-components";
import { BodyText2, Title2 } from "../../../basic_components/texts/Texts";


export const DefaultContainer = styledComponents.div`
    width: 100%;
    margin: 10% auto;
    padding-right: 10%;
    
    @media only screen and (min-width: 768px) {
        width: 70%;
        padding-right: 5%;
    }

    @media only screen and (min-width: 992px) {
        margin: 7.5% auto;
    }

    @media only screen and (min-width: 1600px) {
    
    }
`

export const DefaultHeader = styledComponents(Title2)`
    font-family: "Neusa";
    font-size: 1.5rem;
    font-weight: bold;
    margin: 5% 0;

    @media only screen and (min-width: 768px) {
        
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
        margin: 2.5% 0;
        font-size: 1.8rem;
    }

`

export const DefaultText = styledComponents(BodyText2)`
    font-family: "NeusaThin";

    @media only screen and (min-width: 768px) {
        font-size: 1.2rem;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
        font-size: 1.2rem;
    }

`