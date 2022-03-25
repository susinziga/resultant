import styled from "styled-components";

import { Title1 } from "../../basic_components/texts/Texts";

export const MenuFixedContainer = styled.div`
  min-height: 8.4rem;
  width: var(--width-80);
  margin: auto;

  display: flex;

  justify-content: space-between;

  align-items: center;
`;

export const MenuItem = styled(Title1)`
  color: var(--light-grey);
  //width: 30%;

  :nth-child(1) {
    text-align: left;
  }
  :nth-child(2) {
    text-align: center;
  }
  :nth-child(3) {
    text-align: left;
  }
  ${(props) =>
    props.active
      ? "font-size:3.5rem;color:var(--dark);width:initial;line-height:4.2rem;"
      : "width:30%;"}
`;
