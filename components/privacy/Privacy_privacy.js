import React from 'react'
import { PrivacyContainer, PrivacyHeading, PrivacyLine, PrivacySubContainer1, PrivacySubContainer2, PrivacySubHeading } from './Privacy.styled';
import useTranslation from "next-translate/useTranslation";
import DefaultSection_privacy from './DefaultSection/DefaultSection_privacy';

const Privacy_privacy = () => {
    const { t, lang } = useTranslation();

    const mainTitle = t("privacy:privacy_mainHeading");
    const subtitle1 = t("privacy:privacy_mainSubHeading1");
    const subtitle2 = t("privacy:privacy_mainSubHeading2");

    const firstProp = {heading: t("privacy:privacy_defaultHeading1"), text: t("privacy:privacy_defaultText1")}

    const defaultProps = [
        {heading: t("privacy:privacy_defaultHeading2"), text: t("privacy:privacy_defaultText2")},
        {heading: t("privacy:privacy_defaultHeading3"), text: t("privacy:privacy_defaultText3")},
        {heading: t("privacy:privacy_defaultHeading4"), text: t("privacy:privacy_defaultText4")},
        {heading: t("privacy:privacy_defaultHeading5"), text: t("privacy:privacy_defaultText5")},
        {heading: t("privacy:privacy_defaultHeading6"), text: t("privacy:privacy_defaultText6")},
    ]

  return (
    <>
        <PrivacyContainer>
            <PrivacySubContainer2>
                <PrivacyHeading>{mainTitle}</PrivacyHeading>
                <PrivacyLine></PrivacyLine>
            </PrivacySubContainer2>
            <PrivacySubContainer1>
                <PrivacySubHeading>{subtitle1}</PrivacySubHeading>
                <DefaultSection_privacy props={firstProp}></DefaultSection_privacy>
            </PrivacySubContainer1>
            <PrivacySubContainer2>
                <PrivacyLine></PrivacyLine>
            </PrivacySubContainer2>
            <PrivacySubContainer1>
                <PrivacySubHeading>{subtitle2}</PrivacySubHeading>
               {
                   defaultProps.map((prop) => {
                       return(
                       <DefaultSection_privacy props={prop}></DefaultSection_privacy>
                       )
                   })
               }
            </PrivacySubContainer1>

        </PrivacyContainer>
    </>
  )
}

export default Privacy_privacy;