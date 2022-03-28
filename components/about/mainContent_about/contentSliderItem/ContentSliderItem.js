import React from "react";

import {Heading, ReferencesItemContainer, Text}from "./ContentSliderItem.styled";

const Content_item = ({ reference, isActive }) => {
  const { name, desc } = reference;
  return (
    <ReferencesItemContainer isActive={isActive}>
        <Heading isActive={isActive}>{name}</Heading>
        <Text isActive={isActive}>{desc}</Text>
    </ReferencesItemContainer>
  );
};

export default Content_item;