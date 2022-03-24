import Hero from "../components/hero/Hero";
import Approach_component from "../components/home/Approach_section/Approach_home";
import Pillars_home from "../components/home/pillars_home/Pillars_home";
import Menu_fixed from "../components/menu_fixed/Menu_fixed";

export default function Home() {
  return (
    <>
      <Hero className="section"></Hero>
      <Menu_fixed className="section"></Menu_fixed>
      <Pillars_home className="section"></Pillars_home>
      <Approach_component className="section"></Approach_component>
    </>
  );
}
