import React from 'react';
import { DefaultContainer, DefaultHeader, DefaultText } from './DefaultSection.styled';

const DefaultSection_privacy = ({ props }) => {
  return (
    <>
    <DefaultContainer>
        <DefaultHeader>{props.heading}</DefaultHeader>
        <DefaultText  dangerouslySetInnerHTML={{__html: props.text}}></DefaultText>
    </DefaultContainer>
    </>
  )
}

export default DefaultSection_privacy;