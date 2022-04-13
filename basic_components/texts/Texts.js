import styledComponents from "styled-components";

export const Header1 = styledComponents.h1`
${(props) => (props.bold ? "font-weight:bold;" : "")}
${(props) => (props.white ? "color:var(--white);" : "color:var(--dark);")}
`;

export const Header2 = styledComponents.h2`
${(props) => (props.bold ? "font-weight:bold;" : "")}
${(props) => (props.white ? "color:var(--white);" : "color:var(--dark);")}
`;

export const Title1 = styledComponents.h3`
${(props) => (props.bold ? "font-weight:bold;" : "")}
${(props) => (props.white ? "color:var(--white);" : "color:var(--dark);")}
`;

export const Title2 = styledComponents.h4`
${(props) => (props.bold ? "font-weight:bold;" : "")}
${(props) => (props.white ? "color:var(--white);" : "color:var(--dark);")}
`;

export const Subtitle1 = styledComponents.title`
display:inline-block;

@media(min-width:768px){
  ${(props) => (props.bold ? "font-weight:bold;" : "")}
${(props) => (props.white ? "color:var(--white);" : "color:var(--dark);")}

font-size:var(--subtitle1);
}
${(props) => (props.bold ? "font-weight:bold;" : "")}
${(props) => (props.white ? "color:var(--white);" : "color:var(--dark);")}

font-size:var(--subtitle1);
`;

export const Subtitle2 = styledComponents.title`
${(props) => (props.bold ? "font-weight:bold;" : "")}
${(props) => (props.white ? "color:var(--white);" : "color:var(--dark);")}

font-size:var(--subtitle2);
`;

export const BodyText1 = styledComponents.span`
  ${(props) => (props.bold ? "font-weight:bold;" : "")}
  ${(props) => (props.white ? "color:var(--white);" : "color:var(--dark);")}
font-size:var(--body-text1);
`;

export const BodyText2 = styledComponents.span`
  ${(props) => (props.bold ? "font-weight:bold;" : "")}
  ${(props) => (props.white ? "color:var(--white);" : "color:var(--dark);")}
font-size:var(--body-text2);
`;

export const BodyText3 = styledComponents.span`
  ${(props) => (props.bold ? "font-weight:bold;" : "")}
  ${(props) => (props.white ? "color:var(--white);" : "color:var(--dark);")}
font-size:var(--body-text3);
`;

export const BodyText4 = styledComponents.span`
  ${(props) => (props.bold ? "font-weight:bold;" : "")}
  ${(props) => (props.white ? "color:var(--white);" : "color:var(--dark);")}
font-size:var(--body-text4);
`;
