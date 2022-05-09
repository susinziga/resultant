import styledComponents from "styled-components";
import styled from "styled-components";
import {
  BodyText3,
  Header1,
  Title1,
} from "../../../../basic_components/texts/Texts";
export const Blog_header_container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    align-items: center;
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
    width: 55%;
    gap: 2rem;
    height: fit-content;
    flex-direction: column-reverse;
  }
`;
export const Blog_authors = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  gap: 0.5rem;

  align-items: center;
`;
export const Blog_author = styled(BodyText3)`
  width: fit-content;
  display: inline-block;
`;

export const Blog_author_images = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  height: 9rem;

  @media (min-width: 768px) {
    justify-content: end;
    flex-direction: row;
    width: 45%;
    text-align: end;
  }
`;

export const BlogAuthorImageWrapper = styled.div`
  /* width: 100%; */
  height: 100%;
  position: relative;
`;

export const GuestBadge = styled.div`
  position: absolute;
  width: 35px;
  height: 35px;
  background-color: #00b4f0;
  border-radius: 50%;
  top: -10px;
  /* left: -10px; */
  right: -10px;
  /* right: auto; */
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.8rem;
  text-align: center;
  color: white;

  transition: all 0.25s ease;

  @media (min-width: 768px) {
    /* top: 20px; */
    left: auto;
  }

  @media (min-width: 1024px) {
    /* top: -10px; */
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
    width: 50px;
    height: 50px;
  }
`;

export const Blog_author_image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  filter: grayscale(1);
  object-fit: cover;
  @media (min-width: 768px) {
    /* width: 33%; */
  }
`;

export const Line = styled.div`
  height: 1px;
  border-top: 1px solid black;
`;
