import styledComponents from "styled-components";

export const OfferContainer = styledComponents.div`
    position: relative;
    width: 90%;
    margin: auto !important;
    z-index: 1;

    @media only screen and (min-width: 768px) {
        width: 90%;
       
    }

    @media only screen and (min-width: 992px) {
        width: 90%;
      
       
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

    @media only screen and (min-width: 1600px) {
        height: 250px;
    }
`;

export const ButtonContainer = styledComponents.div`
    width: 100%;
    margin:auto;
    margin-bottom: 15%;
`;

export const FormContainer = styledComponents.form`
transform:scale(0.9);
    @media only screen and (min-width: 768px) {
        width: 70%;
        margin: auto;
    }

    @media only screen and (min-width: 992px) {
        width: 100%;
       
    }

  
`;
export const SubmitButton = styledComponents.input`
    font-size:2rem;
    padding: 3% 45%;
    cursor:pointer;
    border: none;
    margin: auto;

    background-color:var(--secondary-color);
    color:var(--white);
    border-radius:var(--border-primary);

    &:hover {
        background-color: var(--primary-color)
    }

    @media only screen and (min-width: 768px) {
        font-size:1.5rem;
        padding: 2.5% 44%;
        margin-top: 2.5%;
    }

    @media only screen and (min-width: 992px) {
        margin-top: 0%;
    }

    @media only screen and (min-width: 1600px) {
        padding: 2% 45%;
        margin-top: 2%;
        margin-left: 1%;
    }

`;

export const HeadingLine = styledComponents.div`
    height: 1px;
    width: 100%;
    border-top: 1px solid #CACFD2;
    margin: 10% 0 15% 0;

    @media only screen and (min-width: 768px) {
        width: 100%;
        margin: 2% 0 4% 0;
     
    }

    @media only screen and (min-width: 992px) {
        width: 100%;
        margin:  2% 0 4% 0;
      
    }
   
`;

export const BackgroundVector = styledComponents.img`
   position: absolute;
   top: 62%;
   right: -10%;
   z-index: -100;

   @media only screen and (min-width: 992px) {
        width: 50%;
        top: 55%;
        right: -6%;
    }

    @media only screen and (min-width: 1600px) {
        width: 45%;
        top: 40%;
        right: -16%;
    }
`;

export const InputsContainer = styledComponents.div`
    @media only screen and (min-width: 768px) {
        width: 90%;
        margin: auto;
    
    }

    @media only screen and (min-width: 992px) {
        width: 60%;
        margin-bottom: 2%;
    
    }

    @media only screen and (min-width: 1600px) {
        width: 50%;
        
    
    }
   
`;
