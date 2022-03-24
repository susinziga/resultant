import styledComponents from "styled-components";

export const TestimonialsContainer = styledComponents.div`
@media(min-width:768px){
    padding:3rem;


    border: 1px solid #282828;
    box-sizing: border-box;
    border-radius: 12px;

    width:var(--width-90);
    margin:auto;


}
`;

export const TestimonialsButton = styledComponents.div`
    display:flex;
    flex-direction:row-reverse;
    gap:1rem;
    margin-top:1rem;

>img{
        
    width:1.5rem;
    :hover{
        cursor:pointer;
    }
}
`;
