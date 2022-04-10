import styled from "styled-components";

export const FirstSlideContainer = styled.div`
  width: var(--width-90);
  margin: auto;
  display: flex;
  gap: 1rem;
  padding: 3rem 1.5rem;
  border-radius: 12px;

  > div {
    width: 20%;
  }
  > span {
    width: 80%;
  }

  @media (min-width: 768px) {
    gap: 3rem;
    padding: 3rem;
    > div {
      width: 20%;
    }
    > span {
      width: 80%;
    }
  }
  transition: 1s all;

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
