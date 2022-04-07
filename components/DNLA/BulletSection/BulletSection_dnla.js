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
  BulletHeading,
  FlexHeadingContainer,
  Subtext,
  ControlContainer
} from "./BulletSection.styled";


const BulletSection_dnla = (props) => {
  const { t, lang } = useTranslation();

  const header = t("dnla:dnla_bulletLeftHeader");
  const subheading = t("dnla:dnla_bulletSubHeading");
  const bulletHeading = t("dnla:dnla_bulletMainHeading");
  const bulletProps = [
    { bullet: t("dnla:dnla_bullet1") },
    { bullet: t("dnla:dnla_bullet2") },
    { bullet: t("dnla:dnla_bullet3") },
    { bullet: t("dnla:dnla_bullet4") },
    { bullet: t("dnla:dnla_bullet5") },
    { bullet: t("dnla:dnla_bullet6") },
    { bullet: t("dnla:dnla_bullet7") },
    { bullet: t("dnla:dnla_bullet8") },
    { bullet: t("dnla:dnla_bullet9") },
    { bullet: t("dnla:dnla_bullet10") },
  
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
                <ControlContainer>
                <Subtext>{subheading}</Subtext>
                </ControlContainer>
            </FlexHeadingContainer>
          <FlexDesktopText>
          <BulletHeading>{bulletHeading}</BulletHeading>
            <List>
              {bulletProps.map((bullet) => {
                return <Bullet>{bullet.bullet}</Bullet>;
              })}
            </List>
            
          </FlexDesktopText>
        </FlexDesktop>
      </ExperienceContainer>
    </>
  );
};

export default BulletSection_dnla;
