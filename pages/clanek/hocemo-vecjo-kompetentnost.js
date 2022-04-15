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

const Clanek8 = () => {
  const blog_data = {
    title: "Hočemo večjo kompetentnost! ",
    authors: [{ image: "/Team/Roman.png", name: "Roman Klarič" }],
    image: "/clanki/8/image1.png",
    excerpt: `Rast! Produktivnost! Boljša sposobnost obvladovanja sprememb! Prilagajanje organizacije  na zahtevne pogoje današnjega časa! Vse te besede v zadnjem času dominirajo v večini strokovnih člankov na temo razvoja kompetenc. In zares držijo. Morda je čas, da tudi v vašem podjetju svoj kadrovski fokus usmerite v razvoj sodobnih kompetenc sedanjega časa. Odlični zaposleni se vedno zanimajo za učenje novih stvari in razširitev svojih veščin. Še posebej v tem času, ko se moramo vedno bolj prilagajati zahtevam digitalne ekonomije in njenim značilnostim. Predstavljam vam nekaj idej in pogledov, ki so vam lahko v pomoč.  `,
  };

  return (
    <Blog_page _data={blog_data}>
      <NewParagraph></NewParagraph>
      <Plain_text
        dangerouslySetInnerHTML={{
          __html: `Brez konkurenčnosti nobeno podjetje ne more dolgoročno preživeti. Kruta realnost danes je taka, da če se podjetje ni sposobno izboriti za svoj tržni delež, postopoma oslabi, virov zmanjka, ustavijo se inovacije. Podjetje sicer lahko nekaj časa deluje zaradi inercije, vendar počasi ugaša in izgublja svojo moč na trgu. Najboljši zaposleni odhajajo v bolj perspektivne organizacije in s tem samo pospešijo ugašanje podjetja.<br/><br/>

          Ravno zato je vitalnega pomena, da podjetje svoje zaposlene<b> potiska izven cone udobja</b> ter jih vzpodbuja k aktivnemu preizkušanju novih stvari in inovacijam pri delu. S tem se neposredno ustvarja kultura inoviranja, ki neposredno vodi k višji konkurenčnosti. Super? Seveda je super, vendar se moramo ob tem zavedati, da lahko samo visoko kompetentni in z znanjem opremljeni zaposleni stopijo izven cone udobja. `,
        }}
      ></Plain_text>

      <NewParagraph></NewParagraph>

      <Border_shadow>
        <Container>
          <Subtitle2>
            Kako lahko k temu pripevajo HR oddelki in kadrovski strokovnjaki.{" "}
          </Subtitle2>
          <NewRow></NewRow>
          <BodyText3
            dangerouslySetInnerHTML={{
              __html: `V prvi vrsti moramo poskrbeti, da <b>vzpostavljamo pravo kulturo in vgrajujemo ustrezne korporativne vrednote</b>. Skupaj z vodilnimi v podjetju moramo ustvariti nove energijske impulze in pobude, da začnejo zaposleni ponovno rasti in se energija ponovno povečuje. Predvsem na način, da se v podjetje začne stekati novo znanje, nove ideje ter da se celovito sprosti in uporabi ves potencial, ki ga v sebi nosijo zaposleni. Eureka. Tako je,<b> povečati je potrebno kompetentnost organizacije!</b> `,
            }}
          ></BodyText3>
          <NewParagraph></NewParagraph>

          <Subtitle2>Izgradite dober temelj </Subtitle2>
          <NewRow></NewRow>
          <BodyText3
            dangerouslySetInnerHTML={{
              __html: `Predno začnete z razvojem in pripravite predlog usposabljanj za izgradnjo novih znanj v podjetju, je dobro<b> natančno vedeti, kaj oddelki in zaposleni zares potrebujejo</b>, da bodo opremljeni za nove zahteve poslovnega okolja. In ta domača naloga se po mojih izkušnjah ne naredi dovolj natančno. Zato pogosto pridemo do tistega negativnega učinka, ki ga analitiki in obdelovalci podatkov prepoznajo pod nazivom »garbage in garbage out«. Mogoče je vredno razmisliti, da si v tem delu zagotovite ustrezno pomoč od zunaj, saj vam to pogosto prinese tudi svež in neobremenjen pogled na potrebne spremembe. <br/><br/>

              Izgradnja sodobnega modela kompetenc, primernega sedanjim in bodočim poslovnim zahtevam, ni enostavna naloga. Sploh, če se zavedamo, da današnji čas digitalne ekonomije prinaša popolnoma nove zahteve. Če model kompetenc ni dovolj strokovno pripravljen, precej tvegamo. 
              
              <br/><br/>Nekatera možna tveganja so naslednja:
              `,
            }}
          ></BodyText3>
          <NewRow></NewRow>
          <ul>
            <li>
              <BodyText3>
                razvijate nekaj, kar zaposleni in organizacija ne potrebuje
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                frustrirate svoje zaposlene z usposabljanjem, ki ga ne morejo
                (ali ne želijo) prenesti v prakso
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                ustvarjate oportunitetne stroške (odsotnost z dela)
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                tvegate, da bo konkurenca razvila bolj prava znanja
              </BodyText3>
            </li>
          </ul>
          <NewParagraph></NewParagraph>

          <Subtitle2>Interna promocija </Subtitle2>
          <NewRow></NewRow>
          <BodyText3
            dangerouslySetInnerHTML={{
              __html: `Vedno je dobro, da se držite načela: »Učitelj pride, ko je učenec pripravljen.« Zato je zelo pomemben del uvajanja modela kompetenc tudi<b> interna promocija koncepta kompetenc</b>. Priporočamo, da skozi različne kanale in orodja internega komuniciranja poskrbi za to, da sodelavci razumejo, zakaj je smiselno in potrebno nadgrajevati kompetence in razvijati nova znanja ter veščine. Potrebno je posredovati jasno sporočilo sodelavcem, da se je poslovno okolje spremenilo in so pričakovanja naših strank drugačna.  Pri tem vam je lahko v veliko pomoč tudi vaša služba za interno komuniciranje.    `,
            }}
          ></BodyText3>
          <NewParagraph></NewParagraph>

          <Subtitle2>Pristop k učenju </Subtitle2>
          <NewRow></NewRow>
          <BodyText3
            dangerouslySetInnerHTML={{
              __html: `Nekateri pristopi k učenju v nekaterih podjetjih delujejo, v nekaterih ne. Enostavno zato, ker so tudi organizacijske kulture in dinamike v podjetjih različne. Kar nekomu prinaša uspeh, drugemu lahko predstavlja poslovno motnjo in zapravljeno investicijo. Naredite nekaj raziskav tržišča, da<b> zagotovite sebi najprimernejše vire in načine razvoja kompetenc</b>. Širite svoje obzorje, na tržišču je veliko odličnih možnosti in nove ponudbe, ki je mogoče najbolj primerna ravno za vaše potrebe. Na zapravljajte denarja za programe, ki jih vaši sodelavci ne bodo sprejemali. Če najamete najbolj »razvpite zunanje izvajalce in trenerje,« še ne pomeni, da bodo kompetence vaše organizacije posledično tudi dobro razvite. `,
            }}
          ></BodyText3>
          <NewParagraph></NewParagraph>

          <Subtitle2>Soustvajanje programov </Subtitle2>
          <NewRow></NewRow>
          <BodyText3
            dangerouslySetInnerHTML={{
              __html: `Dovolite svojim zaposlenim (pri tem mislimo na vse deležnike notranjega okolja), da sodelujejo v pripravi vsebin in programov. Soustvarjajte programe skupaj, saj vaši zaposleni najbolje vedo, kaj potrebujejo pri doseganju svojih kariernih ciljev.<b> Povprašajte svoje kupce</b>, kakšna je njihova izkušnja z organizacijo, in odpravite izzive z dotokom novih znanj in vsebin.<br/><br/>
    
              Kombinirajte različne oblike in metode razvoja zaposlenih. Ponudite različne možnosti in več oblik usposabljanja in razvoja kompetenc. In različne kanale, od klasičnih učilniških pristopov do virtualnih platform za učenje in deljenje vsebin. Pesonaliziran pristop pri osebnem razvoju tudi dviguje izkušnjo zaposlenega. Nekaterim vašim sodelavcem je mogoče bližja oblika coachinga, drugi najbolj uživajo, ko znanje »vpijajo od svojega mentorja«. Drugim je boljša oblika razvoja preko kreativnih delavnic, kjer se neposredno rešujejo izzivi in pripravljajo kreativne rešitve. Vprašajte se, ali zares veste, katere oblike razvoja bolj motivirajo posameznike v vaši organizaciji.<b> Če pravega motiva ni, tudi znanje ne bo preneseno v prakso</b>. Pri izboru primernih oblik upoštevajte tudi generacijske razlike.  
              `,
            }}
          ></BodyText3>
          <NewParagraph></NewParagraph>

          <Subtitle2>Razvojni impulz za inoviranje </Subtitle2>
          <NewRow></NewRow>
          <BodyText3>
            Razvijanje kompetenc zahteva več kot opredelitev in zapis, katera
            znanja in veščine mora imeti posamezna poslovna vloga. Čeprav je to
            tudi pomembno. Bolj ključno pa je, da se jasno ve, katere
            funkcionalne kompetence bodo zaposlenim dale dovolj inpulza, da bodo
            bolj inovativni na svojem delovnem mestu in kakšna oblika razvoja
            teh kompetenc bo prinesla dejansko uporabo novih znanj v poslovno
            prakso vsakega posameznika. Tako boste lažje dosegli cilj, zapisan v
            današnjem naslovu, in dobili večjo kompetentnost.{" "}
          </BodyText3>
        </Container>
      </Border_shadow>

      <NewParagraph></NewParagraph>
      <NewParagraph></NewParagraph>
    </Blog_page>
  );
};

export default Clanek8;
