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

const sales_potential = () => {
  const { t } = useTranslation();

  const card1_list1items = [
    t("subpages:sales_card1_list1_item1"),
    t("subpages:sales_card1_list1_item2"),
    t("subpages:sales_card1_list1_item3"),
    t("subpages:sales_card1_list1_item4"),
    t("subpages:sales_card1_list1_item5"),
    t("subpages:sales_card1_list1_item6"),
  ];

  const card2_list1items = [
    t("subpages:sales_card2_list1_item1"),
    t("subpages:sales_card2_list1_item2"),
    t("subpages:sales_card2_list1_item3"),
    t("subpages:sales_card2_list1_item4"),
  ];

  const card3_list1items = [
    t("subpages:sales_card3_list1_item1"),
    t("subpages:sales_card3_list1_item2"),
    t("subpages:sales_card3_list1_item3"),
    t("subpages:sales_card3_list1_item4"),
  ];

  const submenus = [
    <>
      <CardHeading>{t("subpages:sales_card1_title")}</CardHeading>
      <VSpace />
      <BodyText2>{t("subpages:sales_card1_list1_heading")}</BodyText2>
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
      <BodyText2>{t("subpages:sales_card1_list2_heading")}</BodyText2>
    </>,
    <>
      <CardHeading>{t("subpages:sales_card2_title")}</CardHeading>
      <VSpace />
      <BodyText2>{t("subpages:sales_card2_list1_heading")}</BodyText2>
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
      <CardHeading>{t("subpages:sales_card3_title")}</CardHeading>
      <VSpace />
      <BodyText2>{t("subpages:sales_card3_list1_heading")}</BodyText2>
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
      <Header title={t("subpages:sales_title")}></Header>
      <Middle
        img={t("subpages:sales_img")}
        text={t("subpages:sales_text")}
        button={t("dnla:dnla_buttonTextPillar")}
      ></Middle>
      <Submenus items={submenus}></Submenus>
    </>
  );
};

export default sales_potential;
