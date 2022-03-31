import styledComponents from "styled-components";

export const About_content_container = styledComponents.div`
    height:100%;
   
    width:100%;

    scroll-snap-type:y mandatory;
    overflow-y:scroll;

    >div{
        scroll-snap-align:start;
    }

    >div:nth-child(1){
        background-color:red;width:100%;height:100%;
    }
    >div:nth-child(2){
        background-color:green;width:100%;height:100%;
    }
`;
