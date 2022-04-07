import React from 'react'
import Card1_dnla from './Card1/Card1_dnla';
import Card2_dnla from './Card2/Card2_dnla';
import Card3_dnla from './Card3/Card3_dnla';
import { CardSectionContainer } from './CardSection.styled';

const CardSection_dnla = (props) => {
    
  

  return (
    <>
        <CardSectionContainer {...props}>
            <Card1_dnla></Card1_dnla>
            <Card2_dnla></Card2_dnla>
            <Card3_dnla></Card3_dnla>
        </CardSectionContainer>
    </>
  )
}

export default CardSection_dnla;