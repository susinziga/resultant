import useTranslation from "next-translate/useTranslation";
import React from "react";
import {
  BodyText2,
  BodyText3,
  Subtitle2,
} from "../../basic_components/texts/Texts";
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

import { useRouter } from "next/router";

const ClanekTychy = () => {
  const { locale } = useRouter();

  const data = {
    sl: {
      title:
        "Pet vprašanj Aleksandru Tychyju o razvoju potenciala z DNLA orodjem",
      author_name: `G. Tychyja je intervjuvalo podjetje perbit, ki razvija programsko opremo
    za delo s kadri.`,
      excerpt: `"Za menedžerje je zelo pomembno, da vedo, kako so njihovi zaposleni - ne le v času pandemije Covid-19," pravi Alexander Tychy. Alexander, ki je vodja prodaje družbe DNLA GmbH, pojasnjuje, kako analiza mehkih veščin, ki jo je razvilo njegovo podjetje, podpira zaposlene in vodje.`,

      questions: [
        {
          question: `Prvo vprašanje: “Gospod Tychy, v času Covid-
        19 se mnogo ljudi sooča z velikimi izzivi. Je
        zaradi tega še posebej pomembno skrbeti za
        svoje zaposlene? Kako lahko analiza mehkih
        veščin, kot je DNLA, pripomore k temu, da se
        zaposleni ne počutijo pozabljene s strani
        delodajalca ter posledično osamljene?”`,
          answer: `Alexander Tychy: “Za menedžerje je zelo
          pomembno, da vedo, kako so njihovi zaposleni
          - ne le v času Covid-19: Ali so nekateri člani
          moje ekipe trenutno pod pritiskom? Kako
          dobro znajo prenašati spremembe? Kako je s fleksibilnostjo? Ali se spopadajo s stresom? Ali obstajajo
          frustracije ali neprepoznani dejavniki, ki lahko zavirajo njihovo motivacijo? Z našimi spletnimi
          vprašalniki in analizo DNLA »Odkrivanje naravnih latentnih sposobnosti« smo razvili instrumente, ki
          so v pomoč menedžerjem in delodajalcem, da vedno vedo, kje njihovi ljudje potrebujejo podporo.
          Lepota tega je v tem, da je uporabljena psihometrija vključena v orodje za trajnostni dolgoročni
          razvoj mehkih veščin, ki so ključni dejavniki za uspeh pri delu. Udeleženci redno izpolnjujejo
          vprašalnik, ki je vpet v strukturiran svetovalni proces. Zaposleni dobijo povratne informacije na
          podlagi rezultatov analize, na koncu pa se za vsakogar prilagodi akcijski načrt. To predstavlja tudi nek
          cilj za vodje, da skupaj z zaposlenim poskušajo udejanjati pridobljena priporočila v vsakdanjem
          delovnem življenju.”`,
        },
        {
          question: `Drugo vprašanje: “Tu je torej poudarek na posamezniku. Ali obstaja nevarnost, da bi vsak poskušal
        pustiti čim boljši pečat, morda celo na račun drugih?”`,
          answer: `Alexander Tychy: “Ne. Ne gre za nesmiselno potiskanje ljudi naprej. Cilj je, da imajo vsi osnovne
          veščine, ki jih potrebujejo za dobro delo v težkih razmerah – kot so v tem trenutku. Dobro delati
          pomeni skupaj razvijati in izvajati stvari. Danes ni prav nič drugače. DNLA ne daje prednost
          egocentrikom, saj prepozna, kdaj je oseba nagnjena k pretiravanju. Na primer samozavest je odličen
          in pomemben pogoj za dobro delo. Če pa je oseba nagnjena k pretirani samozavesti in aroganci, bo to
          postalo problematično - za osebo, ki jo zadeva, in za njeno okolje. Zato je dobro takšne težnje
          prepoznati že v zgodnji fazi in se jim znati zoperstaviti.”`,
        },
        {
          question: `Tretje vprašanje: “Metoda DNLA temelji na seriji raziskav o dejavnikih uspeha na delovnem mestu,
        opravljenih na Inštitutu Maxa Plancka v zgodnjih devetdesetih letih. Je še aktualna? Kako dobro se
        "Za menedžerje je zelo pomembno, da vedo, kako so njihovi zaposleni - ne le v času pandemije
        Covid-19," pravi Alexander Tychy. Alexander, ki je vodja prodaje družbe DNLA GmbH,
        pojasnjuje, kako analiza mehkih veščin, ki jo je razvilo njegovo podjetje, podpira zaposlene in
        vodje.
        
        takšna metoda prilega današnjemu delovnemu svetu, za katerega sta značilni agilnost in hitre
        spremembe?”`,
          answer: `Alexander Tychy: “Orodja za analizo in razvoj DNLA imajo dolgo tradicijo ter s tem tudi izkušnje. Kljub
          temu so še vedno aktualna. To dokazujejo redno izvedene študije in praktične izkušnje. Baza
          podatkov, ki se uporablja za primerjave in izračune, se nenehno posodablja. Postopki DNLA izrecno
          obravnavajo tudi vidik "agilnosti". Obstaja celo ločen kazalnik, kako dobro se zaposleni obnesejo v
          agilnem kontekstu in v agilnih oblikah sodelovanja. In če pomislite, katere individualne kompetence
          so del koncepta »agilnosti«, potem govorimo o dejavnikih, kot so osebna odgovornost, iniciativnost
          ali fleksibilnost. Te so bile vedno del DNLA analiz.”`,
        },
        {
          question: `Četrto vprašanje: “Ali se lahko orodja DNLA uporabljajo tudi za novince ali so primerna samo za
        strokovnjake in managerje?”`,
          answer: `Alexander Tychy: “Začetki zaposlitve so pomembna tema. Po eni strani mnogi mladi še ne vedo, kaj bi
          radi počeli v svoji karieri in v čem so dobri. Po drugi strani pa podjetjem pogosto primanjkuje
          kvalificiranih kandidatov in pripravnikov. DNLA tu nudi podporo na dva načina: kot način določanja
          položaja mladih, ki razkriva njihove prednosti in razvojne potenciale, in kot vodnik, ki jim pokaže, kaj
          je pomembno v poklicnem življenju in na določenih položajih.
          Koristi ima tudi delodajalec, saj kandidate že na začetku bolje spozna, podobno kot z vpogledom v
          šolske ocene ali prejete prošnje za delo. S priporočili za napredovanje in individualnimi razvojnimi
          načrti, ki jih ponuja DNLA, lahko delodajalci pomagajo svojim mlajšim zaposlenim, da sledijo svoji poti
          in uresničijo svoj potencial.”`,
        },
        {
          question: `Peto vprašanje: “Verjetno bi bilo najbolje, če bi vsak zaposleni lahko imel koristi od takšne podpore,
        če bi to le bilo mogoče. Bi to bilo drago?”`,
          answer: `Alexander Tychy: “Da, do neke mere bi bilo drago - a je kasnejša vrednost vložka višja. Poleg tega bi se
          moral vsak delodajalec vprašati, koliko truda in denarja bo pozneje potrebno vložiti v popravke, če
          bodo zaposleni v določenih situacijah ostali »sami« in če bodo ukrepali šele potem, ko se izzivi že
          pojavijo. DNLA je tudi osrednja komponenta »HR bilance stanja« - koncepta za kadrovski in
          organizacijski razvoj srednje velikih podjetij. Tukaj gredo vsi v podjetju – od vajencev do upravnega
          odbora - skozi razvojni proces DNLA. Prioritete se določijo glede na rezultate začetne analize in glede
          na to, kje v organizaciji je trenutno največja potreba po podpori. Poleg tega lahko »HR bilanca stanja«
          pomaga prepoznati neuspehe vodenja ali problematičen razvoj v organizaciji. Ker kadrovska bilanca
          ni enkratna stvar, ampak stalen proces, se bo iz teh razvojnih procesov v celotni organizaciji
          postopoma pojavila kulturna sprememba v podjetju in vzdušje, ki bo vsem omogočilo razvoj svojega
          polnega potenciala.”`,
        },
      ],
      last: `Alexander Tychy je vodja prodaje pri DNLA GmbH. DNLA podpira organizacije, da svoje zaposlene
    spravijo v vrhunsko mentalno kondicijo, prepoznajo prednosti kandidatov in vodjem pomagajo videti,
    kako se njihovi zaposleni počutijo. Psihometrija, povezana z delom in razvojna orodja DNLA
    (Discovering Natural Latent Abilities) temeljijo na študijah Inštituta za psihologijo Maxa Plancka pod
    vodstvom prof. dr. Brengelmanna in dr. W. Strasserja.`,
    },
    en: {
      title:
        "Five questions to Alexander Tychy about the development of potential with DNLA",
      author_name: `Mr. Tychy was Interviewed by perbit, a company developing
      HR-administration software.`,
      excerpt: `"It is of great importance for managers to always
      know how their employees are doing - not only in
      times of Corona," says Alexander Tychy. In this
      interview, the sales manager of DNLA GmbH
      explains how the soft-skills analysis developed by
      his company supports employees and managers.
      perbit also uses the DNLA method.`,
      questions: [
        {
          question: `Question one: Mr. Tychy, in times of Corona, many
        people are facing great challenges. Is it especially
        important now to take care of your employees?
        What can a soft-skills-analysis like DNLA do to ensure that employees don&#39;t feel left alone by their
        employer?`,
          answer: `Alexander Tychy: It is of great importance for managers to always know how their employees are
        doing - not only in times of Corona: Are some members of my team currently under pressure? How
        well can he or she handle change? How about flexibility? Or coping with stress? Are there
        frustrations, or unrecognized factors which have the potential to be killing someone´s motivation?
        With our online questionnaires and the DNLA analyses “Discovering Natural Latent Abilities”, we
        have developed instruments that help managers and employers to always know where their people
        need support. The beauty of it is that the psychometrics we use are designed as instruments for
        sustainable long-term development of soft-skills which are key factors for success in the job.
        Participants regularly go through the survey, which is embedded in a structured consulting process.
        Employees receive feedback based on the results of the analysis in an individual session, and at the
        end there is a tailored action plan for everyone. This also constitutes a mandate, so to speak, and a
        binding obligation for the managers, because the aim is to implement the recommendations
        together with the employee in everyday working life.`,
        },
        {
          question: `Question two: So here the focus is very much on the individual. Isn&#39;t there a danger that everyone
        will try to make their mark as well as possible, perhaps even at the expense of others?`,
          answer: `Alexander Tychy: No. It&#39;s not about pushing people forward senselessly. Rather, the goal is for
        everyone to have the basic skills which they need to be able to work well even under difficult
        conditions - such as we have at the moment. Working well always means developing and
        implementing things together. There is no other way to do it today. DNLA does not favor
        egomaniacs, but also allows to recognize when a person tends to exaggerate. Self-confidence, for
        example, is excellent and an important prerequisite for doing good work. But if a person tends
        
        towards overconfidence and arrogance, then it will become problematic - for the person concerned
        and for their environment. Therefore, it is good to recognize such tendencies at an early stage and to
        be able to counteract them.`,
        },
        {
          question: `Question three: The DNLA method builds on research series on success factors in the workplace
        conducted at the Max Planck Institute in the early 1990s. Is it still up to date? How well does such a
        method fit into today&#39;s working world, which is characterized by agility and rapid change?`,
          answer: `Alexander Tychy: The DNLA analysis- and development-tools have a long tradition and track record.
        Nevertheless, they are still up to date. This is shown by regularly conducted studies and practical
        experience. The database used for the comparisons and calculations is continuously updated. And
        with regard to “agility”, it is the case that DNLA procedures explicitly address this aspect. There is
        even a separate indicator for how well employees cope in an agile context and in agile forms of
        collaboration. And if you think about which individual competencies are part of the concept of
        “agility”, then we are talking about factors such as personal responsibility, initiative or flexibility.
        These have always been part of DNLA analyses.`,
        },
        {
          question: `Question four: Can the DNLA tools also be used for apprentices or are they only suitable for
        professionals and managers?`,
          answer: `Alexander Tychy: Job starters are an important topic. On the one hand, many young people do not
        yet know what they should do later on and what they are good at. On the other hand, companies
        often lack qualified applicants and trainees. DNLA gives support here in two ways: as a way of
        determining where young people stand, which reveals their strengths and development potential,
        and as a guide showing them what is important in professional life and in certain positions.
        The employer also benefits, because it gets to know the candidates better and more thoroughly from
        the outset than would be possible, for example, on the basis of school grades or letters of
        application. With the advancement recommendations and individual development plans that DNLA
        provides, employers can help their junior employees to follow their path and to realize their
        potential.`,
        },
        {
          question: `Question five: So it would be best if every employee could benefit from such support, if possible.
        But that would probably be far too costly?`,
          answer: `Alexander Tychy: Costly, yes, to some extent - but the effort is worth it. Besides, every employer
        should ask themselves how much effort will have to be made later on to make amends if employees
        are left "alone" in certain situations and when measures are only taken afterwards when problems
        arise. DNLA is also a central component of the "HR - balance sheet" - a concept for personnel- and
        organizational development for medium-sized companies. Here, everyone in the company - from the
        apprentices to the board of directors - goes through a DNLA development process. Depending on the
        results of the initial analysis and depending on where in the organization the need for support is
        greatest at the moment, priorities are set. In addition, the HR - balance sheet can help to identify
        leadership failures or problematic developments in the organization. Since the HR - balance sheet is
        not a one-time thing, but a continuous process, a cultural change in the company and a climate of
        success will gradually emerge from these organization-wide development processes that will enable
        everyone to access their full potential and to bring it to work.`,
        },
      ],
      last: `Alexander Tychy is head of sales at DNLA GmbH. DNLA supports companies in getting their employees
      into top mental shape, recognizing the strengths of applicants, and it makes it easier for managers to
      see how their employees feel. The job-related psychometrics and development-tools DNLA
      (Discovering Natural Latent Abilities) are based on studies at the Max Planck Institute for Psychology
      under the direction of Prof. Dr. Brengelmann and Dr. W. Strasser.`,
    },
  };

  const blog_data = {
    title: data[locale].title,

    authors: [
      {
        image: "/clanki/tychy/logo.webp",
        name: data[locale].author_name,
      },
    ],
    image: "",
    excerpt: data[locale].excerpt,
  };

  return (
    <Blog_page _data={blog_data}>
      <NewParagraph></NewParagraph>

      <Image src={"/clanki/tychy/_image1.jpg"}></Image>

      <NewParagraph></NewParagraph>

      <Border_shadow>
        <Container>
          <h2 style={{ fontFamily: "Neusa", fontSize: "1.25rem" }}>
            <>{data[locale].questions[0].question}</>
          </h2>
          <NewRow></NewRow>
          <BodyText3>{data[locale].questions[0].answer}</BodyText3>

          <NewParagraph></NewParagraph>

          <h2 style={{ fontFamily: "Neusa", fontSize: "1.25rem" }}>
            <>{data[locale].questions[1].question}</>
          </h2>
          <NewRow></NewRow>
          <BodyText3>{data[locale].questions[1].answer}</BodyText3>

          <NewParagraph></NewParagraph>

          <h2 style={{ fontFamily: "Neusa", fontSize: "1.25rem" }}>
            <>{data[locale].questions[2].question}</>
          </h2>
          <NewRow></NewRow>
          <BodyText3>{data[locale].questions[2].answer}</BodyText3>

          <NewParagraph></NewParagraph>

          <h2 style={{ fontFamily: "Neusa", fontSize: "1.25rem" }}>
            <>{data[locale].questions[3].question}</>
          </h2>
          <NewRow></NewRow>
          <BodyText3>{data[locale].questions[3].answer}</BodyText3>

          <NewParagraph></NewParagraph>

          <h2 style={{ fontFamily: "Neusa", fontSize: "1.25rem" }}>
            <>{data[locale].questions[4].question}</>
          </h2>
          <NewRow></NewRow>
          <BodyText3>{data[locale].questions[4].answer}</BodyText3>

          <NewParagraph></NewParagraph>
        </Container>
      </Border_shadow>

      <NewParagraph></NewParagraph>

      <Plain_text>{data[locale].last}</Plain_text>

      <NewParagraph></NewParagraph>
      <NewParagraph></NewParagraph>
    </Blog_page>
  );
};

export default ClanekTychy;
