import styledComponents from "styled-components";
import { Title2 } from "../../../basic_components/texts/Texts";

export const PillarComponentContainer = styledComponents.div`
&.pillarContainer{
  width:49%;
}

 border-radius: 12px;
 border: 1px solid var(--pillar-color);

 transition: 0.5s all;

 


 margin:0.5%;

 padding:5%;

 display:flex;
 flex-direction:column;
 justify-content:space-between;


 /*&.pillarContainer:hover{
     width:55%;

 }*/

 > * {
     margin-bottom:1rem;
 }
`;

export const PillarComponentTitle = styledComponents(Title2)`

  @media (min-width:768px) {
    min-height: 7rem;
  }
`;

export const PillarOuter = styledComponents.a`
position:absolute;
top:0;
bottom:0;
left:0;
right:0;`;

export const LogoContainer = styledComponents.div`
width: 100%;
text-align:right;
`;
