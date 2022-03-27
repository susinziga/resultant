import About_about from "../components/about/About_section/About_about";

import MainContent_about from "../components/about/mainContent_about/MainContent_about";

export default function About() {
  return (
    <>
      <About_about className="section"></About_about>
      <MainContent_about></MainContent_about>

      <div style={{ height: "500px", width: "100%" }}></div>
    </>
  );
}
