import styledComponents from "styled-components";
import {BodyText3, Header1, Header2} from '../../basic_components/texts/Texts'

export const ArticleContainer = styledComponents.div`
    width: 90%;
    padding-top: 25%;
    margin: auto;


    @media only screen and (min-width: 768px) {
       display: flex;
       flex-direction: column;
       padding-top: 15%;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
        padding-top: 10%;
    }

`

export const HeadingContainer = styledComponents(Header2)`
    margin-bottom: 10%;


    @media only screen and (min-width: 768px) {
        margin-bottom: 0%;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
        
    }

`

export const HeadingLine = styledComponents.div`
    height: 1px;
    width: 100%;
    border-top: 1px solid black;
    margin: 5% 0 10% 0;

    @media screen and (min-width: 768px){
        margin-top: 5%;
    }

    @media screen and (min-width: 992px){
        margin-top: 5%;
    }
  
`;

export const Text = styledComponents(BodyText3)`
    font-size: 1.2rem;
   


    @media only screen and (min-width: 768px) {
       width: 50%;
       padding-left: 5%;
       padding-top:2%;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
        padding:2%;
    }

`
export const DesktopFlex = styledComponents.div`
     

    @media only screen and (min-width: 768px) {
       display: flex; 
       flex-direction: row-reverse;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
        
    }

`

export const ButtonContainer = styledComponents.div`
     

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
        
    }

`


export const Image = styledComponents.img`
    margin-top: 10%; 

    @media only screen and (min-width: 768px) {
       width: 50%;
       margin-top: 0%; 
       height:120%;
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
        width: 45%;
        margin-right:auto;
    }

`