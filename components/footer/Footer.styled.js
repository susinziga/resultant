import styledComponents from "styled-components";

export const FooterContainer = styledComponents.div`
    position:relative;
    width: 100%;
    background-color: var(--footer-color);
    height: 800px;
    padding-top: 65%;
    margin-top: 20%;

    @media only screen and (max-width: 350px) {
        height: 700px;
        padding-top: 70%;
        
    }

    @media only screen and (min-width: 480px) and (max-width: 768px) {
        height: 900px;
        padding-top: 65%;
    }

    @media only screen and (min-width: 992px) {
        height: 550px;
        padding-top: 0;
        margin-top: 10%;
    }

    @media only screen and (min-width: 1600px) {
        height: 720px;
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

    @media only screen and (min-width: 992px) {
        width: 30%;
        height: 55%;
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
    
    @media only screen and (min-width: 992px) {
        padding-bottom: 5%;
    }

  
`;

export const ContactFooterContainer = styledComponents.div`
    margin-top:2%;
    display: flex; 
    flex-direction: column; 

    @media only screen and (min-width: 992px) {
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

    @media only screen and (min-width: 992px) {
       
    }
`;

export const ContactsFooterContainer = styledComponents.div`
    margin-top:10%;
    display: flex; 
    flex-direction: column; 

    @media only screen and (min-width: 992px) {
       
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

export const InputFooterContainer = styledComponents.div`
   width: 90%;
   margin:auto;
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

export const SocialFooterContainer = styledComponents.div`
   width: 50%;
   margin:auto;
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
export const SocialLink = styledComponents.a`
    cursor: pointer;
    width: 25%;

    @media only screen and (min-width: 992px) {
        width: 5%;
    }
`;


export const Social = styledComponents.img`
  width: 80%;

  @media only screen and (min-width: 992px) {
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

   @media only screen and (min-width: 992px) {
        margin: 0;
        flex-direction: row-reverse;
        width: 70%;
        gap: 3%;
      
   }

   @media only screen and (min-width: 1600px) {
      
    }

`;

export const Link = styledComponents.a`
  font-family: "Neusa";
  font-size: 1rem;
  color: #F8F2ED;
  margin-bottom: 5%;
  opacity: 0.8;
  cursor: pointer;

  @media only screen and (min-width: 992px) {
    
  }
  
`;

export const Combine = styledComponents.div`
  

   @media only screen and (min-width: 992px) {
        margin-top: 10%;
        display: flex;
        justify-content: space-between;
        justify-content: center;
   }
`;
