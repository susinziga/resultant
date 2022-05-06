import useTranslation from "next-translate/useTranslation";
import React from "react";
import Button from "../../../../../basic_components/button/Button";
import { BodyText4 } from "../../../../../basic_components/texts/Texts";
import { useRouter } from "next/router";
import * as Styled from "./TeamSliderItem.styled";

const TeamSliderItem = ({ item, id }) => {
  const { t } = useTranslation("");
  const { locale } = useRouter();
  return (
    <Styled.TeamSliderItemContainer id={id}>
      <Styled.TeamSliderFlex>
        <Styled.FirstRowFlex>
          <Styled.TeamSlider_name>{item.name}</Styled.TeamSlider_name>
          <a href={item.linkedin} target="_blank">
            <img src="/Icons/Linkedin.png"></img>
          </a>
        </Styled.FirstRowFlex>
        <Styled.TeamSlider_role>{item.role}</Styled.TeamSlider_role>
        <Styled.TeamSlider_details>
          <a href={"tel:" + item.gsm}>{item.gsm}</a>
          <br></br>
          <a href={"mailto:" + item.email}>{item.email}</a>
        </Styled.TeamSlider_details>
        <BodyText4>{item.text}</BodyText4>
        <Button link arrow href={"/" + locale + item.link}>
          {t("common:button_readMore")}
        </Button>
      </Styled.TeamSliderFlex>
      <img src={item.photo}></img>
    </Styled.TeamSliderItemContainer>
  );
};

export default TeamSliderItem;
