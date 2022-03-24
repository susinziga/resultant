import Hero from "../components/hero/Hero";
import Pillars_home from "../components/home/pillars_home/Pillars_home";
import References_home from "../components/home/references/References_home";
import Testimonials_home from "../components/home/testimonials/Testimonials_home";
import Menu_fixed from "../components/menu_fixed/Menu_fixed";

export default function Home() {
  return (
    <>
      <Hero className="section"></Hero>
      <Menu_fixed className="section"></Menu_fixed>
      <Pillars_home className="section"></Pillars_home>
      <References_home className="section"></References_home>
      <Testimonials_home className="section"></Testimonials_home>
    </>
  );
}
