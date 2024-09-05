import styled from "styled-components";

export const Header1 = styled.h1`
  ${(props) => (props.bold ? "font-weight:bold;" : "")}
  ${(props) => (props.white ? "color:var(--white);" : "color:var(--dark);")}
`;

export const Header2 = styled.h2`
  ${(props) => (props.bold ? "font-weight:bold;" : "")}
  ${(props) => (props.white ? "color:var(--white);" : "color:var(--dark);")}
`;

export const Title1 = styled.h1`
  ${(props) => (props.bold ? "font-weight:bold;" : "")}
  ${(props) => (props.white ? "color:var(--white);" : "color:var(--dark);")}
`;

export const Title2 = styled.h2`
  ${(props) => (props.bold ? "font-weight:bold;" : "")}
  ${(props) => (props.white ? "color:var(--white);" : "color:var(--dark);")}
`;

export const Subtitle1 = styled.label`
  display: inline-block;
  ${(props) => (props.medium ? "font-weight:500;" : "")}

  @media (min-width: 768px) {
    ${(props) => (props.bold ? "font-weight:bold;" : "")}
    ${(props) => (props.white ? "color:var(--white);" : "color:var(--dark);")}

font-size:var(--subtitle1);
  }
  ${(props) => (props.bold ? "font-weight:bold;" : "")}
  ${(props) => (props.white ? "color:var(--white);" : "color:var(--dark);")}

font-size:var(--subtitle1);
`;

export const Subtitle2 = styled.label`
  ${(props) => (props.bold ? "font-weight:bold;" : "")}
  ${(props) => (props.white ? "color:var(--white);" : "color:var(--dark);")}

font-size:var(--subtitle2);
`;

export const BodyText1 = styled.span`
  ${(props) => (props.light ? "font-weight:300;" : "")}
  ${(props) => (props.bold ? "font-weight:bold;" : "")}
  ${(props) => (props.white ? "color:var(--white);" : "color:var(--dark);")}
font-size:var(--body-text1);
`;

export const BodyText2 = styled.span`
  font-weight: 400;
  ${(props) => (props.light ? "font-weight:300;" : "")}
  ${(props) => (props.medium ? "font-weight:500;" : "")}
  ${(props) => (props.bold ? "font-weight:bold;" : "")}
  ${(props) => (props.white ? "color:var(--white);" : "color:var(--dark);")}
font-size:var(--body-text2);
`;

export const BodyText3 = styled.span`
  ${(props) => (props.bold ? "font-weight:bold;" : "")}
  ${(props) => (props.white ? "color:var(--white);" : "color:var(--dark);")}
font-size:var(--body-text3);
`;

export const BodyText4 = styled.span`
  ${(props) => (props.bold ? "font-weight:bold;" : "")}
  ${(props) => (props.white ? "color:var(--white);" : "color:var(--dark);")}
font-size:var(--body-text4);
`;
