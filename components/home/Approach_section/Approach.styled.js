import styledComponents from "styled-components";
import { Title2 } from "../../../basic_components/texts/Texts";


export const ApproachContainer = styledComponents.div`

    @media screen and (min-width: 768px){
        width:var(--width-90);
        margin: auto;
        display: flex;
        >p {
            opacity: 0.6;
        }

    }
  }
`;

export const ApproachTextContainer = styledComponents.div`
   
    @media screen and (min-width: 768px){
        width:60%;
        padding: 6% 12% 0 10%;
    }

    @media screen and (min-width: 1600px){
        width:60%;
        padding: 10% 13% 0 10%;
    }
  }
`;


export const ApproachHeading = styledComponents(Title2)`
    @media screen and (min-width: 768px){
        width:var(--width-80);
        margin-bottom: 8%;
        padding-left: 2%;
    } 
  }
`;

export const ApproachImage = styledComponents.img`
    width:45%;
  }
`;