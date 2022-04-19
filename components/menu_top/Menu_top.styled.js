import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;

  padding: ${(props) => (props.display ? "0.5rem 0" : "0")};

  transition: 0.5s padding;

  :hover .nav_item {
    opacity: 1 !important;
  }
`;

export const LogoContainer = styled.div`
  position: relative;
  width: fit-content;
  > a {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  #letter {
    pointer-events: none;
    position: absolute;

    top: 0;
    //top:500%;
    bottom: 0;
    right: 0;

    height: 100%;

    z-index: 100;
    height: 65px;
    left: 0;
    //left:100%;
    width: fit-content;
    transform: scale(1);

    //transform:scale(22);

    //transition:1s top;
  }

  #logo {
    height: 65px;
  }
  @media (min-width: 600px) {
    position: relative;
    width: fit-content;

    > object {
      position: absolute;

      top: -21%;
      //top:500%;
      bottom: 0;
      right: 0;

      height: 100%;

      z-index: 100;

      left: 57%;
      //left:100%;
      width: fit-content;
      transform: scale(0.5);

      //transform:scale(22);

      //transition:1s top;
    }

    #letter {
      position: absolute;

      top: 0;
      //top:500%;
      bottom: 0;
      right: 0;

      height: 65px;

      width: 100%;

      z-index: 100;

      left: 0;
      //left:100%;
      /* width: fit-content;*/
      transform: scale(1);

      //transform:scale(22);

      //transition:1s top;
    }

    @media (min-width: 992px) {
      #logo,
      #letter {
        height: 90px;
      }
    }
  }
`;

export const Fixed = styled.div`
  position: fixed;
  //background-color:#FFFFFF;
  background: #fff;
  z-index: 1000;
  width: 100%;
  top: 0;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Flex_language = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;
