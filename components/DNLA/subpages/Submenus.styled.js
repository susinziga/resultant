import styled from "styled-components";
import {
  BodyText2,
  BodyText3,
  Title2,
} from "../../../basic_components/texts/Texts";

export const CardHeading = styled(Title2)`
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  margin-top: 10%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ItemWrapper = styled.div`
  border: 1px solid #004767;
  border-radius: 12px;
  min-height: 200px;
  width: 95%;
  padding: 4% 6%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 2% 2.5%;
    width: 29%;
  }
`;

export const Subtitle = styled(Title2)`
  font-size: 1.4rem;
`;

export const List = styled.ul`
  list-style: initial;
  margin-left: 20px;
`;

export const ListItem = styled(BodyText3)`
  /* display: inline-block; */
`;

export const VSpace = styled.div`
  height: 25px;
`;
