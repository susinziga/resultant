import useTranslation from "next-translate/useTranslation";
import React from "react";
import {
  About_bottomContainer,
  About_bottomLine,
  Content,
} from "./About_bottom.styled";

import { BodyText1, BodyText2 } from "../../../basic_components/texts/Texts";
import Button from "../../../basic_components/button/Button";
import { useRouter } from "next/router";

const About_bottom = (props) => {
  const { t } = useTranslation("about");

  const { locale } = useRouter();

  const bot_header = t("bottom_header");
  const bot_text = t("bottom_text");
  const bot_button = t("bottom_button");

  return (
    <About_bottomContainer {...props}>
      <About_bottomLine></About_bottomLine>
      <Content>
        <h2>{bot_header}</h2>
        <BodyText2>{bot_text}</BodyText2>
        <Button secondary href={"/" + locale + "/kontakt"}>
          {bot_button}
        </Button>
      </Content>
    </About_bottomContainer>
  );
};

export default About_bottom;
