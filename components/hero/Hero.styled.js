import styledComponents from "styled-components";

export const HeroContainer = styledComponents.div`


position:relative;
height:100vh;


padding-top:calc(${(props) => props.menuHeight} - 0.5rem);

div:first-child{
    width:100%;
    height:fit-content;
    transform: scale(0.9);
    
    position: relative;

    border-radius: 12px;    

    overflow:hidden;

    height:fiz-content;

    max-height:100%;
}
    img{
        //height:100vh;
        width:100%;
        border-radius:12px;
    }

@media(min-width:768px){
  

position:relative;
height:100vh;
padding-top:calc(${(props) => props.menuHeight} + 1.5rem);



div:first-child{
    transform: scale(0.9);
    top:-5%;
    position: relative;

    border-radius: 12px;    

    overflow:hidden;

    height:110%;
    >img{
        //height:100vh;
        //height:100%;
        //width:auto;
    }

}
`;

export const HeroTexts = styledComponents.div`
display:flex;
    flex-direction:column;
    position:absolute;
    top:5%;
    left:5%;
    width:90%;
    > *
    {
        margin-bottom:2.5rem;
    }


@media(min-width:768px){
    
    top:10%;
    left:30%;

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
}
@media(min-width:1300px){
    top:10%;
    left:35%;
}
`;

export const WhiteLine = styledComponents.div`

  height: 2px;
  width: 0%;
  background-color:#FFF;
  position:relative;
  left:100%;
  z-index:10;
`;
