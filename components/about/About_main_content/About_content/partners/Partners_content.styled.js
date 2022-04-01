import styledComponents from "styled-components";
import { CenterContent } from "../About_content.styled";

export const Partners_item_container = styledComponents.div`

display:flex;
flex-direction:column;
@media(min-width:768px){
   
    max-height:5rem;
    width:80%;
 
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
        max-height:5rem;
    }
    >div{
        width:30%;
    }
}
`;

export const Partners_container = styledComponents(CenterContent)`
    display:flex;
    flex-direction:column;
    gap:3rem;
    `;
