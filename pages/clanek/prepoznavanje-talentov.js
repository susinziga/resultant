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

const Clanek9 = () => {
  const blog_data = {
    title: "Prepoznavanje talentov ",
    authors: [{ image: "/Team/janez.png", name: "Janez Žezlina" }],
    image: "/clanki/9/image1.png",
    excerpt: `Upravljanje talentov je strategija, s katero si podjetja zagotovijo, da so njihovi ključni, strokovno in osebnostno kompetentni posamezniki, deležni skrbne pozornosti. Najprej jih je treba iskati in najti ter nato pripeljati v podjetje. Nato morajo zanje skrbeti, jih podpirati, motivirati, navduševati. Skratka, treba jih je ceniti in jim to tudi jasno pokazati, zato da ne bodo odšli h konkurenci. V tem prispevku se osredotočam predvsem na začetni del procesa upravljanja s talenti – iskanje oz. prepoznavanje le-teh.`,
  };

  return (
    <Blog_page _data={blog_data}>
      <NewParagraph></NewParagraph>

      <Container>
        <Subtitle2>
          PREPOZNAVANJE TALENTOV – IDENTIFICIRANJE KLJUČNIH KADROV
        </Subtitle2>
        <NewRow></NewRow>
        <BodyText3
          dangerouslySetInnerHTML={{
            __html: `Kateri je tisti ključni dejavnik uspeha, ki razlikuje najboljša podjetja, ki stalno zmagujejo, od tistih, ki želijo zmagovati, pa jim to ne uspeva: talentirani posamezniki. Kaj organizacijam omogoča, da so vodilne v svoji dejavnosti, leto za letom: prepoznavanje in razvoj talentiranih posameznikov. Kaj ta podjetja delajo, kar druga ne: znajo zadržati talente in z njimi upravljati tako, da izkoristijo njihov potencial.`,
          }}
        ></BodyText3>
      </Container>

      <NewParagraph></NewParagraph>

      <Border_shadow>
        <Container>
          <BodyText3>
            <b>
              To je še posebej pomembno oz. celo ključno v današnjem poslovnem
              okolju:{" "}
            </b>
          </BodyText3>
          <NewRow></NewRow>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `1.	Že kar nekaj let oz. dobro desetletje govorimo v poslovnem svetu o<b> bitki</b> za talente, v času izredno dinamične digitalne ekonomije, ki je prinesla še večjo potrebo po inovativnih, kompetentnih, agilnih in timsko usmerjenih posameznikih, pa je to še bolj pomembno.`,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `2.	<b>Digitalna ekonomija je prinesla tudi še večjo mobilnost kadrovskih potencialov.</b>`,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `3.	In če na to dodamo še<b> stalne disrupcije oz. poslovne motnje</b> (pandemije, spreminjanje geostrateškega zemljevida sveta, velike motnje v oskrbnih verigah, ipd.) je jasno, da je dandanes (jutri pa še bolj)<b> izrednega pomena, da se sistematično ukvarjamo z našo interno bazo - sodelavci</b>, prepoznamo njihove talente in sistematično razvijamo njihove potenciale, s ciljem ohranjanja njihove zavzetosti in zadržanja ključnih kadrov.`,
                }}
              ></BodyText3>
            </li>
          </ul>
        </Container>
      </Border_shadow>
      <NewParagraph></NewParagraph>

      <Plain_text
        dangerouslySetInnerHTML={{
          __html: `Ravno podjetja, ki ustvarjajo svojo dodano vrednost z znanjem (in teh je v današnji digitalni ekonomiji oz. družbi znanja vedno več), potrebujejo talent: treba ga je ustvariti, patentirati, predstaviti, deliti z drugimi in ga izrabiti. Zato je najbolj cenjen kapital v podjetju v glavah, srcu in rokah tistih, ki imajo znanje in le-to tudi znajo oz. redno uporabljajo pri delu. <br/><br/>

Dandanes se med podjetji bije <b>vojna za talente</b>, ki bodo sposobni uresničevati ambiciozne poslovne cilje podjetij. Zato je pridobivanje talentov že med srednješolci oz. med študenti in ugotavljanje njihovega načina razmišljanja ter na nek način tudi vplivanje na njihovo nadaljnjo smer poklicnega razvoja prav gotovo izredno pomembna aktivnost v procesu upravljanja s talenti. Podjetja se preprosto morajo bolj aktivno vključevati v projekte odkrivanja mladih, ustvarjalni in talentiranih ljudi ter sodelovati pri pospeševanju usposabljanja mladih talentov že v procesu njihovega formalnega šolanja.
`,
        }}
      ></Plain_text>
      <NewParagraph></NewParagraph>

      <Subtitle2>
        Kaj pa se lahko glede iskanja oz. prepoznavanja takih talentiranih
        posameznikov naučimo iz športnih panog?{" "}
      </Subtitle2>
      <NewRow></NewRow>
      <BodyText3
        dangerouslySetInnerHTML={{
          __html: `Tudi vrhunski šport je že vrsto let namreč predvsem posel, kjer so vodilni možje v najboljših klubih razvili celo vrsto dobrih praks za upravljanje s svojim največjih bogastvom – igralci – vrhunskimi posamezniki. V športu prav tako kot  v poslu zmaguje timsko delo – skupina talentiranih posameznikov, ki jih v učinkovit tim poveže uspešen trener, v poslovni terminologiji imenovan menedžer – vodja. Zato je lahko <b>iskanje vzporednic med poslovnimi in športnimi dobrimi praksami</b> zelo dobra vaja v urjenju možganov in posledično iskanju novih idej, ki jih lahko uspešno uporabimo v poslovni praksi svojega podjetja.`,
        }}
      ></BodyText3>

      <NewParagraph></NewParagraph>
      <NewParagraph></NewParagraph>
    </Blog_page>
  );
};

export default Clanek9;
