import styledComponents from "styled-components";
import { Title1 } from "../../../basic_components/texts/Texts";

export const ExperienceContainer = styledComponents.div`
    width: 90%;
    margin:auto;


    @media only screen and (min-width: 768px) {
        
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
    
    }
`

export const ExperienceTitle = styledComponents(Title1)`
    margin: 20% 0 10% 0;
    font-family: "Neusa";
    font-weight: bold;
    font-size: 3rem;


    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;


export const List = styledComponents.ul`
    width: 100%;
    list-style-type: disc;
    padding-left: 5%;

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const Bullet = styledComponents.li`
    margin: 7.5% 0;
    font-size: 2rem;

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const Button = styledComponents.a`
    font-size: 1.5rem;
    width: 90%;
    
    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const ButtonContainer = styledComponents.div`
    width: 55%;
    margin:auto;
    text-align: left;
    margin: 15% auto;
    padding: 2.5% 0;
    border-bottom: solid 2px #9F7312;
    cursor: pointer;
    display: flex;
    
    &:hover {
        border-bottom: solid 2px #EEDFD3;
    }

    @media only screen and (min-width: 768px) {
        
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
    
    }
`

export const ArrowContainer = styledComponents.img`
    &:hover {
       color: #EEDFD3;
    }

    @media only screen and (min-width: 768px) {
        
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
    
    }
`