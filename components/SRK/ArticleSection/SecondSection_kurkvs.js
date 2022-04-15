import { BodyText3 } from "../../../basic_components/texts/Texts";
import useTranslation from "next-translate/useTranslation";
import { List } from "../BulletSection.styled";
import {
  Bold,
  Header,
  ListHeadingText,
  ListItem,
} from "./SecondSection.styled";
import styled from "styled-components";

const SecondSection_kukvs = () => {
  const { t, lang } = useTranslation();

  return (
    <PaddingX>
      <Header>{t("srk:kurkvs_s2_heading")}</Header>
      <BodyText3>{t("srk:kurkvs_s2_subtext")}</BodyText3>

      <ListHeadingText>{t("srk:kurkvs_s2_listHeading")}</ListHeadingText>

      <List>
        <li>
          <ListItem>
            <Bold>{t("srk:kurkvs_s2_item1Heading")}</Bold>{" "}
            {t("srk:kurkvs_s2_item1Text")}
          </ListItem>
        </li>
        <li>
          <ListItem>
            <Bold>{t("srk:kurkvs_s2_item2Heading")}</Bold>{" "}
            {t("srk:kurkvs_s2_item2Text")}
          </ListItem>
        </li>
        <li>
          <ListItem>
            <Bold>{t("srk:kurkvs_s2_item3Heading")}</Bold>{" "}
            {t("srk:kurkvs_s2_item3Text")}
          </ListItem>
        </li>
        <li>
          <ListItem>
            <Bold>{t("srk:kurkvs_s2_item4Heading")}</Bold>{" "}
            {t("srk:kurkvs_s2_item4Text")}
          </ListItem>
        </li>
        <li>
          <ListItem>
            <Bold>{t("srk:kurkvs_s2_item5Heading")}</Bold>{" "}
            {t("srk:kurkvs_s2_item5Text")}
          </ListItem>
        </li>
        <li>
          <ListItem>
            <Bold>{t("srk:kurkvs_s2_item6Heading")}</Bold>{" "}
            {t("srk:kurkvs_s2_item6Text")}
          </ListItem>
        </li>
      </List>

      <BodyText3>{t("srk:kurkvs_s2_afterListText")}</BodyText3>
    </PaddingX>
  );
};

export const PaddingX = styled.div`
  padding: 0% 5%;
`;

export default SecondSection_kukvs;
