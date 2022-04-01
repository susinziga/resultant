import styledComponents from "styled-components";

export const About_main_content_container = styledComponents.div`


    height:100vh;

    display:flex;

    transition:1s all;

    
  
    
    ${(props) => (props.active === 1 ? "background-color:#F9F4F0;" : "")}
    ${(props) =>
      props.active === 2
        ? `background-color:var(--blue);
        span{
        color:white;
        }
        .quote{
            filter:invert(1);
        }
        h2:nth-child(3){
            color:white;
        }`
        : ""}
`;
