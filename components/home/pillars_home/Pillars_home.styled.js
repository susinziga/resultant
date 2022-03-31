import styledComponents from "styled-components";

export const PillarsContainer = styledComponents.div`
    width:var(--width-90);
    margin:auto;
    display:flex;
    flex-direction:column;
    
`;

export const PillarsFlex = styledComponents.div`
    display:flex;
    direction:row;
`;

export const PillarsContainer_mobile = styledComponents.div`
width:var(--width-90);
margin:auto;
display:flex;
flex-direction:column;
gap:2rem;
`;
