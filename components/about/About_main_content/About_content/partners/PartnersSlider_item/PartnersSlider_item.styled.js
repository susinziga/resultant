import styledComponents from "styled-components";

export const FirstSlideContainer = styledComponents.div`
    width:var(--width-90);
    margin:auto;
    display:flex;
    gap:3rem;
    padding:3rem;
    border-radius:12px;

    >div{
        width:25%;
    }
    >span{
        width:75%;
    }


    @media(min-width:768px){
        >div{
            width:20%;
        }
        >span{
            width:80%;
        }

      

        
    }

    ${(props) =>
      props.active === 2
        ? `background-color:var(--blue);
          span,h4{
          color:white;
          }
          .quote{
              filter:invert(1);
          }
          h2:nth-child(3){
              color:white;
          }`
        : ""}
  
  
          ${(props) =>
            props.active === 4
              ? `background-color:var(--blue);
                span,h4{
                color:white;
                }
                .quote{
                    filter:invert(1);
                }
                h2:nth-child(4){
                    color:white;
                }`
              : ""}
`;
