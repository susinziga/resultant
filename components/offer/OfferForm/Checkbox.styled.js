import styledComponents from "styled-components";

export const CheckboxLabel = styledComponents.label`
    color: var(--dark);
    font-family: "NeusaThin";
    font-size: 1.5rem;

    @media only screen and (min-width: 768px) {
        width: 80%;
        padding-top: 2.5%;
    }

    @media only screen and (min-width: 992px) {
        width: 100%;
        padding-top: 2.5%;
    }
    
`;

export const Checkbox = styledComponents.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 15% 5%;
    // height: 40px;
    // width: 40px;
    background-color: #CACFD2;
    // border-radius: 20px;
    cursor: pointer;

    height: 70px;
    width: 70px;
    border-radius: 35px;

    @media only screen and (min-width: 768px) {
        // height: 50px;
        // width: 50px;
        // border-radius: 25px;
     
    }

    @media only screen and (min-width: 992px) {
        // height: 70px;
        // width: 70px;
        // border-radius: 35px;
      
    }

    
    @media only screen and (min-width: 1600px) {
        height: 80px;
        width: 80px;
        border-radius: 40px;
      
    }
    
`;

export const CheckboxContainer = styledComponents.div`
    @media only screen and (min-width: 768px) {
        display: flex;
        margin: 1% 0;
        justify-content: space-evenly;
    }
   
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

    @media only screen and (min-width: 768px) {
        margin: 0 10%;
      
    }


    @media only screen and (min-width: 992px) {
        margin: 0 10%;
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

    @media only screen and (min-width: 768px) {
        margin: 0 8%;
      
    }

    @media only screen and (min-width: 992px) {
        margin: 0 8%;
      
    }
`;

export const CheckboxFlex = styledComponents.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 5% 0;
    font-family: "Neusa";
       
    @media only screen and (min-width: 768px) {
        margin: 0;
     
    }

    @media only screen and (min-width: 992px) {
        margin: 0;
        margin-bottom: 2.5%;
      
    }
`;

export const Seperator = styledComponents.div`
    font-family: "Neusa";
    font-size: 2rem;

`;
