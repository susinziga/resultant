import styledComponents from "styled-components";

export const About_content_container = styledComponents.div`

    

    height:100%;
   
    width:100%;


   

    /*scroll-snap-type:y mandatory;*/
   /* overflow-y:scroll;*/
 overflow-x:hidden;
    >div:nth-child(1){
        /*scroll-snap-align:start;*/
        width:100%;
       
        /*margin-top:6rem;*/
    }

    @media(min-width:768px){
        width:60%;

        >div:nth-child(1){
            /*scroll-snap-align:start;*/
            width:100%;height:100vh;
        
        }
    }

    
`;

export const CenterContent = styledComponents.div`top: 50%;
position: relative;
transform: translate(0,-50%);`;
