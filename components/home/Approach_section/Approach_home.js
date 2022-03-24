import React from 'react';
import Button from '../../../basic_components/button/Button'
import { BodyText4 } from '../../../basic_components/texts/Texts';
import { ApproachContainer, ApproachHeading, ApproachImage, ApproachTextContainer } from './Approach.styled';
import useTranslation from "next-translate/useTranslation";

const Approach_component = (props) => {
  const { t, lang } = useTranslation();

  const title = t("home:title_approach");
  const textUpper = t("home:paragraph1_approach");
  const textLower = t("home:paragraph2_approach");
  const buttonText = t("common:button_moreMore");

  return (<>
    <ApproachContainer {...props}>
      <ApproachTextContainer>
        <ApproachHeading>{title}</ApproachHeading>
        <p style={{marginBottom: "8%"}}>
          <BodyText4>{textUpper}</BodyText4>
        </p>
        <p style={{marginBottom: "8%"}}>
          <BodyText4>{textLower}</BodyText4>
        </p>
        <Button secondary style={{marginLeft: "2%"}}>{buttonText}</Button>
      </ApproachTextContainer>
      <ApproachImage src="./Home/Pristop.png"></ApproachImage>
    </ApproachContainer>
  </>
  )
}

export default Approach_component;