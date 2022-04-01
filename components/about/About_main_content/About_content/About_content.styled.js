import styledComponents from "styled-components";

export const About_content_container = styledComponents.div`

    

    height:100%;
   
    width:0%;

    /*scroll-snap-type:y mandatory;*/
    overflow-y:scroll;

    >div{
        /*scroll-snap-align:start;*/
        width:100%;height:100%;
    }

   
    
`;

export const CenterContent = styledComponents.div`top: 50%;
position: relative;
transform: translate(0,-50%);`;
