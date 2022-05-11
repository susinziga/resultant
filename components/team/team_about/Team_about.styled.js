import styled from "styled-components";
import { BodyText2, Header1 } from "../../../basic_components/texts/Texts";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  > * {
    padding-top: 2rem;
    border-top: 1px solid #000000;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Team_about_title = styled(Header1)`
  @media (min-width: 768px) {
    width: 40%;
    border-top: 0;
  }
`;
export const Team_about_content = styled(BodyText2)`
  border-top: 0;
  font-weight: 300;
  @media (min-width: 768px) {
    border-top: 1px solid #000000;
    width: 60%;
  }
`;

export const Team_about_image = styled.img`
  display: block;
  border-top: none;
  padding: 0;
  width: 60%;
  margin: 0 auto;
  height: auto;
  object-fit: scale-down;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 20%;
  }
`;
