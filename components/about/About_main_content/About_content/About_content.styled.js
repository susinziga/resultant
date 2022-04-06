import styledComponents from "styled-components";

export const About_content_container = styledComponents.div`

    

    height:100%;
   
    width:100%;

    /*scroll-snap-type:y mandatory;*/
   /* overflow-y:scroll;*/

    >div:nth-child(1){
        /*scroll-snap-align:start;*/
        width:100%;100%;
        margin-bottom:6rem;
        margin-top:6rem;
    }

    @media(min-width:768px){
        width:65%;

        >div:nth-child(1){
            /*scroll-snap-align:start;*/
            width:100%;height:100vh;
            margin-bottom:6rem;
        }
    }

    
`;

export const CenterContent = styledComponents.div`top: 50%;
position: relative;
transform: translate(0,-50%);`;
