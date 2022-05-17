import styled from "styled-components";
import * as text from "../../../basic_components/texts/Texts";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    gap: 0rem;
    padding-top: 3rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const Name_flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  @media (min-width: 768px) {
    gap: 0.5rem;
  }
`;
export const Name = styled(text.Header1)`
  font-size: 4rem;
`;
export const Role = styled(text.BodyText2)``;
export const Details_container = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  gap: 1rem;
  justify-content: space-between;

  @media (min-width: 768px) {
    gap: 3rem;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  > a > img {
    margin-right: 0.5rem;
  }
  gap: 0.5rem;
  @media (min-width: 768px) {
    gap: 0.5rem;
  }
`;
export const Linkedin = styled.img`
  width: 3rem;
  height: fit-content;
`;
