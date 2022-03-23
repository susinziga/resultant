import styledComponents from "styled-components";

export const HeroContainer = styledComponents.div`

position:relative;
height:100vh;
padding-top:${(props) => props.menuHeight}px;



div:first-child{
    transform: scale(0.9);
    top:-5%;
    position: relative;

    border-radius: 12px;    

    overflow:hidden;

    height:110%;
}
`;

export const HeroTexts = styledComponents.div`
display:flex;
flex-direction:column;
position:absolute;
top:20%;
left:35%;

> *
{
    margin-bottom:2.5rem;
}

>h1{
    //margin-bottom:6%;
    width:60%;
}
>p{
    width:60%;
}
`;

export const WhiteLine = styledComponents.div`

  height: 10px;
  width: 0%;
  background-color:#FFF;
  position:relative;
  left:100%;
  z-index:10;
`;
