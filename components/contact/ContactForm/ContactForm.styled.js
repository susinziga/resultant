import styledComponents from "styled-components";

export const ContactContainer = styledComponents.div`
    width: 90%;
    margin:auto;
    margin-top: 2rem;

    @media only screen and (min-width: 768px) {
        width: 55%;
        margin-top: 0;
        padding: 0 7.5%;
        padding-top: 2.5%;
        
        #desktop {
            padding: 8px 20px;
        }
    }

    @media only screen and (min-width: 992px) {
        width: 60%;
        margin-top: 0;
        padding: 0 7.5%;
        padding-top: 2%;

        #desktop {
            padding: 10px 20px;
        }
        
    }

    @media only screen and (min-width: 1600px) {
        #desktop {
            padding: 12px 20px;
        }  
      
        padding: 0 10%;
        padding-top: 2%;
    }
   
`;

export const TextareaContainer = styledComponents.div`
    width: 100%;
    margin:auto;
    height: 120px;
    margin-bottom: 15%;

    @media only screen and (min-width: 768px) {
      height: 120px;
    }

    @media only screen and (min-width: 1600px) {
        margin-bottom: 10%;
        height: 200px;
    }
`;

export const ButtonContainer = styledComponents.div`
    width: 100%;
    margin:auto;
    margin-bottom: 15%;
`;

export const FormContainer = styledComponents.form`
   
`;
export const SubmitButton = styledComponents.input`
    font-size:2rem;
    // padding: 2.5% 40%;
    width: 100%;
    padding: 2% 0%;
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
        padding: 2.5% 40%;
        margin-top: 2.5%;
    }

    @media only screen and (min-width: 992px) {
        margin-top: 0%;
        padding: 2.5% 44%;
    }

    @media only screen and (min-width: 1600px) {
        padding: 2% 45%;
        margin-top: 2%;
        margin-left: 1%;
    }

`;
