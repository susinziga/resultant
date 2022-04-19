import useTranslation from "next-translate/useTranslation";
import React from "react";
import { useRouter } from "next/router";

const Menu_dropdown = () => {
  const { t } = useTranslation("pillars");

  const { locale } = useRouter();

  React.useEffect(() => {
    window.onclick = function (event) {
      if (!event.target.matches(".drop-button")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    };
  }, []);

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
      link: "/services/sistematicen_razvoj_kompetenc",
    },
    {
      title: t("pillar4_title"),
      link: "/services/upravljanje_talentov_in_nasledstveno_nacrtovanje",
    },
  ];

  return (
    <>
      <Container className="dropdown-content drop-button " id="ddown">
        {pillars.map(({ title, link }, id) => {
          return (
            <a href={"/" + locale + link}>
              <Dropdown_item key={id}>{title}</Dropdown_item>
            </a>
          );
        })}
      </Container>
    </>
  );
};
import styled from "styled-components";
import { BodyText4 } from "../../../basic_components/texts/Texts";
const Container = styled.div`
  display: none;

  flex-direction: column;
  gap: 1rem;
  padding: 2.7rem 2.2rem;
  padding-right: 6rem;
  background-color: var(--blue);
  border-radius: 12px;
  position: absolute;
  left: -50%;
  bottom: 5%;
  transform: translateY(100%);

  :after {
    content: " ";
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
    top: -12%;
    bottom: 0%;
    left: 0;
    right: 0;
  }

  &.show {
    display: flex;
  }

  @media (min-width: 768px) {
    left: -30%;
    bottom: 5%;
    transform: translateY(100%);
  }

  @media (min-width: 992px) {
    left: -50%;
    bottom: 5%;
    transform: translateY(100%);
  }
`;
const Dropdown_item = styled(BodyText4)`
  display: block;
  color: #fff;

  :hover {
    color: #27b4e9;
  }
`;

export default Menu_dropdown;
