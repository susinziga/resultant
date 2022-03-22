import styledComponents from "styled-components";

export const MenuContainer = styledComponents.div``;

export const LogoContainer = styledComponents.div`
    position:relative;
    width:fit-content;

    left:5%;

    >object{ 
        position:absolute;
  
        //top:-21%;
        top:500%;
        bottom:0;
        right:0;

        height: 100%;

        z-index:100;
  
        //left: 57%;
        left:100%;
        width: fit-content;
        //transform: scale(0.5);

        transform:scale(22);

    



        /*  ZAČETNE  */


    /*scale 22
    left: 100%;
    top: 500%;*/
    }

    >img{
        height:90px;
    }
`;

export const Fixed = styledComponents.div`
position:fixed;
//background-color:#FFFFFF;
z-index:1000;
width:100%;
`;
