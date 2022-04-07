import styledComponents from "styled-components";
import { CenterContent } from "../About_content.styled";

export const Partners_item_container = styledComponents.div`

display:flex;
flex-direction:column;

img{
    width:35%;
}

gap:2rem;

@media(min-width:768px){
   
    max-height:5rem;
    width:90%;
 
    justify-content:center;
  margin:auto;
    flex-direction:row;
    align-items:center;
    >span{
        height:fit-content;
        width:70%;
    }
    img{
        height:100%;
        width:unset;
        max-height:5rem;
    }
    >div{
        width:30%;
    }
}
`;

export const Partners_container = styledComponents.div`

    display:flex;
    flex-direction:column;
    gap:5rem;
    width:var(--width-90);
    margin:auto;
    margin-top:12rem;
    @media(min-width:768px){
        width:100%;
    }

   
    `;
