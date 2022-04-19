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

const Clanek10 = () => {
  const blog_data = {
    title: "Mlajše generacije prevzemajo ključne vloge v organizacijah",
    authors: [{ image: "/Team/enej.png", name: "Enej Klarič" }],
    image: "/clanki/10/image1.png",
    excerpt: `Eno izmed aktualnejših vprašanj v današnjem  svetu, kjer je vrednota kapitala postala ena izmed glavnih vrednot, je vprašanje post-materializma in z njim povezanih razlik med generacijami. Prišli smo do obdobja, ko večino delovne sile predstavlja generacija Y (rojena med  1981 in 1999, t. i. milenijci) , generacija Z (rojena po letu 1999) pa prihaja na trg delovne sile. `,
  };

  return (
    <Blog_page _data={blog_data}>
      <NewParagraph></NewParagraph>

      <Border_shadow>
        <Container>
          <Subtitle2>
            Z njimi se je trg delovne sile krepko spremenil, saj so se
            spremenile tudi vrednote delavcev:{" "}
          </Subtitle2>
          <NewRow></NewRow>
          <ul>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `<b>Starejše generacije</b> (Baby Boomerji in generacija X) zagovarjajo vrednote kot so delavska etika, disciplina ter nagnjenost h kolektivizmu.`,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `<b>Generacija Y</b> zahteva bolj svobodno in fleksibilno delo, pri tem pa zna biti bolj konfliktna. Domnevamo lahko, da to izhaja iz večje zaščitenosti v mlajših letih s strani staršev. Iz tega izhaja tudi dejstvo, da ta generacija pogosteje menjava delo kot starejši dve, kjer so po navadi posamezniki začeli z delom v enem podjetju, v njem napredovali in ostali do upokojitve.`,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `<b>Najmlajša generacija</b>, generacija Z, je najbolj napredna, ko je govora o tehnološkem znanju, ima višja karierna pričakovanja kot generacija Y ter hrepeni po varnosti zaposlitve.`,
                }}
              ></BodyText3>
            </li>
          </ul>
        </Container>
      </Border_shadow>

      <NewParagraph></NewParagraph>
      <Container style={{ textAlign: "center" }}>
        <Subtitle2>Medgeneracijske spremembe</Subtitle2>
      </Container>
      <NewRow></NewRow>
      <Container_border>
        <BodyText3>
          Večina prebivalstva v visoko industrializiranih državah, sem sodi tudi
          Slovenija, ne živi v razmerah ekonomske nestabilnosti. Zdi se, da je
          to pripeljalo do gradualnega prehoda, v katerem so bolj kot materialne
          potrebe pomembne postale potrebe po ugledu, pripadnosti ter
          kreativnosti.{" "}
        </BodyText3>
      </Container_border>
      <NewRow></NewRow>

      <Container>
        <BodyText3>
          Teorija medgeneracijskih sprememb temelji na dveh ključnih hipotezah
          in sicer na hipotezi pomanjkanja in hipotezi socializacije.
        </BodyText3>
      </Container>
      <NewParagraph></NewParagraph>

      <Border_shadow>
        <Container>
          <Subtitle2>Hipoteza pomanjkanja</Subtitle2>
          <NewRow></NewRow>
          <BodyText3>
            Hipoteza pomanjkanja govori o tem, da si vsakdo prizadeva za svobodo
            in samoaktualizacijo, toda ljudje si najbolj prizadevajo za najbolj
            nujne potrebe. Materialna oskrba in fizična varnost sta neposredno
            povezani s preživetjem in večina daje prednost tem
            "materialističnim" ciljem. Toda v razmerah blaginje, še posebej v
            razvitih industrialističnih državah ljudje veliko bolj poudarjajo in
            sledijo postmaterialističnim ciljem, kot so oblikovanje identitet,
            potreba po pripadnosti, potreba po spoštovanju in ljubezni,
            samoaktualizacija, estetsko in intelektualno zadovoljstvo. ipd.
          </BodyText3>
          <NewParagraph></NewParagraph>

          <Subtitle2>Hipoteza socializacije</Subtitle2>
          <NewRow></NewRow>
          <BodyText3>
            Hipoteza socializacije pa temelji na raziskavah, katere kažejo, da
            so temeljne vrednote ljudi večinoma določene na prehodu v odraslost
            in se skozi socializacijo spreminjajo. Zato bodo skupine, ki so
            doživljale gospodarsko pomanjkanje, veliko časa namenile
            zadovoljevanju gospodarskih potreb, skupine, ki so izpostavljene
            nevarnostim pa bodo več časa porabile za zadovoljevanje varnostnih
            potreb. Po drugi strani pa bodo skupine, ki doživljajo trajno visoko
            materialno bogastvo, začenjale dajati prednost post materialističnim
            vrednotam, kot so individualno izboljšanje posameznika,
            samoizražanje, osebna svoboda, samoaktualizacija, prostovoljstvo in
            vzdrževanje čistega in zdravega okolja.
          </BodyText3>
          <NewRow></NewRow>
          <BodyText3>
            Večina prebivalstva v visoko industrializiranih državah, sem sodi
            tudi Slovenija, ne živi v razmerah ekonomske nestabilnosti. Zdi se,
            da je to pripeljalo do gradualnega prehoda, v katerem so bolj kot
            materialne potrebe pomembne postale potrebe po ugledu, pripadnosti
            ter kreativnosti.
          </BodyText3>
          <NewRow></NewRow>

          <BodyText3>
            <b>
              Če se ponovno osredotočimo na primerjavo generacij, lahko iz
              različnih raziskav povzamemo naslednje ugotovitve:
            </b>
          </BodyText3>
          <NewRow></NewRow>

          <ul>
            <li>
              <BodyText3>
                Starejše generacije so mnenja, da je dolg delovni čas ključni
                dejavnik, ki vpliva na poklicno napredovanje, svoje delo pa
                opravljajo z močno delovno etiko.
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Kljub temu, da lahko višina plače milenijce na začetku pritegne,
                je zanje značilno, da cenijo fleksibilni delovni čas, prosti čas
                ter avtonomijo na delovnem mestu.
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Milenijci bolj cenijo ravnovesje med poklicnim in zasebnim
                življenjem ter se osredotočajo na stabilnost in zadovoljstvo pri
                delu.
              </BodyText3>
            </li>
            <li>
              <BodyText3>
                Prav tako milenijci niso zadovoljni s tem, da ostanejo dlje časa
                na istem delovnem mestu. Zato postanejo njihove poklicne poti
                bolj dinamične in manj predvidljive.
              </BodyText3>
            </li>
          </ul>
          <NewRow></NewRow>
          <BodyText3>
            <b>
              Ugotovitve tudi kažejo, da je uvedba družbenih medijev povečala
              sposobnosti sodelovanja med sodelavci in ustvarila prednost za
              timsko usmerjeno okolje.
            </b>
          </BodyText3>
        </Container>
      </Border_shadow>
      <NewParagraph></NewParagraph>

      <Container style={{ textAlign: "center" }}>
        Izzivi, ki jih prinašajo medgeneracijske spremembe{" "}
      </Container>
      <NewRow></NewRow>

      <Container_border>
        <BodyText3>
          Kadrovski strokovnjaki bodo morali nadgraditi procese vodenja v
          podjetjih in se približati vrednotam generacij, ki prihajajo na
          ključna delovna mesta.{" "}
        </BodyText3>
      </Container_border>

      <NewParagraph></NewParagraph>

      <Plain_text
        dangerouslySetInnerHTML={{
          __html: `<b>S katerimi izzivi se bomo strokovnjaki na kadrovskem področju soočali v prihodnje?</b> <br/><br/>

V prihodnosti bo na delovnih mestih vedno manj predstavnikov generacije Baby boomers in generacije X, naraslo pa bo število predstavnikov generacije Y (milenijcev) ter generacije Z. Zato se morajo organizacije zavedati, kakšne spremembe na področju dela to predstavlja za njih. <br/><br/>

Kakovostno <b>medgeneracijsko vodenje</b> in upravljanje različnih generacij je že danes zanesljivo velik izziv. Še bolj pa bo v prihodnosti.  Projekcije kažejo, da bodo milenijci do leta 2025 predstavljali okoli 75% vse delovne sile. Pri tem pa se pojavlja vprašanje, kako privabiti in zadržati milenijce, saj so njihova pričakovanja glede nagrajevanja visoka.`,
        }}
      ></Plain_text>

      <NewParagraph></NewParagraph>

      <Plain_text
        dangerouslySetInnerHTML={{
          __html: `Kadrovski strokovnjaki bodo morali nadgraditi procese vodenja v podjetjih in se približati vrednotam generacij, ki prihajajo.  <br/><br/><br/>


          <b>Za generacijo Y (milenijci) upoštevajte:</b><br/><br/>
          
          <b>Prisluhnite njihovim idejam</b>: Ne marajo, da je njihovo mnenje preslišano, zato jih je potrebno pogosteje povprašati o njihovem mnenju in idejah.<br/><br/>
          
         <b>Ravnovesje med delom in zasebnim življenjem</b>: Radi imajo fleksibilnost na delovnem mestu, kjer je delo povezano z družinskim in zasebnim življenjem.<br/><br/>
          
          <b>Delovno mesto, osredotočeno na zaposlene</b>: Želijo, da je njihovo delovno mesto zabavno in  vsebuje močne delovne odnose, s tem pa zagotovite njihovo zadovoljstvo in boljše rezultate.<br/><br/>
          
          <b>Nenehno učenje</b>: Kljub temu, da je večina milenijcev višje izobraženih, v primerjavi s starejšimi generacijami, imajo potrebo po nenehnem poslovnem in življenjskem učenju.<br/><br/>
          
          <b>Spodbude pri tehnološkem znanju</b>: Sposobni so izoblikovati učinkovite in ustvarjalne načine prenove delovnih procesov v organizaciji, zato jih je potrebno spodbujati na tem področju.<br/><br/>
          
          <b>Nenehne povratne informacije</b>:  Za razliko od starejših generacij, kjer so zaposleni prejemali letne rezultate uspešnosti, se mora milenijcem pogosteje nuditi povratna informacija o njihovi uspešnosti.<br/><br/>
          
          <b>Mentorstvo</b>: Zaradi hitrih sprememb tako na tehnološkem kot poslovnem področju, je potrebno biti milenijcem pogosteje v pomoč, da se lahko obdržijo na svojem delovnem mestu.<br/><br/>
          `,
        }}
      ></Plain_text>

      <NewParagraph></NewParagraph>

      <Plain_text
        dangerouslySetInnerHTML={{
          __html: `<b>Za generacijo Z upoštevajte:</b><br/><br/><br/>

          <b>Zagotoviti, da se stvari hitro premikajo</b>: Ker so odrasli v okolju, kjer so informacije na voljo takoj, ko jih potrebujejo, pričakujejo enako hitrost tudi na delovnem mestu.<br/><br/>
          
          <b>Potrebno bo uporabljati vizualne predstave, ne besedilnih</b>: To ne pomeni, da generacija Z ne želi brati, ampak če želite njihovo popolno pozornost, je potrebno pomembnejše informacije predstaviti na vizualen način.<br/><br/>
          
          <b>Močna notranja komunikacija</b>: Centralni pristop k notranji komunikacij spodbuja sodelovanje med skupinami in ohranja zaposlene povezane med seboj in s podjetjem.<br/><br/>
          
          <b>Prožnost na delovnem mestu</b>: Generacija Z obožuje svoje socialno delovno okolje, vendar ni nujno, da ga najdejo le na delovnem mestu. Potrebno jim je zagotoviti tudi druge oblike dela, kot je npr. delo od doma.<br/><br/>
          
          <b>Potreba po alternativnih metodah vodenja</b>: Zagotoviti jim je potrebno popolno vodenje projekta od začetka do konca, pri tem pa naj delijo svoje ideje in usmerjajo svojo ustvarjalnost v korist podjetja. <br/><br/>
          
          <b>Zagotoviti različne načine komunikacije</b>: Njihov način življenja so močno zaznamovale pametne naprave, zato je komuniciranje z njimi potrebno razdeliti tako na osebno kot elektronsko.<br/><br/>
          
          <b>Varnost zaposlitve</b>: Imeti dobro plačano službo, na katero se lahko zanesejo, je vrednota pri kateri niso pripravljeni sklepati kompromisov.<br/><br/>
           `,
        }}
      ></Plain_text>

      <NewParagraph></NewParagraph>
      <NewParagraph></NewParagraph>
    </Blog_page>
  );
};

export default Clanek10;
