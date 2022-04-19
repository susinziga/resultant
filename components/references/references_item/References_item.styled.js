import styledComponents from "styled-components";

export const ReferencesItemContainer = styledComponents.div`


border: 1px solid ${(props) => props.hex};
margin:0.5rem;

border-radius: 12px;

display:flex;
justify-content:center;



filter:grayscale(0);
:hover{
    filter:grayscale(0);
}
`;
