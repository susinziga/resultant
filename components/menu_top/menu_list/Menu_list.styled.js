import styled from "styled-components";

export const MenuList = styled.div`
  display: flex;
  align-items: center;

  gap: 0.1rem;

  position: relative;

  @media (min-width: 992px) {
    gap: 1rem;
  }
`;

export const MenuItem = styled.div`
  font-size: 1rem;

  color: var(--dark);
`;
