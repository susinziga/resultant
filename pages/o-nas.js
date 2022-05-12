import About_page from "../components/about/About_page";
import { AboutContextProvider } from "../context/aboutContext";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>
          Spoznajte nas | Zaupa nam več kot 150 podjetij | Resultant
        </title>
        <meta
          name="description"
          content="Poslovni odnos gradimo na trdnem partnerstvu. Več kot 100 projektov. Zaupa nam več kot 150 podjetij. Za vsa vprašanja smo vam vedno na voljo. Spoznajte nas."
        />
      </Head>
      {/*<About_about className="section"></About_about>
      <MainContent_about></MainContent_about>

  <div style={{ height: "500px", width: "100%" }}></div>*/}
      <AboutContextProvider>
        <About_page></About_page>
      </AboutContextProvider>
      {/*<MainContent_about></MainContent_about>*/}
    </>
  );
}
