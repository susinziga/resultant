import styledComponents from "styled-components";

export const FooterContainer = styledComponents.div`
    position:relative;
    width: 100%;
    background-color: var(--footer-color);
    height: 800px;
    overflow: visible;
    padding-top: 50%;
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

`;

export const InfoFooterHeading = styledComponents.h2` 
    font-weight: bold;
    
`;

export const FooterHeader = styledComponents.h2`
 position: relative;
 font-size: 28px;
 color: white;
 width: 90%;
 margin: auto;
 margin-top:50px;
`;

export const InputFooterContainer = styledComponents.div`
   width: 90%;
   margin:auto;
   margin-top: 10%;

`;

export const SocialFooterContainer = styledComponents.div`
   width: 50%;
   margin:auto;
   margin-top: 15%;
   display: flex;
   justify-content: space-evenly;

`;

export const Social = styledComponents.img`
  width: 90%;

`;

export const LinkFooterContainer = styledComponents.div`
   width: 70%;
   margin:auto;
   margin-top: 20%;
   display: flex;
   flex-direction: column;
   text-align: center;

`;

export const Link = styledComponents.a`
  font-size: 1rem;
  color: #F8F2ED;
  margin-bottom: 5%;
  
`;
