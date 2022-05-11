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
    authors: [{ image: "/Team/janez.webp", name: "Janez Žezlina" }],
    image: "/clanki/9/image1.webp",
    excerpt: `Upravljanje talentov je strategija, s katero si podjetja zagotovijo, da so njihovi ključni, strokovno in osebnostno kompetentni posamezniki, deležni skrbne pozornosti. Najprej jih je treba iskati in najti ter nato pripeljati v podjetje. Nato morajo zanje skrbeti, jih podpirati, motivirati, navduševati. Skratka, treba jih je ceniti in jim to tudi jasno pokazati, zato da ne bodo odšli h konkurenci. V tem prispevku se osredotočam predvsem na začetni del procesa upravljanja s talenti – iskanje oz. prepoznavanje le-teh.`,
  };

  return (
    <Blog_page _data={blog_data}>
      <NewParagraph></NewParagraph>

      <Container>
        <Subtitle2>
          PREPOZNAVANJE TALENTOV - IDENTIFICIRANJE KLJUČNIH KADROV
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
          <ul style={{ listStyleType: "decimal" }}>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `Že kar nekaj let oz. dobro desetletje govorimo v poslovnem svetu o<b> bitki</b> za talente, v času izredno dinamične digitalne ekonomije, ki je prinesla še večjo potrebo po inovativnih, kompetentnih, agilnih in timsko usmerjenih posameznikih, pa je to še bolj pomembno.`,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `<b>Digitalna ekonomija je prinesla tudi še večjo mobilnost kadrovskih potencialov.</b>`,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `In če na to dodamo še<b> stalne disrupcije oz. poslovne motnje</b> (pandemije, spreminjanje geostrateškega zemljevida sveta, velike motnje v oskrbnih verigah, ipd.) je jasno, da je dandanes (jutri pa še bolj)<b> izrednega pomena, da se sistematično ukvarjamo z našo interno bazo - sodelavci</b>, prepoznamo njihove talente in sistematično razvijamo njihove potenciale, s ciljem ohranjanja njihove zavzetosti in zadržanja ključnih kadrov.`,
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

      <NewRow></NewRow>
      <Container>
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
      </Container>
      <NewParagraph></NewParagraph>

      <Border_shadow>
        <Container>
          <Subtitle2>
            V zvezi z iskanjem talentiranih posameznikov lahko med uspešnimi
            športnimi klubi zasledimo naslednje dobre prakse (pri tem še zdaleč
            ne navajam vseh dobrih praks):{" "}
          </Subtitle2>
          <NewRow></NewRow>
          <ul style={{ listStyleType: "decimal" }}>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `Klubi imajo svoje<b> skavte</b> (op.p. oglednike), ki za njih iščejo
                vrhunske potenciale po celotnem tržišču; nekateri se poslužujejo
                uslug<b> športnih menedžerjev</b>, ki tržijo talentirane posameznike in
                jih za »primerno« provizijo prodajajo naprej klubom; drugi imajo
                v klubu posameznika s funkcijo<b> športni direktor</b>, ki med drugim
                skrbi tudi za »skeniranje« trga talentov.`,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `Zlasti v NBA (op.p. National Basketball Association) se klubi poslužujejo t.i. <b>drafta</b> (op.p. nabora), ki pomeni nabor talentiranih posameznikov na enem mestu, z oceno njihovega znanja in veščin, ovrednotenjem njihovih športnih kompetenc/sposobnosti, kar za klube pomeni predvsem zelo dobro informacijo o tem, kateri so najboljši posamezniki na trgu, nadarjenim mladim igralcem pa učinkovit in transparenten način njihovega predstavljanja oz. pozicioniranja na športnem tržišču.`,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `Športni klubi organizirajo tudi t.i. <b>pripravljalne kampe</b>, kjer se zberejo mladi talentirani posamezniki iz vseh krajev in v pripravljalnih tekmah oglednikom pokažejo svoje znanje in veščine - zopet eden izmed odličnih načinov, da klub ne kupi »mačka v žaklju«. `,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `Športni klubi imajo <b>mladinska moštva</b>, ki za njih pomenijo »poceni in učinkovit« bazen potencialnih novih talentov, zato imajo zlasti najboljši športni klubi zelo dobro organizirane interne kadetske in mladinske šole, kjer vzgajajo interne talente.`,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `Ena izmed možnosti je tudi <b>posojanje mladih igralcev drugim moštvom</b> (v nižjih ligah, tako da ne gre za direktne konkurente) in kaljenje le-teh v njih, klub pa stalno spremlja njihov napredek in razvoj ter presodi, kdaj so zreli za prehod v prvo moštvo.`,
                }}
              ></BodyText3>
            </li>
          </ul>
          <NewParagraph></NewParagraph>
          <Subtitle2>
            Sedaj pa si poglejmo, kako bi lahko v poslovno terminologijo
            prevedli zgoraj omenjene dobre prakse:{" "}
          </Subtitle2>
          <NewRow></NewRow>
          <ul style={{ listStyleType: "decimal" }}>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `Kot skavte ali športne menedžerje podjetja lahko uporabijo razne <b>eksterne kadrovske agencije - t.i. headhunterje</b>, ki za njih iščejo najboljše kadre. Druga možnost je <b>interna - menedžerji</b> (in kadrovska služba, ki jim je pri tem v podporo z zagotavljanjem ustreznih informacij) so tisti, ki naj bi imeli pregled nad talenti v njihovem podjetju/oddelku. S tem v zvezi lahko podjetje ustanovi tudi t.i. <b>talent commitee</b> (komisijo za iskanje talentov), ki je sestavljena iz menedžerjev podjetja, ki na sestankih redno razpravlja o stanju kadrovskega potenciala oz. posameznikih, ki so se izkazali pri opravljanju določene delovne naloge.`,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `Podjetje lahko podobno kot na draftu (naboru) <b>izdela seznam talentiranih posameznikov</b>, ki jih tudi ovrednoti (oceni njihove dejanske kompetence), kar predstavlja osnovo za vključitev le-teh v razvojne programe; obenem lahko podobno naredi za vse kandidate v procesu selekcije kadra -  tudi za neizbrane kandidate, saj le-ti lahko predstavljajo potencial za kakšno drugo zaposlitveno možnost (obenem pa ima s tem podjetje dober nabor potencialnih kadrov na zalogi). V ta namen lahko podjetje uporabi tudi t.i. ocenjevalne centre (op.p. assessment centres), teste delovne učinkovitosti in simulacije.`,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `Pripravljalni kampi bi se v poslovnem svetu lahko prevedli v naslednje aktivnosti: poslovne prakse, ki jih opravljajo študenti in dijaki za podjetje;<b> seminarske in diplomske naloge</b>, kjer študente na konkretnih študijah primerov proučujejo praktične poslovne probleme; <b>pripravništva</b>, ki jih novo zaposleni za podjetje opravi ob svoji prvi zaposlitvi; <b>aktivna udeležba podjetja na raznih študentskih sejmih </b>(npr. sejem Kariera, Top Job, ipd.) oz. <b>soustvarjanje z mladimi potenciali v okviru razvojnih projektov </b>(razni Heckatoni), kjer prihaja do srečevanja med potencialnimi kadri in njihovimi novimi delodajalci; <b>sodelovanje podjetja v formalnem izobraževalnem procesu</b> (predstavitev podjetja na predavanjih, ki potekajo v okviru rednega študija) in prepoznavanje zanimivih kandidatov, ki so se na predavanjih izkazali z aktivno udeležbo, vrhunskim znanjem in uporabnim ali pa kreativnim razmišljanjem.`,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `Vzporednice z mladinskimi (in kadetskimi) moštvi bi v poslovnem svetu lahko iskali v<b> tesnejšem prepletu poslovnega sveta in formalnega izobraževanja</b> (delno opisano že v predhodni točki), vzpostavljenem <b>sistemu mentorstva</b> s strani »starejših« kolegov in/ali<b> obratnega mentorstva, razvoju interne poslovne »akademije« za mlade in perspektivne kadre</b> (kjer na praktično usmerjenih delavnicah predavajo člani vodstva podjetja, mladi talenti pa so v okviru njenega delovanja postavljeni pred večje delovne izzive (kot pa bi od njih zahtevala njihova trenutna delovna funkcija), kroženju zaposlenih (kar opisujem v naslednji točki).`,
                }}
              ></BodyText3>
            </li>
            <li>
              <BodyText3
                dangerouslySetInnerHTML={{
                  __html: `Analogijo za posojanje igralcev v druga moštva bi lahko poiskali v<b> metodi kroženja 
sodelavcev</b> - gre za zelo uporabno metodo prepoznavanja novih talentov - sodelavci krožijo po različnih področjih v organizaciji (ali v okviru več različnih podjetij, v različnih državah, če govorimo o skupini podjetij), na ta način zelo dobro spoznajo organizacijo in njeno kulturo, obenem pridobijo širša, interdisciplinarna znanja in veščine (v smislu strokovnega in osebnega razvoja), podjetje pa istočasno dobi zelo dobre informacije o teh posameznikov.`,
                }}
              ></BodyText3>
            </li>
          </ul>
        </Container>
      </Border_shadow>
      <NewParagraph></NewParagraph>

      <Plain_text
        dangerouslySetInnerHTML={{
          __html: `Omenjene športne / poslovne dobre prakse pa lahko prepoznamo tudi v zanimivi poslovni kadrovski dobri praksi multinationalke LOréal.<br/><br/>

<b>LOrealova nega:</b> <br/><br/> 
Lep primer upravljanja s talenti je tudi podjetje LOréal. Izdelovalec kozmetike z odličnimi poslovnimi rezultati si v kadrovskem oddelku privošči sodelavce, ki skrbijo samo za managerski naraščaj. <br/><br/>

Vsaka dva meseca se kadrovski delavci sestanejo s člani uprave in se z njimi<b> pogovarjajo o razvojnih možnostih mladih talentov</b>. Ti se morajo izobraževati v posebnem <b>notranjem programu usposabljanja</b>, poleg tega pa se morajo pri<b> vsakdanjem delu spoprijemati z novimi izzivi. Pogosto jih prestavljajo</b>, včasih hitreje, kot to pričakujejo. <b>Pošiljajo jih tudi v tujino.</b> <br/><br/>

<b>Posebej prizadevno izbirajo mlade sodelavce</b>. Iščejo odlične osebnosti različnega izvora in izobrazbe, s katerimi sestavljajo ustvarjalne, k uspehu usmerjene time. Odločilnega pomena je<b> kulturna odprtost</b>, ki si jo je kandidat pridobil med študijem ter bivanjem ali prakso v tujini. Kandidati morajo dokazati, da znajo prevzemati pobudo, da so pragmatični, ustvarjalni in da znajo prepričevati. <b>Zgolj formalna merila niso preveč pomembna</b>. <br/><br/>

Ker mladim managerjem že zelo zgodaj prepuščajo odgovornost in svobodo, od njih pričakujejo samostojno razmišljanje in ravnanje. Znati morajo zanimivo predstaviti svoje ideje in se zanje pogumno zavzemati.<b> Ob vsakoletni podelitvi LOréalove nagrade</b> za trženje se sodelavci iz kadrovskega oddelka<b> seznanijo z novimi kandidati za zaposlitev v koncernu</b>. Študenti morajo ob podpori oglaševalske agencije razviti trženjski koncept za kozmetični izdelek. Izbiranje mladih talentov je dolgotrajno in utrudljivo, a je na koncu poplačano. <br/><br/>
`,
        }}
      ></Plain_text>
      <NewParagraph></NewParagraph>

      <Container_border style={{ textAlign: "left" }}>
        <BodyText3>
          Vse, kar smo danes zapisali, je dober dokaz, kako pomembno je
          načrtovati upravljanje s talentiranimi posamezniki v podjetju. Nobeno
          podjetje tega ne bi smelo prepustiti naključju, saj so dobri vodje in
          strokovnjaki odločilnega pomena za razvoj podjetja.
          <br />
          <br /> Prizadevanja pa so uspešna le, če se podjetje ne zanaša samo na
          posamezne projekte. Tisti, ki stavi vso energijo samo na notranji
          program usposabljanja, ne bo uspešen, ker hkrati zanemarja druge
          pomembne naloge. Le mešanica sistematičnega usposabljanja in njegove
          prepletenosti s poslovno strategijo ter z vsemi ostalimi kadrovskimi
          razvojnimi procesi (pogosto oz. vedno bolj celo na ravni vseh
          deležnikov poslovnega ekosistema) je najboljša vstopnica za uspeh
          danes in v prihodnje.
        </BodyText3>
      </Container_border>

      <NewParagraph></NewParagraph>
      <NewParagraph></NewParagraph>
    </Blog_page>
  );
};

export default Clanek9;
