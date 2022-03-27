import styledComponents from "styled-components";

export const TeamSliderItemContainer = styledComponents.div`
display:flex;
flex-direction:row;

border:1px solid black;
`;

export const TeamSliderFlex = styledComponents.div`
    display:flex;
    flex-direction:column;
`;

export const TeamSlider_name = styledComponents.span`
font-size:1.8rem;
font-weight:bold;
font-family:Neusa;
color:var(--dark);

`;
export const TeamSlider_role = styledComponents.span`
font-size:1.4rem;

color:var(--dark);
margin-bottom:1rem;

`;

export const TeamSlider_details = styledComponents.span`
font-family:Neusa;
font-weight:400;
`;
