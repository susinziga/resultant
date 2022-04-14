import React from "react";
import { BodyText3, Subtitle2 } from "../../basic_components/texts/Texts";
import Blog_page from "../../components/blog/Blog_page";
import Border_shadow from "../../components/blog/content_components/Border_shadow";
import Container from "../../components/blog/content_components/Container.styled";
import Image from "../../components/blog/content_components/Image";
import NewParagraph, {
  NewRow,
} from "../../components/blog/content_components/Margin.styled";
import Plain_text from "../../components/blog/content_components/Plain_text";

const Clanek1 = () => {
  const blog_data = {
    title: "Visoka zavzetost sodelavcev prinaša organizaciji veliko prednost",
    authors: [{ image: "/Team/Roman.png", name: "Roman Klarič" }],
    image: "/clanki/1/image1.png",
    excerpt:
      "Boljša učinkovitost timov, povečana produktivnost zaposlenih, manjša fluktuacija, doseganje ciljev oddelka in pridobivanje najboljših talentov, so »sanje« in cilj večine organizacij. Za dosego tega pa je potrebno razviti visok delež zavzetih zaposlenih.",
  };

  return (
    <Blog_page _data={blog_data}>
      <NewParagraph></NewParagraph>
      <Plain_text>
        Do nedavnega se je na področju upravljanja s človeškimi viri več
        pozornosti namenjalo teoriji in praksi spodbujanja zadovoljstva in
        zaupanja zaposlenih, vendar to področje ni bilo v neposredni in merljivi
        korelaciji z delovno uspešnostjo zaposlenih, kar naj bi ponujal prav
        koncept o zavzetosti zaposlenih.
      </Plain_text>
      <NewParagraph></NewParagraph>
      <Border_shadow>
        <Container>
          <Subtitle2>
            Vzroki za povečevanje ravni nezavzetosti na družbeni in individualni
            ravni:
          </Subtitle2>
          <NewRow></NewRow>
          <ul>
            <li>
              <BodyText3>
                Posamezniki iščejo novo ravnovesje med delom in prostim časom.
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Povečuje se neodvisen pristop do življenja in dela.
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Zaposleni določajo svojo identiteto in cilje skozi življenjski
                stil, ne skozi delo.
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Delo se ne spreminja skladno s spremenjenimi potrebami časa oz.
                načina življenja.
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Zaposleni v organizacijah nimajo dovolj priložnosti za učenje in
                osebno rast.
              </BodyText3>
            </li>

            <li>
              <BodyText3>
                Organizacije in vodje posvečajo premalo pozornost spodbujanju
                osebnega razvoja na individualni ravni vseh posameznikov in
                nimajo sistematično razvitih sistemov spremljanja napredka
                svojih zaposlenih.
              </BodyText3>
            </li>

            <li>
              <BodyText3>
                Na individualno nezavzetost zaposlenih pa vpliva predvsem
                premajhna vključenost v odločanje oz. poslovanje, nedostopnost
                vodstva, zaznavanje ranljivosti, pomanjkanje pozitivne
                zavezanosti do podjetja in problem medosebnih odnosov v
                organizaciji.
              </BodyText3>
            </li>
          </ul>
        </Container>
      </Border_shadow>
      <NewParagraph></NewParagraph>
      <Plain_text
        dangerouslySetInnerHTML={{
          __html: `Nezadovoljstvo s plačo oz. nagrajevanjem v nasprotju s splošnim prepričanjem ni glavni razlog za nezavzetost zaposlenih, temveč je za večino veliko pomembnejše to, kako jih vrednotijo najvišji vodilni – ali jih obravnavajo kot največje bogastvo podjetja ali zgolj kot nujno zlo. Ohranjanje in povečevanje nivoja zavzetosti zaposlenih je odvisno predvsem od tega, kako dobro <b> menedžment oz. vodstvo izpolnjuje njihove potrebe in pričakovanja </b> ter na tem področju zagotavlja oseben
stik med vodjo in zaposlenim (op.p. omenjena vsebina je zadnja leta najslabše ocenjena trditev v vseslovenski SiOK raziskavi zadovoljstva in zavzetosti zaposlenih).<br/><br/>
Tudi rezultati medgeneracijskih razlik v zavzetosti govorijo v prid temu dejstvu, naj <b> delodajalci ne podcenjujejo starejših in izkušenih zaposlenih</b>, temveč razmislijo o različnih možnostih zadržanja svoje najbolj lojalne in zavzete delovne sile (npr. polovični delovni čas in druge fleksibilne delovne ureditve, prilagodljivi delovni procesi in naloge ipd.).`,
        }}
      ></Plain_text>
      <NewParagraph></NewParagraph>
      <Border_shadow>
        <Container>
          <Subtitle2>Zavzeti zaposleni namreč želijo:</Subtitle2>
          <NewRow></NewRow>
          <ul>
            <li>
              <BodyText3>
                ravnosvesje med delovnim in življenskim stilom ter fleksibilno
                delo
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                odlično vodstvo, ki izkazuje spoštovanje in zaupanje
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                sodelovanje pri odločanju in več avtonomije pri delu
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                delo z vodilnimi v njihovi industriji (stranke, dobavitelji) in
                z ljudmi, ki navdihujejo
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                delo na pomembnih projektih, kjer lahko dokazujejo svojo
                mojstrstvo in strokovnost
              </BodyText3>
            </li>

            <li>
              <BodyText3>priložnost za vodenje drugih</BodyText3>
            </li>

            <li>
              <BodyText3>priznavanje idej in odprto komunikacijo</BodyText3>
            </li>

            <li>
              <BodyText3>spodbudno delovno okolje</BodyText3>
            </li>

            <li>
              <BodyText3>mednarodne priložnosti</BodyText3>
            </li>

            <li>
              <BodyText3>pozitivne povratne informacije</BodyText3>
            </li>
            <li>
              <BodyText3>
                s strani delodajalca sponzoriran individualni razvoj,
                fleksibilne finančne ugodnosti, možnosti napredovanja ipd.
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                jasno definirana pričakovanja in povratno informacijo o
                doseganju pričakovanj s strani vodje
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                tesno povezanost s sodelavci v timu in transparenten odnos med
                člani tima
              </BodyText3>
            </li>
            <NewRow></NewRow>
            <BodyText3
              dangerouslySetInnerHTML={{
                __html: `Raziskave so pokazale, da obstaja <b> pozitivna korelacija med večjo zavzetostjo in
večjo uspešnostjo (poslovnimi rezultati)</b>, ki se kaže v:`,
              }}
            ></BodyText3>
            <NewRow></NewRow>
            <li>
              <BodyText3>
                dejavnikih zadovoljstva zaposlenih in lojalnosti strank
              </BodyText3>
            </li>
            <li>
              <BodyText3>večji učinkovitosti in produktivnosti</BodyText3>
            </li>
            <li>
              <BodyText3>večjemu dobičku oz. prihodkih</BodyText3>
            </li>
            <li>
              <BodyText3>nižji fluktuaciji</BodyText3>
            </li>
            <li>
              <BodyText3>
                manjšem absentizmu (izostajanje z dela) in večjemu prezentizmu
                (prisotnost zgolj zaradi bojazni pred izgubo službe)
              </BodyText3>
            </li>
            <li>
              <BodyText3>manjšim številom nesreč pri delu</BodyText3>
            </li>
            <li>
              <BodyText3>boljši kakovosti dela</BodyText3>
            </li>
            <li>
              <BodyText3>
                večjim koeficientom TSR (Total Shareholder Return).
              </BodyText3>
            </li>
          </ul>
        </Container>
      </Border_shadow>
      <NewParagraph></NewParagraph>

      <Plain_text
        dangerouslySetInnerHTML={{
          __html: `Če podjetje želi izboljšati zavzetost in poslovne učinke, je nujno potrebno, da je<b>koncept zavzetosti zaposlenih</b>(in na drugi strani tudi zavzetosti strank oz. kupcev),<b> neposredno in učinkovito povezan s celovitim upravljanjem delovne uspešnosti in z dejavniki upravljanja odnosov s kupci</b>, kajti na ta način tudi vodje pridobijo interes za izvajanje različnih programov spodbujanja zadovoljstva in
zavzetosti zaposlenih.<br/><br/>

Povezavo zadovoljstva zaposlenih in delovne uspešnosti oz.<b>kombinacijo visokega zadovoljstva zaposlenih in visoke delovne uspešnosti lahko označimo kot zavzetost zaposlenih</b> - gre namreč za okolje in posameznike, ki so se pripravljeni maksimalno angažirati za opazne in merljive poslovne rezultate (ob predpogoju nujnega zaupanja zaposlenih v vodstvo, sodelavce in celotno organizacijo).<br/><br/>

Osnovni cilj današnjih organizacij je torej jasen: kako povečati produktivnost -
kako bolje upravljati človeške potenciale z namenom doseči njihovo maksimalno angažiranost in zavzetost?  <b>Rešitev je v spodbujanju inovacijskih sposobnosti zaposlenih in v drugačnem ravnanju z zaposlenimi, kjer zaposlenega ne obravnavamo samo kot najpomembnejši vir </b>(op.p. je torej še vedno samo vir),
temveč smo <b>osredotočeni v zagotavljanje kar najvišje izkušnje zaposlenega </b>z organizacijo (t.i. employee experience) <b>oz. v celostni razvoj človeških potencialov </b>(t.i. human experience), o čemer več v kakšni od prihodnjih prispevkov.`,
        }}
      ></Plain_text>

      <NewParagraph></NewParagraph>

      <Border_shadow>
        <Container>
          <Subtitle2>
            Kakšno pa je stanje glede zavzetosti v slovenskih organizacijah?
          </Subtitle2>
          <NewParagraph></NewParagraph>
          <BodyText3
            dangerouslySetInnerHTML={{
              __html: `Zelo zanimiv podatek je tudi, kakšen je delež zavzetih in nezavzetih sodelavcev v slovenskih organizacijah v zadnjih treh letih. Aktivno nezavzeti zaposleni niso le nezadovoljni na delovnem mestu, še več, svoje nezadovoljstvo tudi aktivno izkazujejo. Te zaposleni vsak dan rušijo vse dobro, kar ustvarijo zavzeti zaposleni.<br/><br/>

Skladno s podatki iz raziskave slovenske organizacijske klime je ta podatek prikazan v spodnjem grafikonu, delež zavzetih sodelavcev pa je še vedno na nizkem nivoju (dobra četrtina vseh zaposlenih), sicer primerljivem s stanjem v drugih evropskih državah. Več o tem pa v kakšnem od prihodnjih prispevkov.`,
            }}
          ></BodyText3>
          <NewParagraph></NewParagraph>
          <Image
            src="/clanki/1/SiOK 2_graf1.png"
            label="Vir: SiOK (slovenska organizacijska klima), vzorec = 18.500 zaposlenih v slovenskih organizacijah iz
različnih dejavnosti / Resultant d.o.o."
          ></Image>
          <NewParagraph></NewParagraph>

          <BodyText3
            dangerouslySetInnerHTML={{
              __html: `Zelo zanimiv podatek je tudi, kakšen je delež zavzetih in nezavzetih sodelavcev v slovenskih organizacijah v zadnjih treh letih. Aktivno nezavzeti zaposleni niso le nezadovoljni na delovnem mestu, še več, svoje nezadovoljstvo tudi aktivno izkazujejo. Te zaposleni vsak dan rušijo vse dobro, kar ustvarijo zavzeti zaposleni.<br/><br/>

Skladno s podatki iz raziskave slovenske organizacijske klime je ta podatek prikazan v spodnjem grafikonu, delež zavzetih sodelavcev pa je še vedno na nizkem nivoju (dobra četrtina vseh zaposlenih), sicer primerljivem s stanjem v drugih evropskih državah. Več o tem pa v kakšnem od prihodnjih prispevkov.`,
            }}
          ></BodyText3>
          <NewParagraph></NewParagraph>
          <Subtitle2>
            Katera pa so priporočila in možni ukrepi za povečevanje zavzetosti
            zaposlenih:
          </Subtitle2>
          <NewParagraph></NewParagraph>
          <ul>
            <li>
              <BodyText3>
                Opredelitev vizije podjetja, ki zaposlene motivira.
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Razvijanje jasne blagovne znamke delodajalca ter zaposlovanje in
                delovanje v skladu z njo.
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Spodbujanje odprte komunikacije med zaposlenimi!!!
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Sodelovanje zaposlenih v procesu poslovnega odločanja (možnost
                vplivanja na poslovanje podjetja z lastnimi kreativnimi
                rešitvami in predlogi).
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Prilagoditev kadrovskih procesov in praks posamezniku.
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Spodbujanje razvoja in uspešnosti linijskih menedžerjev na
                področju upravljanja z ljudmi.
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Uporaba različnih stilov vodenja glede na različne stopnje
                razvoja zaposlenih.
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Omogočanje fleksibilnega delovnega časa in fleksibilnih bonitet.
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Merjenje zavzetosti in ukrepanje glede na rezultate.
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Ustvarjanje vrednostne ponudbe oz. potenciala za zaposlene (t.i.
                »Employee Value Proposition« - EVP), ki je kombinacija
                dejavnikov, ki povzročijo, da je delovno mesto za posameznika
                edinstveno in zaželeno (Organizacija oz. njena blagovna znamka +
                Delo + Nagrajevanje + Delovno okolje / Kultura podjetja =
                Ravnovesje med delom in prostim časom).
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Razumevanje, da v organizaciji obstajajo številne EVP za
                različne skupine posameznikov (posameznikova EVP se spreminja
                hkrati s kariero, življenjskim stilom, leti, pričakovanji), zato
                naj bi se tudi organizacijska EVP prilagajala in izražala v vseh
                kadrovskih procesih.
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Zavedanje, da uporaba enovitega globalnega pristopa povečevanja
                delovne zavzetosti ne bo vedno uspešna, saj na zavzetost
                zaposlenih v različnih državah po svetu vplivajo zelo različni
                dejavniki.
              </BodyText3>
            </li>
          </ul>
        </Container>
      </Border_shadow>
      <NewParagraph></NewParagraph>
      <Plain_text
        dangerouslySetInnerHTML={{
          __html: `Za dolgoročni uspeh je bistveno <b>stalno izboljševanje kakovosti odnosov med vodji, menedžmentom in zaposlenim </b>(jasno opredeljevanje pričakovanj in ciljev, iskrena skrb za zaposlene, prepoznavanje in spodbujanje dosežkov, upoštevanje mnenj in idej zaposlenih).
Ključno vlogo v povečanju deleža zaposlenih v organizacijah morajo prevzemati neposredni vodje ob podpori inovativnih kadrovsko razvojnih sistemov in orodij ter organizacijskih pristopov, usmerjenih v izboljševanje izkušnje zaposlenih.<br/><br/>

Ključno vprašanje je torej, ali ima organizacija take sisteme in orodja razvite in vpeljane ter ali so vodje dovolj usposobljeni, da lahko te principe izvajajo v svoji vsakodnevni praksi.<br/><br/>

Gre za uveljavljanje koncepta zavzetosti zaposlenih pri organizacijskih vodjih, ki pa zahteva, da vodje zelo spremenijo svojo tradicionalno miselnost in slog vodenja oz. ravnanja z ljudmi. <b>Demokratizacija odločanja namreč </b>pomeni, da so se vodje prisiljeni v veliko večji meri posvetovati z zaposlenimi že v fazi načrtovanja in sprejemanja poslovnih strategij, kar zahteva tudi spremembo prijemov in taktik pri komuniciranju z zaposlenimi - gre namreč za <b>aktivno pritegnitev zaposlenih </b>, da prispevajo k spremembam in sodelujejo pri implementaciji odločitev oz.
proaktivno soustvarjajo spremembe. Zavzetost zaposlenih tudi ni (kot menijo mnogi vodje) nekaj samo po sebi umevnega, ampak je del vsakodnevnih navad in prakse vodenja, zato so zopet vodje tisti, ki z ustrezno (interno) komunikacijo zagotavljajo predpogoje in ustrezno klimo za uveljavitev koncepta zavzetosti zaposlenih.<br/><br/>

Zavzetost v povezavi z uspešnostjo poslovanja postaja novo objektivnejše merilo, ki zanesljivo napoveduje tudi uspešen finančni rezultat, kar je dejavnik, ki zanima tudi menedžment oz. vodstvo podjetja. Uspešni vodje bodo morali svoje delovanje usmeriti ne le v boljše upravljanje poslovnih procesov, temveč v maksimiranje zavzetosti zaposlenih, kar pomeni tudi, da upravljanje kadrov in
njihovega celovitega potenciala postaja obvezen poslovni podsistem, ki ga bo nujno potrebno integrirati v vse nove poslovne modele in kadrovsko razvojne sisteme organizacij in njihovih ekosistemov, v katerih le-te delujejo.`,
        }}
      ></Plain_text>
    </Blog_page>
  );
};

export default Clanek1;
