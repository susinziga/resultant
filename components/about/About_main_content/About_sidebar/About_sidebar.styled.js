import styledComponents from "styled-components";
import { Header2 } from "../../../../basic_components/texts/Texts";

export const About_sidebar_container = styledComponents.div`
    width:fit-content;
    padding:4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: transparent
    font-size:3rem;
    height:100vh;

    position:sticky;
    top:0;

   /* :after{
      transition:2s all;
      content:" ";
      background:var(--blue);
      position:absolute;
      top:0;
      left:0;
      height:100vh;
      width:100vw;
      z-index:-1;
      ${(props) => (props.initAnim ? "height:0;" : "")}*/
   
    

    }

  @media(min-width:768px){
    width:40%;
  }
  @media(min-width:1200px){
    width:30%;
  }
`;

export const Sidebar_title = styledComponents(Header2)`
    color:#CACFD2;

    opacity: 0.8;
    
    transition: font-size 2s;
    transition: color 2s;
    transition:background-color 1s;

   /* transform: scale(1.3) translateX(50%);*/
    line-height:6rem;
    margin-left:0:
    font-size:3rem;
    

    white-space: nowrap;


      ${(props) => {
        return props.selected
          ? ` font-size: 4rem ;
              color: black;  
              padding: 0;
            
              transition: font-size 1s;
              transition: color 1s;
          `
          : "";
      }}

      ${(props) => {
        return props.transition
          ? ` font-size: 2.5rem ; 
                padding: 0;
                opacity: 0.8;`
          : "";
      }}

      ${(props) => {
        return props.initial
          ? ` font-size: 4.5rem;
                color: white;  
                padding: 0;
                opacity: 1;
            `
          : "";
      }}
     
      ${(props) => {
        return props.second
          ? ` 
          transition:color 1s;
                color: #E2CAB6;  
                `
          : "";
      }}

      
    @media screen and (min-width: 768px){
       
    }
  
`;

export const AnimationContainer = styledComponents.div`
    position:absolute;
    transform:translate(50%,10%);



    *{
      font-size:4.5rem;
      
    }
    *:nth-child(1){
      font-size:6rem;
      color:white;
    }
`;
