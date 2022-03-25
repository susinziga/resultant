import { useState, useEffect } from "react";

import Footer from "../components/footer/Footer";
import Head from "next/head";
import Menu_top from "../components/menu_top/Menu_top";
import "../styles/globals.css";
import "../styles/root.css";
import "../styles/common.css";
import "../styles/scrollbar.css";

function MyApp({ Component, pageProps }) {
  const [size, setSize] = useState([]);

  useEffect(() => {
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
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
