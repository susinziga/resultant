import Hero from "../components/hero/Hero";
import Approach_component from "../components/home/Approach_section/Approach_home";
import Pillars_home from "../components/home/pillars_home/Pillars_home";
import Menu_fixed from "../components/menu_fixed/Menu_fixed";
import Footer from '../components/footer/Footer'
import Counter_home from "../components/home/Counter_section/Counter_home";
import Contact_home from "../components/home/Contact_section/Contact_home";

export default function Home() {
  return (
    <>
      <Hero className="section"></Hero>
      <Menu_fixed className="section"></Menu_fixed>
      <Pillars_home className="section"></Pillars_home>
      <Approach_component className="section"></Approach_component>
      <Counter_home ></Counter_home>
      <Contact_home className="section"></Contact_home>
    </>
  );
}
