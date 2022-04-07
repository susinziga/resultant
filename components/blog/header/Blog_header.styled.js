import styledComponents from "styled-components";
import styled from "styled-components";
import {
  BodyText3,
  Header1,
  Title1,
} from "../../../basic_components/texts/Texts";
export const Blog_header_container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const Blog_title = styled(Title1)`
  @media (max-width: 767px) {
    font-size: 2.3rem;
    line-height: 3rem;
    font-weight: 500;
  }
`;
export const Blog_author_container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3rem;
  align-items: baseline;

  @media (min-width: 768px) {
    width: 60%;
    gap: 2rem;
    height: fit-content;
    flex-direction: column-reverse;
  }
`;
export const Blog_author = styled(BodyText3)`
  width: 65%;
`;
export const Blog_author_image = styled.img`
  width: 30%;
  border-radius: 12px;
  filter: grayscale(1);
  @media (min-width: 768px) {
    width: 20%;
  }
`;

export const Line = styled.div`
  height: 1px;
  border-top: 1px solid black;
`;
