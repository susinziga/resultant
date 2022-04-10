import styledComponents from "styled-components";

export const TeamSliderItemContainer = styledComponents.div`
display:flex;
flex-direction:column-reverse;

//border:1px solid black;
width:90%;
margin:auto;

gap:4rem;

>img{
    width:100%;
    height:100%;
    border-radius: 12px;

    box-shadow:0px 16px 40px rgba(0, 71, 103, 0.12);
  
    }


@media(min-width:768px){
    flex-direction:row;
    gap:8rem;
    >img{
    width:40%;
    height:100%;
   

    margin-top:2rem;
    }
}

`;

export const TeamSliderFlex = styledComponents.div`
    display:flex;
    flex-direction:column;
    width:100%;
    justify-content:center;

    
>*:nth-child(2),
>*:nth-child(3),
>*:nth-child(4){
    margin-bottom:2rem;
}

@media(min-width:768px){
   
    width:60%;
    justify-content:center;

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
