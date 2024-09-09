import React from "react";
import styled from "styled-components";
import { BodyText2, Title2 } from "../../../basic_components/texts/Texts";
import { useRouter } from "next/router";
import Button from "../../../basic_components/button/Button";

const Middle = ({
  title,
  text,
  img,
  button,
  withoutButton = false,
  leftAlignedTitle = false,
}) => {
  const { locale } = useRouter();
  return (
    <>
      <Container>
        {!withoutButton && (
          <Button
            className="mobile"
            primary
            href={"/" + locale + "/services/dnla/ponudba-dnla"}
          >
            {button}
          </Button>
        )}

        <img src={img} alt="" />

        <Flex>
          {title && !leftAlignedTitle && <Title>{title}</Title>}{" "}
          {title && leftAlignedTitle && (
            <LeftAlignedTitle>{title}</LeftAlignedTitle>
          )}{" "}
          {/* Conditionally render title if provided */}
          <p>
            <BodyText2
              light
              dangerouslySetInnerHTML={{ __html: text }}
            ></BodyText2>
          </p>
          {!withoutButton && (
            <Button
              className="desktop"
              primary
              href={"/" + locale + "/services/dnla/ponudba-dnla"}
            >
              {button}
            </Button>
          )}
        </Flex>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  flex-direction: column-reverse;
  margin-top: 3rem;
  gap: 2rem;
  > img {
    width: 100%;
    height: fit-content;
  }
  > div {
    width: 100%;
  }

  @media (min-width: 768px) {
    margin-bottom: 2rem;
    margin-top: 9rem;
    flex-direction: row;
    gap: 5rem;
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

const Title = styled(Title2)`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;

  text-align: center;
  font-family: "Neusa";
`;

const LeftAlignedTitle = styled(Title)`
  text-align: left;
`;

export default Middle;
