import About_page from "../components/about/About_page";
import { AboutContextProvider } from "../context/aboutContext";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Resultant - {t("aboveTheFold:nav_item1")}</title>
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
