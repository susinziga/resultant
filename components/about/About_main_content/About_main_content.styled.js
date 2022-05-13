import styled from "styled-components";

export const About_main_content_container = styled.div`
  /*height:100vh;*/

  display: flex;
  justify-content: space-between;

  transition: 1s all;

  overflow-x: hidden;

  ${(props) => (props.active === 1 ? "background-color:#F9F4F0;" : "")}/*${(
    props
  ) =>
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
      : ""}*/
`;
