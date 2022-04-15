import React from "react";
import { BodyText3, Subtitle2 } from "../../basic_components/texts/Texts";
import Blog_page from "../../components/blog/Blog_page";
import Border_shadow from "../../components/blog/content_components/Border_shadow";
import Container, {
  Container_border,
} from "../../components/blog/content_components/Container.styled";
import Image from "../../components/blog/content_components/Image";
import NewParagraph, {
  NewRow,
} from "../../components/blog/content_components/Margin.styled";
import Plain_text from "../../components/blog/content_components/Plain_text";
import Share from "../../components/blog/content_components/Share";

const Clanek5 = () => {
  const blog_data = {
    title:
      "DNLA sistem ponuja celovito strokovno podporo drugim kadrovskim procesom",
    authors: [{ image: "/Team/enej.png", name: "Enej Klarič" }],
    image: "/clanki/5/image1.png",
    excerpt: `Uporabljate jih lahko pri izboru kadrov, njihovem razvoju, izobraževanju, treningu in usposabljanju ter za učinkovit nadzor nad izobraževanji. Rezultati testiranj lahko služijo kot podlaga za strateško usmeritev HRM procesov.`,
  };

  return (
    <Blog_page _data={blog_data}>
      <NewParagraph></NewParagraph>

      <Border_shadow>
        <Container>
          <Subtitle2>Področja uporabe:</Subtitle2>
          <NewRow></NewRow>
          <ul>
            <li>
              <BodyText3>Privabljanje in selekcija</BodyText3>
            </li>
            <li>
              <BodyText3>Prepoznavanje in razvoj talentov</BodyText3>
            </li>
            <li>
              <BodyText3>Sistem nasledstev</BodyText3>
            </li>
            <li>
              <BodyText3>Razvoj timov in timskega sodelovanja</BodyText3>
            </li>
            <li>
              <BodyText3>Programi izobraževanja in osebnega razvoja</BodyText3>
            </li>
            <li>
              <BodyText3>Mentorski sistem</BodyText3>
            </li>
          </ul>
          <NewParagraph></NewParagraph>
          <Subtitle2>Privabljanje in selekcija</Subtitle2>
          <NewRow></NewRow>
          <BodyText3>
            DNLA sistem nam omogoča celovito analizo potencialov bodočega
            sodelavca in natančno selekcijo. Po opravljenem testiranju
            primerjamo zahteve delovnega mesta z razvitostjo kandidatovih
            veščin/potencialov. Na srečanju s kandidatom lahko potem vodimo
            dobro strukturiran selekcijski pogovor. Sistem nam omogoča tudi
            neposredno primerjavo kandidatov med seboj, kar je trdna podlaga za
            sprejemanje dobrih zaposlitvenih odločitev. V praksi to pomeni nižje
            stroške.
          </BodyText3>
          <NewParagraph></NewParagraph>
          <Subtitle2>Prepoznavanje in razvoj talentov</Subtitle2>
          <NewRow></NewRow>
          <BodyText3>
            DNLA sistem nam omogoča hitro identifikacijo talentov in primerjavo
            posameznih kandidatov med seboj. DNLA bistveno zmanjša napake v
            presoji potenciala. Izvajalci programa se pri sprejemanju odločitev
            opirajo na pomembne informacije, ne pa predpostavke subjektivne
            presoje, kjer se napake najpogosteje pojavljajo. Strukturirani
            intervju s kandidatom je standard in sestavni del DNLA procesa. Z
            informacijami, pridobljenimi s testiranjem in v strukturiranem
            intervjuju, lahko vzpostavimo natančno napoved uspešnosti kandidata
            na bodočem delovnem mestu. Ko so talenti prepoznani, za njih
            pripravimo razvojen programe. Zagotoviti moramo usklajen razvoj
            posameznika, tu nam za osnovo služi strokovna DNLA ocena, ki vsem
            sodelujočim v procesu razvoja podaja enake smernice.
          </BodyText3>
          <NewParagraph></NewParagraph>
        </Container>
      </Border_shadow>

      <NewParagraph></NewParagraph>

      <Container>
        <Subtitle2>Proces upravljanja talentov</Subtitle2>
        <NewRow></NewRow>
      </Container>
      <Image src="/clanki/5/image2.png"></Image>

      <NewParagraph></NewParagraph>

      <Border_shadow>
        <Container>
          <Subtitle2>Sistem nasledstev</Subtitle2>
          <NewRow></NewRow>
          <BodyText3>
            Planiranje nasledstev je proces identificiranja in razvoja
            zaposlenih, ki kažejo dovolj visok potencial, da bodo lahko
            prevzemali ključne odgovornosti v prihodnosti. DNLA sistem omogoča
            identifikacijo potencialnih naslednikov ter identificira razvojne
            potrebe posameznika. Z uporabo zanesljivih podatkov se zagotovi
            objektivna presoja in napoved uspešnosti naslednika. Prepoznana
            razvojna področja pa lahko pri posamezniku razvijamo pred zasedbo
            ključnega delovnega mesta.{" "}
          </BodyText3>
          <NewParagraph></NewParagraph>

          <Subtitle2>Razvoj timov in timskega sodelovanja</Subtitle2>
          <NewRow></NewRow>
          <BodyText3>
            DNLA Expert System omogoča celovito ocenjevanje uspešnosti vodij in
            delovanja posameznih timov, oddelkov ali skupin. Podjetja iščejo
            načine, kako prepoznati prednosti in izzive v delovanju posameznega
            tima, ujemanje vodje z osebjem in razloge, ki zavirajo učinkovitost
            skupin. Z DNLA sistemom lahko ugotavljamo kritične elemente v
            delovanju tima. Rezultati so predstavljeni grafično in prikazujejo
            uspešne in kritične točke delovanja posameznega tima za lažjo
            analizo stanja delovanja posameznega tima in hitro ukrepanje tam,
            kjer je to potrebno.
          </BodyText3>
          <NewParagraph></NewParagraph>

          <Subtitle2>Programi izobraževanja in osebnega razvoja</Subtitle2>
          <NewRow></NewRow>
          <BodyText3>
            DNLA programi podajo izhodišča za številna področja izobraževanja. Z
            DNLA analizo potencialov ugotavljamo področja za razvoj, na čigar
            podlagi sprejmemo smernice za individualni razvoj. Razvojni ukrepi
            se lahko izvajajo v različnih oblikah: izobraževanja, coachingi,
            treningi pri delu ali mentorstva. V procesu merjenja se pridobi tudi
            individualna razvojna priporočila kot tudi coaching načrt, ki je v
            veliko pomoč izvajalcem usposabljanja. Z DNLA sistemom lahko na
            enostaven način izmerimo, kakšen je naš ROI (Return On Investment) v
            izobraževanja, tako da učinke usposabljanja preverimo s ponovnim
            merjenjem razvitosti potenciala vsakega posameznika.
          </BodyText3>
          <NewParagraph></NewParagraph>

          <Subtitle2>Mentorski sistem</Subtitle2>
          <NewRow></NewRow>
          <BodyText3>
            DNLA sistemi so trdna osnova za razvoj internih trenerjev ter
            mentorjev. DNLA omogoča enostavno izvajanje razvojnih aktivnosti,
            saj sistem pripravi dobre podlage za razvoj osebja (razvojni načrti
            in coaching plani). Z DNLA sistemom identificiramo interno osebje,
            ki ima zadovoljivo razvit potencial za opravljanje tako pomembne
            naloge, kot je razvoj osebja. Na ta način so v mnogih podjetjih
            usposobili operativne vodje in s tem razpršili aktivnosti razvoja po
            celotni organizaciji ter tako omogočili hitrejše uvajanje sprememb.
          </BodyText3>
          <NewParagraph></NewParagraph>
        </Container>
      </Border_shadow>
      <NewParagraph></NewParagraph>
    </Blog_page>
  );
};

export default Clanek5;
