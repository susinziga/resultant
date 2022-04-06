import React, { useEffect, useState, useContext } from "react";
import About_main_content from "./About_main_content/About_main_content";

import * as Styled from "./About_page.styled";
import About_about from "./About_section/About_about";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { AboutContext } from "../../context/aboutContext";
import About_bottom from "./About_bottom/About_bottom";

const About_page = () => {
  const [sectionActive, setSectionActive] = useState(0);
  const [initAnimation, setInitAnimation] = useState(false);

  const { containerActive, setContainerActive } = useContext(AboutContext);

  useEffect(() => {
    /*gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    let panels = gsap.utils.toArray(".panel"),
      scrollTween;

    function goToSection(i) {
      scrollTween = gsap.to(window, {
        scrollTo: { y: i * innerHeight, autoKill: false },
        duration: 1,
        onComplete: () => {
          scrollTween = null;
          setContainerActive(i);
        },
        overwrite: true,
      });
    }

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
        end: "+=200%",
        onToggle: (self) => self.isActive && !scrollTween && goToSection(i),
      });
    });

    // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
    ScrollTrigger.create({
      start: 0,
      end: "max",
      snap: 1 / (panels.length - 1),
    });*/
  }, []);

  useEffect(() => {
    if (containerActive === 1) {
      setInitAnimation(true);
    }
  }, [containerActive]);

  return (
    <Styled.About_page_container>
      <About_about className="panel"></About_about>
      <About_main_content
        className="panel"
        initAnim={initAnimation}
        setInit={setInitAnimation}
        isActive={containerActive === 1}
      ></About_main_content>

      <About_bottom className="panel"></About_bottom>
    </Styled.About_page_container>
  );
};

export default About_page;
