import React from 'react';
import { CardTableContainer } from './CardTable.styled';
import useTranslation from "next-translate/useTranslation";
import CardItem_service1 from './CardItem_service1';
import { CardItemContainer1, CardItemContainer2 } from './CardTable.styled';

const CardTable_service1 = (props) => {
    const { t, lang } = useTranslation();

   

    const cardProps1 = [
        {heading: t("service1:service1_card1Heading"), text: t("service1:service1_card1Text"), color: "#AABFD1"},
        {heading: t("service1:service1_card3Heading"), text: t("service1:service1_card3Text"), color: "#CFEDFC"},
      
    ]

    const cardProps2 = [
        {heading: t("service1:service1_card2Heading"), text: t("service1:service1_card2Text"), color: "#BED6E1"},

    ]


  return (
    <>  
        <CardTableContainer {...props}>
            <CardItemContainer1>
            {
                cardProps1.map((card) => {
                    return(
                       <CardItem_service1 props={card}></CardItem_service1>     
                    );
                })
            }
            </CardItemContainer1>
            <CardItemContainer2 >
            {
                cardProps2.map((card) => {
                    return(
                        <CardItem_service1 props={card}></CardItem_service1>     
                    );
                })
            }
            </CardItemContainer2>


        </CardTableContainer>
    </>
  )
}

export default CardTable_service1;