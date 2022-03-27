import styledComponents from "styled-components";

export const ContactContainer = styledComponents.div`
    width: 90%;
    margin:auto;
`

export const TextareaContainer = styledComponents.div`
    width: 100%;
    margin:auto;
    height: 100px;
    margin-bottom: 15%;
`

export const ButtonContainer = styledComponents.div`
    width: 100%;
    margin:auto;
    margin-bottom: 15%;
`

export const FormContainer = styledComponents.form`
   
`
export const SubmitButton = styledComponents.input`
font-size:1.5rem;
padding: 4% 45%;
cursor:pointer;
border: none;
margin: auto;

background-color:var(--secondary-color);
    color:var(--white);
    border-radius:var(--border-primary);
    &:hover {
      background-color: var(--primary-color)
    }

`

