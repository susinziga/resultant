import styledComponents from "styled-components";

export const CheckboxLabel = styledComponents.label`
    color: var(--dark);
    font-family: "NeusaThin";
    font-size: 1.5rem;
`;

export const Checkbox = styledComponents.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 15% 5%;
    height: 40px;
    width: 40px;
    background-color: #CACFD2;
    border-radius: 20px;
    cursor: pointer;
    
`;

export const CheckboxContainer = styledComponents.div`
    
   
`;

export const CheckboxContainer1 = styledComponents.span`
    margin: 0 5%;
    input[type="checkbox"]:checked { 
        background-color: var(--primary-color);
    }

    input[type="checkbox"]:before { 
       content: "DA";
       font-family: "Neusa";
       position: relative;
       top: 25%;
       left: 20%;
       color: white;
       font-size: 2rem;
    }
`;

export const CheckboxContainer2 = styledComponents.span`
    margin: 0 5%;
    input[type="checkbox"]:checked { 
        background-color: var(--primary-color);
    }

    input[type="checkbox"]:before { 
       content: "NE"; 
       font-family: "Neusa";
       position: relative;
       top: 25%;
       left: 22%;
       color: white;
       font-size: 2rem;
    }
`;

export const CheckboxFlex = styledComponents.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 5% 0;
    font-family: "Neusa"
`;

export const Seperator = styledComponents.div`
    font-family: "Neusa";
    font-size: 2rem;

`;

