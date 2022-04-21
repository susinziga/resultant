import React from "react";

import * as Styled from "./Team_about.styled";

const Team_about = (props) => {
  const { title, about, img } = props._data;
  return (
    <Styled.Container {...props}>
      {/* <Styled.Team_about_title>{title}</Styled.Team_about_title> */}
      <Styled.Team_about_image src={img}></Styled.Team_about_image>
      <Styled.Team_about_content>{about}</Styled.Team_about_content>
    </Styled.Container>
  );
};

export default Team_about;
