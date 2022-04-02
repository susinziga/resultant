import React from 'react';
import { CardItemContainer, Heading, Image, Text, TextContainer } from './CardSection.styled';

const CardSection_service1 = (props) => {
  return (
    <>
        <CardItemContainer color={props.props.color} inversed={props.props.inversed}>
            <TextContainer>
                <Heading>{props.props.heading}</Heading>
                <Text dangerouslySetInnerHTML={{__html:props.props.text}}></Text>
            </TextContainer>
            <Image className='mobile' src={props.props.image}></Image>
            <Image className='desktop' src={props.props.desktopImage}></Image>
        </CardItemContainer>
    </>
  )
}

export default CardSection_service1;