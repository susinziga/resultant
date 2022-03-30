import styledComponents from "styled-components";

export const CheckboxContainer = styledComponents.div`
    width: 90%;
    margin-bottom: 10%;
`;


export const TopLabel = styledComponents.label`
    color: var(--dark);
    font-family: "NeusaThin";
    font-size: 1.5rem;
    
   
`;

export const CheckboxLabel = styledComponents.label`
    color: var(--dark);
    font-family: "Neusa";
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 70px;
    margin-left: 5%;
    width: 70%;
`;

export const CheckboxContainer1 = styledComponents.span`
    display: flex;
    vertical-align: middle;
   
    
    input[type="checkbox"]:checked { 
        background-color: var(--primary-color);
    }

    input[type="checkbox"]:before { 
       content: ${props => props.content};
       font-family: "Neusa";
       position: relative;
       top: 25%;
       left: 35%;
       color: white;
       font-size: 2rem;
    }
`;
export const Container = styledComponents.div`
   display: flex;
   flex-direction: column;
   margin-top: 5%;
   width: 100%;
`;

export const Checkbox = styledComponents.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 5% 0;
    height: 40px;
    width: 40px;
    background-color: #CACFD2;
    border-radius: 20px;
    cursor: pointer;
    line-height: 70px;
    
    
`;
