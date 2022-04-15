import React from "react";
import useTranslation from "next-translate/useTranslation";
import {
  ImageDescription,
  ImageHeader,
  OrderedList,
  RowHeader,
  RowText,
  Img,
  PaddingX,
  FirstSectionWrapper,
} from "./FirstSection.styled";

const FirstSection_kukvs = () => {
  const { t, lang } = useTranslation();

  return (
    <FirstSectionWrapper>
      <PaddingX>
        <ImageHeader bold>Priprava načrta razvoja</ImageHeader>

        <ImageDescription>
          Prvi korak je vsekakor priprava dobrega načrta razvoja. Osnovni koraki
          pri pripravi načrta razvoja so naslednji.
        </ImageDescription>
      </PaddingX>

      <Img
        className="desktop"
        src={"/SRK/KURKVS/firstSectionImg_desktop.png"}
      ></Img>
      <Img
        className="mobile"
        src={"/SRK/KURKVS/firstSectionImg_mobile.png"}
      ></Img>

      <PaddingX>
        <RowHeader>1. Identifikacija razvojnih področij</RowHeader>
        <RowText>
          Potrebno je določiti tista področja dela in delovnih procesov, kjer
          prihaja do neželenih učinkov. To nam pomaga, da se osredotočimo samo
          na izbrana žarišča ter na ta način optimiziramo čas, trud in potrebna
          sredstva za razvoj kompetentnosti.
        </RowText>
        <RowHeader>2. Identifikacija ključnih deležnikov</RowHeader>
        <RowText>
          Naslednji korak je določanje ključnih deležnikov (vodje, strokovno
          osebje, mladi potenciali in talenti, nasledniki), ki so neposredno
          vključeni v problemska področja. Pri tem določimo in po potrebi
          testiramo tiste posameznike, ki jih bomo vključili v program razvoja.{" "}
        </RowText>
        <RowHeader>3. Identifikacija vrzeli</RowHeader>
        <RowText>
          Osnovna področja, kjer izvedemo analizo med pričakovano in dejansko
          kompetentnostjo (kje smo trenutno in kje želimo biti), so področje
          strokovnih znanj, področje kompetenc in področje osebnega potenciala
          zaposlenih. Priporočamo celoviti presojo potenciala vaših sodelavcev
          po metodi DNLA.{" "}
        </RowText>
        <RowHeader>4. Postavitev natančno določenih ciljev razvoja</RowHeader>
        <RowText>
          Cilje postavimo na treh nivojih:
          <OrderedList>
            <li>Na nivoju posameznika. </li>
            <li>Na nivoju oddelkov. </li>
            <li>Področno in med-področno. </li>
          </OrderedList>
          Ko smo določili cilje razvoja, preverimo, ali pomagajo pri doseganju
          strateških in operativnih ciljev organizacije. Če niso usklajeni v
          popolnosti, je potrebno cilje razvoja določiti znova.
        </RowText>
      </PaddingX>
    </FirstSectionWrapper>
  );
};

export default FirstSection_kukvs;
