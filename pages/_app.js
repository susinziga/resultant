import { useState, useEffect } from "react";

import Footer from "../components/footer/Footer";
import Head from "next/head";
import Menu_top from "../components/menu_top/Menu_top";
import "../styles/globals.css";
import "../styles/root.css";
import "../styles/common.css";
import "../styles/scrollbar.css";
import styled from "styled-components";

import TagManager from "react-gtm-module";

import { useRouter } from "next/router";

const tagManagerArgs = {
  gtmId: "GTM-TJL8898",
};

function MyApp({ Component, pageProps }) {
  const [size, setSize] = useState([]);

  const { pathname } = useRouter();
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
    window.addEventListener("resize", setSizes);
    return () => window.removeEventListener("resize", setSizes);
  }, []);

  const setSizes = () => {
    setSize([window.innerWidth, window.innerHeight]);
  };
  return (
    <div>
      <Head>
        <title>Resultant</title>
      </Head>
      <Menu_top size={size}></Menu_top>
      <Body_content id="__body" path={pathname}>
        <Component {...pageProps} />
      </Body_content>
      <Footer></Footer>
    </div>
  );
}

const Body_content = styled.div`
  padding-top: 95px;

  @media (min-width: 992px) {
    padding-top: 130px;
  }

  ${(props) => (props.path === "/" ? "padding-top:0!important;" : "")}
`;

export default MyApp;
