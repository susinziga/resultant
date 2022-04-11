import styledComponents from "styled-components";
import {
  Subtitle2,
  Title1,
  Title2,
} from "../../../basic_components/texts/Texts";

export const ExperienceContainer = styledComponents.div`
    width: 90%;
    margin:auto;
    position: relative;


    @media only screen and (min-width: 768px) {
        padding-top: 5%; 
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
    
    }
`;

export const FlexDesktop = styledComponents.div`
  
    @media only screen and (min-width: 768px) {
        display: flex;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
    
    }
`;

export const ExperienceTitle = styledComponents(Title1)`
    margin: 20% 0 10% 0;
    font-family: "Neusa";
    font-weight: bold;

    @media only screen and (min-width: 768px) {
        margin: 0;
        width:60%;
        padding-right: 20%;

       
    }

    @media only screen and (min-width: 992px) {
   
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const DesktopTitle = styledComponents(Title2)`

    @media only screen and (min-width: 768px) {
        font-family: "Neusa";
        font-weight: bold;
        width:100%;
        font-size: 1rem;
    }

    @media only screen and (min-width: 992px) {
        font-size: 1.6rem;
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const FlexDesktopText = styledComponents.div`
  
    @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 40%;
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
        width:100%;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const Bullet = styledComponents.li`
    margin: 7.5% 0;
    font-size: 1.5rem;

    @media only screen and (min-width: 768px) {
        font-size: 0.8rem;
    }

    @media only screen and (min-width: 992px) {
        font-size: 1.2rem;
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const Button = styledComponents.a`
    font-size: 1.2rem;
    width: 90%;
    
    @media only screen and (min-width: 768px) {
        font-size: 1rem;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const ButtonContainer = styledComponents.div`
white-space: nowrap;
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
        margin: 0;
        margin: 10% 0;
        width: 80%;
    }

    @media only screen and (min-width: 992px) {
        margin: 5% 0;
        width: 65%;
    }

    @media only screen and (min-width: 1600px) {
    
    }
`;

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
`;

export const BackgroundVector = styledComponents.img`
   position: absolute;
   top: 10%;
   left: 8%;
   z-index: -100;
   width: 70%;
   top:-18%;
  
   

   @media only screen and (min-width: 992px) {
        
        width: 60%;
        top:-18%;
    }

    @media only screen and (min-width: 1600px) {
        left: 0%;
        width: 50%;
        top:-18%;
    }
`;
