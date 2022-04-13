import styled from "styled-components";
import { Subtitle2 } from "../../../basic_components/texts/Texts";

export const Title = styled(Subtitle2).attrs({ bold: true })`
  display: block;
  margin-bottom: 10%;
  font-size: 2.1rem;

  @media only screen and (min-width: 768px) {
    height: 90px;
    margin-bottom: 0;
  }
`;
