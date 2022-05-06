import useTranslation from "next-translate/useTranslation";
import React from "react";
import { BodyText4 } from "../../../basic_components/texts/Texts";
import { useRouter } from "next/router";

const Mobile_menu_dropdown = ({ opened }) => {
  const { t } = useTranslation("pillars");

  const { locale } = useRouter();

  const pillars = [
    {
      title: t("pillar1_title"),
      link: "/services/siok",
    },
    {
      title: t("pillar2_title"),
      link: "/services/dnla",
    },
    {
      title: t("pillar3_title"),
      link: "/services/sistematicen-razvoj-kompetenc",
    },
    {
      title: t("pillar4_title"),
      link: "/services/upravljanje-talentov-in-nasledstveno-nacrtovanje",
    },
  ];

  return (
    <>
      <Container opened={opened}>
        {pillars.map(({ title, link }, id) => {
          return (
            <a href={"/" + locale + link} key={id}>
              <Dropdown_item>{title}</Dropdown_item>
            </a>
          );
        })}
      </Container>
    </>
  );
};

import styled from "styled-components";
const Container = styled.div`
  height: 0;
  transition: 1s all;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  padding: 0 4rem;

  gap: 1rem;

  ${(props) => (props.opened ? "height:12rem;" : "")}
`;
const Dropdown_item = styled(BodyText4)`
  color: #fff;

  :hover {
    color: #27b4e9;
  }
`;

export default Mobile_menu_dropdown;
