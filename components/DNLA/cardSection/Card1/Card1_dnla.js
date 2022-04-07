import React from 'react';
import useTranslation from "next-translate/useTranslation";
import { Bullet, CardContainer, CardHeading, CardImage, CardTitle, TextContainer, List, ButtonContainer } from './Card1.styled';
import Button from '../../../../basic_components/button/Button';

const Card1_dnla = () => {
    const { t, lang } = useTranslation();


    const heading = t("dnla:dnla_card1heading");
    const title = t("dnla:dnla_card1title");
    const button = t("dnla:dnla_pillar2Button")
    const bullets = [
        {text: t("dnla:dnla_card1bullet1")},
        {text: t("dnla:dnla_card1bullet2")},
        {text: t("dnla:dnla_card1bullet3")},
        {text: t("dnla:dnla_card1bullet4")},
        {text: t("dnla:dnla_card1bullet5")},
        {text: t("dnla:dnla_card1bullet6")}
    ]

    
  return (
    <>
        <CardContainer>
            <CardImage className='mobile' src="/DNLA/cardSectionImage1_mobile.png"></CardImage>
            <CardImage className='desktop' src="/DNLA/cardSectionImage1_desktop.png"></CardImage>
            <TextContainer>
                <CardHeading>{heading}</CardHeading>
                <CardTitle>{title}</CardTitle>
                <List>
                    {
                        bullets.map((bullet) => {
                            return <Bullet>{bullet.text}</Bullet>
                        })
                    }
                </List>
                <ButtonContainer>
                    <Button secondary>{button}</Button>
                    </ButtonContainer>
            </TextContainer>


        </CardContainer>
    </>
  )
}

export default Card1_dnla;