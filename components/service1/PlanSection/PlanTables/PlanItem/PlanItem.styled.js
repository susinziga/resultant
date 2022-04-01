import styledComponents from "styled-components";
import { BodyText1, BodyText2, Header2, Title1, Title2 } from "../../../../../basic_components/texts/Texts";

export const PlanItemContainer = styledComponents.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-bottom: 15%;


    @media only screen and (min-width: 768px) {
       width: 30%;
       margin: auto;
       margin-bottom: 7.5%;
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const PlanText = styledComponents(BodyText1)`
    width: 100%;
    font-size:1.5rem;


    @media only screen and (min-width: 768px) {
        font-size:1rem;
    }

    @media only screen and (min-width: 992px) {
        font-size:1.1rem;
    }

    @media only screen and (min-width: 1600px) {
        font-size:1.5rem;
    }
`;

export const PlanTextContainer = styledComponents.div`
    width: 110%;
    margin-bottom: 10%;

    @media only screen and (min-width: 768px) {
        width: 100%;
        height: 50px;
       
    }

    @media only screen and (min-width: 992px) {
        width: 100%;
        height: 35px;
        padding-right: 10%;
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const PlanNumberContainer = styledComponents.div`
    
    display: flex;
    justify-content: space-between;


    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const PlanNumber = styledComponents(Title1)`
    width:35%;
    font-family: "Fatface";


    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;



export const PlanUnderlineContainer = styledComponents.div`
    width: 60%;
    height: auto;
    border-bottom: 2px solid #27B4E9;
    margin-bottom: 11px;
   

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;
