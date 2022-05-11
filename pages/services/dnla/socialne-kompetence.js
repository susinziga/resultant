import React from "react";
import useTranslation from "next-translate/useTranslation";
import Header from "../../../components/DNLA/subpages/Header";
import Middle from "../../../components/DNLA/subpages/Middle";
import Submenus from "../../../components/DNLA/subpages/Submenus";
import { BodyText2, Title2 } from "../../../basic_components/texts/Texts";
import {
  List,
  ListItem,
  Subtitle,
  VSpace,
  CardHeading,
} from "../../../components/DNLA/subpages/Submenus.styled";

const social_competencies = () => {
  const { t } = useTranslation();

  const card1_list1items = [
    t("subpages:social_card1_list1_item1"),
    t("subpages:social_card1_list1_item2"),
    t("subpages:social_card1_list1_item3"),
    t("subpages:social_card1_list1_item4"),
  ];
  const card1_list2items = [
    t("subpages:social_card1_list2_item1"),
    t("subpages:social_card1_list2_item2"),
    t("subpages:social_card1_list2_item3"),
  ];
  const card1_list3items = [
    t("subpages:social_card1_list3_item1"),
    t("subpages:social_card1_list3_item2"),
    t("subpages:social_card1_list3_item3"),
    t("subpages:social_card1_list3_item4"),
  ];
  const card1_list4items = [
    t("subpages:social_card1_list4_item1"),
    t("subpages:social_card1_list4_item2"),
    t("subpages:social_card1_list4_item3"),
    t("subpages:social_card1_list4_item4"),
    t("subpages:social_card1_list4_item5"),
    t("subpages:social_card1_list4_item6"),
  ];

  const card2_list1items = [
    t("subpages:social_card2_list1_item1"),
    t("subpages:social_card2_list1_item2"),
    t("subpages:social_card2_list1_item3"),
  ];

  const card3_list1items = [
    t("subpages:social_card3_list1_item1"),
    t("subpages:social_card3_list1_item2"),
    t("subpages:social_card3_list1_item3"),
    t("subpages:social_card3_list1_item4"),
    t("subpages:social_card3_list1_item5"),
  ];

  const submenus = [
    <>
      <CardHeading>{t("subpages:social_card1_title")}</CardHeading>
      <VSpace />
      <Subtitle>{t("subpages:social_card1_subtitle")}</Subtitle>
      <VSpace />
      <BodyText2>{t("subpages:social_card1_list1_heading")}</BodyText2>
      <VSpace />
      <List>
        {card1_list1items.map((item) => {
          return (
            <>
              <li>
                <ListItem>{item}</ListItem>
              </li>
            </>
          );
        })}
      </List>
      <VSpace />
      <BodyText2>{t("subpages:social_card1_list2_heading")}</BodyText2>
      <VSpace />
      <List>
        {card1_list2items.map((item) => {
          return (
            <>
              <li>
                <ListItem>{item}</ListItem>
              </li>
            </>
          );
        })}
      </List>
      <VSpace />
      <BodyText2>{t("subpages:social_card1_list3_heading")}</BodyText2>
      <VSpace />
      <List>
        {card1_list3items.map((item) => {
          return (
            <>
              <li>
                <ListItem>{item}</ListItem>
              </li>
            </>
          );
        })}
      </List>
      <VSpace />
      <BodyText2>{t("subpages:social_card1_list4_heading")}</BodyText2>
      <VSpace />
      <List>
        {card1_list4items.map((item) => {
          return (
            <>
              <li>
                <ListItem>{item}</ListItem>
              </li>
            </>
          );
        })}
      </List>
    </>,
    <>
      <CardHeading>{t("subpages:social_card2_title")}</CardHeading>
      <VSpace />
      <BodyText2>{t("subpages:social_card2_list1_heading")}</BodyText2>
      <VSpace />
      <List>
        {card2_list1items.map((item) => {
          return (
            <>
              <li>
                <ListItem>{item}</ListItem>
              </li>
            </>
          );
        })}
      </List>
    </>,
    <>
      <CardHeading>{t("subpages:social_card3_title")}</CardHeading>
      <VSpace />
      <BodyText2>{t("subpages:social_card3_list1_heading")}</BodyText2>
      <VSpace />
      <List>
        {card3_list1items.map((item) => {
          return (
            <>
              <li>
                <ListItem>{item}</ListItem>
              </li>
            </>
          );
        })}
      </List>
    </>,
  ];

  return (
    <>
      <Header title={t("subpages:social_title")}></Header>
      <Middle
        img={t("subpages:social_img")}
        text={t("subpages:social_text")}
        button={t("dnla:dnla_buttonTextPillar")}
      ></Middle>
      <Submenus items={submenus}></Submenus>
    </>
  );
};

export default social_competencies;
