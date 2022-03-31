import styledComponents from "styled-components";

export const TeamSliderItemContainer = styledComponents.div`
display:flex;
flex-direction:row;

//border:1px solid black;
width:80%;

gap:10rem;

>img{
    height:100%;
    border-radius: 12px;

    box-shadow:0px 16px 40px rgba(0, 71, 103, 0.12);
    margin-top:2rem;
}

`;

export const TeamSliderFlex = styledComponents.div`
    display:flex;
    flex-direction:column;
    width:35%;

    
>*:nth-child(2),
>*:nth-child(3),
>*:nth-child(4){
    margin-bottom:2rem;
}
`;

export const TeamSlider_name = styledComponents.span`
font-size:1.8rem;
font-weight:bold;
font-family:Neusa;
color:var(--dark);

`;

export const FirstRowFlex = styledComponents.div`
    display:flex;
    justify-content:space-between;
`;
export const TeamSlider_role = styledComponents.span`
font-size:1.4rem;

color:var(--dark);


`;

export const TeamSlider_details = styledComponents.span`
font-family:Neusa;
font-weight:400;
`;
