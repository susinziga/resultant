import styledComponents from "styled-components";
import { Title1, Title2 } from "../../basic_components/texts/Texts";

export const PersonContainer = styledComponents.div`
    width: 90%;
    margin: auto;

    .desktop {
        display: none;
    }

    @media only screen and (min-width: 768px) {
        width: 40%;
        padding-bottom: 5%;
       
        .mobile {
            display: none;
        }

        .desktop {
            display: block;
        }
    }
    
  
`

export const ImageContainer = styledComponents.img`
    width: 100%;
    margin-bottom: 10%;
    border-radius: 12px;

    @media only screen and (min-width: 768px) {
      width: 95%;
      margin-bottom: 0;
    }

    @media only screen and (min-width: 992px) {
       width: 70%
    }
`

export const InfoContainer = styledComponents.div`
    width: 90%;
    text-align: left;
    margin-bottom: 10%;

    @media only screen and (min-width: 768px) {
        padding-left: 10%;
    }

    @media only screen and (min-width: 992px) {
        padding-left: 7%;
     }

    @media only screen and (min-width: 1600px) {
        padding-left: 7%;
    }
`

export const Heading = styledComponents(Title1)`
    font-family: "Neusa";
    font-weight: bold;
    font-size: 3.5rem;

    @media only screen and (min-width: 768px) {
        font-size: 2.5rem;
    }
`


export const SubHeading = styledComponents(Title2)`
    font-family: "Neusa";
    font-weight: 300;

    
    @media only screen and (min-width: 768px) {
        font-size: 1.5rem;
    }
`

export const ContactContainer = styledComponents.div`
    margin: 8% 0;
    margin-bottom: 20%; 

    @media only screen and (min-width: 768px) {
        margin-bottom: 28%; 
    }

    @media only screen and (min-width: 992px) {
        margin-bottom: 20%; 
    }

    @media only screen and (min-width: 1600px) {
        margin-bottom: 18%; 
    }
`;


export const ContactIconContainer = styledComponents.div`
    margin: 2%; 
`;

export const ContactIcon = styledComponents.img`
    margin-right: 2.5%;
    vertical-align: middle;
 
    @media only screen and (min-width: 1600px) {
        width: 5%;
    }
`;

export const ContactLink = styledComponents.a`
    font-family: "Neusa";
    font-weight: 300;
    font-size: 1.5rem;

    &:hover {
        color: var(--secondary-color)
    }

    @media only screen and (min-width: 768px) {
        font-size: 1rem;
    }

    @media only screen and (min-width: 1600px) {
        font-size: 1.2rem;
    }
`;

export const ContactFirmContainer = styledComponents.div`
    margin-bottom: 10%;
`;

export const InfoFooterHeading = styledComponents.h2` 
    font-family: "Neusa";
    font-weight: bold;
    font-size: 2.5rem;
`;

export const ContactFooterContainer = styledComponents.div`
    margin-top: 2%;
    display: flex;
    flex-direction: column;
`;

export const Contact = styledComponents.label`
    margin-top: 1%;
    font-family: "Neusa";
    font-weight: 300;
    font-size: 1.5rem;

    @media only screen and (min-width: 768px) {
        font-size: 1.2rem;
    }
`;

