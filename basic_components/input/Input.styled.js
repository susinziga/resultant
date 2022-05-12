import styled from "styled-components";

export const InputContainer = styled.input`
  font-size: 1rem;
  padding: var(--padding-primary);
  width: 100%;
  border: 1px solid var(--dark);
  border-radius: var(--border-primary);
  margin-top: 0.5rem;
  border-color: black;
  outline-color: var(--secondary-color);

  ${(props) => {
    return props.error ? `border-color: #F22727; outline-color: #F22727` : "";
  }}
`;

export const InputLabel = styled.label`
  font-size: 1.2rem;
  color: var(--dark);
  font-family: "Neusa";
  font-weight: 300;
`;

export const ActionLabel = styled.label`
  font-size: 0.8rem;

  ${(props) => {
    return props.error ? `color: #F22727;` : "";
  }}

  ${(props) => {
    return props.success ? `color: #325935;` : "";
  }}
`;
