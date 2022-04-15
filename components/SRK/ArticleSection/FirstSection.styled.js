import styled from "styled-components";
import {
  BodyText1,
  BodyText2,
  BodyText3,
  Subtitle1,
  Subtitle2,
} from "../../../basic_components/texts/Texts";

export const FirstSectionWrapper = styled.div`
  margin-bottom: 15%;
`;

export const PaddingX = styled.div`
  padding: 0% 5%;
`;

export const ImageHeader = styled(Subtitle2)`
  display: block !important;
  margin-bottom: 2%;
`;

export const ImageDescription = styled(BodyText3)``;

export const Img = styled.img`
  padding: 15% 15%;

  @media only screen and (min-width: 768px) {
    padding: 5% 0%;
  }
`;

export const RowHeader = styled(Subtitle2).attrs({ bold: true })`
  display: block !important;
  font-size: 1.2rem;
  margin: 7% 0%;

  @media only screen and (min-width: 768px) {
    margin: 4% 0%;
  }
`;
export const RowText = styled(BodyText3)``;
export const OrderedList = styled.ol`
  list-style: decimal;
  margin-left: 3%;
`;
