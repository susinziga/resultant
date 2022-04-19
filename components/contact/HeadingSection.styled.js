import styledComponents from "styled-components";
import {
  Header1,
  BodyText2,
  BodyText3,
  Header2,
  BodyText4,
  BodyText1,
} from "../../basic_components/texts/Texts";

export const HeadingContainer = styledComponents.div`
    width: 90%;
    margin: auto;
   

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
       
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const HeadingUpperHeading = styledComponents(BodyText1)`
    font-weight: bold;
`;

export const HeadingHeading = styledComponents(Header2)`
    
`;

export const HeadingLine = styledComponents.div`
    height: 1px;
    width: 100%;
    border-top: 1px solid black;
    margin-top: 2%;

    @media screen and (min-width: 768px){
        margin-top: 2%;
    }
  
`;
