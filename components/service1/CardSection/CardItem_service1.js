import React from 'react'
import { CardItemContainer, Heading, Text } from './CardItem.styled';


const CardItem_service1 = (props) => {
  return (
    <>
          <CardItemContainer color={props.props.color}>
            <Heading>{props.props.heading}</Heading>
            <Text>{props.props.text}</Text>
          </CardItemContainer>
    </>
  )
}

export default CardItem_service1;