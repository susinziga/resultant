import styled from "styled-components";
import {
  BodyText2,
  Header1,
  Subtitle1,
} from "../../basic_components/texts/Texts";

export const HeroContainer = styled.div`
  position: relative;
  /* height: 100vh; */

  padding-top: calc(${(props) => props.menuHeight} - 0.5rem);

  div:first-child {
    width: 100%;
    height: fit-content;
    transform: scale(0.9);

    position: relative;

    border-radius: 12px;

    overflow: hidden;

    height: fiz-content;

    max-height: 100%;
  }
  img {
    //height:100vh;
    width: 100%;
    border-radius: 12px;
  }

  @media (min-width: 768px) {
    position: relative;
    /* height: 100vh; */
    padding-top: calc(${(props) => props.menuHeight} + 1.5rem);

    div:first-child {
      transform: scale(0.9);
      top: -5%;
      position: relative;

      border-radius: 12px;

      overflow: hidden;

      height: 110%;
      > img {
        //height:100vh;
        //height:100%;
        //width:auto;
      }
    }
  }
`;

export const HeroTexts = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5%;
  left: 5%;
  // top: 0;
  // left: 0;
  width: 90%;
  > * {
    margin-bottom: 2.5rem;
  }

  @media (min-width: 768px) {
    // top:10%;
    // left:30%;

    > * {
      margin-bottom: 2.5rem;
    }

    > h1 {
      //margin-bottom:6%;
      width: 60%;
    }
    > p {
      width: 60%;
    }
  }
  @media (min-width: 1300px) {
    top: 10%;
    left: 35%;
  }
  @media (max-width: 991px) {
    > * {
      margin-bottom: 0.8rem;
    }
  }
`;

export const WhiteLine = styled.div`
  height: 2px;
  width: 0%;
  background-color: #fff;
  position: relative;
  left: 100%;
  z-index: 10;
`;

export const SubTextWrapper = styled.p`
  width: 100% !important;
  margin-bottom: 1.5rem;

  @media (min-width: 1300px) {
    width: 60% !important;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 991px) {
    margin-bottom: 0.5rem;
  }
`;

export const HeaderText = styled(Header1)`
  font-size: 3.5rem;
  line-height: 3.5rem;

  @media (min-width: 1300px) {
    font-size: 6.6rem;
    line-height: 6rem;
  }

  @media (max-width: 991px) {
    margin-bottom: 1rem;
  }
`;

export const SubTextWrapperMobile = styled(Subtitle1)`
  font-family: "NeusaThin";
`;
