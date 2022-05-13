import React from "react";
import {
  HeadingContainer,
  HeadingUpperHeading,
  HeadingLine,
  DesktopFlex,
  Paragraph,
} from "../support/Support.styled";
import useTranslation from "next-translate/useTranslation";
import styled from "styled-components";
import {
  BodyText2,
  BodyText3,
  Title2,
} from "../../basic_components/texts/Texts";
import Link from "next/link";

const Cookies_cookies = (props) => {
  const { t, lang } = useTranslation();

  const upperTitle = t("cookies:mainHeading");

  return (
    <>
      <HeadingContainer {...props}>
        <DesktopFlex>
          <HeadingUpperHeading>Piškotki</HeadingUpperHeading>
        </DesktopFlex>
        <HeadingLine></HeadingLine>
      </HeadingContainer>
      <FirstSection>
        <BodyText3>
          Z uporabo piškotkov se trudimo uporabnikom naše spletne strani,
          prikazati najboljšo vsebino in jim tako skozi čas zagotavljati
          najboljšo uporabniško izkušnjo. Nad piškotki imate popoln nadzor in
          niso škodljivi.
        </BodyText3>
        <br />
        <br />
        <BodyText3>
          V primeru, da piškotke izključite se lahko zgodi, da stran ne bo
          delovala pravilno oziroma, da bodo določeni elementi strani izključeni
          in boste tako prikrajšani za vsebino, ki jo ponujamo.
        </BodyText3>
        <br />
        <br />
        <BodyText3>
          Za več informacij o piškotkih:{" "}
          <Link href={"https://www.aboutcookies.org/"}>
            <a style={{ textDecoration: "underline" }} target={"_blank"}>
              https://www.aboutcookies.org/
            </a>
          </Link>
        </BodyText3>
      </FirstSection>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <HeadingLine></HeadingLine>
      </div>
      <SecondSection>
        <TextHeading>Spletno mesto uporablja naslednje piškotke</TextHeading>
        <div
          style={{
            border: "1px solid black",
            padding: "2% 3%",
            borderRadius: "12px",
          }}
        >
          <BodyText3>
            <span style={{ fontWeight: "500", fontSize: "1.5rem" }}>_ga</span>
            <br />
            Statistika ogledov spletne strani
            <br />
            <br />
            <div>
              <p
                style={{
                  fontFamily: "Neusa",
                  fontWeight: "400",
                  width: "200px",
                  display: "inline-block",
                }}
              >
                Storitev:
              </p>
              <span style={{ fontWeight: "300" }}>Google Analytics</span>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "Neusa",
                  fontWeight: "400",
                  width: "200px",
                  display: "inline-block",
                }}
              >
                Doba hranjenja:
              </p>
              <span style={{ fontWeight: "300" }}>2 leti</span>
            </div>
            {/* <span style={{ fontWeight: "400" }}>Storitev:</span> Google
            Analytics
            <br />
            <span style={{ fontWeight: "400" }}>DOBA HRANJENJA:</span>2 leti */}
          </BodyText3>
        </div>
      </SecondSection>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <HeadingLine></HeadingLine>
      </div>
      <ThirdSection>
        <TextHeading>Obvezni piškotki</TextHeading>
        <BodyText3>
          Ti piškotki so nujni za premikanje po spletni strani in uporabo njenih
          možnosti, kot je dostop do varnih območij spletne strani. Brez teh
          piškotkov ni možno zagotoviti storitev, ki ste jih zahtevali, na
          primer obrazec za nagradno igro ipd.
        </BodyText3>
        <br />
        <br />
        <br />
        <TextHeading>Izvedbeni piškotki</TextHeading>
        <BodyText3>
          Ti piškotki zbirajo informacije o načinu uporabe spletne strani, na
          primer katere strani uporabniki najpogosteje obiščejo, in ali se na
          spletnih straneh pojavijo sporočila o napaki. Ti piškotki ne zbirajo
          informacij, ki bi lahko identificirale uporabnika. Vse zbrane
          informacije so združene in zato anonimne. Ti piškotki se uporabljajo
          samo za izboljšanje delovanja spletne strani. Z nadaljevanjem uporabe
          naše spletne strani po tem ko ste dobili obvestilo o piškotkih se
          strinjate, da na vašo napravo namestimo to vrsto piškotkov.
        </BodyText3>
        <br />
        <br />
        <br />
        <TextHeading>Funkcionalni piškotki</TextHeading>
        <BodyText3>
          Ti piškotki omogočajo, da si spletna stran zapomni vaše izbrane
          možnosti (na primer vaše uporabniško ime, jezik ali regijo, kjer se
          nahajate) in vam ponudi izboljšane, bolj osebne možnosti. Ti piškotki
          si lahko zapomnijo tudi spremembe velikosti črk in pisave ter drugih
          delov spletne strani, ki jih lahko prilagodite. Uporabni so tudi za
          zagotavljanje storitev, ki ste jih zahtevali, kot je ogled
          videoposnetka ali komentiranje na blogu. Informacije, ki jih zbirajo
          ti piškotki, so lahko anonimne in ne sledijo vašemu brskanju po drugih
          spletnih straneh.
        </BodyText3>
      </ThirdSection>
    </>
  );
};

export const TextHeading = styled(Title2)`
  font-size: 2rem;
  font-family: "Neusa";
  margin-bottom: 1rem;
`;

export const FirstSection = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const SecondSection = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 3%;
`;

export const ThirdSection = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 3%;
`;

export default Cookies_cookies;
