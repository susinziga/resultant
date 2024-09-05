import React from "react";

import useTranslation from "next-translate/useTranslation";
import CardSlider from "./Card/NewsSlider_section1";

const News_service1 = (props) => {
  const { t, lang } = useTranslation();

  const news = [
    {
      heading: t("service1:service1_newsHeader1"),
      text: t("service1:service1_newsText1"),
      image: "/clanki/2/smallcard.webp",
      link: "kako-do-vecje-zavzetosti-vasih-zaposlenih",
    },
    {
      heading: t("service1:service1_newsHeader2"),
      text: t("service1:service1_newsText2"),
      image: "/clanki/3/smallcard.webp",
      link: "spremljanje-in-spreminjanje-organizacijske-klime-in-kulture",
    },
    {
      heading: t("service1:service1_newsHeader3"),
      text: t("service1:service1_newsText3"),
      image: "/Service1/NewsCard3.webp",
      link: "visoka-zavzetost-sodelavcev-prinasa-organizaciji-veliko-prednost",
    },
  ];

  return (
    <>
      <div {...props} style={{ padding: "0 0%" }}>
        <CardSlider news={news}></CardSlider>
      </div>
    </>
  );
};

export default News_service1;
