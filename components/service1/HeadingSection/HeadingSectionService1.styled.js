import styledComponents from "styled-components";
import { BodyText1, Title1} from "../../../basic_components/texts/Texts";


export const HeadingContainer = styledComponents.div`
    width: 90%;
    margin: auto;
    padding-top: 25%;

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


export const HeadingUpperHeading = styledComponents(BodyText1)`
    font-weight: bold;
    font-size: 2rem;
    font-family:"NeusaThin";

`;

export const HeadingHeading = styledComponents(Title1)`
    margin: 10% 0;
    font-size: 3.5rem;
`;



export const HeadingLine = styledComponents.div`
    height: 1px;
    width: 100%;
    border-top: 1px solid black;
    margin: 10% 0 15% 0;

    @media screen and (min-width: 768px){
        margin-top: 5%;
    }
  
`;

export const HeaderImage = styledComponents.img`
   

  
`;


