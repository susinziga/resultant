import styled from "styled-components";

export const ListTitle = styled.p`
  margin-bottom: 10%;
  font-size: 1.5rem;
  line-height: 1.6rem;
  font-weight: 600;

  @media only screen and (min-width: 768px) {
    margin-bottom: 3%;
    font-size: 1rem;
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const ListUnorderedList = styled.ul`
  list-style: disc !important;
  padding-left: 8%;

  @media only screen and (min-width: 768px) {
    padding-left: 3%;
  }
`;

export const ListItem = styled.li`
  /* line-height: 40px; */
  margin-bottom: 10%;
  font-family: "NeusaThin";
  font-size: 1.1rem;

  @media only screen and (min-width: 768px) {
    margin-bottom: 3%;
  }
`;
