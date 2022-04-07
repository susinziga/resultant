import styledComponents from "styled-components";

export const PillarsContainer = styledComponents.div`
    width:var(--width-90);
    margin:auto;
    display:flex;
    flex-direction:column;

    @media (min-width:768px) {
        font-size: 1rem;
       
    }

    @media (min-width:992px) {
    font-size: 1rem; 
   
    }
    
`;

export const PillarsFlex = styledComponents.div`
    display:flex;
    flex-direction:column;
   

    @media (min-width:768px) {
        font-size: 1rem;
      
        justify-content:space-around;
       
    }

    @media (min-width:992px) {
    font-size: 1rem; 
   
    }
`;

export const PillarsContainer_mobile = styledComponents.div`
    width:var(--width-90);
    margin:auto;
    display:flex;
    flex-direction:column;
    gap:2rem;

    @media (min-width:768px) {
        
    
    }

    @media (min-width:992px) {
    font-size: 1rem; 

    }
`;

export const PillarsFlex1 = styledComponents.div`
    display:flex;
    
    flex-direction:column;
   

    @media (min-width:768px) {
        flex-direction:row;
        justify-content:space-around;
    }

    @media (min-width:992px) {
 

    }
`;

export const PillarsFlex2 = styledComponents.div`
    display:flex;
    flex-direction:column;
   

   
    @media (min-width:768px) {
        flex-direction:row;
        justify-content:space-around;

    }

    @media (min-width:992px) {
 

    }
`;

