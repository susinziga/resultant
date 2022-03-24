import styledComponents from "styled-components";

export const TestimonialContainer = styledComponents.div`
@media(min-width:768px){
    
    text-align:center;
    display:flex;
    margin:auto;
    flex-direction:column;
    >:nth-child(1){
        margin-bottom:2rem;
    }
    >:nth-child(2){
        
        width:70%;
        margin:auto;
        margin-bottom:2rem;
        > * {
            color:#5C5C5C;
        }
    }

    >:nth-child(4){
        
      
            color:#5C5C5C;
        
    }

}
`;
