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
import "@fortawesome/fontawesome-svg-core/styles.css";

import React from "react";
import { ApolloProvider } from "@apollo/client";
import withData from "../utils/apollo";
import AktualnoProvider from "../context/aktualnoContext";

const tagManagerArgs = {
  gtmId: "GTM-TJL8898",
};

function MyApp({ Component, pageProps, apollo }) {
  const [size, setSize] = useState([]);

  const { pathname, locale } = useRouter();
  useEffect(() => {
    console.log(pathname);
    if (pathname == "/aktualno" && locale == "en") {
      window.location = "/en";
    }
    TagManager.initialize(tagManagerArgs);
    window.addEventListener("resize", setSizes);
    return () => window.removeEventListener("resize", setSizes);
  }, []);

  const setSizes = () => {
    setSize([window.innerWidth, window.innerHeight]);
  };
  return (
    <AktualnoProvider>
      <div>
        <Head>
          <title>Resultant</title>
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
        </Head>
        <Menu_top size={size}></Menu_top>
        <Body_content id="__body" path={pathname}>
          <ApolloProvider client={apollo}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Body_content>
        <Footer></Footer>
      </div>
    </AktualnoProvider>
  );
}

const Body_content = styled.div`
  padding-top: 95px;

  @media (min-width: 992px) {
    padding-top: 130px;
  }

  ${(props) => (props.path === "/" ? "padding-top:0 !important;" : "")}
`;

export default withData(MyApp);
