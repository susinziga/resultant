import styledComponents from "styled-components";

export const HeroContainer = styledComponents.div`
overflow-x:hidden;
position:relative;
height:100vh;
padding-top:${(props) => props.menuHeight}px;

>img{
    transform: scale(0.9);
    top:-5%;
    position: relative;

    border-radius: 12px;    
}
`;

export const HeroTexts = styledComponents.div`
display:flex;
flex-direction:column;
position:absolute;
top:30%;
left:45%;

> *
{
    margin-bottom:4%;
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
`;
