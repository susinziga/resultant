import styledComponents from "styled-components";

export const TeamComponentContainer = styledComponents.div`

position: relative;
display:flex;
flex-direction:column;

gap:5rem;
@media(min-width:768px){
    gap:8rem;
    padding-top:10rem;
}
`;
