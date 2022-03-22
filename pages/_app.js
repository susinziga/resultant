import Menu_top from "../components/menu_top/Menu_top";
import "../styles/globals.css";
import "../styles/root.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu_top></Menu_top>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
