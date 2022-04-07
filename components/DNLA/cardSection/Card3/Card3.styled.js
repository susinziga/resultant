import styledComponents from "styled-components";
import { BodyText1, BodyText3, Title2 } from "../../../../basic_components/texts/Texts";


export const CardContainer = styledComponents.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: white;
    margin-bottom: 10%;
    
    background: #316888;
    border: 0px solid #316888;
    border-radius: 12px;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        border-radius: 20px;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }

`

export const CardImage = styledComponents.img`


    @media only screen and (min-width: 768px) {
       width:50%;
    }

    @media only screen and (min-width: 992px) {
        width:45%;
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
    
    
    

    @media only screen and (min-width: 768px) {
        padding-bottom: 0%;
        margin-bottom: 5%;
        padding: 0 5% 0 5%;
    }

    @media only screen and (min-width: 992px) {
        padding-bottom: 0%;
        margin-bottom: 5%;
        padding: 0 5% 0 5%;
    }

    @media only screen and (min-width: 1600px) {
       
    }

`


export const CardHeading = styledComponents(Title2)`
    font-size: 1.2rem;
    color: white !important;
    margin-bottom: 5%;

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }

`


export const ButtonContainer = styledComponents.div`
 
    margin-top: 10%;

    @media only screen and (min-width: 768px) {
     
    }

    @media only screen and (min-width: 992px) {
      
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const Text = styledComponents(BodyText3)`
 
   color: white !important;
  

    @media only screen and (min-width: 768px) {
     
    }

    @media only screen and (min-width: 992px) {
      
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;