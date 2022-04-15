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

const Clanek4 = () => {
  const blog_data = {
    title: "Enostavni pristopi razvijanja socialnih kompetenc",
    authors: [{ image: "/Team/Roman.png", name: "Roman Klarič" }],
    image: "/clanki/4/image1.png",
    excerpt: `Med izvrstnim naborom DNLA orodij po svoji uporabni vrednosti še posebej izstopa DNLA merjenje socialnih kompetenc. Dobro razvite socialne veščine namreč bistveno povečajo naše zmožnosti za hitro osvajanje drugih veščin, kot so denimo kompetence vodenja ali prodaje. Pravzaprav tvorijo temelj za njihovo nadgradnjo. Brez dobro razvitih socialnih veščin bomo bistveno težje kakovostno razvili ostale poslovne kompetence.`,
  };

  return (
    <Blog_page _data={blog_data}>
      <NewParagraph></NewParagraph>
      <Plain_text
        dangerouslySetInnerHTML={{
          __html: `V vseh teh letih, ko v naših svetovalnih projektih intenzivno uporabljamo DNLA sistem, zaznavamo, da imamo tudi v slovenskem poslovnem okolju kar nekaj kompetenčnih primanjkljajev ravno v kategoriji socialne kompetentnosti. Še posebej se to nanaša na uporabo empatije pri delu, odprte in asertivne komunikacije ter pomanjkanje samozavesti. Ravno te kompetence pa najpogosteje<b> zavirajo razvoj našega osebnega potenciala</b>, ki se skriva v vsakem od nas.<br/><br/>
 
 Socialne veščine so kompetence, ki<b> olajšajo komunikacijo in interakcijo z drugimi</b> v katerem koli okolju. Empatija ima ključno vlogo pri povezovanju z drugimi ter nam omogoča, da resnično razumemo čustva, misli in ideje drugega. Sposobnost razumevanje in upravljanja lastnih misli ter čustev pa nam je v veliko pomoč pri izražanju svojih idej in sodelovanju z drugimi. Še posebej v zahtevnejših situacijah, kjer potrebujemo visoko samozavest in dobre komunikacijske spretnosti. Razvoj socialnih veščin nam lahko zelo koristi tako v poslovnem kot tudi privatnem življenju.`,
        }}
      ></Plain_text>
      <NewParagraph></NewParagraph>
      <Border_shadow>
        <Container>
          <Subtitle2>Komunikacija in empatija</Subtitle2>
          <NewParagraph></NewParagraph>
          <BodyText3
            dangerouslySetInnerHTML={{
              __html: `Začnite razvijati svoje socialne veščine tako, da povečate obseg medsebojne interakcije in komunikacije z ljudmi, s katerimi dnevno sodelujete.<b> Iščite inovativne načine in obojestransko zanimive teme</b> za pogovore s sodelavci, vašim šefom, prijatelji in družinskimi člani. Naučite se postavljati odprta vprašanja in nato to prakticirajte v vsakodnevni komunikaciji. Postavljanje odprtih vprašanj je učinkovit način, da druge spodbudite k pogovoru.<br/><br/>
 
 Večina ljudi rada izraža svoje poglede in misli ter jih tak pristop motivira k odprti komunikaciji. Za vas pa je to priložnost<b> empatičnega poslušanja in zaznavanja njihovih občutkov in odzivov</b>. On tem lahko vadite tudi svoje veščine neverbalne komunikacije, vzdrževanja očesnega stika in opazovanja neverbalne komunikacije svojega sogovornika. Bodite pozorni na neverbalno komunikacijo, besede in govorico telesa, ki ga uporablja vaš sogovornik. Učite se od drugih, tako, da tudi sami uporabite načine, ki so se vam v tem opazovanju zdeli učinkoviti in privlačni. Vendar bodite pozorni, da jih uporabite na sebi avtohton način. Z uporabo vseh teh pristopov intenzivno razvijamo svojo veščino empatije.<br/><br/>
     
 Vzpostavljanje novih stikov in odnosov z drugimi je ravno tako pomemben vidik razvoja svoje socialne kompetentnosti. Širjenje svoje mreže prijateljev, znancev, strokovnih sodelavcev, strokovnih kolegov tudi izven meja organizacije je zato zelo pomemben element na poti boljše socialne kompetentnosti. Seveda ne govorimo (samo) o povezovanju na družbenih omrežjih, temveč o fizičnem druženju. Povabite raje svoje sodelavce na kavo ali kosilo. V naravi človeka je, da se druži z drugimi. Skupna vloga ali delovne obveznosti vam lahko ponudijo skupne teme, vendar je dobro, če iščete teme tudi izven delovnih okvirjev in svoje vloge. Od vsakega se lahko nekaj naučimo, večje število socialnih druženj pa nam odpira tudi nove poglede in perspektive. Trudite se, da boste<b> redno spremljali trende</b>, še posebej na svoje poslovnem področju, to vam bo omogočalo prijetno in konstruktivno komunikacijo ter dvignilo tudi vašo samozavest.`,
            }}
          ></BodyText3>
          <NewParagraph></NewParagraph>
          <Subtitle2>Samozavest</Subtitle2>
          <NewParagraph></NewParagraph>
          <BodyText3
            dangerouslySetInnerHTML={{
              __html: `<b>Samozavest pomeni zaupanje v lastne sposobnosti ter poznavanje svoje vrednosti</b>. Tudi to socialno kompetenco je moč razvijati, če imamo dovolj močno voljo. Ja pa res, da se moramo pri tem zavedati, da bo potrebno najprej stopiti ven iz svoje cone udobja.<br/><br/>
 
 Prvi korak na poti večje samozavesti je ta, da začnete ceniti svoje dobre lastnosti. Razmislite, kaj vam je všeč pri sebi, ter nato to ozavestite in ponotranjite. Če cenite svoje prednosti, začnete pozitivno razmišljati o sebi. <b>Ko se vam pojavijo negativne misli o samemu sebi, jih enostavno ignorirajte</b>. Vaše misli vas oblikujejo, zato v njih  raje vključujte svoje dobre plati.<br/><br/>
    
 V življenju imamo že tako veliko izzivov, zakaj bi k temu dodajali še to, kaj drugi mislijo o vas. Vsakdo ima svoje pomanjkljivosti.<b> Nehajte se osredotočati na to, kako vas drugi vidijo</b>. Raje svoje »pomanjkljivosti« sprejmite in se osredotočite na svoj osebni napredek. Za razvoj samozavesti je ključno,<b> da sistematično delate na svojem osebnem razvoju</b>. Pri tem je najbolj pomembno, da lahko svoj napredek vidite in zaznavate. Zato si zastavite jasne cilje, ki vam bodo v pomoč pri tem. Začnite z majhnimi koraki. Postavite si cilje, za katere veste, da jih lahko dosežete. Uspehi gradijo samopodobo, tudi če so majhni.<br/><br/>
 
 <b>K večji samozavesti pripomore tudi videz</b>. To pomeni, da delajte tudi na svoji drži in izboljšanju  govorice telesa. Govorica telesa veliko pove o vaši samozavesti. Zato naj bo vaša drža odprta, vzpostavite očesni stik in se nasmehnite. Tudi oblačenje lahko pripomore k večji samozavesti.  Oblačite se tako, da se boste dobro počutili. Skrb za samega sebe je naslednji element višje samozavesti. Nesporno pomaga, če smo zadovoljni s svojim telesnim videzom in delujemo zdravi. Pomembno je, da v svoje prenatrpane urnike vključujemo tudi redno telesno vadbo, se zdravo prehranjujemo ter počnemo stvari, v katerih uživamo.<br/><br/>
 
  »Več znaš, več veljaš!« To so nam govorili že naši dedki in babice. Danes to verjetno še bolj drži. Znanje po svetu se bliskovito širi in tudi mi moramo slediti tem trendom. Zato ne pozabite na svoj um in potrebo po osvajanju novih znanj. Vsako na novo osvojeno znanje enormno dvigne našo samozavest.<b> Znanje je hrana za rast naše samozavesti</b>. In ja, na svetu obstaja res veliko število odličnih knjig, ki nam lahko odpirajo popolnoma drugačne poglede in perspektive. Poiščite te zaklade.`,
            }}
          ></BodyText3>
        </Container>
      </Border_shadow>

      <NewParagraph></NewParagraph>

      <Container_border>
        <BodyText3>
          Z uporabo DNLA merjenja socialnih veščin pridobimo še veliko drugih
          uvidov v naše socialne veščine in sposobnosti. Pogosto tudi take,
          katerih še nismo prepoznali in jih ozavestili. Na ta način lahko
          enostavno odrivamo tudi ovire, ki nam preprečujejo, da bi razvili naš
          polni potencial. Zakaj jih nebi prepoznali?
        </BodyText3>
      </Container_border>

      <NewParagraph></NewParagraph>
    </Blog_page>
  );
};

export default Clanek4;
