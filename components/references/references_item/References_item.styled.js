import styledComponents from "styled-components";

export const ReferencesItemContainer = styledComponents.div`
border: 1px solid ${(props) => props.hex};

border-radius: 12px;

display:flex;
justify-content:center;



filter:grayscale(1);
:hover{
    filter:grayscale(0);
}
`;
