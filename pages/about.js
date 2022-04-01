import About_page from "../components/about/About_page";
import MainContent_about from "../components/about_old/mainContent_about/MainContent_about";
import { AboutContextProvider } from "../context/aboutContext";

export default function About() {
  return (
    <>
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
