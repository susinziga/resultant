import styled from "styled-components";
import { Title2 } from "../../../basic_components/texts/Texts";

export const PillarComponentContainer = styled.div`
  &.pillarContainer {
    width: 49%;
  }
  position: relative;

  border-radius: 12px;

  transition: 0.5s all;

  margin: 0.5%;

  padding: 5% 7%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #f9f4f0;

  /*&.pillarContainer:hover{
     width:55%;

 }*/

  > * {
    margin-bottom: 1rem;
  }

  a {
    background: transparent;
  }

  @media only screen and (min-width: 768px) {
    padding: 2% 5%;
  }
`;

export const PillarComponentTitle = styled(Title2)`
  font-size: 1.5rem;
  @media (min-width: 768px) {
    min-height: 7rem;
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const PillarOuter = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const LogoContainer = styled.div`
  width: 100%;
  text-align: right;
  display: flex;
  justify-content: space-between;
`;
