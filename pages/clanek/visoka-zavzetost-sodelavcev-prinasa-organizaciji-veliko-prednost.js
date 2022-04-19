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
        Bolj zavzeti zaposleni delajo z večjo intenzivnostjo in strastjo, saj
        verjamejo v poslanstvo podjetja in zaupajo njegovim vrednotam. Zavzetost
        pa se pojavi takrat, ko so vaši sodelavci zadovoljni s svojimi
        poklicnimi vlogami in imajo jasno vizijo, kako lahko ustvarjajo vrednost
        na svojem delovnem mestu. Zavzetost zaposlenih ni »čudežni napitek,«
        vendar ima lahko nekaj odličnih učinkov na uspešnost vaše organizacije.
      </Plain_text>
      <NewParagraph></NewParagraph>
      <Border_shadow>
        <Container>
          <Subtitle2>1. Poveča se produktivnost zaposlenih</Subtitle2>
          <NewParagraph></NewParagraph>
          <BodyText3
            dangerouslySetInnerHTML={{
              __html: `Raziskave podjetja Gallup kažejo, da so<b> zavzeti zaposleni za 17 % bolj produktivni</b> od ostalih sodelavcev in so pripravljeni vlagati več energije in napora v doseganje ciljev.
<i>(Gallup: How Employee Engagement Drives Growth - 2020)</i><br/><br/>

Večja produktivnost in učinkovitost sta ključni prednosti, ki jih organizaciji prinaša visok delež zavzetih zaposlenih. Organizacijam, ki imajo visok delež zavzetih zaposlenih zato ni potrebno uporabljati mehanizmov pritiska na zaposlene s strani vodij, groženj z odpovedjo, stalnega zaostrovanja delovnih norm in podobnih pristopov, da lahko zagotovijo ustrezen nivo produktivnosti. Namesto tega raje uporabljajo pristope podajanja celovite povratne informacije, srečanj za izmenjavo inovativnih idej, metode asertivnega vodenja sodelavcev ipd.
`,
            }}
          ></BodyText3>
          <NewParagraph></NewParagraph>
          <Subtitle2>
            2. Organizacija lažje zadrži ključne kadre in talente{" "}
          </Subtitle2>
          <NewParagraph></NewParagraph>
          <BodyText3
            dangerouslySetInnerHTML={{
              __html: `Zavzeti zaposleni nimajo razloga, da bi delo iskali drugje, če jim<b> organizacija nudi zadostno perspektivo</b>. To najbolje zaznavajo v primeru, da pridobivajo ustrezna priznanja za svoje prispevke, vidijo dovolj priložnosti za osebni, poklicni in karierni razvoj ter razumejo cilje in smisel sprememb v organizaciji. <br/><br/>

              Ko zaposleni znotraj organizacije ne morejo v polni meri izkoristiti svojih talentov in prednosti
              (znanja, kompetenc), postopoma nehajo uživati v svojem delu. S tem se izrazito poveča verjetnost, da bodo poiskali novega delodajalca. Pogosto je to največji razlog za odhod najboljših talentov, čeprav v praksi vlada prepričanje, da najboljši talenti odhajajo zaradi višjih plač.
              `,
            }}
          ></BodyText3>
          <NewParagraph></NewParagraph>
          <Subtitle2>3. Poveča se zadovoljstvo strank </Subtitle2>
          <NewParagraph></NewParagraph>
          <BodyText3
            dangerouslySetInnerHTML={{
              __html: `Če so vaši zaposleni visoko zavzeti, je večja verjetnost, da bodo vaše stranke dobro postrežene in
              bodo imele zagotovljeno odlično uporabniško izkušnjo. Zavzeti sodelavci običajno visoko cenijo svojo službo in imajo močan interes zadržati visoko organizacijsko konkurenčnost. Zato je med zavzetimi zaposlenimi višje zavedanje potrebe po negovanju visokega nivoja zadovoljstva stranke, ker jasno čutijo in razumejo, da samo odlična izkušnja stranke prinaša dolgoročno konkurenčnost. Nekatere raziskave kažejo na to, da imajo organizacije<b> z višjim deležem zavzetih zaposlenih tudi do 20% višjo prodajo</b> v primerjavi s konkurenti, kateri imajo višji delež (aktivno) nezavzetih sodelavcev.`,
            }}
          ></BodyText3>

          <NewParagraph></NewParagraph>
          <Subtitle2>4. Zmanjša se odsotnost z dela </Subtitle2>
          <NewParagraph></NewParagraph>
          <BodyText3
            dangerouslySetInnerHTML={{
              __html: `Visoka odsotnost z dela je prvi vidni indikator, da zavzetost zaposlenih v podjetju ni na ustreznem
              nivoju. Mednarodne študije namreč kažejo na to, da je med visoko zavzetimi sodelavci<b> odsotnost z dela manjša za kar 41 %</b> v primerjavi z ostalimi sodelavci. V prvi vrsti je to povezano s pozitivnim
              odnosom do delovnega okolja in pozitivno čustveno naravnanostjo, kar zmanjšuje nekatere pojavne oblike stresa ter posledično manj bolezni, povezanih s stresom. Po drugi strani pa organizacije, ki sistematično razvijajo koncept zavzetosti zaposlenih, ustrezno skrbijo za zdravje svojih zaposlenih skozi različne programe. Med njimi lahko najdemo programe, ki se osredotočajo na zagotavljanje svežega sadja za zaposlene, vzpostavljanje konceptov prilagodljivih urnikov, zagotavljanje različnih oblik športne in rekreatine vadbe ipd.`,
            }}
          ></BodyText3>

          <NewParagraph></NewParagraph>
          <Subtitle2>5. Poveča se število (dobrih) inovacij </Subtitle2>
          <NewParagraph></NewParagraph>
          <BodyText3
            dangerouslySetInnerHTML={{
              __html: `Danes organizacije potrebujejo inovacije, da lahko ostajajo konkurenče in uspešne v vedno bolj
              zahtevnem poslovnem okolju. Da se ustvari inovativno okolje, morajo vodje delovati predvsem kot
              trenerji (coachi) svojih sodelavcev. Podajanje kakovostne povratne informacije igra pri tem ključno 
              vlogo. Dosledne povratne informacije v realnem času vzpodbujajo zaposlene k razvijanju novih,
              boljših idej in rešitev. Vse to pa ponovno vodi k<b> ustvarjanju več vrednosti za organizacijo</b>, njene
              kupce ter ostale deležnike ter nenazadnje za vse zaposlene. Spodbujanje zaposlenih, da so inovativni in delijo svoje ideje, je še en način za izgradnjo zavzete delovne sile. Izkoristite strokovno znanje svojih sodelavcev tako, da jih vzpodbujate k sodelovanju pri skupnih projektih.`,
            }}
          ></BodyText3>
          <NewParagraph></NewParagraph>
          <Subtitle2>6. Izboljša se timsko sodelovanje </Subtitle2>
          <NewParagraph></NewParagraph>
          <BodyText3
            dangerouslySetInnerHTML={{
              __html: `Sodelovanje med člani tima je pomemben vidik vodenja uspešne organizacije. Zavzeti zaposleni sebe vidijo kot del celovitega uspeha organizacije in so pripravljeni biti močan člen v verigi uspešnega timskega dela. Držijo time skupaj in stalno iščejo priložnosti, da bi svojim sodelavcem pomagali. S tem pa se<b> ustvarijo pogoji za dobre timske dosežke</b>.<br/><br/>

              Ko dva ali več zelo zavzetih zaposlenih začne deliti svoje misli med seboj, se hitro razvije ustvarjalni potencial tima in ustvarijo edinstvene ideje.`,
            }}
          ></BodyText3>
        </Container>
      </Border_shadow>
      <NewParagraph></NewParagraph>
      <Container>
        <Subtitle2>
          Pomembno vlogo v konceptu zavzetosti predstavlja učinkovito
          voditeljstvo.
        </Subtitle2>
        <NewRow></NewRow>
        <BodyText3>
          Pozitivno delovno okolje, ki ga ustvarja kakovostno voditeljstvo,
          pomembno vpliva na zavzetost zaposlenih. Vodje, ki želijo svoje
          zaposlene navduševati za odlične dosežke, se morajo najprej z njimi
          ustrezno povezati in jih dobro spoznati. To pomeni, da si morajo vzeti
          dovolj časa za sodelovanje z njimi. V zameno se bodo zaposleni bolj
          verjetno odzvali z višjo stopnjo zavzetosti. Zavzeti zaposleni bolj
          pogumno izmenjujejo povratne informacije in učinkoviteje sodelujejo z
          drugimi pri doseganju svojih ciljev in ciljev tima.
        </BodyText3>
      </Container>

      <NewParagraph></NewParagraph>

      <Container_border>
        <Subtitle2>
          Podjetje Hays je v poročilu »What People Want« objavilo naslednje
          izsledke svoje raziskave:
        </Subtitle2>
        <NewRow></NewRow>
        <ul>
          <li>
            <BodyText3>
              71% zaposlenih bi pristalo na znižanje plače, če bi lahko
              opravljali svojo idelano službo.
            </BodyText3>
          </li>
          <li>
            <BodyText3>
              47% aktivnih iskalcev zaposlitve je službo zapustilo zaradi
              neustrezne organizacijske kulture.
            </BodyText3>
          </li>
          <li>
            <BodyText3>
              Samo 12% zaposlenih je bilo zadovoljnih s svojo trenutno poslovno
              vlogo.
            </BodyText3>
          </li>
          <li>
            <BodyText3>
              Kar 81% anketirancev je bilo odprtih za nove zaposlitvene
              možnosti.
            </BodyText3>
          </li>
        </ul>

        <NewRow></NewRow>

        <BodyText3>
          Navedene ugotovitve kažejo, da je potrebno intenzivno delati na
          konceptu zavzetosti zaposlenih in uvajati programe, ki izboljšujejo
          izkušnjo naših zaposlenih.
        </BodyText3>
      </Container_border>

      <NewParagraph></NewParagraph>
    </Blog_page>
  );
};

export default Clanek1;
