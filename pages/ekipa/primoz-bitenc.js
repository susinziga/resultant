import React from "react";
import Team_header from "../../components/team/team_header/Team_header";
import useTranslation from "next-translate/useTranslation";
import styled from "styled-components";
import Team_cards from "../../components/team/team_cards/Team_cards";
import Team_about from "../../components/team/team_about/Team_about";
const Primoz_bitenc = () => {
  const { t } = useTranslation("");

  const header_data = {
    name: t("team:person2_name"),
    role: t("team:person2_role"),
    email: t("team:person2_email"),
    gsm: t("team:person2_gsm"),
    linkedin: t("team:person2_linkedin"),
  };

  const cards_data = {
    title: t("team:cards_title"),
    cards: [t("team:card6"), t("team:card7"), t("team:card8")],
  };

  const about_data = {
    title: t("team:about"),
    about: t("team:person2_about"),
    img: "/Team/primoz.webp",
    bulletHeading: t("team:bulletHeading"),
    bullets: [
      t("team:person2_bullet_1"),
      t("team:person2_bullet_2"),
      t("team:person2_bullet_3"),
      t("team:person2_bullet_4"),
      t("team:person2_bullet_5"),
      t("team:person2_bullet_6"),
      t("team:person2_bullet_7"),
      t("team:person2_bullet_8"),
      t("team:person2_bullet_9"),
      t("team:person2_bullet_10"),
    ],
  };

  return (
    <>
      <Outer>
        <Team_header _data={header_data} className="section_team"></Team_header>
        <Team_cards _data={cards_data} className="section_team"></Team_cards>
        <Team_about _data={about_data} className="section_team"></Team_about>
      </Outer>
    </>
  );
};

const Outer = styled.div`
  width: 90%;
  margin: auto;
`;

export default Primoz_bitenc;
