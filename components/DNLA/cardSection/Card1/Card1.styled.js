import styledComponents from "styled-components";
import { BodyText1, Title2 } from "../../../../basic_components/texts/Texts";


export const CardContainer = styledComponents.div`
    width: 100%;
    margin: auto;
    display: flex:
    flex-direction: column;
    gap: 1rem;
    color: white;
    
    background: #316888;
    border: 0px solid #316888;
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
    padding-bottom: 10%;
    
    
    

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
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


export const CardTitle = styledComponents(BodyText1)`
    color: white !important;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 5%;
    

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }

`

export const List = styledComponents.ul`
    width: 100%;
    list-style-type: disc;
    padding: 10% 10%;
    padding-top: 5%;
 

    @media only screen and (min-width: 768px) {
        width:100%;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`

export const Bullet = styledComponents.li`
    margin: 5% 0;
    font-size: 0.8rem;

    @media only screen and (min-width: 768px) {
        font-size: 0.8rem;
    }

    @media only screen and (min-width: 992px) {
        font-size: 1.2rem;
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const ButtonContainer = styledComponents.div`
 
    
   

    @media only screen and (min-width: 768px) {
     
    }

    @media only screen and (min-width: 992px) {
      
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;