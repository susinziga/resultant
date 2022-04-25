import styled from "styled-components";

const CardButton = (props) => {
  return (
    <Wrapper centered={props.centered}>
      <CardButtonWrapper {...props} href={props.href}>
        <CardText>{props.text}</CardText>
        <CardButtonArrowWrapper>
          <img width={5} src="/UTNN/button_arrow_right.png"></img>
        </CardButtonArrowWrapper>
      </CardButtonWrapper>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;

  ${(props) =>
    props.centered &&
    `
        justify-content: center;
    `}
`;

export const CardText = styled.span`
  font-size: 1rem;

  @media only screen and (min-width: 768px) {
    font-size: 0.7rem;
  }

  @media only screen and (min-width: 992px) {
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const CardButtonWrapper = styled.a`
  /* display: block; */
  margin-top: 5%;
  border: none;
  border-bottom: 2px solid #9f7312;
  background: none;
  color: #282828;
  padding-bottom: 10px;
  font-family: "NeusaThin";
  cursor: pointer;
`;

export const CardButtonArrowWrapper = styled.span`
  padding-left: 15px;
  padding-right: 5px;
`;

export default CardButton;
