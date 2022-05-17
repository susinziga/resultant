import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  // margin: 10% 0 7% 0;

  @media screen and (min-width: 768px) {
    width: 90%;
  }

  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;
