import styledComponents from "styled-components";
import {
  BodyText2,
  BodyText3,
  Subtitle2,
  Title1,
  Title2,
} from "../../basic_components/texts/Texts";

export const ExperienceContainer = styledComponents.div`
    width: 90%;
    margin:auto;
    position: relative;


    @media only screen and (min-width: 768px) {
        padding-top: 5%; 
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
    
    }
`;

export const BulletHeading = styledComponents(BodyText3)`
    font-weight: bold;
    font-family: "Neusa";
    font-size: 1.5rem;

    @media only screen and (min-width: 768px) {
        font-size: 1rem;
    }

    @media only screen and (min-width: 992px) {
        font-size: 1.2rem;
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const FlexHeadingContainer = styledComponents.div`
 
    @media only screen and (min-width: 768px) {
        width: 60%;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
    
    }
`;

export const ControlContainer = styledComponents.div`
margin-bottom: 10%;
    @media only screen and (min-width: 768px) {
        padding-right: 20%;
    }

    @media only screen and (min-width: 992px) {
        padding-right: 30%;
    }

    @media only screen and (min-width: 1600px) {
    
    }
`;
export const Subtext = styledComponents.p`
    font-weight: bold !important;
    font-size: 1.2rem;
    font-family: "Neusa"; 
    
    
    @media only screen and (min-width: 768px) {
       font-size: 0.8rem;
    }

    @media only screen and (min-width: 992px) {
        padding-right: 15%;
        font-size: 1.2rem;
    }

    @media only screen and (min-width: 1600px) {
        padding-right: 10%;
    }
`;

export const FlexDesktop = styledComponents.div`
  
    @media only screen and (min-width: 768px) {
        display: flex;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
    
    }
`;

export const ExperienceTitle = styledComponents(Title2)`
    margin: 20% 0 10% 0;
    font-family: "Neusa";
    font-weight: bold;

    @media only screen and (min-width: 768px) {
        margin: 0;
        width:100%;
        
        font-size: 1.5rem;
        margin-bottom: 5%;
       
    }

    @media only screen and (min-width: 992px) {
        font-size:2rem;
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const DesktopTitle = styledComponents(Title2)`

    @media only screen and (min-width: 768px) {
        font-family: "Neusa";
        font-weight: bold;
        width:100%;
        font-size: 1rem;
    }

    @media only screen and (min-width: 992px) {
        font-size: 1.6rem;
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const FlexDesktopText = styledComponents.div`
  
    @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 40%;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
    
    
    }
`;

export const List = styledComponents.ul`
    width: 100%;
    list-style-type: disc;
    padding-left: 5%;

    @media only screen and (min-width: 768px) {
        width:100%;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const Bullet = styledComponents.li`
    margin: 7.5% 0;
    font-size: 1.25rem;

    @media only screen and (min-width: 768px) {
        font-size: 0.8rem;
    }

    @media only screen and (min-width: 992px) {
        font-size: 1.2rem;
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const BackgroundVector = styledComponents.img`
   position: absolute;
   top: 0;
   left: 8%;
   z-index: -100;
   width: 70%;
   top:-18%;
  
   

   @media only screen and (min-width: 992px) {
        
        width: 60%;
        top:-18%;
    }

    @media only screen and (min-width: 1600px) {
        left: 15%;
        width: 50%;
        top:-18%;
    }
`;
