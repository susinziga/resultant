import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: auto;

  ul {
    list-style-type: disc;
  }

  li {
    margin-bottom: 0.8rem;
    margin-left: 1.5rem;
  }

  @media (min-width: 768px) {
    width: 60%;
    margin: auto;
  }
`;

export const Container_border = styled.div`
  border: 1px solid #282828;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 4rem 1.5rem;
  text-align: center;

  ul {
    list-style-type: disc;
  }

  li {
    margin-bottom: 0.8rem;
    margin-left: 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 5rem 7rem;
  }
`;

export default Container;
