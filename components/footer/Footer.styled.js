import styled from "styled-components";

export const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--footer-color);
  // height: 800px;
  padding-top: 50%;
  margin-top: 10%;

  z-index: 999;

  @media only screen and (max-width: 350px) {
    //height: 700px;
    padding-top: 70%;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    // height: 900px;
    padding-top: 65%;
  }

  @media only screen and (min-width: 992px) {
    // height: 550px;
    padding-top: 0;
    margin-top: 10%;
  }

  @media only screen and (min-width: 1600px) {
    // height: 720px;
    padding-top: 0;
  }
`;

export const UpperFooterContainer = styled.div`
  z-index: 999999;
  width: 90%;
  min-height: 30%;
  background-color: var(--footer-color2);
  border-radius: 12px;
  margin: auto;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: left;
  padding: 6%;

  @media only screen and (min-width: 992px) {
    width: 30%;
    /* height: 55%; */
    top: -40px;
    right: 1%;
    left: none;
    transform: none;
    padding: 3.5% 3%;
  }

  @media only screen and (min-width: 1600px) {
    /* height: 55%; */
    padding: 3%;
    top: -50px;
  }
`;

export const InfoFooterHeading = styled.h2`
  font-family: "Neusa";
  font-weight: bold;
  font-size: 1.5rem;

  @media only screen and (min-width: 992px) {
    padding-bottom: 5%;
  }
`;

export const ContactFooterContainer = styled.div`
  margin-top: 2%;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 992px) {
    margin-top: 0;
  }
`;

export const Contact = styled.label`
  margin-top: 3%;
  font-family: "Neusa";
  font-weight: 300;
  font-size: 1rem;
`;

export const ContactLink = styled.a`
  margin-top: 5%;
  font-family: "Neusa";
  font-weight: 300;
  font-size: 1rem;
  line-height: 20px;

  @media only screen and (min-width: 992px) {
  }
`;

export const ContactsFooterContainer = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 992px) {
  }
`;

export const ContactIconContainer = styled.div`
  margin-bottom: 2%;
`;

export const ContactIcon = styled.img`
  margin-right: 5%;
`;

export const FooterHeader = styled.h2`
  font-family: "Neusa";
  position: relative;
  font-size: 1.5rem;
  color: white;
  width: 90%;
  margin: auto;

  @media only screen and (min-width: 992px) {
    font-size: 2rem;
    width: 40%;
    padding-top: 8%;
    margin: 0;
    margin-left: 5%;
    line-height: 120%;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 2rem;
    padding-top: 6%;
  }
`;

export const InputFooterContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 10%;

  @media only screen and (min-width: 992px) {
    margin: 0;
    margin-left: 5%;
    width: 35%;
    padding-top: 4%;
  }

  @media only screen and (min-width: 1600px) {
    padding-top: 3.5%;
  }
`;

export const SocialFooterContainer = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 15%;
  display: flex;
  justify-content: space-evenly;

  @media only screen and (min-width: 992px) {
    margin: 0;
    margin-left: 5%;
    justify-content: flex-start;
    width: 50%;
    padding-top: 7%;
    gap: 3%;
  }

  @media only screen and (min-width: 1600px) {
    padding-top: 5%;
  }
`;
export const SocialLink = styled.a`
  cursor: pointer;
  width: 25%;

  @media only screen and (min-width: 992px) {
    width: 5%;
  }
`;

export const Social = styled.img`
  width: 80%;

  @media only screen and (min-width: 992px) {
    width: 100%;
  }
`;

export const LinkFooterContainer = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    margin: 0;
    flex-direction: row-reverse;
    width: 90%;
    gap: 3%;
  }

  @media only screen and (min-width: 1600px) {
  }
`;

export const Link = styled.a`
  font-family: "Neusa";
  font-size: 1rem;
  color: #f8f2ed;
  margin-bottom: 5%;
  opacity: 0.8;
  cursor: pointer;
  white-space: nowrap;

  :hover {
    color: var(--secondary-color);
  }

  @media only screen and (min-width: 992px) {
  }
`;

export const Footer_item = styled.label`
  font-family: "Neusa";
  font-size: 1rem;
  color: #f8f2ed;
  margin-bottom: 5%;
  opacity: 0.8;

  @media only screen and (min-width: 992px) {
  }
`;

export const Combine = styled.div`
  @media only screen and (min-width: 768px) {
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
    justify-content: center;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row-reverse;

    gap: 3%;
  }
`;
