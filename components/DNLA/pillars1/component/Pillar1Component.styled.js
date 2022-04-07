import styledComponents from "styled-components";
import { BodyText4, Title2 } from "../../../../basic_components/texts/Texts";

export const PillarComponentContainer = styledComponents.div`
    &.pillarContainer{
       
           

        @media (min-width:768px) {
            width:32%;
            max-height: 325px;

        }

        @media (min-width:992px) {
    

        }
    }

    border-radius: 12px;
    border: 1px solid var(--pillar-color);

    transition: 0.5s all;
    margin:0.5%;
    padding:4%;
    display:flex;
    flex-direction:column;




   

    > * {
        margin-bottom:1rem;
    }
`;

export const PillarComponentTitle = styledComponents(Title2)`

  @media (min-width:768px) {
      font-size: 1rem;
    
  }

  @media (min-width:992px) {
    font-size: 1.4rem; 
  
  }
`;

export const PillarOuter = styledComponents.a`
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
`;

export const LogoContainer = styledComponents.div`
    width: 100%;
    text-align:right;
`;

export const PillarText = styledComponents(BodyText4)`
    @media (min-width:768px) {
        font-size: 1rem;
       
    }

    @media (min-width:992px) {
    font-size: 1rem; 
   
    }
`;