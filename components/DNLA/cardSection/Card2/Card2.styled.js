import styledComponents from "styled-components";
import { BodyText1, BodyText2, Title2 } from "../../../../basic_components/texts/Texts";


export const CardContainer = styledComponents.div`
    width: 100%;
    margin: auto;
    display: flex:
    flex-direction: column;
    gap: 1rem;
    color: white;
    margin-bottom: 10%;
    
    background: #F9F4F0;
    border: 0px solid #F9F4F0;
    border-radius: 12px;

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }

`

export const CardImage = styledComponents.img`
    

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }

`

export const TextContainer = styledComponents.div`
    width: 80%;
    margin: auto;
    display: flex:
    flex-direction: column;
    gap: 1rem;
    margin: 5% auto;
    margin-bottom: 10%;
    padding-bottom: 5%;
    padding-top: 10%;
    
    
    

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }

`

export const Text = styledComponents(BodyText2)`
    font-weight: bold;
    
    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }

`






