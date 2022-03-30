import styledComponents from "styled-components";

export const Container = styledComponents.div`

`;

export const SliderButtons = styledComponents.div`



    width:var(--width-80);
    margin:auto;
    margin-top:1rem;
    display:flex;

    flex-direction: row-reverse;
    gap:1rem;

    >img{
        
        width:1.5rem;
        :hover{
            cursor:pointer;
        }
    }

`;
