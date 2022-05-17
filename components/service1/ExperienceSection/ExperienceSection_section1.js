import React from "react";
import useTranslation from "next-translate/useTranslation";
import {
  ArrowContainer,
  Bullet,
  Button,
  ButtonContainer,
  DesktopTitle,
  ExperienceContainer,
  ExperienceTitle,
  FlexDesktop,
  FlexDesktopText,
  List,
  BackgroundVector,
} from "./ExperienceSection.styled";
import CardSection_service1 from "./CardSection/CardSection_service1";

import { useRouter } from "next/router";
import CardButton from "../../UTNN/cardSection/Card/CardButton";

const ExperienceSection_service1 = (props) => {
  const { t, lang } = useTranslation();

  const { locale } = useRouter();

  const header = t("service1:service1_experienceHeading");
  const subheading = t("service1:service1_expirienceSubHeading_Desktop");
  const button = t("service1:service1_button");
  const bulletProps = [
    { bullet: t("service1:service1_experienceBullet1") },
    { bullet: t("service1:service1_experienceBullet2") },
    { bullet: t("service1:service1_experienceBullet3") },
    { bullet: t("service1:service1_experienceBullet4") },
    { bullet: t("service1:service1_experienceBullet5") },
    { bullet: t("service1:service1_experienceBullet6") },
    { bullet: t("service1:service1_experienceBullet7") },
    { bullet: t("service1:service1_experienceBullet8") },
  ];

  const Cards = [
    {
      heading: t("service1:service1_cardHeading1"),
      text: t("service1:service1_cardText1"),
      image: "/Service1/CardImage1.webp",
      desktopImage: "/Service1/CardImage1_desktop.webp",
      color: "#F9F4F0",
      inversed: false,
    },
    {
      heading: t("service1:service1_cardHeading2"),
      text: t("service1:service1_cardText2"),
      image: "/Service1/CardImage2.webp",
      desktopImage: "/Service1/CardImage2_desktop.webp",
      color: "#DEE6ED",
      inversed: true,
    },
  ];

  return (
    <>
      <ExperienceContainer {...props}>
        <BackgroundVector
          className="desktop"
          src="/Service1/VectorA.webp"
        ></BackgroundVector>
        <FlexDesktop>
          <ExperienceTitle>{header}</ExperienceTitle>
          <FlexDesktopText>
            <DesktopTitle className="desktop">{subheading}</DesktopTitle>
            <List>
              {bulletProps.map((bullet) => {
                return <Bullet>{bullet.bullet}</Bullet>;
              })}
            </List>
            {/* <ButtonContainer className="desktop">
              <Button href={"/" + locale + "/coming-soon"}>{button}</Button>
              <ArrowContainer src="/Service1/Caret_Right.webp"></ArrowContainer>
            </ButtonContainer> */}
            <CardButton
              className="desktop"
              text={button}
              href={
                "/" +
                locale +
                "/clanek/kako-do-vecje-zavzetosti-vasih-zaposlenih"
              }
            ></CardButton>
          </FlexDesktopText>
        </FlexDesktop>
        {/* <ButtonContainer className="mobile">
          <Button href="" className="mobile">
            {button}
          </Button>
          <ArrowContainer
            className="mobile"
            src="/Service1/Caret_Right.webp"
          ></ArrowContainer>
        </ButtonContainer> */}
        <CardButton
          className="mobile"
          text={button}
          href={
            "/" + locale + "/clanek/kako-do-vecje-zavzetosti-vasih-zaposlenih"
          }
          centered
        ></CardButton>

        {Cards.map((card) => {
          return <CardSection_service1 props={card}></CardSection_service1>;
        })}
      </ExperienceContainer>
    </>
  );
};

export default ExperienceSection_service1;
