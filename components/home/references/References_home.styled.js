import styledComponents from "styled-components";

export const ReferencesContainer = styledComponents.div`

    @media(min-width:768px){
        width:var(--width-90);
        margin:auto;
    }
`;

export const TitleContainer = styledComponents.div`
margin-bottom:4rem;
    @media(min-width:768px){
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom: 4rem;
    }
`;

export const TitleLine = styledComponents.div`
    width:60%;
    height:1px;


    border-top:1px solid var(--dark);
`;
