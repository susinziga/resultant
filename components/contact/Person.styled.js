import styledComponents from "styled-components";
import { Header1, Header2, Subtitle1, Title1, Title2 } from "../../basic_components/texts/Texts";

export const PersonContainer = styledComponents.div`
    width: 90%;
    margin: auto;
`

export const ImageContainer = styledComponents.img`
    width: 100%;
    margin-bottom: 10%;


`

export const InfoContainer = styledComponents.div`
    width: 90%;
    text-align: left;
    margin-bottom: 10%;

`

export const Heading = styledComponents(Title1)`
    font-family: "Neusa";
    font-weight: bold;
    font-size: 3.5rem;


`


export const SubHeading = styledComponents(Title2)`
    font-family: "Neusa";
    font-weight: 300;


`

export const ContactContainer = styledComponents.div`
    margin: 10% 0; 
`;


export const ContactIconContainer = styledComponents.div`
    margin: 2%; 
`;

export const ContactIcon = styledComponents.img`
    margin-right: 2.5%;
    vertical-align: middle;
`;

export const ContactLink = styledComponents.a`
    font-family: "Neusa";
    font-weight: 300;
    font-size: 1.5rem;
    
`;

