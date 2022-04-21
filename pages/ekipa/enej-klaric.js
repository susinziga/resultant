import React from "react";
import Team_header from "../../components/team/team_header/Team_header";
import useTranslation from "next-translate/useTranslation";
import styled from "styled-components";
import Team_cards from "../../components/team/team_cards/Team_cards";
import Team_about from "../../components/team/team_about/Team_about";
const Enej_klaric = () => {
  const { t } = useTranslation("");

  const header_data = {
    name: t("team:person3_name"),
    role: t("team:person3_role"),
    email: t("team:person3_email"),
    gsm: t("team:person3_gsm"),
    linkedin: t("team:person3_linkedin"),
  };

  const cards_data = {
    title: t("team:cards_title"),
    cards: [t("team:card9"), t("team:card10"), t("team:card11")],
  };

  const about_data = {
    title: t("team:about"),
    about: t("team:person3_about"),
    img: "/Team/Enej.png",
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

export default Enej_klaric;
