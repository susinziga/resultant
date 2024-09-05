import React from "react";
import { BodyText4 } from "../../../basic_components/texts/Texts";
import * as styled from "./Team_header.styled";

const Team_header = (props) => {
  const { name, role, email, gsm, linkedin } = props._data;
  return (
    <div {...props} id="aaa">
      <styled.Container>
        <styled.Name_flex>
          <styled.Name>{name}</styled.Name>
          <styled.Role>{role}</styled.Role>
        </styled.Name_flex>
        <styled.Details_container>
          <styled.Contact>
            <a href={"tel:" + gsm}>
              <img src="/Icons/phone.svg"></img>

              <BodyText4>{gsm}</BodyText4>
            </a>
            <a href={"mailto:" + email}>
              <img src="/Icons/email.svg"></img>

              <BodyText4>{email}</BodyText4>
            </a>
          </styled.Contact>
          <a href={linkedin} target="_blank">
            <styled.Linkedin
              src="/Icons/Linkedin.webp"
              width="100"
              height="100"
            ></styled.Linkedin>
          </a>
        </styled.Details_container>
      </styled.Container>
      <hr></hr>
    </div>
  );
};

export default Team_header;
