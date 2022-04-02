import styledComponents from "styled-components";
import { Header1, BodyText2, BodyText3, Header2, BodyText4, BodyText1, Title2 } from "../../basic_components/texts/Texts";


export const HeadingContainer = styledComponents.div`
    width: 90%;
    margin: auto;
    padding-top: 25%;
    display: flex; 
    flex-direction: column;
    margin-bottom: 5%;

    @media only screen and (min-width: 768px) {
        padding-top: 20%;
    }

    @media only screen and (min-width: 992px) {
        padding-top: 15%;
    }

    @media only screen and (min-width: 1600px) {
        padding-top: 10%;
    }
`;

export const DesktopFlex = styledComponents.div`
   
    @media only screen and (min-width: 768px) {
        
    }

    @media only screen and (min-width: 992px) {
        display: flex;
        justify-content: space-between;

    }

    @media only screen and (min-width: 1600px) {
        
    }
`;


export const HeadingUpperHeading = styledComponents(Title2)`
    font-size: 2rem;
    margin-bottom: 5%;
    
    @media only screen and (min-width: 768px) {
        
    }

    @media only screen and (min-width: 992px) {
        width: 50%;
        margin-bottom: 0;
    }

    @media only screen and (min-width: 1600px) {
        font-size: 2.5rem;
    }
`;

export const Paragraph = styledComponents(BodyText2)`
    margin-top: 5%;

        
    @media only screen and (min-width: 768px) {
        width: 50%;
    }

    @media only screen and (min-width: 992px) {
        margin-top: 1%;
    }

    @media only screen and (min-width: 1600px) {
        font-size: 1.5rem;
    }
`;



export const HeadingLine = styledComponents.div`
    height: 1px;
    width: 100%;
    border-top: 1px solid black;
    margin-top: 15%;

    @media screen and (min-width: 768px){
        margin-top: 5%;
    }
  
`;
