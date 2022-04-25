import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Button from "../../basic_components/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const LanguagePicker = () => {
  const { locale, locales, pathname } = useRouter();

  return (
    <>
      <Container>
        <FontAwesomeIcon icon={faGlobe} fontSize={"0.8rem"}>
          {" "}
        </FontAwesomeIcon>
        <Button link arrowDown>
          <label style={{ fontSize: "0.8rem" }}>{locale}</label>
        </Button>
        <Dropdown className="locale_dd">
          {locales.map((loc) => {
            return (
              <a href={"/" + loc + pathname}>
                <label>{loc}</label>
              </a>
            );
          })}
        </Dropdown>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 0.3rem 0;
  display: flex;
  position: relative;

  bottom: 10%;
  right: 5%;

  font-size: 0.8rem;

  align-items: center;
  gap: 0.5rem;

  > a {
    font-size: 0.8rem;
    color: red;
  }

  :hover {
    color: var(--secondary-color);
  }
  :hover .locale_dd {
    display: flex;
  }
`;

const Dropdown = styled.div`
  text-align: center;
  display: none;
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  z-index: 9999;
  right: 0;
  flex-direction: column;
  color: white;
  background-color: #072543;
  border-radius: 12px;
  padding: 0.8rem 1rem;
  gap: 0.5rem;

  a {
    width: 100%;
    border-radius: 6px;
    :hover {
      background-color: var(--secondary-color);
    }
  }

  label {
    cursor: pointer;
    border-radius: 5px;
    padding: 5px;
  }
`;

export default LanguagePicker;
