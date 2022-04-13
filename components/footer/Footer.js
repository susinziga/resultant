import React from "react";
import * as Styled from "./Footer.styled";
import FooterInput from "./FooterInput";
import useTranslation from "next-translate/useTranslation";

import { useRouter } from "next/router";
const Footer = () => {
  const { t, lang } = useTranslation();

  const header = t("footer:footer_heading");
  const madeBy = t("footer:footer_madeBy");
  const cookies = t("footer:footer_cookies");
  const support = t("footer:footer_support");
  const privicy = t("footer:footer_privicy");
  const rights = t("footer:footer_rights");

  const { locale } = useRouter();

  return (
    <div>
      <Styled.FooterContainer className="footer">
        <Styled.UpperFooterContainer>
          <Styled.InfoFooterHeading>Resultant d.o.o.</Styled.InfoFooterHeading>
          <Styled.ContactFooterContainer>
            <Styled.Contact>Franca Pirca 8</Styled.Contact>
            <Styled.Contact>Kamnik 1241</Styled.Contact>
          </Styled.ContactFooterContainer>
          <Styled.ContactsFooterContainer>
            <Styled.ContactIconContainer>
              <Styled.ContactIcon src="/Footer/-call.png"></Styled.ContactIcon>
              <Styled.ContactLink>041 231 831</Styled.ContactLink>
            </Styled.ContactIconContainer>
            <Styled.ContactIconContainer>
              <Styled.ContactIcon src="/Footer/-email.png"></Styled.ContactIcon>
              <Styled.ContactLink>info@resultant.si</Styled.ContactLink>
            </Styled.ContactIconContainer>
          </Styled.ContactsFooterContainer>
        </Styled.UpperFooterContainer>

        <Styled.FooterHeader>{header}</Styled.FooterHeader>
        <Styled.InputFooterContainer>
          <FooterInput></FooterInput>
        </Styled.InputFooterContainer>
        <Styled.Combine>
          {/* <Styled.Link className="desktop">{madeBy}</Styled.Link> */}
          <Styled.LinkFooterContainer>
            <Styled.Link>{cookies}</Styled.Link>
            <Styled.Link href={"/" + locale + "/support"}>
              {support}
            </Styled.Link>
            <Styled.Link href={"/" + locale + "/privacy"}>
              {privicy}
            </Styled.Link>
            <Styled.Link>&copy; {rights}</Styled.Link>
            {/* <Styled.Link className="mobile">{madeBy}</Styled.Link> */}
            <Styled.Link>{madeBy}</Styled.Link>
          </Styled.LinkFooterContainer>
        </Styled.Combine>
      </Styled.FooterContainer>
    </div>
  );
};

export default Footer;
