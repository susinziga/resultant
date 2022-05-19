import React from "react";
import * as Styled from "./Footer.styled";
import FooterInput from "./FooterInput";
import useTranslation from "next-translate/useTranslation";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
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
              <Styled.ContactLink href="tel:041231831">
                <Styled.ContactIcon
                  src="/Footer/-call.webp"
                  alt="Telephone"
                ></Styled.ContactIcon>
                041 231 831
              </Styled.ContactLink>
            </Styled.ContactIconContainer>
            <Styled.ContactIconContainer>
              <Styled.ContactLink href="mailto:info@resultant.si">
                <Styled.ContactIcon
                  src="/Footer/-email.webp"
                  alt="Email"
                ></Styled.ContactIcon>
                info@resultant.si
              </Styled.ContactLink>
            </Styled.ContactIconContainer>
          </Styled.ContactsFooterContainer>
        </Styled.UpperFooterContainer>

        <Styled.FooterHeader>{header}</Styled.FooterHeader>
        <Styled.InputFooterContainer>
          <FooterInput></FooterInput>
        </Styled.InputFooterContainer>

        {/* Socials Image Links */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
          }}
          className={"mobile"}
        >
          <Link
            href={"https://www.linkedin.com/company/resultanthrconsulting/"}
          >
            <a>
              <Image
                src={"/Icons/linkedin_white.webp"}
                width={50}
                height={50}
                alt="linkedin"
              ></Image>
            </a>
          </Link>
          <Link href={"https://www.facebook.com/Resultantposlovnosvetovanje"}>
            <a>
              <Image
                src={"/Icons/facebook_white.webp"}
                width={50}
                height={50}
                alt="facebook"
              ></Image>
            </a>
          </Link>
        </div>

        <Styled.Combine>
          {/* <Styled.Link className="desktop">{madeBy}</Styled.Link> */}
          <Styled.LinkFooterContainer>
            {/*<Styled.Link>{cookies}</Styled.Link>*/}
            <Styled.Flex>
              <Styled.Link href={"/" + locale + "/piskotki"}>
                {cookies}
              </Styled.Link>
              <Styled.Link href={"/" + locale + "/podpora-strankam"}>
                {support}
              </Styled.Link>
              <Styled.Link href={"/" + locale + "/pravilnik-o-zasebnosti"}>
                {privicy}
              </Styled.Link>
              <Styled.Footer_item>&copy; {rights}</Styled.Footer_item>
              {/* <Styled.Link className="mobile">{madeBy}</Styled.Link> */}
            </Styled.Flex>
            <div className="mobile">
              <Styled.Link href="https://www.agencija-statera.si/">
                {madeBy}
              </Styled.Link>
            </div>
            <div className="desktop" style={{ display: "flex" }}>
              <Link
                href={"https://www.linkedin.com/company/resultanthrconsulting/"}
              >
                <a>
                  <Image
                    src={"/Icons/linkedin_white.webp"}
                    width={50}
                    height={50}
                    alt="linkedin"
                  ></Image>
                </a>
              </Link>
              <Link
                href={"https://www.facebook.com/Resultantposlovnosvetovanje"}
              >
                <a>
                  <Image
                    src={"/Icons/facebook_white.webp"}
                    width={50}
                    height={50}
                    alt="facebook"
                  ></Image>
                </a>
              </Link>
            </div>
          </Styled.LinkFooterContainer>
        </Styled.Combine>
        <Styled.MadeByDesktopWrapper className={"desktop"}>
          <Styled.Link href="https://www.agencija-statera.si/">
            {madeBy}
          </Styled.Link>
        </Styled.MadeByDesktopWrapper>
      </Styled.FooterContainer>
    </div>
  );
};

export default Footer;
