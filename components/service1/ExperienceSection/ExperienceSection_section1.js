import React from 'react';
import useTranslation from "next-translate/useTranslation";
import {ArrowContainer, Bullet, Button, ButtonContainer, ExperienceContainer, ExperienceTitle, List} from './ExperienceSection.styled';

const ExperienceSection_service1 = () => {
  const { t, lang } = useTranslation();

  const header = t("service1:service1_experienceHeading");
  const button = t("service1:service1_button");
  const bulletProps = [
      {bullet: t("service1:service1_experienceBullet1")},
      {bullet: t("service1:service1_experienceBullet2")},
      {bullet: t("service1:service1_experienceBullet3")},
      {bullet: t("service1:service1_experienceBullet4")},
      {bullet: t("service1:service1_experienceBullet5")},
      {bullet: t("service1:service1_experienceBullet6")},
      {bullet: t("service1:service1_experienceBullet7")}
  ]

    

  return (
    <>
    <ExperienceContainer>
      <ExperienceTitle>{header}</ExperienceTitle>
      <List>
        {
          bulletProps.map((bullet) => {
            return(
            <Bullet>{bullet.bullet}</Bullet>
            )
          })
        }
      </List>
      <ButtonContainer>
        <Button href="">{button}</Button>
        <ArrowContainer src="./Service1/Caret_Right.png"></ArrowContainer>
      </ButtonContainer>
    </ExperienceContainer>
    </>
  )
}

export default ExperienceSection_service1;