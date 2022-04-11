import styledComponents from "styled-components";
import {
  Header2,
  BodyText1,
  Title1,
  Title2,
} from "../../../../basic_components/texts/Texts";

export const CardItemContainer = styledComponents.div`
    width: 100%;
    background: ${(props) => props.color};
    
    margin: 10% auto;
    border-radius: 15px;
    filter: drop-shadow(0px 16px 40px rgba(0, 71, 103, 0.12));
   


    @media only screen and (min-width: 768px) {
       width: 95%;
       display: flex;
       flex-direction: row-reverse;
       ${(props) =>
         props.inversed
           ? `flex-direction: row  !important;
                    `
           : ""}
        margin: 5% auto;
    }

   
   

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const TextContainer = styledComponents.div`
    width: 100%;

    padding: 15% 10% 10% 10%;
    


    @media only screen and (min-width: 768px) {
        padding: 5%;
        
    }

    @media only screen and (min-width: 992px) {
       
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const Text = styledComponents(BodyText1)`
    
    font-weight: bold;
    

    @media only screen and (min-width: 768px) {
       font-size: 0.8rem;
    }

    @media only screen and (min-width: 992px) {
        font-size: 1.2rem;
    }

    @media only screen and (min-width: 1600px) {
        font-size: 1.5rem;
    }
`;

export const Heading = styledComponents(Title2)`
    font-family: "Neusa";
    font-weight: bold;
    margin-bottom: 10%;

    @media only screen and (min-width: 768px) {
       font-size: 1.4rem;
    }

    @media only screen and (min-width: 992px) {
        
        font-size: 1.8rem;
    }

    @media only screen and (min-width: 1600px) {
        margin-bottom: 5%;
        font-size: 2.5rem;
    }
`;

export const Image = styledComponents.img`
    width: 100%;
    

    @media only screen and (min-width: 768px) {
       width:40%;
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;
