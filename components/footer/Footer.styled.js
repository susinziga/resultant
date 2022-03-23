import styledComponents from "styled-components";

export const FooterContainer = styledComponents.div`
    position:relative;
    width: 100%;
    background-color: var(--footer-color);
    height: 800px;
    padding-top: 65%;

    @media only screen and (min-width: 980px) {
        height: 580px;
        padding-top: 0;
    }

    @media only screen and (min-width: 1600px) {
        height: 650px;
        padding-top: 0;
    }
`;

export const UpperFooterContainer = styledComponents.div`
    width: 90%;
    height: 30%;
    background-color: var(--footer-color2);
    border-radius: 12px;
    margin: auto;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: left;
    padding: 6%;


    @media only screen and (min-width: 800px) {
        width: 30%;
        height: 50%;
        top: -40px;
        right: 1%; 
        left: none;
        transform: none; 
        padding: 3.5% 3%;
    }

    @media only screen and (min-width: 1600px) {
        height: 55%;
        padding: 3%;
        top: -50px;
    }
`;

export const InfoFooterHeading = styledComponents.h2` 
    font-family: "Neusa";
    font-weight: bold;
    font-size: 1.5rem;
    
    @media only screen and (min-width: 980px) {
        padding-bottom: 5%;
    }
`;

export const ContactFooterContainer = styledComponents.div`
    margin-top:2%;
    display: flex; 
    flex-direction: column; 

    @media only screen and (min-width: 980px) {
        margin-top: 0;
    }
`;

export const Contact = styledComponents.label`
    margin-top: 3%;
    font-family: "Neusa";
    font-weight: 300;
    font-size: 1rem;
`;

export const ContactLink = styledComponents.a`
    margin-top: 5%;
    font-family: "Neusa";
    font-weight: 300;
    font-size: 1rem;
    line-height: 20px;

    @media only screen and (min-width: 980px) {
       
    }
`;

export const ContactsFooterContainer = styledComponents.div`
    margin-top:10%;
    display: flex; 
    flex-direction: column; 

    @media only screen and (min-width: 980px) {
       
    }
`;

export const ContactIconContainer = styledComponents.div`
    margin-bottom: 2%;
`;

export const ContactIcon = styledComponents.img`
  margin-right: 5%;

`;

export const FooterHeader = styledComponents.h2`
 font-family: "Neusa";
 position: relative;
 font-size: 1.5rem;
 color: white;
 width: 90%;
 margin: auto;


    @media only screen and (min-width: 980px) {
        font-size: 2rem;
        width: 40%;
        padding-top: 8%;
        margin: 0;
        margin-left: 5%;
        line-height: 120%;
    }

    @media only screen and (min-width: 1600px) {
        font-size: 3rem;
        padding-top: 6%;
    }
`;

export const InputFooterContainer = styledComponents.div`
   width: 90%;
   margin:auto;
   margin-top: 10%;

   @media only screen and (min-width: 980px) {
        margin: 0;
        margin-left: 5%;
        width: 35%;
        padding-top: 4%;
    }

    @media only screen and (min-width: 1600px) {
        padding-top: 3.5%;
    }
`;

export const SocialFooterContainer = styledComponents.div`
   width: 50%;
   margin:auto;
   margin-top: 15%;
   display: flex;
   justify-content: space-evenly;

   @media only screen and (min-width: 980px) {
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
export const SocialLink = styledComponents.a`
    cursor: pointer;
    width: 25%;

    @media only screen and (min-width: 980px) {
        width: 5%;
    }
`;


export const Social = styledComponents.img`
  width: 80%;

  @media only screen and (min-width: 980px) {
    width: 100%;
  }
`;

export const LinkFooterContainer = styledComponents.div`
   width: 70%;
   margin:auto;
   margin-top: 15%;
   display: flex;
   flex-direction: column;
   text-align: center;

   @media only screen and (min-width: 980px) {
        margin-top: 8%;
        flex-direction: row-reverse;
        width: 60%;
        gap: 3%;
        padding-right: 50px;
   }

   @media only screen and (min-width: 1600px) {
        margin-top: 6%;
        padding-right: 10%;
    }

`;

export const Link = styledComponents.a`
  font-family: "Neusa";
  font-size: 1rem;
  color: #F8F2ED;
  margin-bottom: 5%;
  opacity: 0.8;
  cursor: pointer;

  @media only screen and (min-width: 980px) {
    
  }
  
`;

export const Combine = styledComponents.div`
  

   @media only screen and (min-width: 980px) {
        display: flex;
        justify-content: space-between;
   }
`;
