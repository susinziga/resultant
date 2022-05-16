import useTranslation from "next-translate/useTranslation";
import React from "react";
import Button from "../../../basic_components/button/Button";
import {
  BodyText1,
  BodyText2,
  BodyText3,
  BodyText4,
  Title1,
  Title2,
} from "../../../basic_components/texts/Texts";
import Header from "../../../components/DNLA/subpages/Header";
import Middle from "../../../components/DNLA/subpages/Middle";
import Submenus from "../../../components/DNLA/subpages/Submenus";
import {
  List,
  ListItem,
  Subtitle,
  VSpace,
  CardHeading,
} from "../../../components/DNLA/subpages/Submenus.styled";
import styled from "styled-components";
import Head from "next/head";

const management_potential = () => {
  const { t } = useTranslation();

  const card1_list1items = [
    t("subpages:management_card1_list1_item1"),
    t("subpages:management_card1_list1_item2"),
    t("subpages:management_card1_list1_item3"),
    t("subpages:management_card1_list1_item4"),
    t("subpages:management_card1_list1_item5"),
    t("subpages:management_card1_list1_item6"),
    t("subpages:management_card1_list1_item7"),
    t("subpages:management_card1_list1_item8"),
  ];

  const card1_list2items = [
    t("subpages:management_card1_list2_item1"),
    t("subpages:management_card1_list2_item2"),
    t("subpages:management_card1_list2_item3"),
    t("subpages:management_card1_list2_item4"),
    t("subpages:management_card1_list2_item5"),
    t("subpages:management_card1_list2_item6"),
    t("subpages:management_card1_list2_item7"),
    t("subpages:management_card1_list2_item8"),
    t("subpages:management_card1_list2_item9"),
    t("subpages:management_card1_list2_item10"),
  ];

  const card1_list3items = [
    t("subpages:management_card1_list3_item1"),
    t("subpages:management_card1_list3_item2"),
    t("subpages:management_card1_list3_item3"),
    t("subpages:management_card1_list3_item4"),
    t("subpages:management_card1_list3_item5"),
    t("subpages:management_card1_list3_item6"),
    t("subpages:management_card1_list3_item7"),
  ];

  const card2_list1items = [
    t("subpages:management_card2_list1_item1"),
    t("subpages:management_card2_list1_item2"),
    t("subpages:management_card2_list1_item3"),
    t("subpages:management_card2_list1_item4"),
    t("subpages:management_card2_list1_item5"),
  ];

  const card3_list1items = [
    t("subpages:management_card3_list1_item1"),
    t("subpages:management_card3_list1_item2"),
    t("subpages:management_card3_list1_item3"),
    t("subpages:management_card3_list1_item4"),
    t("subpages:management_card3_list1_item5"),
    t("subpages:management_card3_list1_item6"),
  ];

  const submenus = [
    <>
      <Head>
        <title>Vodstvene kompetence | DNLA | Resultant </title>
        <meta
          name="description"
          content="Analiza 25 ključnih faktorjev vodenja, razdeljenih na tri glavna področja. To so vodstvene lastnosti, sodelovanje in soglasje ter podjetniška mentaliteta."
        />
      </Head>
      <CardHeading>{t("subpages:management_card1_title")}</CardHeading>
      <VSpace />
      <Subtitle>{t("subpages:management_card1_subtitle")}</Subtitle>
      <VSpace />
      <BodyText2>{t("subpages:management_card1_list1_heading")}</BodyText2>
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
      <BodyText2>{t("subpages:management_card1_list2_heading")}</BodyText2>
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
      <BodyText2>{t("subpages:management_card1_list3_heading")}</BodyText2>
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
    </>,
    <>
      <CardHeading>{t("subpages:management_card2_title")}</CardHeading>
      <VSpace />
      <BodyText2>{t("subpages:management_card2_list1_heading")}</BodyText2>
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
      <CardHeading>{t("subpages:management_card3_title")}</CardHeading>
      <VSpace />
      <BodyText2>{t("subpages:management_card3_list1_heading")}</BodyText2>
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
      <Header title={t("subpages:management_title")}></Header>
      <Middle
        img={t("subpages:management_img")}
        text={t("subpages:management_text")}
        button={t("dnla:dnla_buttonTextPillar")}
      ></Middle>
      <Submenus items={submenus}></Submenus>
    </>
  );
};

export default management_potential;
