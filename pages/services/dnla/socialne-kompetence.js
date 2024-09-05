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
import Head from "next/head";

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
      <Head>
        <title>Socialne kompetence | DNLA | Resultant </title>
        <meta
          name="description"
          content="Analiza 17 ključnih faktorjev uspeha, razdeljenih na štiri področja. To so volja do uspeha, odpornost na stres, dinamika doseganja ciljev in medsebojni odnosi."
        />
      </Head>
      <CardHeading>{t("subpages:social_card1_title")}</CardHeading>
      <VSpace />
      <Subtitle>{t("subpages:social_card1_subtitle")}</Subtitle>
      <VSpace />
      <BodyText2>{t("subpages:social_card1_list1_heading")}</BodyText2>
      <VSpace />
      <List>
        {card1_list1items.map((item, i) => {
          return (
            <div key={i}>
              <li>
                <ListItem>{item}</ListItem>
              </li>
            </div>
          );
        })}
      </List>
      <VSpace />
      <BodyText2>{t("subpages:social_card1_list2_heading")}</BodyText2>
      <VSpace />
      <List>
        {card1_list2items.map((item, i) => {
          return (
            <div key={i}>
              <li>
                <ListItem>{item}</ListItem>
              </li>
            </div>
          );
        })}
      </List>
      <VSpace />
      <BodyText2>{t("subpages:social_card1_list3_heading")}</BodyText2>
      <VSpace />
      <List>
        {card1_list3items.map((item, i) => {
          return (
            <div key={i}>
              <li>
                <ListItem>{item}</ListItem>
              </li>
            </div>
          );
        })}
      </List>
      <VSpace />
      <BodyText2>{t("subpages:social_card1_list4_heading")}</BodyText2>
      <VSpace />
      <List>
        {card1_list4items.map((item, i) => {
          return (
            <div key={i}>
              <li>
                <ListItem>{item}</ListItem>
              </li>
            </div>
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
        {card2_list1items.map((item, i) => {
          return (
            <div key={i}>
              <li>
                <ListItem>{item}</ListItem>
              </li>
            </div>
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
        {card3_list1items.map((item, i) => {
          return (
            <div key={i}>
              <li>
                <ListItem>{item}</ListItem>
              </li>
            </div>
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
