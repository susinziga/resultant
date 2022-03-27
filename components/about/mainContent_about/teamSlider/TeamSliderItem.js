import React from "react";
import * as Styled from "./TeamSliderItem.styled";

const TeamSliderItem = ({ item }) => {
  return (
    <Styled.TeamSliderItemContainer>
      <Styled.TeamSliderFlex>
        <Styled.TeamSlider_name>{item.name}</Styled.TeamSlider_name>
        <Styled.TeamSlider_role>{item.role}</Styled.TeamSlider_role>

        <Styled.TeamSlider_details>
          {item.gsm}
          <br></br>
          {item.email}
        </Styled.TeamSlider_details>
      </Styled.TeamSliderFlex>
      <img></img>
    </Styled.TeamSliderItemContainer>
  );
};

export default TeamSliderItem;
