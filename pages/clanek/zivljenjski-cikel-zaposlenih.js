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

const Clanek11 = () => {
  const blog_data = {
    title: "Življenjski cikel zaposlenih",
    authors: [{ image: "/Team/Roman.png", name: "Roman Klarič" }],
    image: "/clanki/11/image1.png",
    excerpt: `Osnovna vloga kadrovske službe je skrb za zaposlene od njihovega vstopa v organizacijo do konca njihove zaposlitve. Ali povedano drugače skrbeti za celoten življenjski cikel zaposlenega na način, da bo to potovanje zaposlenim zagotavljalo odlično osebno izkušnjo. Ob tem pa stalno slediti vrednotam podjetja in podpirati želeno organizacijsko kulturo.   `,
  };

  return (
    <Blog_page _data={blog_data}>
      <NewParagraph></NewParagraph>

      <Plain_text
        dangerouslySetInnerHTML={{
          __html: `Podjetja skozi različne oblike, kot so merjenje organizacijske klime, zavzetosti zaposlenih ali analizo organizacijske kulture, pridobivajo mnenja zaposlenih, kaj v podjetju dobro deluje in kaj ne. Osnovni namen je natančno ugotoviti, katere komponente manjkajo ali slabše delujejo v celotnem procesu upravljanja z izkušnjo zaposlenih ter jih pravočasno razviti.  S tem zagotovimo, da bo celotni življenjski cikel zaposlenega podprt z dobrimi poslovnimi praksami, ki zagotavljajo visoko stopnjo zavzetosti sodelavcev. V poslovni praksi obstajajo različne definicije življenjskega cikla zaposlenega, vsaka organizacija pa k temu pristopa na drugačen, sebi najustreznejši način. V najširši obliki pa jih lahko nanizamo skozi naslednje elemente.<br/><br/>

1. Privlačnost blagovne znamke delodajalca (Attraction)<br/>
2. Zaposlovanje (Recruitment)<br/>
3. Vpeljevanje  v delo (Onboarding)<br/>
4. Razvoj (Development)<br/>
5. Zadržanje (Retention)<br/>
6. Napredovanje ali izstop (Promotion or exit)`,
        }}
      ></Plain_text>
      <NewParagraph></NewParagraph>

      <Container>
        <Subtitle2>Privlačnost blagovne znamke delodajalca</Subtitle2>
        <NewRow></NewRow>

        <BodyText3
          dangerouslySetInnerHTML={{
            __html: `Eden od pogojev za pozitivno izkušnjo zaposlenih je, da na samem začetku sodelovanja z novim sodelavcem <b>vzpostavimo ustrezna vzajemna pričakovanja</b>. Če organizacija jasno izraža, kako deluje s svojimi zaposlenimi, potem se redko dogodi, da so sodelavci razočarani. Če zaposleni ob tem tudi jasno ve, katere postopke in procese lahko pričakuje v podjetju in kakšna so pričakovanja organizacije na njegovi karierni poti, potem je običajno tudi visoko motiviran. Odnos z zaposlenimi se torej<b> začne, še predno pride v organizacijo</b>. Začne se, ko se kandidati za zaposlitev srečajo z blagovno znamko delodajalca in začenjajo spoznavati vrednote, ki jih goji organizacija. Ravno zato je potrebno močno krepiti blagovno znamko dobrega delodajalca tako zunaj organizacije kot tudi znotraj nje.  Ob tem je potrebno jasno povedati, da pri tem<b> ne gre za pridobivanje zlatih plaket odličnega delodajalca</b>, ampak za sistematičen razvoj želene<b> sodobne organizacijske kulture, ki jo potem organizacija izžareva navzven</b>. Žal v naši poslovni praksi prepogosto opazujemo, da se k prepoznavi ovir v notranjem okolju pristopa z necelovitimi orodji analiziranja, ki ne dajejo poglobljene in natančne informacije, ampak to je že druga tema. `,
          }}
        ></BodyText3>
      </Container>

      <NewParagraph></NewParagraph>

      <Container_border>
        <BodyText3>
          Podatki kažejo, da kar 60% potencialnih kandidatov uporabi socialne
          medije za preverjanje organizacije, predno oddajo svojo vlogo. Bolj
          kot priznanja jih zanimajo osebne izkušnje oseb, ki delajo v
          organizaciji ali pa so v poslovnem odnosu z njo. Zato je smiselno, da
          se bolj kot na priznanja osredotočimo na gradnjo celovitih izkušenj
          deležnikov z našo organizacijo in primerno organizacijsko kulturo, ki
          bo privlačna za sodelavce in iskalce zaposlitve.{" "}
        </BodyText3>
      </Container_border>

      <NewParagraph></NewParagraph>

      <Border_shadow>
        <Container>
          <Subtitle2>Zaposlovanje</Subtitle2>
          <NewRow></NewRow>
          <BodyText3>
            Zaposlovanje je naslednji korak v življenju zaposlenega. Dolgih
            intervjujev ter zapletenih psiholoških testiranj že dolgo ni več.
            Danes je pomembna agilnost in zanimivost celotnega procesa
            zaposlovanja. Danes najboljši talenti izbirajo organizacijo in ne
            obratno. Vsekakor priporočam izvedbo postopka merjenja osebnega
            potenciala novega sodelavca, saj je to koristno tako zanj kot tudi
            za organizacijo. Vendar gre v tem postopku bolj za spoznavanje
            novega sodelavca in njegov razvojni vidik, ne samo postopek
            razvrščanja prosilcev. Kakorkoli, v tem delu procesa nov sodelavec
            iz prve roke izkusi, kakšna je kultura podjetja v njegovi novi
            organizaciji. Izkušnjo z organizacijo pa pridobijo tudi tisti
            kandidati, ki niso bili izbrani, zato morajo tudi v tem delu
            postopki biti izpeljani na način, da ne bodo diskreditirali dobre
            blagovne znamke delodajalca.{" "}
          </BodyText3>
          <NewParagraph></NewParagraph>

          <Subtitle2>Vpeljevanje v delo</Subtitle2>
          <NewRow></NewRow>
          <BodyText3>
            Gre za proces, ki je za novega sodelavca najbolj stresen in močno
            definira, kakšno bo sodelovanje v prihodnje. V tem delu se gradi
            čustvena vez med podjetjem in novim sodelavcem. Nova oseba si v tem
            procesu ustvari splošen vtis o organizaciji, njeni kulturi ter
            vrednostnem sistemu. Te informacije in izkušnje pa intenzivno
            prenese tudi v zunanje okolje. Ta integracija zaposlenega v podjetje
            lahko traja tudi nekaj tednov ali mesecev, odvisno od kompleksnosti
            delovanja organizacije. Cel ta čas se novi sodelavec uči, kako
            deluje podjetje in kateri so kriteriji uspeha. Gre za njegovo
            celostno integracijo v življenje tima in organizacije, ki močno
            definira njegovo kasnejšo vlogo, delovanje in motivacijo. »Kar se
            Janezek nauči, to Janez zna.« Zato si moramo prizadevati, da ta
            integracija poteka nadzorovano, sistematično in ob pravem vodstvu
            usposobljenega mentorja.{" "}
          </BodyText3>
          <NewParagraph></NewParagraph>

          <Subtitle2>Razvoj</Subtitle2>
          <NewRow></NewRow>
          <BodyText3>
            Vlaganje v razvoj zaposlenih je seveda pomembno. Vendar mora priti
            ob pravem času in imeti prave namene. Pri tem pa je ključno, da je
            razvoj popolnoma usklajen s pričakovanimi cilji, ki jih organizacija
            zahteva od sodelavca, ter ustrezno sinhroniziran z njegovimi
            pričakovanji. Še posebej, če gre za ključne kadre, mlade potenciale
            ali potencialne naslednike. Graditi bi morali sodoben sistem razvoja
            zaposlenih, ki je sodelavcem v pomoč pri pridobivanju novih
            kompetenc, da lahko svojo poslovno vlogo ustrezno in učinkovito
            opravlja.{" "}
          </BodyText3>
          <NewParagraph></NewParagraph>

          <Subtitle2>Zadržanje</Subtitle2>
          <NewRow></NewRow>
          <BodyText3>
            Gre za najpomembnejšo fazo v življenjskem ciklu zaposlenega. V tem
            delu gre za skupek več procesov upravljanja zaposlenih, kot je
            neposredno vodenje, nagrajevanje, zagotavljanje kariernih možnosti,
            zagotavljaje optimalnih pogojev za delo in upravljanje uspešnosti. V
            osnovi je cilj zagotavljati visoko motiviranost zaposlenega in
            visoko zavzetost, ki vodi k večji pripadnosti sodelavca. Oziroma
            povedano drugače, gre za trdo delo pri izboljševanju celovite
            izkušnje zaposlenega. V življenju vsakega človeka je nagrada in
            priznanje za njegovo delo zelo pomemben element motivacije. Za svojo
            delovno uspešnost moramo prejeti tudi denarne in nefinančne nagrade,
            predvsem pa moramo nagrajevanje zaznavati kot pravično. Upravljanje
            uspešnosti je pogosto pozabljeno. Vendar ne gre le za ohranjanje
            visoke delovne učinkovitosti. Gre tudi za iskanje novih priložnosti
            za osebno rast in karierni razvoj. Organizacija mora sodelavcem pri
            tem pomagati.{" "}
          </BodyText3>
          <NewParagraph></NewParagraph>

          <Subtitle2>Napredovanje ali izstop</Subtitle2>
          <NewRow></NewRow>
          <BodyText3>
            Zadnji korak v življenjskem ciklu zaposlenega je napredovanje ali
            izstop. Seveda je v organizaciji potrebno graditi sodobne modele
            kariernega napredovanja in nasledstva, da se prednostno v tej fazi
            lahko uporabijo pristopi napredovanja. Vendar se vsak cikel v neki
            točki konča, sodelavci se ali upokojijo ali pa se odločijo, da
            zapustijo organizacijo. Izredno pomemben je način, kako se
            organizacija od sodelavcev poslovi. Tudi ta proces lahko pusti
            pozitiven ali negativen pečat na privlačnost delodajalca in ugled
            blagovne znamke.{" "}
          </BodyText3>
          <NewParagraph></NewParagraph>
        </Container>
      </Border_shadow>

      <NewParagraph></NewParagraph>
      <NewParagraph></NewParagraph>
    </Blog_page>
  );
};

export default Clanek11;
