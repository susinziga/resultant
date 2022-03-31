import styledComponents from "styled-components";

import { Header2 } from "../../../basic_components/texts/Texts";


export const PlanContainer = styledComponents.div`
    width: 100%;
    margin: auto;


    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const PlanTableContainer = styledComponents.div`
    width: 90%;
    margin: auto;
   

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const PlanTableHeaderContainer = styledComponents.div`
    width: 100%;
    display: flex;
    margin: 20% 0;
    align-items: center;
   

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const PlanTableLine = styledComponents.div`
    height: 1px;
    border: black solid 1px;
    margin-left: 2.5%;
    width: 50%;
    


    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;


export const PlanTableHeaderCon = styledComponents.div`
    width: 100%;
    

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;


export const PlanTableHeader = styledComponents(Header2)`
    


    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const ButtonContainer = styledComponents.div`
    display:flex;
    justify-content: center;
    width: 100%;
    margin:auto;
    margin-bottom: 15%;
`

export const SubmitButton = styledComponents.a`
    font-size:2rem;
    padding: 5% 15%;
    cursor:pointer;
    border: none;
    margin: auto;
    margin: 5% 0;

    background-color:var(--secondary-color);
    color:var(--white);
    border-radius:var(--border-primary);

    &:hover {
        background-color: var(--primary-color)
    }

    @media only screen and (min-width: 768px) {
        font-size:1.5rem;
        padding: 2.5% 44%;
        margin-top: 2.5%;
    }

    @media only screen and (min-width: 992px) {
        margin-top: 0%;
    }

    @media only screen and (min-width: 1600px) {
        padding: 2% 45%;
        margin-top: 2%;
        margin-left: 1%;
    }

`

