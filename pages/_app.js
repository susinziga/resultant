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
  const [menu, setMenu] = useState("90px");
  const { pathname } = useRouter();
  useEffect(() => {
    let menuTemp = "-";
    if (pathname !== "/") {
      menuTemp =
        document.getElementsByClassName("menu_top_desktop")[0].offsetHeight;
    }

    setMenu(menuTemp);
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
      <Body_content id="__body" menu={menu}>
        <Component {...pageProps} />
      </Body_content>
      <Footer></Footer>
    </div>
  );
}

const Body_content = styled.div`
  padding-top: calc(${(props) => props.menu}px + 2rem);
`;

export default MyApp;
