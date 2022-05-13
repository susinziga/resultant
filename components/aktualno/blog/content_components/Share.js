import React, { useState, useEffect } from "react";

import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import styled from "styled-components";
import { BodyText3 } from "../../../../basic_components/texts/Texts";
const Share = () => {
  const [link, setLink] = useState("");

  useEffect(() => {
    setLink(window.location.href);
  }, []);

  return (
    <>
      <Container>
        <BodyText3>Deli članek</BodyText3>
        <br></br>
        <SocialContainer>
          <LinkedinShareButton url={link}>
            <img src="/Icons/linkedin-blue.webp"></img>
          </LinkedinShareButton>
          <TwitterShareButton url={link}>
            <img src="/Icons/twitter-blue.webp"></img>
          </TwitterShareButton>
          <FacebookShareButton url={link}>
            <img src="/Icons/fb-blue.webp"></img>
          </FacebookShareButton>
          <EmailShareButton url={link}>
            <img src="/Icons/email-blue.webp"></img>
          </EmailShareButton>
        </SocialContainer>
      </Container>{" "}
      <hr></hr>
    </>
  );
};

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export default Share;
