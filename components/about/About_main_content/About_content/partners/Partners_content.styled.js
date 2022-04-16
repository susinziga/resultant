import styled from "styled-components";
import { CenterContent } from "../About_content.styled";

export const Partners_item_container = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 35%;
  }

  gap: 2rem;

  @media (min-width: 768px) {
    max-height: 5rem;
    width: 90%;

    justify-content: center;
    margin: auto;
    flex-direction: row;
    align-items: center;
    > span {
      height: fit-content;
      width: 70%;
    }
    img {
      height: 100%;
      width: unset;
      max-height: 5rem;
    }
    > div:nth-child(1) {
      width: 30%;
    }
    > div:nth-child(2) {
      width: 70%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  }
`;

export const Partners_container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: var(--width-90);
  margin: auto;
  margin-top: 12rem;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const Partner_link = styled.a`
  border-bottom: 1px solid #9f7312;
  width: fit-content;

  display: flex;

  align-items: center;

  gap: 0.5rem;
  svg {
    font-size: 0.6rem;
    color: #9f7312;
  }
`;
