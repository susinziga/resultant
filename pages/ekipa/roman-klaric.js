import React from "react";
import Team_header from "../../components/team/team_header/Team_header";
import useTranslation from "next-translate/useTranslation";
import styled from "styled-components";
import Team_cards from "../../components/team/team_cards/Team_cards";
import Team_about from "../../components/team/team_about/Team_about";
const Roman_klaric = () => {
  const { t } = useTranslation("");

  const header_data = {
    name: t("team:person1_name"),
    role: t("team:person1_role"),
    email: t("team:person1_email"),
    gsm: t("team:person1_gsm"),
    linkedin: t("team:person1_linkedin"),
  };

  const cards_data = {
    title: t("team:cards_title"),
    cards: [
      t("team:card1"),
      t("team:card2"),
      t("team:card3"),
      t("team:card4"),
      t("team:card5"),
    ],
  };

  const about_data = {
    title: t("team:about"),
    about: t("team:person1_about"),
    img: "/Team/Roman.png",
    bulletHeading: t("team:bulletHeading"),
    bullets: [
      t("team:person1_bullet_1"),
      t("team:person1_bullet_2"),
      t("team:person1_bullet_3"),
      t("team:person1_bullet_4"),
      t("team:person1_bullet_5"),
      t("team:person1_bullet_6"),
      t("team:person1_bullet_7"),
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

export default Roman_klaric;
