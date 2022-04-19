import styled from "styled-components";

import { Title1 } from "../../basic_components/texts/Texts";

export const MenuFixedContainer = styled.div`
  min-height: 8rem;
  /* width: 70%; */
  width: 90%;
  margin: auto;

  display: flex;
  flex-direction: column;

  justify-content: space-around;

  /* align-items: center; */
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20%;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const MenuItemImg = styled.img`
  width: 50%;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const MenuItem = styled(Title1)`
  font-size: 2rem;
  padding-bottom: 1rem;
  /* color: var(--light-grey); */
  color: #004767;

  line-height: "4.2rem";
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    :nth-child(1) {
      /* text-align: left; */
    }
    :nth-child(2) {
      text-align: center;
    }
    :nth-child(3) {
      text-align: right;
    }

    ${(props) =>
      props.active
        ? `font-size:3.5rem;
      color:var(--dark);
      width:initial;
      line-height:4.2rem;
      border-bottom:1px solid var(--dark);`
        : "// width:30%;"}
  }
`;
