import styledComponents from "styled-components";
import { Header2, BodyText1 } from "../../../basic_components/texts/Texts";

export const CardTableContainer = styledComponents.div`
    width: 100%;
    background-color: #F6FBFE;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 20% 0;
   


    @media only screen and (min-width: 768px) {
       flex-direction:row;
       padding: 10% 2%;
       gap: 0rem;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const CardItemContainer1 = styledComponents.div`
    display:flex;
    flex-direction: column;
    gap: 4rem;
    
    @media only screen and (min-width: 768px) {
        display:flex;
        flex-direction: column;
        gap: 3rem;
        width: 50%;
        margin-left: auto;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const CardItemContainer2 = styledComponents.div`
  

    @media only screen and (min-width: 768px) {
        width: 50%;
        justify-content: flex-start; 
        padding-top: 12%;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
        padding-top: 8%;
    }
`;


