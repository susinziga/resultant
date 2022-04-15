import { BodyText3 } from "../../../basic_components/texts/Texts";
import useTranslation from "next-translate/useTranslation";
import { List } from "../BulletSection.styled";
import {
  Bold,
  Header,
  ListHeadingText,
  ListItem,
} from "./SecondSection.styled";
import styled from "styled-components";

const SecondSection_kukvs = () => {
  const { t, lang } = useTranslation();

  return (
    <PaddingX>
      <Header>Izbira ustrezne metodologije</Header>
      <BodyText3>
        Pripravi načrta razvoja sledi izbira najustreznejše metodologije. Na
        podlagi identifikacije vrzeli in rezultatov testiranj kompetenc
        posameznikov (DNLA) lahko z izjemno natančnostjo določimo točno tiste
        kompetence in razvojne vsebine, ki bodo najbolj vplivale na doseganje
        pričakovanih rezultatov razvoja ključnih kadrov.
      </BodyText3>

      <ListHeadingText>
        Zaradi specifičnosti organizacij in njihovih razvojnih potreb je
        velikokrat potrebno med seboj povezati in kombinirati različne pristope:
      </ListHeadingText>

      <List>
        <li>
          <ListItem>
            <Bold>Poslovni trening</Bold> je proces poučevanja skozi vnaprej
            dogovorjen program, namenjen nadgradnji, osvojitvi in uporabi
            specifičnih znanj, ki jih potrebuje določeno delovno mesto in
            organizacija.
          </ListItem>
        </li>
        <li>
          <ListItem>
            <Bold>Coaching</Bold> (individualni ali skupinski), je proces za
            maksimalni izkoristek potenciala osebe za povečanje osebne
            uspešnosti. Za razliko od treninga proces coachinga ne temelji na
            poučevanju, temveč nudi vodenje za doseganje določenih ciljev
            udeleženca.
          </ListItem>
        </li>
        <li>
          <ListItem>
            <Bold>Učenje med delom</Bold> je najhitrejša in najučinkovitejša
            oblika prenosa novih veščin, kompetenc in rešitev v praktično
            izvajanje. Po naših izkušnjah je zelo učinkovita metoda pri vpeljavi
            novih procesov in operativnih rešitev ter tudi pri upravljanju
            sprememb v organizaciji. S tem pristopom tudi neposredno vplivamo na
            organizacijsko kulturo.
          </ListItem>
        </li>
        <li>
          <ListItem>
            <Bold>Mentoriranje in uvajalni program</Bold> je zelo učinkovit
            pristop pri strokovnem uvajanju novo zaposlenih, pri razvoju
            naslednikov in zaposlenih, ki se pripravljajo na prevzem delovno in
            strokovno intenzivnih delovnih mest.
          </ListItem>
        </li>
        <li>
          <ListItem>
            <Bold>Delavnice</Bold> so primerna metoda pri izmenjavi znanja,
            dognanj in učinkovitih praks med udeleženci, velikokrat pa so
            namenjene tudi pristopom reševanja problemskih situacij.
          </ListItem>
        </li>
        <li>
          <ListItem>
            <Bold>Mediacijski pristop</Bold> je ena izmed najučinkovitejših
            metod za obvladovanje problemskih situacij in sporov v timih,
            oddelkih in organizacijah.
          </ListItem>
        </li>
      </List>

      <BodyText3>
        Pri določanju in izbiri ustrezne metodologije je izjemno pomembno
        upoštevati načine in procese dela ter predhodno identificirane
        specifične potrebe udeležencev, ki so žal velikokrat ob izvedbah
        generičnih usposabljanj in izobraževanj spregledane. To je po naših
        izkušnjah velikokrat razlog za nedoseganje želenih in pričakovanih
        učinkov razvoja.
      </BodyText3>
    </PaddingX>
  );
};

export const PaddingX = styled.div`
  padding: 0% 5%;
`;

export default SecondSection_kukvs;
