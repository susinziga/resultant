import styled from "styled-components";
import { Subtitle2, Title2 } from "../../../basic_components/texts/Texts";

export const Title = styled(Title2)`
  display: block;
  margin-bottom: 10%;
  font-size: 2.1rem;
  font-weight: 500;
  font-family: "Neusa";

  @media only screen and (min-width: 768px) {
    height: 90px;
    margin-bottom: 0;
  }
`;
