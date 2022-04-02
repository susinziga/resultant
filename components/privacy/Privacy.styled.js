import styledComponents from "styled-components";
import { Title1, Title2 } from "../../basic_components/texts/Texts";

export const PrivacyContainer = styledComponents.div`
    width: 100%;
    margin: auto;
    padding-top: 25%;    
    @media only screen and (min-width: 768px) {
        padding-top: 20%;    
    }

    @media only screen and (min-width: 992px) {
        padding-top: 10%;
    }

    @media only screen and (min-width: 1600px) {
        
    }

`

export const PrivacyLine = styledComponents.div`
    height: 1px;
    width: 100%;
    border-top: 1px solid black;
    margin-top: 10%;

    @media screen and (min-width: 768px){
        margin-top: 5%;
    }
  
`

export const PrivacyHeading = styledComponents(Title1)`
    font-size: 2rem;
    
    
    @media only screen and (min-width: 768px) {
        
    }

    @media only screen and (min-width: 992px) {
        font-size: 2.5rem;
        width: 50%;
        margin-bottom: 0;
    }

    @media only screen and (min-width: 1600px) {
        font-size: 3rem;
    }
`;


export const PrivacySubHeading = styledComponents(Title2)`
    font-size: 1.7rem;
    
    
    @media only screen and (min-width: 768px) {
        margin-left: 15%;   
    }

    @media only screen and (min-width: 992px) {
        width: 50%;
        margin-bottom: 0;
    }

    @media only screen and (min-width: 1600px) {
        font-size: 2.5rem;
    }
`;

export const PrivacySubContainer1 = styledComponents.div`
    width: 80%;
    margin: auto;
    margin: 10% auto;
      
    @media only screen and (min-width: 768px) {
            
    }

    @media only screen and (min-width: 992px) {
       
    }

    @media only screen and (min-width: 1600px) {
        
    }

`

export const PrivacySubContainer2 = styledComponents.div`
    width: 90%;
    margin: auto;

    @media screen and (min-width: 768px){
        margin-top: 5%;
    }
  
`
