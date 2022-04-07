import React from "react";
import styledComponents from "styled-components";
import Blog_Header from "./header/Blog_header";
import Blog_image_excerpt from "./image_excerpt/Blog_image_excerpt";

const Blog_page = () => {
  return (
    <Container>
      <Blog_Header
        title="Visoka zavzetost sodelavcev prinaša organizaciji veliko prednost"
        author="Roman Klarič"
        image="/Team/Roman.png"
      ></Blog_Header>

      <Blog_image_excerpt
        image="/clanki/1/image1.png"
        excerpt="Boljša učinkovitost timov, povečana produktivnost zaposlenih, manjša fluktuacija, doseganje ciljev oddelka in pridobivanje najboljših talentov, so »sanje« in cilj večine organizacij. Za dosego tega pa je potrebno razviti visok delež zavzetih zaposlenih."
        excerpt2="Bolj zavzeti zaposleni delajo z večjo intenzivnostjo in strastjo, saj verjamejo v poslanstvo podjetja in zaupajo njegovim vrednotam. Zavzetost pa se pojavi takrat, ko so vaši sodelavci zadovoljni s svojimi poklicnimi vlogami in imajo jasno vizijo, kako lahko ustvarjajo vrednost na svojem delovnem mestu. Zavzetost zaposlenih ni »čudežni napitek,« vendar ima lahko nekaj odličnih učinkov na uspešnost vaše organizacije."
      ></Blog_image_excerpt>
    </Container>
  );
};

const Container = styledComponents.div`

padding-top:25%;
    
    width:90%;
    margin:auto;

    @media(min-width:768px){
padding-top:12%;
    }
    
`;
export default Blog_page;
