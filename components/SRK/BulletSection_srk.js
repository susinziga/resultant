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

const BulletSection_srk = (props) => {
  const { t, lang } = useTranslation();

  const header = t("srk:kurkvs_bulletLeftHeader");
  const bulletProps = [
    { bullet: t("srk:kurkvs_bullet1") },
    { bullet: t("srk:kurkvs_bullet2") },
    { bullet: t("srk:kurkvs_bullet3") },
    { bullet: t("srk:kurkvs_bullet4") },
  ];

  return (
    <>
      <ExperienceContainer {...props}>
        {/* <BackgroundVector
          className="desktop"
          src="/Service1/VectorA.png"
        ></BackgroundVector> */}
        <FlexDesktop>
          <FlexHeadingContainer>
            <ExperienceTitle>{header}</ExperienceTitle>
          </FlexHeadingContainer>
          <FlexDesktopText>
            <List>
              {bulletProps.map((bullet) => {
                return (
                  <Bullet
                    dangerouslySetInnerHTML={{ __html: bullet.bullet }}
                  ></Bullet>
                );
              })}
            </List>
          </FlexDesktopText>
        </FlexDesktop>
      </ExperienceContainer>
    </>
  );
};

export default BulletSection_srk;
