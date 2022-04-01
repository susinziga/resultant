import React from "react";
import styledComponents from "styled-components";
import References_item from "../../../../../references/references_item/References_item";

const References_slider_item = ({ references }) => {
  return (
    <Container>
      {references.map((ref, id) => (
        <Item reference={ref}></Item>
      ))}
    </Container>
  );
};

const Item = ({ reference }) => {
  return (
    <ItemContainer>
      <References_item reference={reference}></References_item>
    </ItemContainer>
  );
};

const Container = styledComponents.div`
    display:flex;
    flex-wrap:wrap;
    
`;

const ItemContainer = styledComponents.div`
    width:25%
`;

export default References_slider_item;
