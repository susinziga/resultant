import Image from "next/image";
import styled from "styled-components";

import { Title1, Title2 } from "../../basic_components/texts/Texts";

export const MenuFixedContainer = styled.div`
  min-height: 8rem;
  /* width: 70%; */
  width: 70%;
  margin: auto;
  align-items: baseline;

  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: center;

  /* align-items: center; */
  @media (min-width: 900px) {
    flex-direction: row;
    width: 90%;
    align-items: baseline;
  }
`;

export const MenuItemWrapper = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20%;
  width: 60%;

  @media (min-width: 900px) {
    margin-bottom: 0;
    width: auto;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    width: 150%;
  }
`;

export const MenuItemImg = styled(Image)`
  width: 50%;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const MenuItem = styled.p`
  font-family: "Fatface", cursive;
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
