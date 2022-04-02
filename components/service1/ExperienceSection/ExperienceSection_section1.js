import React from 'react';
import useTranslation from "next-translate/useTranslation";
import {ArrowContainer, Bullet, Button, ButtonContainer, DesktopTitle, ExperienceContainer, ExperienceTitle, FlexDesktop, FlexDesktopText, List, BackgroundVector} from './ExperienceSection.styled';
import CardSection_service1 from './CardSection/CardSection_service1';

const ExperienceSection_service1 = (props) => {
  const { t, lang } = useTranslation();

  const header = t("service1:service1_experienceHeading");
  const subheading = t("service1:service1_expirienceSubHeading_Desktop");
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

  const Cards = [
    {heading: t("service1:service1_cardHeading1"), text: t("service1:service1_cardText1"), image: "./Service1/CardImage1.png", desktopImage: "./Service1/CardImage1_desktop.png", color: "#F9F4F0", inversed: false},
    {heading: t("service1:service1_cardHeading2"), text: t("service1:service1_cardText2"), image: "./Service1/CardImage2.png", desktopImage: "./Service1/CardImage2_desktop.png", color: "#DEE6ED", inversed: true},
  ]

    

  return (
    <>
    <ExperienceContainer {...props}>
    <BackgroundVector className="desktop" src="./Service1/VectorA.png"></BackgroundVector>
      <FlexDesktop>
        <ExperienceTitle>{header}</ExperienceTitle>
        <FlexDesktopText>
        <DesktopTitle className='desktop'>{subheading}</DesktopTitle>
        <List>
          {
            bulletProps.map((bullet) => {
              return(
              <Bullet>{bullet.bullet}</Bullet>
              )
            })
          }
        </List>
        <ButtonContainer className='desktop'>
           <Button href="">{button}</Button>
            <ArrowContainer src="./Service1/Caret_Right.png"></ArrowContainer>
        </ButtonContainer>  
        </FlexDesktopText>
       
      </FlexDesktop>
      <ButtonContainer className='mobile'>
        <Button href="" className='mobile'>{button}</Button>
        <ArrowContainer className='mobile' src="./Service1/Caret_Right.png"></ArrowContainer>
      </ButtonContainer>
      
        {
          Cards.map((card) => {
            return(
              <CardSection_service1 props={card}></CardSection_service1>
            )
          })
        }
      

    </ExperienceContainer>
    </>
  )
}

export default ExperienceSection_service1;