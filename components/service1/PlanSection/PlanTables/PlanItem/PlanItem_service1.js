import React from "react";
import {
  PlanItemContainer,
  PlanNumber,
  PlanNumberContainer,
  PlanText,
  PlanTextContainer,
  PlanUnderlineContainer,
} from "./PlanItem.styled";

const PlanItem_service1 = ({ props }) => {
  console.log(props);
  return (
    <>
      <PlanItemContainer>
        <PlanTextContainer>
          <PlanText>{props.text}</PlanText>
        </PlanTextContainer>
        <PlanNumberContainer>
          <PlanUnderlineContainer></PlanUnderlineContainer>
          <PlanNumber>{props.number}</PlanNumber>
        </PlanNumberContainer>
      </PlanItemContainer>
    </>
  );
};

export default PlanItem_service1;
