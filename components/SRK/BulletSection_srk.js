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
import {
  BodyText2,
  BodyText3,
  Subtitle2,
} from "../../basic_components/texts/Texts";
import styled from "styled-components";

const BulletSection_srk = (props) => {
  const { t, lang } = useTranslation();

  const header = t("srk:kurkvs_bulletLeftHeader");
  const bulletProps = [
    { title: t("srk:kurkvs_bullet1title"), text: t("srk:kurkvs_bullet1text") },
    { title: t("srk:kurkvs_bullet2title"), text: t("srk:kurkvs_bullet2text") },
    { title: t("srk:kurkvs_bullet3title"), text: t("srk:kurkvs_bullet3text") },
    { title: t("srk:kurkvs_bullet4title"), text: t("srk:kurkvs_bullet4text") },
  ];

  return (
    <>
      <ExperienceContainer {...props}>
        <FlexDesktop>
          <FlexHeadingContainer>
            <ExperienceTitle>{header}</ExperienceTitle>
          </FlexHeadingContainer>
          <FlexDesktopText>
            <List>
              {bulletProps.map(({ title, text }) => {
                return (
                  <Bullet key={title}>
                    <BulletTitle>{title}</BulletTitle>
                    <BodyText3 style={{ fontWeight: "400" }}>
                      - {text}
                    </BodyText3>
                  </Bullet>
                );
              })}
            </List>
          </FlexDesktopText>
        </FlexDesktop>
      </ExperienceContainer>
    </>
  );
};

export const BulletTitle = styled(BodyText3)`
  display: inline-block;
  font-weight: 500;
  font-family: "Neusa";
`;

export default BulletSection_srk;
