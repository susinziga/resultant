import styledComponents from "styled-components";
import { Header2} from "../../../basic_components/texts/Texts";


export const MainContentContainer = styledComponents.div`
    width:100%;
    height: 100vh;
   
    display: flex;
    transition: background-color 1s;
    

    ${(props) => {
        return props.transition
          ? ` background-color:white;
          `
          : `background-color: var(--footer-color);
            `;
      }}
    @media screen and (min-width: 768px){
        
    }
  
`;

export const MainContentNavBar = styledComponents.div`
    width: 100%;
    margin: auto;
    text-align: left;
    padding-left: 30%;
  
`;


export const MainContentHeading = styledComponents(Header2)`
    color: #CACFD2;
    opacity: 0.8;
    
    transition: font-size 2s;
    transition: color 2s;

   
    ${(props) => {
        return props.initial
          ? ` font-size: 4.5rem !important;
              color: white !important;  
              padding: 0;
              opacity: 1;
          `
          : "";
      }}

      
    ${(props) => {
        return props.transition
          ? ` font-size: 2.5rem !important; 
              padding: 0;
              opacity: 0.8;
          `
          : "";
      }}

      ${(props) => {
        return props.selected 
          ? ` font-size: 3.5rem !important;
              color: black;  
              padding: 0;
              opacity: 1;
              transition: font-size 1s;
              transition: color 1s;
          `
          : "";
      }}
    @media screen and (min-width: 768px){
       
    }
  
`;

export const MainContentLine = styledComponents.div`
    height: 1px;
    width: 100%;
    border-top: 2px solid white;

    @media screen and (min-width: 768px){
       margin-top: 1%;
    }
  
`;


export const MainContentContent = styledComponents.div`
    width: 0%;
    
    @media screen and (min-width: 768px){
       
    }
  
`;
