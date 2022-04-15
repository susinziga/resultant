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

const Clanek3 = () => {
  const blog_data = {
    title: "Spremljanje in spreminjanje organizacijske klime in kulture",
    authors: [{ image: "/Team/primoz.png", name: "Primož Bitenc" }],
    image: "/clanki/3/image1.png",
    excerpt: `Cilj vsake organizacije bi moral biti ustvarjanje trajnostnega delovnega okolja, v katerem se
      zaposleni počutijo vključene, zveste in zadovoljne. Če zaposleni na svojem delovnem mestu niso
      zadovoljni, lahko postanejo neproduktivni in se po možnosti lahko odločijo za zamenjavo
      delodajalca ter s sabo vzamejo tako svoje sposobnosti kot znanje, v katera smo ves čas vlagali.
      Proces iskanja novih zaposlenih organizacijo veliko stane.`,
  };

  return (
    <Blog_page _data={blog_data}>
      <NewParagraph></NewParagraph>
      <Plain_text>
        Ko razmišljamo o zaposlenih, se nam takoj zastavi vprašanje, kakšna je
        organizacijska klima in kultura organizacije in kako jo lahko spremenimo
        na bolje. Klima in kultura v organizaciji sta podobna koncepta, saj oba
        opisujeta izkušnje zaposlenih v organizaciji. Imata nekaj podobnosti in
        nekaj razlik.
      </Plain_text>
      <NewParagraph></NewParagraph>
      <Border_shadow>
        <Container>
          <Subtitle2>Opredelitev organizacijske kulture</Subtitle2>
          <NewParagraph></NewParagraph>
          <BodyText3>
            Organizacijska kultura je nabor ključnih vrednot, prepričanj,
            predpostavk, razumevanj in norm, ki določa način obnašanja in
            odzivanja zaposlenih in tako oblikuje način obnašanja in odzivanja
            zaposlenih in način delovanja neke organizacije. Zajema širok
            spekter socialnih pojavov, kot so tipični načini oblačenja v
            organizaciji, jezik, vedenje, prepričanja, vrednote, predpostavke,
            statusni simboli in avtoriteta, miti, obredi in svečanosti, načini
            upoštevanja ostalih in razdiralna vedenja.
          </BodyText3>
          <NewParagraph></NewParagraph>
          <Subtitle2>Opredelitev organizacijske klime</Subtitle2>
          <NewParagraph></NewParagraph>
          <BodyText3>
            Organizacijsko klimo definirajo nekateri avtorji kot situacijo,
            drugi kot lastnost organizacije, spet tretji kot zaznavanje
            posameznikov. Organizacijska klima je vzdušje v organizaciji, ki je
            posledica različnih znanih in neznanih dejavnikov iz preteklosti in
            sedanjosti iz širšega in ožjega okolja, ki vplivajo na obnašanje
            ljudi in uporabo njihovih zmogljivosti. Organizacijska klima se
            navadno definira kot percepcija vseh elementov delovnega okolja
            (dogodki, postopki, pravila, odnosi), ki so članom organizacije
            psihološko smiselni oz. pomembni.
          </BodyText3>
          <NewParagraph></NewParagraph>
          <Subtitle2>Razlike med organizacijsko klimo in kulturo </Subtitle2>
          <NewParagraph></NewParagraph>
          <BodyText3>
            Organizacijska klima se raziskuje s kvantitativnimi metodami,
            organizacijska kultura s kvalitativnimi. Raziskovalce organizacijske
            kulture bolj zanima razvoj socialnega sistema v času, medtem ko so
            za raziskovalce klime bolj zanimivi vplivi organizacijskega sistema
            na posameznika in skupine. V primerjavi med organizacijsko klimo in
            kulturo je klima relativno kratkotrajna lastnost organizacije,
            medtem ko je kultura zelo trajna. Organizacijska kultura je
            zakoreninjena v vrednotah, zato se težje spreminja, nastaja in se
            razvija počasi skozi zgodovino. Klima nastaja iz nekaterih istih
            elementov kot kultura, vendar je bolj površinska, saj se oblikuje in
            spremeni hitreje.
          </BodyText3>
        </Container>
      </Border_shadow>

      <NewParagraph></NewParagraph>

      <Container_border>
        <BodyText3>
          Spremembe na organizacijsko klimo vplivajo v kratkem času, medtem ko
          imajo na kulturo zelo težko takojšen učinek. Prav zato je redno
          merjenje in preverjanje organizacijske klime v organizaciji še kako
          pomembno.
        </BodyText3>
      </Container_border>

      <NewParagraph></NewParagraph>

      <Border_shadow>
        <Container>
          <Subtitle2>Vpliv organizacijske klime na uspešnost</Subtitle2>
          <NewParagraph></NewParagraph>
          <BodyText3>
            Z uspešnostjo organizacije mislim na njeno uspešnost in
            učinkovitost. Uspešnost in učinkovitost organizacije sicer nista
            enaka koncepta. Organizacija, ki želi biti dolgoročno uspešna, mora
            stremeti k obema kriterijema. Uspešnost je stopnja, do katere je
            organizacija dosegla svoje cilje. Učinkovitost organizacije
            izračunamo kot obseg porabljenih virov (denar, surovine, zaposleni
            in delovni čas) glede na dobljeni iztržek (ang. output). Ob
            presojanju uspešnosti in učinkovitosti poslovanja moramo imeti v
            mislih cilje organizacije. Danes se organizacije zavedajo pomena
            strank, zaposlenih in širše družbe. Ob presojanju uspešnosti in
            učinkovitosti organizacije moramo upoštevati vse deležnike
            (lastniki, zaposleni, menedžment, stranke,…).
          </BodyText3>
          <NewParagraph></NewParagraph>
          <Subtitle2>Spreminjanje organizacijske klime</Subtitle2>
          <NewParagraph></NewParagraph>
          <BodyText3
            dangerouslySetInnerHTML={{
              __html: `Organizacija se mora stalno prilagajati novim razmeram na trgu, da preživi. Z odpiranjem novih trgov in globalizacijo so spremembe v podjetjih postale neizbežne. Neustrezna organizacijska klima lahko ogrozi sam obstoj organizacije, če preveč otežuje prilagajanje spremembam. Zato morajo vodstvo organizacije dobro poznati klimo in odnos zaposlenih do sprememb v podjetju, ki se pripravljajo. Ustrezna komunikacija z zaposlenimi je nujen pogoj, da zaposleni spoznajo nujnost sprememb in jih vzamejo za svoje.<br/><br/>

Ustreznost obstoječe klime lahko ugotavljamo glede na cilje, ki jih želimo doseči. Če se zaposleni
vedejo v skladu s pričakovanji in potrebami organizacije, lahko razumemo, da je klima ustrezna. Če se zaposleni v organizaciji ne obnašajo v skladu s pričakovanji, lahko del vzrokov pripišemo neustrezni klimi.<b> Neustrezno klimo je potrebno nujno spremeniti!</b><br/><br/>

<b>Organizacijske klime ne smemo presojati z vidika lastne presoje</b>, kajti to je subjektivno mnenje
posameznika, ki ne daje objektivnih rezultatov. Vedno jo preučujemo s pomočjo vprašalnikov.<br/><br/>

Večino dimenzij klime ni mogoče reševati s predpisi, saj se s pravili in okrožnicami ne da urejati
medsebojnih odnosov. Na odnose z zaposlenimi in odnose vodja – delavec je mogoče vplivati in jih 
spreminjati samo preko pojasnjevanja, prepričevanja in dokazovanja. Zato se klima lahko hitro
spreminja le, če ljudje verjamejo in zaupajo v vodje, ki jim predlagajo različne aktivnosti. Najvažnejša naloga vodij je določevanje smeri, v katero naj bi podjetje šlo. Ter istočasno pridobiti pripadnost zaposlenih, da bodo šli v isto smer. To je mogoče storiti le z jasno vizijo, poslanstvom in strategijo. Le v tem primeru bo proces spreminjanja organizacijske klime stekel v želeno smer.`,
            }}
          ></BodyText3>{" "}
        </Container>
      </Border_shadow>

      <NewParagraph></NewParagraph>

      <Container_border>
        <BodyText3>
          Upravljanje z organizacijsko klimo je močno orodje. Rezultati klime so
          namreč eden tistih kazalcev, ki ne kažejo samo podatkov za preteklost,
          ampak nakazujejo trende za prihodnost.
        </BodyText3>
      </Container_border>

      <NewParagraph></NewParagraph>

      <BodyText3>
        Za vodje je dobro, da si ne dovolijo, da bi spregledali zametke težav.
        Analiza s strani zaposlenih je dober način za pridobitev širokega
        občutka prevladujočih misli, rezultati anket pa lahko služijo kot
        odskočna deska za programe, ki vključujejo večjo preglednost, večje
        sodelovanje, boljše sklajevanje talentov ali večji potencial za
        reševanje poslovnih vprašanj. Z ukrepi za zagotavljanje pozitivne
        kulture in zdrave klime lahko poslovodstvo premika podjetje naprej in
        izvaja preventivno vzdrževanje, ki je potrebno za povečanje poslovnih
        rezultatov.
      </BodyText3>

      <NewParagraph></NewParagraph>

      <Border_shadow>
        <Container>
          <Subtitle2>Zakaj torej meriti organizacijsko klimo?</Subtitle2>
          <NewParagraph></NewParagraph>

          <ul>
            <li>
              <BodyText3>
                Vemo, kje smo, zato lahko pravočasno ukrepamo.
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Pridobimo analitično preverjeno osnovo za izdelavo akcijskih
                načrtov izboljšav.
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Pridobimo osnovo za izdelavo programov usposabljanja in razvoja.
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Analiza stanja lahko služi kot podlaga za merjenje učinkovitosti
                kadrovske funkcije.
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Rezultate lahko vključimo kot kriterij za merjenje uspešnosti
                vodij.
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Pridobimo dobro podlago za vodenje letnih pogovorov.
              </BodyText3>
            </li>

            <li>
              <BodyText3>
                Krepimo zaupanje zaposlenih in naših poslovnih partnerjev.
              </BodyText3>
            </li>
            <li>
              <BodyText3>Krepimo pripadnost zaposlenih.</BodyText3>
            </li>
          </ul>
        </Container>
      </Border_shadow>
      <NewParagraph></NewParagraph>
    </Blog_page>
  );
};

export default Clanek3;
