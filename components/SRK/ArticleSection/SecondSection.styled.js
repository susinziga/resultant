import styled from "styled-components";
import {
  BodyText1,
  BodyText2,
  BodyText3,
  Subtitle1,
  Subtitle2,
} from "../../../basic_components/texts/Texts";

export const ListHeadingText = styled(BodyText3)`
  display: block !important;
  padding: 3% 0%;
`;

export const List = styled.ul`
  list-style: disc !important;
`;

export const Header = styled(Subtitle2)`
  display: block !important;
  margin-bottom: 2%;
`;

export const Bold = styled(BodyText3).attrs({ bold: true })`
  font-weight: bold;
  font-family: "Neusa";
`;

export const ListItem = styled(BodyText3)`
  display: block !important;
  margin-bottom: 3%;
`;
