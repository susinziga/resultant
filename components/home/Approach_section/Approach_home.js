import React from "react";
import Button from "../../../basic_components/button/Button";
import { BodyText2 } from "../../../basic_components/texts/Texts";
import {
  ApproachContainer,
  ApproachHeading,
  ApproachImage,
  ApproachTextContainer,
} from "./Approach.styled";
import useTranslation from "next-translate/useTranslation";

const Approach_component = (props) => {
  const { t, lang } = useTranslation();

  const title = t("home:title_approach");
  const textUpper = t("home:paragraph1_approach");
  const textLower = t("home:paragraph2_approach");
  const buttonText = t("common:button_moreMore");

  return (
    <>
      <ApproachContainer {...props}>
        <ApproachTextContainer>
          <ApproachHeading>{title}</ApproachHeading>
          <p style={{ marginBottom: "8%" }}>
            <BodyText2>{textUpper}</BodyText2>
          </p>
          <p style={{ marginBottom: "8%" }}>
            <BodyText2>{textLower}</BodyText2>
          </p>
          <Button secondary>{buttonText}</Button>
        </ApproachTextContainer>
        <ApproachImage src="./Home/homeApproachImage.png"></ApproachImage>
      </ApproachContainer>
    </>
  );
};

export default Approach_component;
