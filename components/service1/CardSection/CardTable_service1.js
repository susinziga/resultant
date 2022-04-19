import React from "react";
import { CardTableContainer } from "./CardTable.styled";
import useTranslation from "next-translate/useTranslation";
import CardItem_service1 from "./CardItem_service1";
import { CardItemContainer1, CardItemContainer2 } from "./CardTable.styled";
import { BackgroundVector } from "../PlanSection/Plan.styled";

const CardTable_service1 = ({ cardProps1, cardProps2 }, props) => {
  return (
    <>
      <CardTableContainer {...props}>
        <>
          <BackgroundVector
            className="desktop"
            src="/offer/backgroundVector.png"
          ></BackgroundVector>
          <BackgroundVector
            className="mobile"
            src="/Service1/VectorA_mobile.png"
          ></BackgroundVector>
        </>
        <CardItemContainer1>
          {cardProps1.map((card) => {
            return <CardItem_service1 props={card}></CardItem_service1>;
          })}
        </CardItemContainer1>
        <CardItemContainer2>
          {cardProps2.map((card) => {
            return <CardItem_service1 props={card}></CardItem_service1>;
          })}
        </CardItemContainer2>
      </CardTableContainer>
    </>
  );
};

export default CardTable_service1;
