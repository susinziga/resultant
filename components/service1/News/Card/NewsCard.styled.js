import styledComponents from "styled-components";
import { BodyText1, BodyText2, Subtitle1, Subtitle2, Title1, Title2 } from "../../../../basic_components/texts/Texts";



export const NewsContainer = styledComponents.div`
    background: white;
    position: relative;
    width: 105%;
    margin: 20% auto;
    filter: drop-shadow(0px 16px 40px rgba(0, 71, 103, 0.12));
    
   ${(props) => {
        return props.isActive
          ? `background: white; 
          `
          : "";
      }}
    border-radius: 12px;
    min-height: 460px;

`;

export const NewsImage = styledComponents.img`
    width: 100%;
    
    
    filter: drop-shadow(0px 16px 40px rgba(0, 71, 103, 0.12));
`;

export const NewsHeading = styledComponents(Title2)`
    font-size: 1.3rem;
    width: 100%;
    
    margin: 0 0 10% 0;
    filter: drop-shadow(0px 16px 40px rgba(0, 71, 103, 0.12));
`;

export const NewsText = styledComponents(BodyText2)`
    width: 80%;
    margin: 20% 0;
    font-size: 1.2rem;

   
    filter: drop-shadow(0px 16px 40px rgba(0, 71, 103, 0.12));
`;

export const NewsTextContainer = styledComponents.div`
    width: 80%;
    padding: 10% 10%;
    
   
`;