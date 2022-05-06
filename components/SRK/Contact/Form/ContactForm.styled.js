import styledComponents from "styled-components";
import { Title1, Title2 } from "../../../../basic_components/texts/Texts";

export const ContactContainer = styledComponents.div`
    width: 100%;
    margin:auto;
    margin-top: 10%;

    @media only screen and (min-width: 768px) {
        
     
    }

    @media only screen and (min-width: 992px) {

      
        
    }

    @media only screen and (min-width: 1600px) {
  
    }
   
`;

export const HeaderLineWrapperRight = styledComponents.div`
    width: 100%;
    display: flex;
    flex: 1;
    position: relative;
    margin-left: 5%;
    min-width: 200px;
    `;

export const HeaderLine = styledComponents.div`
    border-top: 1px solid #282828;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

export const HeaderContainer = styledComponents.div`
    // margin-bottom: 5%;

    @media only screen and (min-width: 768px) {
        display: flex;
    
    }

    @media only screen and (min-width: 992px) {

      
        
    }

    @media only screen and (min-width: 1600px) {
  
    }
   
`;

export const TextareaContainer = styledComponents.div`
    width: 100%;
    margin:auto;
    height: 120px;
    margin-bottom: 15%;

    @media only screen and (min-width: 768px) {
        height: 100px;
    }

    @media only screen and (min-width: 768px) {
        height: 150px;
    }

    @media only screen and (min-width: 1600px) {
        margin-bottom: 10%;
        height: 250px;
    }
`;

export const ContactHeader = styledComponents(Title2)`
    font-family: "Neusa";
    font-weight: bold;
    // margin:10% 0;

    @media only screen and (min-width: 768px) {
    //   margin:5% 0 2% 0;
    //   height: 100px;
      font-size: 1.8rem;
    }

    @media only screen and (min-width: 992px) {
        font-size: 2rem;
    }


    @media only screen and (min-width: 1600px) {
       
        font-size: 2.5rem;
        // margin:5% 0 0% 0;
    }
`;

export const ButtonContainer = styledComponents.div`
    width: 100%;
    margin: auto;
    margin-bottom: 15%;

   
`;

export const FormContainer = styledComponents.form`

transform:scale(0.9);


    @media only screen and (min-width: 768px) {
        width: 70%;
        margin: auto;
    }

    @media only screen and (min-width: 992px) {
        width: 60%;
    }


    @media only screen and (min-width: 1600px) {
        width: 50%;
    }
`;
export const SubmitButton = styledComponents.input`
font-size:1.5rem;
padding: 3% 0%;

cursor:pointer;
border: none;
margin:auto;
width:100%;

background-color:var(--secondary-color);
color:var(--white);
border-radius:var(--border-primary);

&:hover {
    background-color: var(--primary-color)
}

@media only screen and (min-width: 768px) {
    font-size:1.5rem;
    padding: 2.5% 0%;
    margin-top: 2.5%;
}

@media only screen and (min-width: 992px) {
    margin-top: 0%;
    padding: 2.5% 0%;
}

@media only screen and (min-width: 1600px) {
    padding: 1.5% 0%;
    
    margin-left: 1%;
}

`;

export const HeadingLine = styledComponents.div`
    height: 1px;
    width: 100%;
    border-top: 1px solid black;
    margin: 10% 0;

    @media screen and (min-width: 768px){
       margin:7% 0 0 0;
       margin-left: 5%;
       padding-bottom: 10px;
       width: 30%;
    }

    @media only screen and (min-width: 992px) {
        width: 50%;
    }

    @media only screen and (min-width: 1600px) {
        width: 55%;
    }

  
`;
