import styledComponents from "styled-components";

export const About_bottomContainer = styledComponents.div`
    height:70vh;
    padding-top:1%;
    width:90%;
    margin:auto;

    text-align:center;

    display:flex;
    flex-direction:column;
    justify-content:space-around;
    
   
    
`;

export const About_bottomLine = styledComponents.div`
    height: 1px;
    width: 100%;
    border-top: 1px solid black;

    @media screen and (min-width: 768px){
        margin-top: 5%;
    }
`;

export const Content = styledComponents.div`
  padding: 3rem;
  border: 1px solid #282828;
  box-sizing: border-box;
  border-radius: 12px;
  width:100%;
  margin: 0 auto;

  display:flex;
  flex-direction:column;

  gap:2rem;
  justify-content:center;
  align-items:center;

  >h2{
      font-size:1.9rem;
  }
`;
