import styledComponents from "styled-components";
import {
  BodyText1,
  BodyText2,
  BodyText3,
  BodyText4,
  Subtitle2,
  Title1,
  Title2,
} from "../../../basic_components/texts/Texts";

export const SIOKContainer = styledComponents.div`
    width: 100%;
    margin: auto;
    padding: 15% 0;
    text-align: center;
    background: #F6FBFE;

    position:relative;


    @media only screen and (min-width: 768px) {
        padding:  0;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
        
    }
`;

export const SIOKTitle = styledComponents(Title2)`
    // margin: 7.5% 2%;
    margin-top: 5%;
    margin-bottom: 2%;
    font-family: "Neusa";
    font-weight: bold;

    font-size: 1.2rem;
    padding: 0% 5%;

    @media only screen and (min-width: 768px) {
       font-size: 2rem;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const SIOKImage = styledComponents.img`
    margin: auto;
    width: 90%;

    @media only screen and (min-width: 768px) {
    //    padding: 7.5% 0 0% 0;
    //    width: 51%;
    width: 70%;
}

    @media only screen and (min-width: 992px) {
        // width: 51%;
    }

    @media only screen and (min-width: 1600px) {
    }
`;

export const SIOKTextContainer = styledComponents.div`
    width: 90%;

    text-align: left;
    padding: 5%;
    background: #004767;
    box-shadow: 0px 16px 40px rgba(0, 71, 103, 0.12);
    border-radius: 16px;
    margin: 10% auto;

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const SIOKParagraph = styledComponents(BodyText1)`
    color: white;

    font-weight: bold;

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const SIOKImageText = styledComponents(BodyText3)`
    font-weight: bold;
    margin-top:2.5%;

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const SIOKGraf2Heading = styledComponents(Subtitle2)`
    display: block;
    padding-top: 5%;
`;

export const SIOKGraf2Sub = styledComponents(BodyText4)`
    display: block;
    padding-bottom: 5%;
`;

export const SIOKImageContainer = styledComponents.div`
    width: 90%;
    text-align: center;
    margin: auto;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;
