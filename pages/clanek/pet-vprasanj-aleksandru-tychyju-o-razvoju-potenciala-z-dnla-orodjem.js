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

const ClanekTychy = () => {
  const blog_data = {
    title:
      "Pet vprašanj Aleksandru Tychyju o razvoju potenciala z DNLA orodjem",
    authors: [],
    image: "",
    excerpt: `"Za menedžerje je zelo pomembno, da vedo, kako so njihovi zaposleni - ne le v času pandemije Covid-19," pravi Alexander Tychy. Alexander, ki je vodja prodaje družbe DNLA GmbH, pojasnjuje, kako analiza mehkih veščin, ki jo je razvilo njegovo podjetje, podpira zaposlene in vodje. `,
  };

  return (
    <Blog_page _data={blog_data}>
      <NewParagraph></NewParagraph>

      <Plain_text>
        G. Tychyja je intervjuvalo podjetje perbit, ki razvija programsko opremo
        za delo s kadri.
      </Plain_text>

      <NewParagraph></NewParagraph>

      <Border_shadow>
        <Container>
          <BodyText2>
            <b>
              Prvo vprašanje: »Gospod Tychy, v času Covid-19 se mnogo ljudi
              sooča z velikimi izzivi. Je zaradi tega še posebej pomembno
              skrbeti za svoje zaposlene? Kako lahko analiza mehkih veščin, kot
              je DNLA, pripomore k temu, da se zaposleni ne počutijo pozabljene
              s strani delodajalca ter posledično osamljene?
            </b>
          </BodyText2>
          <NewRow></NewRow>
          <BodyText3>
            Alexander Tychy: Za menedžerje je zelo pomembno, da vedo, kako so
            njihovi zaposleni - ne le v času Covid-19: Ali so nekateri člani
            moje ekipe trenutno pod pritiskom? Kako dobro znajo prenašati
            spremembe? Kako je s fleksibilnostjo? Ali se spopadajo s stresom?
            Ali obstajajo frustracije ali neprepoznani dejavniki, ki lahko
            zavirajo njihovo motivacijo? Z našimi spletnimi vprašalniki in
            analizo DNLA »Odkrivanje naravnih latentnih sposobnosti« smo razvili
            instrumente, ki so v pomoč menedžerjem in delodajalcem, da vedno
            vedo, kje njihovi ljudje potrebujejo podporo. Lepota tega je v tem,
            da je uporabljena psihometrija vključena v orodje za trajnostni
            dolgoročni razvoj mehkih veščin, ki so ključni dejavniki za uspeh
            pri delu. Udeleženci redno izpolnjujejo vprašalnik, ki je vpet v
            strukturiran svetovalni proces. Zaposleni dobijo povratne
            informacije na podlagi rezultatov analize, na koncu pa se za
            vsakogar prilagodi akcijski načrt. To predstavlja tudi nek cilj za
            vodje, da skupaj z zaposlenim poskušajo udejanjati pridobljena
            priporočila v vsakdanjem delovnem življenju.
          </BodyText3>

          <NewParagraph></NewParagraph>

          <BodyText2>
            <b>
              Drugo vprašanje: Tu je torej poudarek na posamezniku. Ali obstaja
              nevarnost, da bi vsak poskušal pustiti čim boljši pečat, morda
              celo na račun drugih?
            </b>
          </BodyText2>
          <NewRow></NewRow>
          <BodyText3>
            Alexander Tychy: Ne. Ne gre za nesmiselno potiskanje ljudi naprej.
            Cilj je, da imajo vsi osnovne veščine, ki jih potrebujejo za dobro
            delo v težkih razmerah - kot so v tem trenutku. Dobro delati pomeni
            skupaj razvijati in izvajati stvari. Danes ni prav nič drugače. DNLA
            ne daje prednost egocentrikom, saj prepozna, kdaj je oseba nagnjena
            k pretiravanju. Na primer samozavest je odličen in pomemben pogoj za
            dobro delo. Če pa je oseba nagnjena k pretirani samozavesti in
            aroganci, bo to postalo problematično - za osebo, ki jo zadeva, in
            za njeno okolje. Zato je dobro takšne težnje prepoznati že v zgodnji
            fazi in se jim znati zoperstaviti.
          </BodyText3>

          <NewParagraph></NewParagraph>

          <BodyText2>
            <b>
              Tretje vprašanje: Metoda DNLA temelji na seriji raziskav o
              dejavnikih uspeha na delovnem mestu, opravljenih na Inštitutu Maxa
              Plancka v zgodnjih devetdesetih letih. Je še aktualna? Kako dobro
              se takšna metoda prilega današnjemu delovnemu svetu, za katerega
              sta značilni agilnost in hitre spremembe?
            </b>
          </BodyText2>
          <NewRow></NewRow>
          <BodyText3>
            Alexander Tychy: Orodja za analizo in razvoj DNLA imajo dolgo
            tradicijo ter s tem tudi izkušnje. Kljub temu so še vedno aktualna.
            To dokazujejo redno izvedene študije in praktične izkušnje. Baza
            podatkov, ki se uporablja za primerjave in izračune, se nenehno
            posodablja. Postopki DNLA izrecno obravnavajo tudi vidik
            "agilnosti". Obstaja celo ločen kazalnik, kako dobro se zaposleni
            obnesejo v agilnem kontekstu in v agilnih oblikah sodelovanja. In če
            pomislite, katere individualne kompetence so del koncepta
            »agilnosti«, potem govorimo o dejavnikih, kot so osebna odgovornost,
            iniciativnost ali fleksibilnost. Te so bile vedno del DNLA analiz.
          </BodyText3>

          <NewParagraph></NewParagraph>

          <BodyText2>
            <b>
              Četrto vprašanje: Ali se lahko orodja DNLA uporabljajo tudi za
              novince ali so primerna samo za strokovnjake in managerje?
            </b>
          </BodyText2>
          <NewRow></NewRow>
          <BodyText3>
            Alexander Tychy: Začetki zaposlitve so pomembna tema. Po eni strani
            mnogi mladi še ne vedo, kaj bi radi počeli v svoji karieri in v čem
            so dobri. Po drugi strani pa podjetjem pogosto primanjkuje
            kvalificiranih kandidatov in pripravnikov. DNLA tu nudi podporo na
            dva načina: kot način določanja položaja mladih, ki razkriva njihove
            prednosti in razvojne potenciale, in kot vodnik, ki jim pokaže, kaj
            je pomembno v poklicnem življenju in na določenih položajih. Koristi
            ima tudi delodajalec, saj kandidate že na začetku bolje spozna,
            podobno kot z vpogledom v šolske ocene ali prejete prošnje za delo.
            S priporočili za napredovanje in individualnimi razvojnimi načrti,
            ki jih ponuja DNLA, lahko delodajalci pomagajo svojim mlajšim
            zaposlenim, da sledijo svoji poti in uresničijo svoj potencial.
          </BodyText3>

          <NewParagraph></NewParagraph>

          <BodyText2>
            <b>
              Peto vprašanje: Verjetno bi bilo najbolje, če bi vsak zaposleni
              lahko imel koristi od takšne podpore, če bi to le bilo mogoče. Bi
              to bilo drago?
            </b>
          </BodyText2>
          <NewRow></NewRow>
          <BodyText3>
            Alexander Tychy: Da, do neke mere bi bilo drago - a je kasnejša
            vrednost vložka višja. Poleg tega bi se moral vsak delodajalec
            vprašati, koliko truda in denarja bo pozneje potrebno vložiti v
            popravke, če bodo zaposleni v določenih situacijah ostali »sami« in
            če bodo ukrepali šele potem, ko se izzivi že pojavijo. DNLA je tudi
            osrednja komponenta »HR bilance stanja« - koncepta za kadrovski in
            organizacijski razvoj srednje velikih podjetij. Tukaj gredo vsi v
            podjetju - od vajencev do upravnega odbora - skozi razvojni proces
            DNLA. Prioritete se določijo glede na rezultate začetne analize in
            glede na to, kje v organizaciji je trenutno največja potreba po
            podpori. Poleg tega lahko »HR bilanca stanja« pomaga prepoznati
            neuspehe vodenja ali problematičen razvoj v organizaciji. Ker
            kadrovska bilanca ni enkratna stvar, ampak stalen proces, se bo iz
            teh razvojnih procesov v celotni organizaciji postopoma pojavila
            kulturna sprememba v podjetju in vzdušje, ki bo vsem omogočilo
            razvoj svojega polnega potenciala.
          </BodyText3>

          <NewParagraph></NewParagraph>
        </Container>
      </Border_shadow>

      <NewParagraph></NewParagraph>

      <Plain_text>
        Alexander Tychy je vodja prodaje pri DNLA GmbH. DNLA podpira
        organizacije, da svoje zaposlene spravijo v vrhunsko mentalno kondicijo,
        prepoznajo prednosti kandidatov in vodjem pomagajo videti, kako se
        njihovi zaposleni počutijo. Psihometrija, povezana z delom in razvojna
        orodja DNLA (Discovering Natural Latent Abilities) temeljijo na študijah
        Inštituta za psihologijo Maxa Plancka pod vodstvom prof. dr.
        Brengelmanna in dr. W. Strasserja.
      </Plain_text>

      <NewParagraph></NewParagraph>
      <NewParagraph></NewParagraph>
    </Blog_page>
  );
};

export default ClanekTychy;
