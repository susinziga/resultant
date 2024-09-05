import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.bg};
  border-radius: 12px;
  padding: 2.5rem 1.5rem;

  > h4 {
    font-size: 1.4rem;

    min-height: 8rem;
  }

  @media (min-width: 768px) {
    > h4 {
      font-size: 1.4rem;

      min-height: 10rem;
    }
  }
`;

export const Line = styled.hr`
  width: 40%;
  margin-left: 0%; ;
`;
