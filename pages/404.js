import React from "react";
import { useRouter } from "next/router";
import useSize from "../custom_hooks/useSize";

const notFound = () => {
  const { locale } = useRouter();
  const { isDesktop } = useSize();
  return (
    <>
      <Container className="404">
        {isDesktop() ? (
          <Image src="/404/404.webp"></Image>
        ) : (
          <Image_mobile src="/404/Group 516.png"></Image_mobile>
        )}

        <Text>
          <Header1>404</Header1>
          <Title1>Oops!</Title1>
          <Spacer></Spacer>
          <BodyText1>Stran trenutno ni na voljo</BodyText1>
          <Button primary href={"/" + locale + "/"}>
            Vrni se nazaj
          </Button>
        </Text>
      </Container>
    </>
  );
};
import styled from "styled-components";
import Button from "../basic_components/button/Button";
import { BodyText1, Header1, Title1 } from "../basic_components/texts/Texts";
const Spacer = styled.div`
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 3rem;
  }
`;
const Container = styled.div`
  padding-top: 10%;
  height: 100vh;
  position: relative;

  + div > .footer {
    margin-top: 5%;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  right: 10%;
  top: 0;
  object-fit: scale-down;
  position: absolute;
`;

const Image_mobile = styled.img`
  /* height: 100%; */
  /* width: 100%; */
  left: 10%;
  bottom: 5%;
  z-index: -1;
  object-fit: cover;
  position: absolute;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  position: absolute;
  transform: translate(-50%, 0);
  left: 50%;
  top: 5%;
  @media (min-width: 768px) {
    top: 30%;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
export default notFound;
