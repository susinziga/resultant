import styled from "styled-components";

export const CheckboxLabel = styled.label`
  color: var(--dark);
  font-family: "Neusa";
  font-size: 1.5rem;
  font-weight: 300;

  @media only screen and (min-width: 768px) {
    width: 80%;
    padding-top: 2.5%;
  }

  @media only screen and (min-width: 992px) {
    width: 100%;
    padding-top: 2.5%;
  }
`;

export const Checkbox = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 15% 5%;
  // height: 40px;
  // width: 40px;
  background-color: #cacfd2;
  // border-radius: 20px;
  cursor: pointer;

  height: 70px;
  width: 70px;
  border-radius: 35px;

  @media only screen and (min-width: 768px) {
    // height: 50px;
    // width: 50px;
    // border-radius: 25px;
  }

  @media only screen and (min-width: 992px) {
    // height: 70px;
    // width: 70px;
    // border-radius: 35px;
  }

  @media only screen and (min-width: 1600px) {
    height: 80px;
    width: 80px;
    border-radius: 40px;
  }
`;

export const CheckboxContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    margin: 1% 0;
    justify-content: space-evenly;
  }
`;

export const CheckboxContainer1 = styled.span`
  margin: 0 5%;
  input[type="checkbox"]:checked {
    background-color: var(--primary-color);
  }

  input[type="checkbox"]:before {
    /* content: "DA"; */
    ${(props) => (props.locale === "en" ? "content: 'YES';" : "content: 'DA';")}
    font-family: "Neusa";
    position: relative;
    top: 25%;
    /* left: 20%; */
    ${(props) => (props.locale === "en" ? "left: 9%;" : "left: 20%;")}
    color: white;
    font-size: 2rem;
  }

  @media only screen and (min-width: 768px) {
    margin: 0 10%;
  }

  @media only screen and (min-width: 992px) {
    margin: 0 10%;
  }
`;

export const CheckboxContainer2 = styled.span`
  margin: 0 5%;
  input[type="checkbox"]:checked {
    background-color: var(--primary-color);
  }

  input[type="checkbox"]:before {
    /* content: "NE"; */
    ${(props) => (props.locale === "en" ? "content: 'NO';" : "content: 'NE';")}

    font-family: "Neusa";
    position: relative;
    top: 25%;
    left: 22%;
    color: white;
    font-size: 2rem;
  }

  @media only screen and (min-width: 768px) {
    margin: 0 8%;
  }

  @media only screen and (min-width: 992px) {
    margin: 0 8%;
  }
`;

export const CheckboxFlex = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 5% 0;
  font-family: "Neusa";

  @media only screen and (min-width: 768px) {
    margin: 0;
  }

  @media only screen and (min-width: 992px) {
    margin: 0;
    margin-bottom: 2.5%;
  }
`;

export const Seperator = styled.div`
  font-family: "Neusa";
  font-size: 2rem;
`;
