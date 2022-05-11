import styled from "styled-components";

export const CheckboxContainer = styled.div`
  width: 90%;
  margin-bottom: 10%;
`;

export const TopLabel = styled.label`
  color: var(--dark);
  font-family: "Neusa";
  font-size: 1.5rem;
  font-weight: 300;
`;

export const CheckboxLabel = styled.label`
  color: var(--dark);
  font-family: "Neusa";
  font-weight: 400;
  font-size: 1.4rem;
  margin-left: 7%;
  margin-top: 8.5%;
  width: 70%;

  @media only screen and (min-width: 992px) {
    margin-top: 7.5%;
  }
`;

export const CheckboxContainer1 = styled.span`
  display: flex;
  vertical-align: middle;

  input[type="checkbox"]:checked {
    background-color: var(--primary-color);
  }

  input[type="checkbox"]:before {
    content: ${(props) => props.content};
    font-family: "Neusa";
    position: relative;
    top: 25%;
    left: 35%;
    color: white;
    font-size: 2rem;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  width: 100%;
`;

export const Checkbox = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 5% 0;
  height: 40px;
  width: 40px;
  background-color: #cacfd2;
  border-radius: 20px;
  cursor: pointer;
  line-height: 70px;

  @media only screen and (min-width: 992px) {
    height: 70px;
    width: 70px;
    border-radius: 35px;
  }
`;
