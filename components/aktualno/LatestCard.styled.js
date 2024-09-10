import styled from "styled-components";
import { BodyText2 } from "../../basic_components/texts/Texts";

export const NewsText = styled(BodyText2)`
  width: 95%;
  font-size: 1rem;
  display: block;
  margin: 4% 0%;

  filter: drop-shadow(0px 16px 40px rgba(0, 71, 103, 0.12));

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 1.1rem;
  }
`;

export const NewsHeading = styled.h3`
  font-size: 1.2rem;
  width: 100%;
  cursor: pointer;

  filter: drop-shadow(0px 16px 40px rgba(0, 71, 103, 0.12));

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1600px) {
    font-size: 1.4rem;
  }
`;

export const NewsContainer = styled.a`
  background: none;
  position: relative;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #000000;
  border-radius: 16px;
  margin-bottom: 2rem;

  background: ${(props) => (props.isActive ? "white" : "none")};
  transition: background 0.25s ease;

  &:hover {
    background: #316888;
    color: white !important;
  }

  &:hover ${NewsHeading}, &:hover ${NewsText} {
    color: white;
  }

  @media only screen and (min-width: 768px) {
    width: 100%;
  }

  @media only screen and (min-width: 992px) {
    padding-top: 0;
    width: 100%;
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const ContainerInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const NewsImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 400px;
  object-fit: cover;
  border-radius: 15px;
  padding-bottom: 5%;

  @media only screen and (min-width: 768px) {
    width: 50%;
    padding-right: 5%;
    padding-bottom: 0;
  }
`;

export const NewsTextContainer = styled.div`
  width: 100%;
  padding: 2% 5%;
  padding-bottom: 5%;

  @media only screen and (min-width: 768px) {
    padding: 2% 0%;
    width: 80%;
  }
`;
