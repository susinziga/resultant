import React from "react";
import { useRouter } from "next/router";

const LanguagePicker = () => {
  const { locale, locales } = useRouter();

  return (
    <>
      <Container>
        <img src="/language/Globe.svg" alt="" />
        <label htmlFor="">{locale}</label>
        <Dropdown className="locale_dd">
          {locales.map((loc) => {
            return (
              <a href={"/" + loc}>
                <label>{loc}</label>
              </a>
            );
          })}
        </Dropdown>
      </Container>
    </>
  );
};

import styled from "styled-components";
const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 10%;
  right: 5%;
  color: white;
  gap: 0.5rem;
  font-size: 1.3rem;

  :hover .locale_dd {
    display: flex;
  }
`;
const Dropdown = styled.div`
  display: none;
  position: absolute;
  bottom: -200%;
  left: calc(50%);
  flex-direction: column;

  label {
    cursor: pointer;
    border-radius: 5px;
    padding: 5px;
    :hover {
      background-color: #ffffff20;
    }
  }
`;

export default LanguagePicker;
