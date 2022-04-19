import React from "react";
import Button from "../../../basic_components/button/Button";

const Middle = ({ text, img, button }) => {
  const { locale } = useRouter();
  return (
    <>
      <Container>
        <img src={img} alt="" />
        <Flex>
          <p>
            <BodyText2 dangerouslySetInnerHTML={{ __html: text }}></BodyText2>
          </p>
          <Button primary href={"/" + locale + "/offer-dnla"}>
            {button}
          </Button>
        </Flex>
      </Container>
    </>
  );
};

import styled from "styled-components";
import { BodyText2 } from "../../../basic_components/texts/Texts";
import { useRouter } from "next/router";
const Container = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  flex-direction: column-reverse;
  margin-top: 3rem;
  gap: 5rem;
  > img {
    width: 100%;
    height: fit-content;
  }
  > div {
    width: 100%;
  }

  margin-bottom: 9rem;
  @media (min-width: 768px) {
    margin-bottom: 2rem;
    margin-top: 9rem;
    flex-direction: row;
    > img {
      width: 50%;
      height: fit-content;
    }
    > div {
      width: 40%;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export default Middle;
