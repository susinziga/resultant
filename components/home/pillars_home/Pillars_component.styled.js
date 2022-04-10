import styled from "styled-components";
import { Title2 } from "../../../basic_components/texts/Texts";

export const PillarComponentContainer = styled.div`
  &.pillarContainer {
    width: 49%;
  }
  position: relative;

  border-radius: 12px;
  border: 1px solid var(--pillar-color);

  transition: 0.5s all;

  margin: 0.5%;

  padding: 2% 5%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #cfedfc;

  /*&.pillarContainer:hover{
     width:55%;

 }*/

  > * {
    margin-bottom: 1rem;
  }
`;

export const PillarComponentTitle = styled(Title2)`
  @media (min-width: 768px) {
    min-height: 7rem;
  }
`;

export const PillarOuter = styled.a`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const LogoContainer = styled.div`
  width: 100%;
  text-align: right;
`;
