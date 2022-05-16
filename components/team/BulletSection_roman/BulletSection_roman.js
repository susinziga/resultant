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

const BulletSection_team = (props) => {
  const { t, lang } = useTranslation();

  return (
    <>
      <ExperienceContainer {...props}>
        <BackgroundVector
          className="desktop"
          src="/Service1/VectorA.webp"
        ></BackgroundVector>
        <FlexDesktop>
          <FlexHeadingContainer>
            <ExperienceTitle>{props.bulletHeading}</ExperienceTitle>
          </FlexHeadingContainer>
          <FlexDesktopText>
            <List>
              {props.bullets.map((bullet, i) => {
                return <Bullet key={i}>{bullet}</Bullet>;
              })}
            </List>
          </FlexDesktopText>
        </FlexDesktop>
      </ExperienceContainer>
    </>
  );
};

export default BulletSection_team;
