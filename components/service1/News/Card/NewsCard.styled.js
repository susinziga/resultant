import Image from "next/image";
import styledComponents from "styled-components";
import {
  BodyText1,
  BodyText2,
  Subtitle1,
  Subtitle2,
  Title1,
  Title2,
} from "../../../../basic_components/texts/Texts";

export const NewsContainer = styledComponents.div`
    background: white;
    position: relative;
    width: 95%;
    margin: 20% auto;
    /*filter: drop-shadow(0px 16px 20px rgba(0, 71, 103, 0.09));*/
    box-shadow:0px 16px 20px rgba(0, 71, 103, 0.09);
   ${(props) => {
     return props.isActive
       ? `background: white; 
          `
       : "";
   }}
    border-radius: 12px;
    min-height: 460px;

    @media only screen and (min-width: 768px) {
        min-height: 450px;
        width: 95%;
    }

    @media only screen and (min-width: 992px) {
        padding-top: 0;
        width: 95%;
        min-height: 550px;
    }

    @media only screen and (min-width: 1600px) {
       
        min-height: 830px;
    }

`;

export const NewsImage = styledComponents.img`
    width: 100%;
    
    
    /*filter: drop-shadow(0px 16px 40px rgba(0, 71, 103, 0.12));*/
`;

export const NewsHeading = styledComponents(Title2)`
    font-size: 1rem;
    width: 100%;
    
    margin: 0 0 10% 0;
    filter: drop-shadow(0px 16px 40px rgba(0, 71, 103, 0.12));

    @media (min-width: 768px) {
        font-size: 1rem;
    }

    @media (min-width: 992px) {
        font-size: 1.3rem;
        min-height:5rem;
    }

    @media (min-width: 1600px) {
        font-size: 1.8rem;
     
    }
`;

export const NewsText = styledComponents.p`
    width: 95%;
    margin: 10% 0;
    font-size: 1rem;

   
    filter: drop-shadow(0px 16px 40px rgba(0, 71, 103, 0.12));

    @media only screen and (min-width: 768px) {
        font-size: 1rem;
        min-height:12rem;
    }

    @media only screen and (min-width: 992px) {
        padding-top: 0;
    }

    @media only screen and (min-width: 1600px) {
        font-size: 1.4rem;
        min-height:8rem;
    }
`;

export const NewsTextContainer = styledComponents.div`
    width: 80%;
    padding: 10% 10%;
    
   
`;
