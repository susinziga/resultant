import React from "react";
import styled from "styled-components";
const Border_shadow = (props) => {
  return <Border>{props.children}</Border>;
};

const Border = styled.div`
  background: #ffffff;
  box-shadow: 0px 16px 40px rgba(0, 71, 103, 0.06);
  border-radius: 12px;

  padding: 3rem 0;
`;

export default Border_shadow;
