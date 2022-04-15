import Image from "next/image";
import styledComponents from "styled-components";
import {
  Header1,
  BodyText2,
  BodyText3,
} from "../../../basic_components/texts/Texts";

export const AboutContainer = styledComponents.div`
    
height:fit-content;
    display:flex;
    flex-direction:column-reverse;

  
    gap:2rem;
   

    @media screen and (min-width: 768px){
        height: fit-content;
        width:90%;
        margin:auto;
      
        flex-direction:row;
        gap:10rem;
    }
  
`;

export const ImageContainer = styledComponents.div`
width:50vh;
max-width:80%;
margin:auto;
margin-top:0;
@media(min-width:768px){
    width:35%;
}
`;

export const AboutImage = styledComponents.img`
border-radius:12px;
height:auto;
filter: drop-shadow(0px 16px 40px rgba(0, 71, 103, 0.12));
border-radius:
`;

export const AboutTextContainer = styledComponents.div`
   width:80%;
   margin:auto;
   margin-bottom:0;

    @media(min-width:768px){
        margin:0;
         width: 50%;
    }
  
`;

export const AboutUpperHeading = styledComponents(BodyText2)`
    font-weight: bold;
    font-family: "Neusa";

    @media screen and (min-width: 768px){
     
    }
  
`;

export const AboutHeading = styledComponents(Header1)`
    
    @media screen and (min-width: 768px){
        margin: 5% 0 6% 0;
    }
  
`;

export const AboutHeadingContainer = styledComponents.div`
    width: 100%;
    
    @media screen and (min-width: 768px){
       
    }
  
`;

export const AboutText = styledComponents(BodyText3)`
    width:100%;
    @media screen and (min-width: 768px){
        font-size:1.5rem;
    }
  
`;

export const AboutLine = styledComponents.div`
    height: 1px;
    width: 100%;
    border-top: 1px solid black;

    @media screen and (min-width: 768px){
        margin-top: 5%;
    }
  
`;
