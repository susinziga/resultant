import styledComponents from "styled-components";

import { Header2 } from "../../../basic_components/texts/Texts";


export const PlanContainer = styledComponents.div`
    width: 100%;
    margin: auto;


    @media only screen and (min-width: 768px) {
        padding-top: 10%;
    }

    @media only screen and (min-width: 992px) {
        padding-top: 7.5%;
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
        margin: 0% 0 5% 0;
        
    }

    @media only screen and (min-width: 992px) {
        margin: 0% 0 5% 0;
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const FlexContainer = styledComponents.div`
 
    @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
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
       font-size: 2.5em;
    }

    @media only screen and (min-width: 992px) {
        font-size: 2.5rem;
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
    

    
    @media only screen and (min-width: 768px) {
        width: 33%;
        margin-bottom: 7.5%;
        text-align:center;
    }

    @media only screen and (min-width: 992px) {
        width: 20%;
        margin-right: 12%;
        margin-bottom: 7.5%;
    }

    @media only screen and (min-width: 1600px) {
     
    }
`

export const SubmitButton = styledComponents.a`
    font-size:1.4rem;
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
        font-size:1rem;
        padding: 20% 10%;
        border-radius: 0px;
       
    }

    @media only screen and (min-width: 992px) {
      
        padding: 20% 25%;
        margin: 0;
     
    }

    @media only screen and (min-width: 1600px) {
        
    }

`

