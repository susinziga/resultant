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
import styled from "styled-components";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

const Clanek1 = () => {
  const { t, lang } = useTranslation();
  const { locale } = useRouter();

  let data = {
    sl: {
      title: "Visoka zavzetost sodelavcev prinaša organizaciji veliko prednost",
      excerpt:
        "Boljša učinkovitost timov, povečana produktivnost zaposlenih, manjša fluktuacija, doseganje ciljev oddelka in pridobivanje najboljših talentov, so »sanje« in cilj večine organizacij. Za dosego tega pa je potrebno razviti visok delež zavzetih zaposlenih.",
      pt1: "Bolj zavzeti zaposleni delajo z večjo intenzivnostjo in strastjo, saj verjamejo v poslanstvo podjetja in zaupajo njegovim vrednotam. Zavzetost pa se pojavi takrat, ko so vaši sodelavci zadovoljni s svojimi poklicnimi vlogami in imajo jasno vizijo, kako lahko ustvarjajo vrednost na svojem delovnem mestu. Zavzetost zaposlenih ni »čudežni napitek,« vendar ima lahko nekaj odličnih učinkov na uspešnost vaše organizacije.",
      t2_heading:
        "Pomembno vlogo v konceptu zavzetosti predstavlja učinkovito voditeljstvo.",
      t2_text:
        "Pozitivno delovno okolje, ki ga ustvarja kakovostno voditeljstvo, pomembno vpliva na zavzetost zaposlenih. Vodje, ki želijo svoje zaposlene navduševati za odlične dosežke, se morajo najprej z njimi ustrezno povezati in jih dobro spoznati. To pomeni, da si morajo vzeti dovolj časa za sodelovanje z njimi. V zameno se bodo zaposleni bolj verjetno odzvali z višjo stopnjo zavzetosti. Zavzeti zaposleni bolj pogumno izmenjujejo povratne informacije in učinkoviteje sodelujejo z drugimi pri doseganju svojih ciljev in ciljev tima.",
    },
    en: {
      title:
        "High employee engagement is beneficial to the organization in a variety of ways.",
      excerpt:
        'Most organizations\' "dream" and goal is to improve team performance, increase employee productivity, reduce attrition, achieve departmental goals, and recruit the best personnel. To do this, a high level of committed personnel must be developed.',
      pt1: 'More engaged employees work with more intensity and passion because they believe in the company\'s mission and values. When your colleagues are engaged, they are satisfied with their professional roles and have a clear picture of how they can provide value to their workplace. Employee engagement is not a "magic cure," but it can have a significant impact on the performance of your organization.',
      t2_heading:
        "Effective leadership plays an important role in the concept of commitment.",
      t2_text:
        "A positive working environment created by quality leadership has a significant impact on employee engagement. Managers who want to inspire their employees to succeed must first connect with them and get to know them well. This requires investing time in engaging with them. In return, employees are more likely to respond with a higher level of commitment. Engaged employees are more willing to give feedback and work better with others to reach their own and their team's goals.",
    },
  };

  let numberedPoints = [
    {
      sl: {
        heading: "Poveča se produktivnost zaposlenih",
        text: "Raziskave podjetja Gallup kažejo, da so<b> zavzeti zaposleni za 17 % bolj produktivni</b> od ostalih sodelavcev in so pripravljeni vlagati več energije in napora v doseganje ciljev. <i>(Gallup: How Employee Engagement Drives Growth - 2020)</i><br/><br/> Večja produktivnost in učinkovitost sta ključni prednosti, ki jih organizaciji prinaša visok delež zavzetih zaposlenih. Organizacijam, ki imajo visok delež zavzetih zaposlenih zato ni potrebno uporabljati mehanizmov pritiska na zaposlene s strani vodij, groženj z odpovedjo, stalnega zaostrovanja delovnih norm in podobnih pristopov, da lahko zagotovijo ustrezen nivo produktivnosti. Namesto tega raje uporabljajo pristope podajanja celovite povratne informacije, srečanj za izmenjavo inovativnih idej, metode asertivnega vodenja sodelavcev ipd.",
      },
      en: {
        heading: "Employee productivity increases.",
        text: "Gallup research shows that <b>engaged employees are 17% more productive</b> than other employees and are willing to put more energy and effort into achieving their goals. <i>(Gallup: How Employee Engagement Drives Growth - 2020)</i><br><br>The more committed employees an organization has, the more productive and efficient it is likely to be. Organizations that have a high level of employee engagement don't need to use things like managerial pressure, threats of dismissal, constant tightening of work rules, and other things to make sure they get enough work done. Instead, they prefer to use things like comprehensive feedback, meetings to share new ideas, assertive management, and so on.",
      },
    },
    {
      sl: {
        heading: "Organizacija lažje zadrži ključne kadre in talente",
        text: "Zavzeti zaposleni nimajo razloga, da bi delo iskali drugje, če jim<b> organizacija nudi zadostno perspektivo</b>. To najbolje zaznavajo v primeru, da pridobivajo ustrezna priznanja za svoje prispevke, vidijo dovolj priložnosti za osebni, poklicni in karierni razvoj ter razumejo cilje in smisel sprememb v organizaciji. <br/><br/>Ko zaposleni znotraj organizacije ne morejo v polni meri izkoristiti svojih talentov in prednosti (znanja, kompetenc), postopoma nehajo uživati v svojem delu. S tem se izrazito poveča verjetnost, da bodo poiskali novega delodajalca. Pogosto je to največji razlog za odhod najboljših talentov, čeprav v praksi vlada prepričanje, da najboljši talenti odhajajo zaradi višjih plač.",
      },
      en: {
        heading: "The organization retains key staff and talent more easily.",
        text: "Dedicated employees have no reason to look for work elsewhere if <b>the company gives them sufficient prospects</b>. This is best seen when they are getting the recognition they deserve for their work, have enough opportunities for personal and professional development, and understand the goals and purpose of change in the organization.<br><br>When employees within an organisation are not able to make full use of their talents and strengths (knowledge, competences), they eventually stop enjoying their work. This significantly increases the likelihood of finding a new employer. This is often the biggest reason why the best talent leaves, even though in practice there is a belief that the best talent leaves for higher salaries.",
      },
    },
    {
      sl: {
        heading: "Poveča se zadovoljstvo strank",
        text: "Če so vaši zaposleni visoko zavzeti, je večja verjetnost, da bodo vaše stranke dobro postrežene in bodo imele zagotovljeno odlično uporabniško izkušnjo. Zavzeti sodelavci običajno visoko cenijo svojo službo in imajo močan interes zadržati visoko organizacijsko konkurenčnost. Zato je med zavzetimi zaposlenimi višje zavedanje potrebe po negovanju visokega nivoja zadovoljstva stranke, ker jasno čutijo in razumejo, da samo odlična izkušnja stranke prinaša dolgoročno konkurenčnost. Nekatere raziskave kažejo na to, da imajo organizacije<b> z višjim deležem zavzetih zaposlenih tudi do 20% višjo prodajo</b> v primerjavi s konkurenti, kateri imajo višji delež (aktivno) nezavzetih sodelavcev.",
      },
      en: {
        heading: "Customer satisfaction increases.",
        text: "If your employees are highly engaged, your customers are more likely to be well served and have a great customer experience. Dedicated colleagues tend to value their jobs highly and have a strong interest in maintaining high organizational competitiveness. As a result, there is a higher awareness among engaged employees of the need to nurture high levels of customer satisfaction because they clearly feel and understand that only a great customer experience brings long-term competitiveness. Some research has shown that <b>businesses with more engaged employees make up to 20% more money</b> than businesses with more disengaged employees.",
      },
    },
    {
      sl: {
        heading: "Zmanjša se odsotnost z dela",
        text: "Visoka odsotnost z dela je prvi vidni indikator, da zavzetost zaposlenih v podjetju ni na ustreznem nivoju. Mednarodne študije namreč kažejo na to, da je med visoko zavzetimi sodelavci<b> odsotnost z dela manjša za kar 41 %</b> v primerjavi z ostalimi sodelavci. V prvi vrsti je to povezano s pozitivnim odnosom do delovnega okolja in pozitivno čustveno naravnanostjo, kar zmanjšuje nekatere pojavne oblike stresa ter posledično manj bolezni, povezanih s stresom. Po drugi strani pa organizacije, ki sistematično razvijajo koncept zavzetosti zaposlenih, ustrezno skrbijo za zdravje svojih zaposlenih skozi različne programe. Med njimi lahko najdemo programe, ki se osredotočajo na zagotavljanje svežega sadja za zaposlene, vzpostavljanje konceptov prilagodljivih urnikov, zagotavljanje različnih oblik športne in rekreatine vadbe ipd.",
      },
      en: {
        heading: "Absenteeism is reduced.",
        text: "Absenteeism is the first outward sign that employee engagement is low. According to international surveys, <b>highly engaged employees had a 41% lower rate of absenteeism</b> than other employees. This is mostly because people who have positive feelings about their job and their work environment don't have as many stress-related illnesses as people who have negative feelings about their job and their work environment.<br><br>Organizations that systematically develop the concept of employee engagement effectively manage their employees' health through various programs. These include programs that help employees get fresh fruit, set up flexible work schedules, and offer a wide range of sports and recreational activities.",
      },
    },
    {
      sl: {
        heading: "Poveča se število (dobrih) inovacij",
        text: "Danes organizacije potrebujejo inovacije, da lahko ostajajo konkurenče in uspešne v vedno bolj zahtevnem poslovnem okolju. Da se ustvari inovativno okolje, morajo vodje delovati predvsem kot trenerji (coachi) svojih sodelavcev. Podajanje kakovostne povratne informacije igra pri tem ključno vlogo. Dosledne povratne informacije v realnem času vzpodbujajo zaposlene k razvijanju novih, boljših idej in rešitev. Vse to pa ponovno vodi k<b> ustvarjanju več vrednosti za organizacijo</b>, njene kupce ter ostale deležnike ter nenazadnje za vse zaposlene. Spodbujanje zaposlenih, da so inovativni in delijo svoje ideje, je še en način za izgradnjo zavzete delovne sile. Izkoristite strokovno znanje svojih sodelavcev tako, da jih vzpodbujate k sodelovanju pri skupnih projektih.",
      },
      en: {
        heading: "The number of (good) innovations increases.",
        text: "Organizations today require innovation in order to remain competitive and successful in an increasingly challenging business environment. To create an innovative environment, managers need to act first and foremost as coaches for their colleagues. Giving constructive feedback is essential to this. Consistent, real-time feedback encourages employees to develop new and better ideas and solutions. All of this leads to <b>more value for the organization</b>, its customers and other stakeholders, and ultimately for all employees.<br><br>Another way to build a committed workforce is by encouraging employees to be innovative and share their ideas. Utilize your colleagues' knowledge by encouraging them to collaborate on joint projects.",
      },
    },
    {
      sl: {
        heading: "Izboljša se timsko sodelovanje",
        text: "Sodelovanje med člani tima je pomemben vidik vodenja uspešne organizacije. Zavzeti zaposleni sebe vidijo kot del celovitega uspeha organizacije in so pripravljeni biti močan člen v verigi uspešnega timskega dela. Držijo time skupaj in stalno iščejo priložnosti, da bi svojim sodelavcem pomagali. S tem pa se<b> ustvarijo pogoji za dobre timske dosežke</b>.<br/><br/>Ko dva ali več zelo zavzetih zaposlenih začne deliti svoje misli med seboj, se hitro razvije ustvarjalni potencial tima in ustvarijo edinstvene ideje.",
      },
      en: {
        heading: "Teamwork improves.",
        text: "Collaboration between team members is an important aspect of running a successful organization. Committed employees see themselves as part of the overall success of the organization and are willing to be a strong link in the chain of successful teamwork. They keep teams together and are always looking for opportunities to help their colleagues. This in turn creates the conditions for good team performance.<br><br>When two or more highly-devoted employees start sharing their thoughts with each other, the creative potential of the team develops and unique ideas are generated.",
      },
    },
  ];

  const borderedParagraphListPoints = [
    {
      sl: "71% zaposlenih bi pristalo na znižanje plače, če bi lahko opravljali svojo idealno službo.",
      en: "71% of employees would accept a pay cut to do their ideal job.",
    },
    {
      sl: "47% aktivnih iskalcev zaposlitve je službo zapustilo zaradi neustrezne organizacijske kulture.",
      en: "47% of active job seekers quit their position due to an inadequate organizational culture.",
    },
    {
      sl: "Samo 12% zaposlenih je bilo zadovoljnih s svojo trenutno poslovno vlogo.",
      en: "Only 12% of employees were satisfied with their current business role.",
    },
    {
      sl: "Kar 81% anketirancev je bilo odprtih za nove zaposlitvene možnosti.",
      en: "81% of respondents were open to new job opportunities.",
    },
  ];

  const blog_data = {
    title: data[locale].title,
    authors: [{ image: "/Team/Roman.webp", name: "Roman Klarič" }],
    image: "/clanki/1/image1.webp",
    excerpt: data[locale].excerpt,
  };

  return (
    <Blog_page _data={blog_data}>
      <NewParagraph></NewParagraph>
      <Plain_text>{data[locale].pt1}</Plain_text>
      <NewParagraph></NewParagraph>
      <Border_shadow>
        <Container>
          {numberedPoints.map((point, index) => (
            <>
              <Subtitle2>
                {index + 1}. {point[locale].heading}
              </Subtitle2>
              <NewParagraph></NewParagraph>
              <BodyText3
                dangerouslySetInnerHTML={{ __html: point[locale].text }}
              ></BodyText3>
              <NewParagraph></NewParagraph>
            </>
          ))}
        </Container>
      </Border_shadow>
      <NewParagraph></NewParagraph>
      <Container>
        <Subtitle2>{data[locale].t2_heading}</Subtitle2>
        <NewRow></NewRow>
        <BodyText3>{data[locale].t2_text}</BodyText3>
      </Container>

      <NewParagraph></NewParagraph>

      <Container_border>
        <Subtitle2>
          {locale === "sl"
            ? "Podjetje Hays je v poročilu »What People Want« objavilo naslednje izsledke svoje raziskave:"
            : 'In its "What People Want" survey, Hays reported the following findings:'}
        </Subtitle2>
        <NewRow></NewRow>
        <UnorderedList>
          {borderedParagraphListPoints.map((point, index) => (
            <ListItem>
              <BodyText3>{point[locale]}</BodyText3>
            </ListItem>
          ))}
        </UnorderedList>

        <NewRow></NewRow>

        <BodyText3>
          {locale === "sl"
            ? "Navedene ugotovitve kažejo, da je potrebno intenzivno delati na konceptu zavzetosti zaposlenih in uvajati programe, ki izboljšujejo izkušnjo naših zaposlenih."
            : "People who work for a company need to be more engaged and have better experiences at work, and these findings show that we need to work hard on the idea of employee engagement."}
        </BodyText3>
      </Container_border>

      <NewParagraph></NewParagraph>
    </Blog_page>
  );
};

export const ListItem = styled.li`
  text-align: left;
`;

export const UnorderedList = styled.ul`
  text-align: left;
  list-style: disc;
  padding-left: 0%;

  @media screen and (min-width: 768px) {
    padding-left: 10%;
  }
`;

export default Clanek1;
