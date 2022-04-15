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

const Clanek7 = () => {
  const blog_data = {
    title: "Načrtovanje razvoja sodelavcev",
    authors: [{ image: "/Team/enej.png", name: "Enej Klarič" }],
    image: "/clanki/7/image1.png",
    excerpt: `Dober proces razvoja zaposlenih je pomemben dejavnik pri zadržanju naših sodelavcev (retention), vendar le ti želijo sodoben pristop razvoja njihovih veščin. Zato naj bo usposabljanje ciljno usmerjeno in naj vsebuje tudi evaluacijo prenosa novega znanja v prakso. Usposabljanje zaposlenih bi moral iti v smeri razvoja sposobnosti za konkretne veščine in znanja, oblike pa naj bodo prilagojene preferencam vaših sodelavcev in njihovim kariernim ciljem.  `,
  };

  return (
    <Blog_page _data={blog_data}>
      <NewParagraph></NewParagraph>
      <Plain_text
        dangerouslySetInnerHTML={{
          __html: `Predno začnemo izvajati proces razvoja zaposlenih, je smiselno, da<b> pripravimo dobro osnovo</b> in celovit načrt. Rezultat ustreznega načrtovanja je predvsem bolj optimalna poraba časa naših sodelavcev in<b> nižji stroški izvajanja programa</b>, saj razvijamo samo tiste kompetenčne primanjkljaje, ki jih zares potrebujemo razvijati.  `,
        }}
      ></Plain_text>

      <NewParagraph></NewParagraph>

      <Border_shadow>
        <Container>
          <Subtitle2>Določevanje ciljev razvoja </Subtitle2>
          <NewRow></NewRow>
          <BodyText3
            dangerouslySetInnerHTML={{
              __html: `Predno začnemo pripravljati in razvijati razvojne pristope, je smiselno jasno<b> določiti in komunicirati</b>, kakšni so cilji, ki jih želimo s procesom razvojem doseči. Temeljna vprašanja, na katere si moramo odgovoriti, so: Kaj bo pridobila organizacija? Kaj bodo pridobili naši sodelavci?  Predvsem pa, kako je proces razvoja povezan in sinhroniziran s poslovno strategijo organizacije.  `,
            }}
          ></BodyText3>
          <NewParagraph></NewParagraph>

          <Subtitle2>Merjenje kompetenc in veščin </Subtitle2>
          <NewRow></NewRow>
          <BodyText3
            dangerouslySetInnerHTML={{
              __html: `Ocenjevanje trenutnih kompetenc, veščin in potenciala sodelavcev je dobro izhodišče za ugotavljanje vrzeli, ki jih želimo zapolniti preko razvojnega procesa. Postopek nam daje tudi dobro osnovo za<b> določanje primerne razvojne metode</b>, saj se nekatere veščine lažje razvija preko individualnih usposabljanj, kot sta mentorstvo ali coaching. Nekatere druge pa lažje razvijamo preko skupinskih treningov ali moderiranih delavnic. Pri tem je pomembno, da ne pozabimo<b> preveriti, kakšne so socialne kompetence</b> naših sodelavcev. Priporočamo uporabo DNLA sistema, saj ta natančno razkriva individualne kompetenčne vrzeli. `,
            }}
          ></BodyText3>
          <NewParagraph></NewParagraph>

          <Subtitle2>
            Povezovanje procesa razvoja s kariernimi cilji sodelavcev{" "}
          </Subtitle2>
          <NewRow></NewRow>
          <BodyText3
            dangerouslySetInnerHTML={{
              __html: `Motiv za pridobivanje novih znaj in veščin je močno povezan s potrebo po kariernem razvoju.  Sodelavci se bodo bistveno bolje odzvali na povabilo v programe razvoja, če bo to<b> koristilo njihovim kariernim ciljem</b>. Zato je smiselno načrtovati programe razvoja, ki bodi sodelavcem  pomagali pri pridobivanju kompetenc, potrebnih za doseganje njihovih kratkoročnih in dolgoročnih kariernih ciljev. Seveda pa je to možno povezati samo, če so v organizaciji predhodno vpeljani procesi načrtovanja karier in zaznave kariernih ambicij ključnih kadrov. <br/><br/>

Ob tem je potrebno upoštevati, da karierna napredovanja niso zgolj vertikalna, v smislu zasedanja vodstvenih delovnih mest. Karierni premiki so lahko tudi horizontalni na druga področja dela ali celo v druga podjetja znotraj poslovnih skupin, kar ustvarja nešteto kariernih priložnosti za vsakega zaposlenega. Zato je načrtovanje karier vsekakor pomemben  element pri načrtovanju razvoja sodelavcev.  `,
            }}
          ></BodyText3>
          <NewParagraph></NewParagraph>

          <Subtitle2>Določanje oblik razvoja sodelavcev </Subtitle2>
          <NewRow></NewRow>
          <BodyText3
            dangerouslySetInnerHTML={{
              __html: `Ko določamo sistem razvoja sodelavcev, so nam na voljo različni načini razvijanja njihovih kompetenc in veščin. <b>Mikro učenje</b> oziroma treningi, ki so kratki in trajajo do 10 minut, so se v praksi pokazali kot zelo učinkoviti. Ta način učenja omogoča, da se osredotočimo samo na najbolj pomembno veščino in nato osvojeno znanje takoj preizkusimo v praksi. V praksi se ga lahko najbolj podpre preko metode mentoriranja. V sedanjem času se vse bolj pojavljajo tudi<b> načini kombiniranega treninga</b>, ki sodelavcem omogoča izbor različnih oblik pridobivanja novih znanj. Nekaterim ustreza učenje preko branja, drugi potrebujejo bolj praktične pristope. Sodobni učni centri zato zagotavljajo sodelavcem kombiniranje različnih oblik usposabljanja, kjer so na voljo e-izobraževanje, usposobljeni mentorji, zunanji in notranji coaching programi, fokusne delavnice, platforme za deljenje znanj, učenje ob delu, demonstracijsko učenje ipd.<br/><br/>

Z boljšim razumevanje potreb in sodobnih trendov razvoja sodelavcem bodo organizacije v boljšem položaju, da izberejo tiste rešitve, ki jim bodo prinesle največ rezultata oziroma najbolje povrnile investicijo v razvoj svojih zaposlenih. `,
            }}
          ></BodyText3>
          <NewParagraph></NewParagraph>
        </Container>
      </Border_shadow>

      <NewParagraph></NewParagraph>
      <NewParagraph></NewParagraph>
    </Blog_page>
  );
};

export default Clanek7;
