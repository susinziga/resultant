import styled from "styled-components";

export const About_content_container = styled.div`
  height: 100%;
  width: 100%;

  overflow-x: hidden;

  > div:nth-child(1) {
    width: 100%;

    /*margin-top:6rem;*/
  }

  @media (min-width: 992px) {
    width: 60%;
    padding-top: 30vh !important;

    > div:nth-child(1) {
      width: 100%;
      /* height: 90vh; */
    }
  }
`;

export const CenterContent = styled.div`
  /* top: 50%; */
  /* position: relative; */
  /* transform: translate(0, -50%); */
`;
