import React from "react";
import {
  PlanCardText,
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
      <PlanItemContainer active={props.active} CardStyle={props.CardStyle}>
        <PlanTextContainer CardStyle={props.CardStyle}>
          {props.CardStyle ? (
            <PlanCardText active={props.active}>{props.text}</PlanCardText>
          ) : (
            <PlanText>{props.text}</PlanText>
          )}
        </PlanTextContainer>
        {props.CardStyle ? (
          <></>
        ) : (
          <PlanNumberContainer>
            <PlanUnderlineContainer></PlanUnderlineContainer>
            <PlanNumber>{props.number}</PlanNumber>
          </PlanNumberContainer>
        )}
      </PlanItemContainer>
    </>
  );
};

export default PlanItem_service1;
