import styledComponents from "styled-components";
import {
  Header1,
  BodyText2,
  BodyText3,
  Header2,
  BodyText4,
  BodyText1,
  Title1,
  Title2,
} from "../../basic_components/texts/Texts";

export const HeadingContainer = styledComponents.div`
    width: 90%;
    margin: auto;
    padding-top: 25%;
    margin-bottom:0;

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
`;

export const HeadingHeading = styledComponents(Title1)`
    margin-top: 5%;
`;

export const HeadingLine = styledComponents.div`
    height: 1px;
    width: 100%;
    border-top: 1px solid black;
    margin-top: 10%;

    @media screen and (min-width: 768px){
        margin-top: 5%;
    }
  
`;
