import Head from "next/head";
import Menu_top from "../components/menu_top/Menu_top";
import "../styles/globals.css";
import "../styles/root.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Resultant</title>
      </Head>
      <Menu_top></Menu_top>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
