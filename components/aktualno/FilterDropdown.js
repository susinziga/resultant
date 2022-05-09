import React, { useState } from "react";
import styled from "styled-components";
import { BodyText3 } from "../../basic_components/texts/Texts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";

const FilterDropdown = ({ id, items, onValuePicked }) => {
  const [isShown, setIsShown] = useState(false);
  const [text, setText] = useState(id);

  function clickedItem(e) {
    setIsShown(false);
    onValuePicked(e);

    let item = items.find((item) => item.id === e);
    if (item.id == -1) {
      setText(id);
    } else {
      setText(item.name);
    }
  }

  return (
    <Wrapper>
      <FixedTextWrapper
        onMouseEnter={() => !isMobile && setIsShown(true)}
        onMouseLeave={() => !isMobile && setIsShown(false)}
        onClick={() => isMobile && setIsShown(!isShown)}
      >
        <FixedText>
          {text.length > 40 ? text.substring(0, 40) + "..." : text}
        </FixedText>
        <FontAwesomeIcon icon={faChevronDown} />
      </FixedTextWrapper>
      {isShown ? (
        <>
          <DropdownContainerDesktop
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <DropdownList>
              {items.map(({ name, resultant, id }) => {
                return (
                  <DropdownItem id={id} onClick={(e) => clickedItem(id)}>
                    {name}
                    {resultant !== undefined && resultant === false && (
                      <GuestTag>(gost)</GuestTag>
                    )}
                  </DropdownItem>
                );
              })}
            </DropdownList>
          </DropdownContainerDesktop>
          <DropdownContainerMobile>
            <DropdownList>
              {items.map(({ name, resultant, id }) => {
                return (
                  <DropdownItem id={id} onClick={(e) => clickedItem(id)}>
                    {name}
                    {resultant !== undefined && resultant === false && (
                      <GuestTag>(gost)</GuestTag>
                    )}
                  </DropdownItem>
                );
              })}
            </DropdownList>
          </DropdownContainerMobile>
        </>
      ) : null}
    </Wrapper>
  );
};

const GuestTag = styled.span`
  color: #27b4e9;
  font-size: 0.85rem;
  margin-left: 0.5rem;
`;

const DropdownContainerMobile = styled.div`
  display: block !important;
  width: 100%;
  /* height: 400px; */
  background-color: var(--blue);
  margin-top: 10px;
  color: white;
  padding: 10%;
  border-radius: 16px;

  @media (min-width: 768px) {
    display: none !important;
  }
`;

const DropdownContainerDesktop = styled.div`
  position: absolute;
  background-color: var(--blue);
  color: white;
  width: 400px;
  left: 0;
  top: 43px;
  padding: 1rem;
  z-index: 5;
  border-radius: 16px;
  display: none !important;

  @media (min-width: 768px) {
    display: block !important;
  }
`;

const DropdownList = styled.ul`
  list-style: none;
`;

const DropdownItem = styled.li`
  cursor: pointer;
  font-size: 1.2rem;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    color: #27b4e9;
  }

  @media (min-width: 768px) {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`;

const Wrapper = styled.div`
  position: relative;
  /* background-color: blue; */
  padding: 5px;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const FixedTextWrapper = styled.span`
  padding: 1rem 1rem;
  /* background-color: red; */
  cursor: pointer;
`;

const FixedText = styled(BodyText3)`
  font-weight: bold;
  font-family: "Neusa";
  padding-right: 1rem;

  &:hover {
    color: #27b4e9;
  }
`;

export default FilterDropdown;
