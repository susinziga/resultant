import Footer from "../components/footer/Footer";
import Head from "next/head";
import Menu_top from "../components/menu_top/Menu_top";
import "../styles/globals.css";
import "../styles/root.css";
import "../styles/common.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Resultant</title>
      </Head>
      <Menu_top></Menu_top>
      <Component {...pageProps} />
      {<Footer></Footer>}
    </div>
  );
}

export default MyApp;
