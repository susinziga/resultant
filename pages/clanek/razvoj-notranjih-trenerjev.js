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

const Clanek6 = () => {
  const blog_data = {
    title: "Razvoj notranjih trenerjev",
    authors: [{ image: "/Team/Roman.webp", name: "Roman Klarič" }],
    image: "/clanki/6/image1.webp",
    excerpt: `V današnjem času se pogosto postavljajo vprašanja smiselnosti vzpostavitve notranjega usposabljanja. Notranji trenerji imajo lahko zelo učinkovito vlogo pri razvoju sodelavcev in pri uvajanju kulturoloških sprememb v organizacije. Pogoj za to je njihova primerna usposobljenost ter da je njihov načrt razvijanja kompetenc in veščin usklajen s poslovno strategijo organizacije. `,
  };

  return (
    <Blog_page _data={blog_data}>
      <NewParagraph></NewParagraph>
      <Plain_text
        dangerouslySetInnerHTML={{
          __html: `Dejstvo je, da so poleg vodij ravno notranji trenerji in mentorji lahko najboljši ambasadorji razvoja sodobne organizacijske kulture. Organizacije si pogosto prizadevajo, da bi koristi razvoja in uveljavitve novih organizacijskih kultur prenesle na vse nivoje v hierarhični strukturi. Pri tem si želijo vzpostaviti trdno kulturo učinkovitosti, efektivno reševanje problemskih situacij in doseči ciljno usmerjenost zaposlenih. Tu nastopi<b> notranje treniranje</b> - ideja, da je razvijanje znanj, veščin in kompetenc preko notranjega usposabljanja stroškovno učinkovitejše in boljše za organizacijo. Seveda s popolno podporo vodstvenih struktur. `,
        }}
      ></Plain_text>

      <NewParagraph></NewParagraph>

      <Border_shadow>
        <Container>
          <Subtitle2>Koristi in cilji notranjega treniranja </Subtitle2>
          <NewRow></NewRow>
          <BodyText3>
            Koristi in cilji učinkovitega notranjega usposabljanja so po naših
            izkušnjah najpogosteje:
          </BodyText3>
          <NewRow></NewRow>
          <ul>
            <li>
              <BodyText3>razvoj notranjih talentov,</BodyText3>
            </li>
            <li>
              <BodyText3>večja digitalna pismenost sodelavcev,</BodyText3>
            </li>
            <li>
              <BodyText3>
                priprava ključnih kadrov na prevzemanje vodstvenih položajev ali
                pomembnejših (operativnih) delovnih mest,
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                usposabljanje novo zaposlenih pri uvajanju v organizacije
                (onboarding),
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                uvajanje specifičnih znanj, veščin in kompetenc na širši krog
                sodelavcev,
              </BodyText3>
            </li>
            <li>
              <BodyText3>razvoj kariernih poti zaposlenih,</BodyText3>
            </li>
            <li>
              <BodyText3>
                povečevanje direktnega vplivanja na doseganje (individualne in
                timske) učinkovitosti,
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                direkten vpliv na kulturo sodelovanja med zaposlenimi.
              </BodyText3>
            </li>
          </ul>
        </Container>
      </Border_shadow>

      <NewParagraph></NewParagraph>

      <Plain_text
        dangerouslySetInnerHTML={{
          __html: `Treniranje na kateri koli ravni ne pomeni nujno samo odpravljanja neuspešnosti, temveč je v pomoč pri hitrejšem in učinkovitejšem usposabljanju sodelavcev za delo na dolgi rok. To je še posebej pomembno v času visoke fluktuacije zaposlenih, za katero analitiki napovedujejo, da se bo v prihodnje še povečevala. S tem pa se povečuje tudi vrzel med tistimi zaposlenimi, ki so bolj usposobljeni in imajo daljši staž, ter med novo zaposlenimi. To problematiko največkrat zaznavamo tam, kjer so znanja in kompetence zelo specifične in se znanje lahko razvija znotraj organizacije.<br/><br/>
 
 Zaznati je tudi velik interes zaposlenih, da bi postali trenerji in mentorji ter s tem prenašali znanje in izkušnje. Še posebej na tej točki<b> lahko izkoristimo tudi medgeneracijsko sodelovanje</b>, saj so izkušeni delavci najbolj primerni za prenos znanja in izkušenj, kateri se z njihovim odhodom izgublja. To pa pomeni, da morajo njihovi nasledniki velikokrat stvari začeti od popolnega začetka. Z učinkovitimi notranjimi trenerji in sistemom notranjega usposabljanja organizacija pridobi<b> učinkovito treniranje z nižjimi stroški, kot če bi najela zunanje izvajalce</b>. Tu je potrebno omeniti še poznavanje specifike dela vsake organizacije, v katere zunanji izvajalci nimajo vpogleda, je pa velikokrat ključna za doseganje želene učinkovitosti.
 `,
        }}
      ></Plain_text>

      <NewParagraph></NewParagraph>

      <Border_shadow>
        <Container>
          <Subtitle2>
            Kateri so pomembni elementi uspešnega notranjega treniranja?{" "}
          </Subtitle2>
          <NewRow></NewRow>
          <ul>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `<b>Opredelitev notranjega treniranja kot strateško rešitev</b>, ki je povezana z vsemi deležniki v organizaciji in tudi z upravljanjem talentov.`,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `<b>Identifikacija problematičnih vrzeli v znanju, veščinah in kompetencah</b> (oddelčno in medoddelčno).`,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `<b>Določanje področij delovanja notranjega usposabljanja</b>, kjer je potrebno natančno določiti, na katerih področjih dela se bo izvajalo notranje usposabljanje.`,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `<b>Določanje pričakovanj, ciljev, vsebin in metodologije notranjih usposabljanj</b>, prilagojenih glede na področja in posamezne vrzeli.`,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `<b>Določanje bazena ustreznih in kvalitetnih notranjih trenerjev</b>. Navadno so to posamezniki z izkušnjami v panogi, ki poznajo procese in zaradi tega lažje prenesejo znanje in izkušnje. `,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `<b>Identifikacija najustreznejših kandidatov za izvajanje notranjega usposabljanja</b>. Izbrati je potrebno primerno metodo za ocenjevanje primernosti kandidatov. Po naših izkušnjah se nam je najbolje izkazala metodologija DNLA, s katero izvajamo tovrstna ocenjevanja (assessment). `,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `<b>Usposabljanje kandidatov za izvajanje usposabljanj</b> je zelo pomembno, saj izkušnje z delom in procesi organizacije niso zagotovilo za učinkovit prenos znanj. Izkušnje kažejo, da je tukaj ena od največjih pasti notranjega usposabljanja, saj trenerji velikokrat nosijo veliko operativnega znanja, a premalo »trenerskih« veščin.`,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `<b>Zagotavljanje podpore celotne vodstvene strukture organizacije</b>. To je najpomembnejši člen obstoja notranjega usposabljanja. Če ga vodje ne podprejo, ga nima smisla izvajati.`,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `<b>Zagotoviti zavezo zaposlenih, ki so vključeni v proces notranjega usposabljanja</b>, da bodo pristopali k procesu s popolno resnostjo in da bodo dosegli jasno določene cilje ter pričakovanja.`,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `<b>Zagotoviti nemoten proces dela</b>. Usposabljanja je potrebno nastaviti tako, da minimalno vplivajo na tekoče delo in zagotavljajo čim boljši izkoristek časa. To predstavlja ogromen izziv, še posebej, če morajo biti trenerji tudi v operativi, saj imajo v tem primeru dve vlogi.`,
                }}
              ></BodyText3>
            </li>
          </ul>
        </Container>
      </Border_shadow>

      <NewParagraph></NewParagraph>

      <Plain_text>
        Ob vsem tem se je potrebno zavedati, da današnji način poslovanja težko
        omogoča, da bi vse organizacije same postavljale in upravljale s tem
        kompleksnim procesom. Sploh ob dejstvu, da je za to potreben čas, ki pa
        je danes najbolj dragocen. Nekatere tuje organizacije se zato
        poslužujejo zunanjih upravljavcev tovrstnih procesov. To je lahko
        rešitev za tiste organizacije, ki s sistemi notranjega usposabljanja in
        treniranja nimajo izkušanj ali pa v preteklosti niso dosegle želenega
        učinka. Imajo pa identificirane potrebe ter ogromno notranjega znanja,
        za katerega je ključno, da ostane »doma« in da se učinkovito prenaša med
        zaposlenimi.{" "}
      </Plain_text>

      <NewParagraph></NewParagraph>
      <NewParagraph></NewParagraph>
    </Blog_page>
  );
};

export default Clanek6;
