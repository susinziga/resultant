import styled from "styled-components";

export const TextareaContainer = styled.textarea`
  font-size: 1rem;
  padding: var(--padding-primary);
  width: 100%;
  height: 100%;
  font-family: "NeusaThin";
  border: 1px solid var(--dark);
  border-radius: var(--border-primary);
  margin-top: 0.5rem;
  border-color: black;
  outline-color: var(--secondary-color);

  ::-webkit-resizer {
    display: none;
  }

  ${(props) => {
    return props.error ? `border-color: #F22727; outline-color: #F22727` : "";
  }}
`;

export const TextareaLabel = styled.label`
  font-size: 1.3rem;
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
