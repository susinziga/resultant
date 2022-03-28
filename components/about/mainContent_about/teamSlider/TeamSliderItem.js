import React from "react";
import { BodyText4 } from "../../../../basic_components/texts/Texts";
import * as Styled from "./TeamSliderItem.styled";

const TeamSliderItem = ({ item }) => {
  return (
    <Styled.TeamSliderItemContainer>
      <Styled.TeamSliderFlex>
        <Styled.FirstRowFlex>
          <Styled.TeamSlider_name>{item.name}</Styled.TeamSlider_name>
          <a href={item.linkedin}>
            <img src="./Icons/Linkedin.png"></img>
          </a>
        </Styled.FirstRowFlex>
        <Styled.TeamSlider_role>{item.role}</Styled.TeamSlider_role>

        <Styled.TeamSlider_details>
          {item.gsm}
          <br></br>
          {item.email}
        </Styled.TeamSlider_details>
        <BodyText4>{item.text}</BodyText4>
      </Styled.TeamSliderFlex>
      <img src={item.photo}></img>
    </Styled.TeamSliderItemContainer>
  );
};

export default TeamSliderItem;
