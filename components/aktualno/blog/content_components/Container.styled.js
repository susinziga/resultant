import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: auto;

  ul {
    list-style-type: disc;
  }

  li {
    margin-bottom: 0.8rem;
    margin-left: 1.5rem;
  }

  @media (min-width: 768px) {
    width: 60%;
    margin: auto;
  }
 
  .wp-block-pullquote {
    border: 1px solid #282828 !important;
    box-sizing: border-box !important;
    border-radius: 12px !important;
    padding: 20px !important;
    text-align: center !important;
    margin: 2rem 0 !important;
    background: none !important;
  }

  .wp-block-pullquote blockquote {
    margin: 0 !important;
    border: none !important;
  }

  .wp-block-pullquote p {
    font-family: Neusa;
    font-size: 1.1rem;
    color: #282828;
    font-weight: 300;
      
   
  }

  .wp-block-pullquote cite {
    font-family: Neusa;
    font-size: 1.1rem;
    color: #282828;
    font-weight: 300;
  }

  @media (min-width: 768px) {
    .wp-block-pullquote {
      padding: 5rem 7rem !important;
    }
  }

  .wp-block-pullquote {

    padding: 90px 90px!important;
    text-align: center !important;
   

    
}
    @media (min-width:1050px) and (max-width:1600px){
    .wp-block-pullquote {

    padding: 50px 50px!important;
    text-align: center !important;
   

    
}}
    @media (max-width:1050px){
    .wp-block-pullquote {

    padding: 30px 30px!important;
    text-align: center !important;
   

    
}}
`;

export const Container_border = styled.div`
  border: 1px solid #282828;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 4rem 1.5rem;
  text-align: center;

  ul {
    list-style-type: disc;
  }

  li {
    margin-bottom: 0.8rem;
    margin-left: 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 5rem 7rem;
  }
`;

export default Container;