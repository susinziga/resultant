import Hero from "../components/hero/Hero";
import Pillars_home from "../components/home/pillars_home/Pillars_home";
import Menu_fixed from "../components/menu_fixed/Menu_fixed";

export default function Home() {
  return (
    <>
      <Hero className="section"></Hero>
      <Menu_fixed className="section"></Menu_fixed>
      <Pillars_home></Pillars_home>
    </>
  );
}
