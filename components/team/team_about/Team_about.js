import React from "react";
import BulletSection_dnla from "../../DNLA/BulletSection/BulletSection_dnla";
import BulletSection_team from "../BulletSection_roman/BulletSection_roman";

import * as Styled from "./Team_about.styled";

const Team_about = (props) => {
  const { title, about, img, bulletHeading, bullets } = props._data;
  return (
    <>
      <Styled.Container {...props}>
        {/* <Styled.Team_about_title>{title}</Styled.Team_about_title> */}
        <Styled.Team_about_image src={img}></Styled.Team_about_image>
        <Styled.Team_about_content>{about}</Styled.Team_about_content>
      </Styled.Container>
      {bulletHeading == undefined && bullets == undefined ? null : (
        <BulletSection_team
          bulletHeading={bulletHeading}
          bullets={bullets}
        ></BulletSection_team>
      )}
    </>
  );
};

export default Team_about;
