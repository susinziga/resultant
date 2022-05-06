import { useRouter } from "next/router";
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
  const { locale } = useRouter();

  const data = {
    sl: {
      title:
        "DNLA sistem ponuja celovito strokovno podporo drugim kadrovskim procesom",
      excerpt: `Uporabljate jih lahko pri izboru kadrov, njihovem razvoju, izobraževanju, treningu in usposabljanju ter za učinkovit nadzor nad izobraževanji. Rezultati testiranj lahko služijo kot podlaga za strateško usmeritev HRM procesov.`,
      bulletList1Heading: "Področja uporabe:",
      bulletList1Bullets: [
        "Privabljanje in selekcija",
        "Prepoznavanje in razvoj talentov",
        "Sistem nasledstev",
        "Razvoj timov in timskega sodelovanja",
        "Programi izobraževanja in osebnega razvoja",
        "Mentorski sistem",
      ],
      texts1: [
        {
          title: "Privabljanje in selekcija",
          text: "DNLA sistem nam omogoča celovito analizo potencialov bodočega sodelavca in natančno selekcijo. Po opravljenem testiranju primerjamo zahteve delovnega mesta z razvitostjo kandidatovih veščin/potencialov. Na srečanju s kandidatom lahko potem vodimo dobro strukturiran selekcijski pogovor. Sistem nam omogoča tudi neposredno primerjavo kandidatov med seboj, kar je trdna podlaga za sprejemanje dobrih zaposlitvenih odločitev. V praksi to pomeni nižje stroške.",
        },
        {
          title: "Prepoznavanje in razvoj talentov",
          text: "DNLA sistem nam omogoča hitro identifikacijo talentov in primerjavo posameznih kandidatov med seboj. DNLA bistveno zmanjša napake v presoji potenciala. Izvajalci programa se pri sprejemanju odločitev opirajo na pomembne informacije, ne pa predpostavke subjektivne presoje, kjer se napake najpogosteje pojavljajo. Strukturirani intervju s kandidatom je standard in sestavni del DNLA procesa. Z informacijami, pridobljenimi s testiranjem in v strukturiranem intervjuju, lahko vzpostavimo natančno napoved uspešnosti kandidata na bodočem delovnem mestu. Ko so talenti prepoznani, za njih pripravimo razvojen programe. Zagotoviti moramo usklajen razvoj posameznika, tu nam za osnovo služi strokovna DNLA ocena, ki vsem sodelujočim v procesu razvoja podaja enake smernice.",
        },
      ],
      imageHeading: "Proces upravljanja talentov",
      texts2: [
        {
          title: "Sistem nasledstev",
          text: "Planiranje nasledstev je proces identificiranja in razvoja zaposlenih, ki kažejo dovolj visok potencial, da bodo lahko prevzemali ključne odgovornosti v prihodnosti. DNLA sistem omogoča identifikacijo potencialnih naslednikov ter identificira razvojne potrebe posameznika. Z uporabo zanesljivih podatkov se zagotovi objektivna presoja in napoved uspešnosti naslednika. Prepoznana razvojna področja pa lahko pri posamezniku razvijamo pred zasedbo ključnega delovnega mesta.",
        },
        {
          title: "Razvoj timov in timskega sodelovanja",
          text: "DNLA Expert System omogoča celovito ocenjevanje uspešnosti vodij in delovanja posameznih timov, oddelkov ali skupin. Podjetja iščejo načine, kako prepoznati prednosti in izzive v delovanju posameznega tima, ujemanje vodje z osebjem in razloge, ki zavirajo učinkovitost skupin. Z DNLA sistemom lahko ugotavljamo kritične elemente v delovanju tima. Rezultati so predstavljeni grafično in prikazujejo uspešne in kritične točke delovanja posameznega tima za lažjo analizo stanja delovanja posameznega tima in hitro ukrepanje tam, kjer je to potrebno.",
        },
        {
          title: "Programi izobraževanja in osebnega razvoja",
          text: "DNLA programi podajo izhodišča za številna področja izobraževanja. Z DNLA analizo potencialov ugotavljamo področja za razvoj, na čigar podlagi sprejmemo smernice za individualni razvoj. Razvojni ukrepi se lahko izvajajo v različnih oblikah: izobraževanja, coachingi, treningi pri delu ali mentorstva. V procesu merjenja se pridobi tudi individualna razvojna priporočila kot tudi coaching načrt, ki je v veliko pomoč izvajalcem usposabljanja. Z DNLA sistemom lahko na enostaven način izmerimo, kakšen je naš ROI (Return On Investment) v izobraževanja, tako da učinke usposabljanja preverimo s ponovnim merjenjem razvitosti potenciala vsakega posameznika.",
        },
        {
          title: "Mentorski sistem",
          text: "DNLA sistemi so trdna osnova za razvoj internih trenerjev ter mentorjev. DNLA omogoča enostavno izvajanje razvojnih aktivnosti, saj sistem pripravi dobre podlage za razvoj osebja (razvojni načrti in coaching plani). Z DNLA sistemom identificiramo interno osebje, ki ima zadovoljivo razvit potencial za opravljanje tako pomembne naloge, kot je razvoj osebja. Na ta način so v mnogih podjetjih usposobili operativne vodje in s tem razpršili aktivnosti razvoja po celotni organizaciji ter tako omogočili hitrejše uvajanje sprememb.",
        },
      ],
    },
    en: {
      title: "",
      excerpt: "",
      bulletList1Heading: "",
      bulletList1Bullets: ["", "", "", "", "", ""],
      texts1: [
        {
          title: "",
          text: "",
        },
        {
          title: "",
          text: "",
        },
      ],
      imageHeading: "",
      texts2: [
        {
          title: "",
          text: "",
        },
        {
          title: "",
          text: "",
        },
        {
          title: "",
          text: "",
        },
        {
          title: "",
          text: "",
        },
      ],
    },
  };

  const blog_data = {
    title: data[locale].title,
    authors: [{ image: "/Team/enej.png", name: "Enej Klarič" }],
    image: "/clanki/5/image1.png",
    excerpt: data[locale].excerpt,
  };

  return (
    <Blog_page _data={blog_data}>
      <NewParagraph></NewParagraph>

      <Border_shadow>
        <Container>
          <Subtitle2>{data[locale].bulletList1Heading}</Subtitle2>
          <NewRow></NewRow>
          <ul>
            {data[locale].bulletList1Bullets.map((bullet) => (
              <li>
                <BodyText3>{bullet}</BodyText3>
              </li>
            ))}
          </ul>
          <NewParagraph></NewParagraph>
          {data[locale].texts1.map((text) => (
            <>
              <Subtitle2>{text.title}</Subtitle2>
              <NewRow></NewRow>
              <BodyText3>{text.text}</BodyText3>
              <NewParagraph></NewParagraph>
            </>
          ))}
        </Container>
      </Border_shadow>

      <NewParagraph></NewParagraph>

      <Container>
        <Subtitle2>{data[locale].imageHeading}</Subtitle2>
        <NewRow></NewRow>
      </Container>
      <Image src="/clanki/5/image2.png"></Image>

      <NewParagraph></NewParagraph>

      <Border_shadow>
        <Container>
          {data[locale].texts2.map((text) => (
            <>
              <Subtitle2>{text.title}</Subtitle2>
              <NewRow></NewRow>
              <BodyText3>{text.text}</BodyText3>
              <NewParagraph></NewParagraph>
            </>
          ))}
        </Container>
      </Border_shadow>
      <NewParagraph></NewParagraph>
    </Blog_page>
  );
};

export default Clanek5;
