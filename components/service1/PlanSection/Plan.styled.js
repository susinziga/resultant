import styledComponents from "styled-components";

import { Header2 } from "../../../basic_components/texts/Texts";

export const PlanContainer = styledComponents.div`
    position: relative;
    width: 100%;
    margin: auto;


    @media only screen and (min-width: 768px) {
        padding-top: 10%;
    }

    @media only screen and (min-width: 992px) {
        padding-top: 15%;
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const PlanTableContainer = styledComponents.div`
    width: 90%;
    margin: auto;
   

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const PlanTableHeaderContainer = styledComponents.div`
    width: 100%;
    display: flex;
    margin: 20% 0;
    align-items: center;
   

    @media only screen and (min-width: 768px) {
        margin: 0% 0 5% 0;
        
    }

    @media only screen and (min-width: 992px) {
        margin: 0% 0 5% 0;
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const FlexContainer = styledComponents.div`
 
    margin-bottom: 10%;

    @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    @media only screen and (min-width: 992px) {
       
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const PlanTableLine = styledComponents.div`
    height: 1px;
    border: black solid 1px;
    margin-left: 2.5%;
    width: 50%;
    


    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const PlanTableHeaderLineWrapperLeft = styledComponents.div`
    width: 100%;
    display: flex;
    flex: 1;
    position: relative;
    margin-right: 10%;
    min-width: 200px;

    ${(props) => {
      return props.show ? `` : `display: none !important;`;
    }}
    `;

export const PlanTableHeaderLineWrapperRight = styledComponents.div`
    width: 100%;
    display: flex;
    flex: 1;
    position: relative;
    margin-left: 10%;
    min-width: 200px;
    `;

export const PlanTableHeaderLine = styledComponents.div`
    border: 1px solid #282828;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

export const PlanTableHeaderCon = styledComponents.div`
    width: 100%;
    position: relative;
    display: flex;
    

    @media only screen and (min-width: 768px) {
       
    }

    @media only screen and (min-width: 992px) {
        
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const PlanTableHeaderFirst = styledComponents(Header2)`
    text-align: left;

    @media only screen and (min-width: 768px) {
       font-size: 2rem;
    }

    @media only screen and (min-width: 992px) {
        font-size: 2.5rem;
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const PlanTableHeaderSecond = styledComponents(Header2)`
    @media only screen and (min-width: 768px) {
        text-align: right;
        font-size: 2rem;
    }

    @media only screen and (min-width: 992px) {
        font-size: 2.5rem;
    }

    @media only screen and (min-width: 1600px) {
       
    }
`;

export const ButtonContainer = styledComponents.div`
    display:flex;
    justify-content: center;
    width: 100%;
    margin:auto;
    margin-bottom: 15%;
    
    ${(props) => {
      return props.button ? `` : `display: none;`;
    }}

    
    @media only screen and (min-width: 768px) {
        width: 33%;
        margin-bottom: 7.5%;
        text-align:center;
    }

    @media only screen and (min-width: 992px) {
        width: 20%;
        margin-right: 12%;
        margin-bottom: 7.5%;
    }

    @media only screen and (min-width: 1600px) {
     
    }
`;

export const SubmitButton = styledComponents.a`
    font-size:1.2rem;
    padding: 10px 20px;
    cursor:pointer;
    border: none;
    border-radius:31px;
    margin: auto;
    margin: 5% 0;

    background-color:var(--secondary-color);
    color:var(--white);
    border-radius:var(--border-primary);

    &:hover {
        background-color: var(--primary-color)
    }

    @media only screen and (min-width: 768px) {
        font-size:1rem;
        padding: 10px 20px;
       
       
    }

    @media only screen and (min-width: 992px) {
      
        padding: 10px 20px;
        margin: 0;
     
    }

    @media only screen and (min-width: 1600px) {
        
    }

`;

export const BackgroundVector = styledComponents.img`
   position: absolute;
   z-index: -100;
   width: 100%;
   right: 0;
   top: -5%;
  
   @media only screen and (min-width: 768px) {
        width: 50%;
        top: -10%;
        right: 0;
    }
   

   @media only screen and (min-width: 992px) {
        width: 45%;
        top:-10%;
    }

    @media only screen and (min-width: 1600px) {
        width: 40%;
        top:-10%;
    }
`;
