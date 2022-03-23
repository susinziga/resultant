import React from "react";
import * as Styled from "./Footer.styled";
import FooterInput from "./FooterInput";

const Footer = () => {
  return (
    <div>
      <Styled.FooterContainer>
        <Styled.UpperFooterContainer>
          <Styled.InfoFooterHeading>Resultant d.o.o.</Styled.InfoFooterHeading>
        </Styled.UpperFooterContainer>

        <Styled.FooterHeader>
          Najnovejše novice in prispevki ekipe Resultant.
        </Styled.FooterHeader>
        <Styled.InputFooterContainer>
          <FooterInput></FooterInput>
        </Styled.InputFooterContainer>
        <Styled.SocialFooterContainer>
          <a style={{ width: "25%" }}>
            <Styled.Social
              src="./Footer/linkedin.png"
              alt="linkedin"
            ></Styled.Social>
          </a>
          <a style={{ width: "25%" }}>
            <Styled.Social
              src="./Footer/facebook.png"
              alt="facebook"
            ></Styled.Social>
          </a>
          <a style={{ width: "25%" }}>
            <Styled.Social
              src="./Footer/twitter.png"
              alt="twitter"
            ></Styled.Social>
          </a>
        </Styled.SocialFooterContainer>
        <Styled.LinkFooterContainer>
          <Styled.Link>Piškotki</Styled.Link>
          <Styled.Link>Podpora strankam</Styled.Link>
          <Styled.Link>Pravilnik o zasebnosti</Styled.Link>
          <Styled.Link>&copy; 2022 Agencija Statera</Styled.Link>
        </Styled.LinkFooterContainer>
      </Styled.FooterContainer>
    </div>
  );
};

export default Footer;
