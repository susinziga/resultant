import React from 'react';
import { CardTableContainer } from './CardTable.styled';
import useTranslation from "next-translate/useTranslation";
import CardItem_service1 from './CardItem_service1';

const CardTable_service1 = () => {
    const { t, lang } = useTranslation();

   

    const cardProps = [
        {heading: t("service1:service1_card1Heading"), text: t("service1:service1_card1Text"), color: "#AABFD1"},
        {heading: t("service1:service1_card2Heading"), text: t("service1:service1_card2Text"), color: "#BED6E1"},
        {heading: t("service1:service1_card3Heading"), text: t("service1:service1_card3Text"), color: "#CFEDFC"},
    ]


  return (
    <>  
        <CardTableContainer>
            {
                cardProps.map((card) => {
                    return(
                       <CardItem_service1 props={card}></CardItem_service1>     
                    );
                })

            }


        </CardTableContainer>
    </>
  )
}

export default CardTable_service1;