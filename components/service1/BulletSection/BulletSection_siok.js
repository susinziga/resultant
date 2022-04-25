import React from "react";
import useTranslation from "next-translate/useTranslation";
import {
  Bullet,
  ExperienceContainer,
  ExperienceTitle,
  FlexDesktop,
  FlexDesktopText,
  List,
  BackgroundVector,
  BulletHeading,
  FlexHeadingContainer,
  Subtext,
  ControlContainer,
} from "./BulletSection.styled";
import { useRouter } from "next/router";
import CardButton from "../../UTNN/cardSection/Card/CardButton";

const BulletSection_siok = (props) => {
  const { t, lang } = useTranslation();
  const { locale } = useRouter();

  const header = t("service1:service1_experienceHeading");
  const bulletHeading = t("service1:service1_expirienceSubHeading_Desktop");
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

  return (
    <>
      <ExperienceContainer {...props}>
        <BackgroundVector
          className="desktop"
          src="/Service1/VectorA.png"
        ></BackgroundVector>
        <FlexDesktop>
          <FlexHeadingContainer>
            <ExperienceTitle>{header}</ExperienceTitle>
          </FlexHeadingContainer>
          <FlexDesktopText>
            <BulletHeading>{bulletHeading}</BulletHeading>
            <List>
              {bulletProps.map((bullet) => {
                return <Bullet>{bullet.bullet}</Bullet>;
              })}
            </List>
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
        <CardButton
          className="mobile"
          text={button}
          href={
            "/" + locale + "/clanek/kako-do-vecje-zavzetosti-vasih-zaposlenih"
          }
        ></CardButton>
      </ExperienceContainer>
    </>
  );
};

export default BulletSection_siok;
