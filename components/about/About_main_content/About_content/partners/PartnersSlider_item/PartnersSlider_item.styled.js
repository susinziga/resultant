import styledComponents from "styled-components";

export const FirstSlideContainer = styledComponents.div`
    width:var(--width-90);
    margin:auto;
    display:flex;
    gap:3rem;

    >div{
        width:25%;
    }
    >span{
        width:75%;
    }


    @media(min-width:768px){
        >div{
            width:20%;
        }
        >span{
            width:80%;
        }

      

        
    }
`;
