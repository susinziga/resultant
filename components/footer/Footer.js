import React from "react";
import * as Styled from "./Footer.styled";
import FooterInput from "./FooterInput";

const Footer = () => {
  return (
    <div>
      <Styled.FooterContainer>
        <Styled.UpperFooterContainer>
          <Styled.InfoFooterHeading>Resultant d.o.o.</Styled.InfoFooterHeading>
          <Styled.ContactFooterContainer>
            <Styled.Contact>Franca Pirca 8</Styled.Contact>
            <Styled.Contact>Kamnik 1241</Styled.Contact>
          </Styled.ContactFooterContainer>
          <Styled.ContactsFooterContainer>
            <Styled.ContactIconContainer>
                <Styled.ContactIcon src="./Footer/-call.png"></Styled.ContactIcon>
                <Styled.ContactLink>041 231 831</Styled.ContactLink>
            </Styled.ContactIconContainer>
            <Styled.ContactIconContainer>
                <Styled.ContactIcon src="./Footer/-email.png"></Styled.ContactIcon>
                <Styled.ContactLink>roman.klaric@resultant.si</Styled.ContactLink>
            </Styled.ContactIconContainer>
          </Styled.ContactsFooterContainer>
        </Styled.UpperFooterContainer>

        <Styled.FooterHeader>
          Najnovejše novice in prispevki ekipe Resultant.
        </Styled.FooterHeader>
        <Styled.InputFooterContainer>
          <FooterInput></FooterInput>
        </Styled.InputFooterContainer>
        <Styled.Combine>
            <Styled.SocialFooterContainer>
            <Styled.SocialLink>
                <Styled.Social
                src="./Footer/linkedin.png"
                alt="linkedin"
                ></Styled.Social>
            </Styled.SocialLink>
            <Styled.SocialLink>
                <Styled.Social
                src="./Footer/facebook.png"
                alt="facebook"
                ></Styled.Social>
            </Styled.SocialLink>
            <Styled.SocialLink>
                <Styled.Social
                src="./Footer/twitter.png"
                alt="twitter"
                ></Styled.Social>
            </Styled.SocialLink>
            </Styled.SocialFooterContainer>
            <Styled.LinkFooterContainer>
            <Styled.Link>Piškotki</Styled.Link>
            <Styled.Link>Podpora strankam</Styled.Link>
            <Styled.Link>Pravilnik o zasebnosti</Styled.Link>
            <Styled.Link>&copy; 2022 Agencija Statera</Styled.Link>
            </Styled.LinkFooterContainer>
        </Styled.Combine>
      </Styled.FooterContainer>
    </div>
  );
};

export default Footer;
