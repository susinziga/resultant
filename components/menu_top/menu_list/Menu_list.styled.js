import styledComponents from "styled-components";

export const MenuList = styledComponents.div`
    display:flex;
    align-items:center;

    gap:0.1rem;

    position:relative;

    @media (min-width: 992px) {
   gap:1rem;
    }
    
   
    
    
`;

export const MenuItem = styledComponents.div`
font-size:1rem;

color:var(--dark);


`;
