import styledComponents from "styled-components";
import { Title2 } from "../../../basic_components/texts/Texts";

export const ContactContainer = styledComponents.div`
padding:5%;
    background: #F6FBFE;
    @media screen and (min-width: 768px){
        padding: 8% 2%;
        width: 100%;
        margin: auto;
        display: flex;
        >p {
            opacity: 0.6;
        }

    }
  }
`;

export const ContactTextContainer = styledComponents.div`
   
    @media screen and (min-width: 768px){
        width:70%;
        padding: 8% 8% 0 8%;
        
    }

    @media screen and (min-width: 1600px){
        width:60%;
        padding: 8% 8% 0 8%;
    }
  }
`;

export const ContactHeading = styledComponents(Title2)`
    @media screen and (min-width: 768px){
        width:var(--width-80);
        margin-bottom: 8%;
        
    } 
  }
`;

export const ContactImage = styledComponents.img`
    width:45%;
  }
`;
