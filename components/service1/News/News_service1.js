import React from "react";

import useTranslation from "next-translate/useTranslation";
import CardSlider from "./Card/NewsSlider_section1";

const News_service1 = (props) => {
  const { t, lang } = useTranslation();

  const news = [
    {
      heading: t("service1:service1_newsHeader1"),
      text: t("service1:service1_newsText1"),
      image: "/Service1/NewsCard3.png",
      link: "kako-do-vecje-zavzetosti-vasih-zaposlenih",
    },
    {
      heading: t("service1:service1_newsHeader2"),
      text: t("service1:service1_newsText2"),
      image: "/Service1/NewsCard1.png",
      link: "spremljanje-in-spreminjanje-organizacijske-klime-in-kulture",
    },
    {
      heading: t("service1:service1_newsHeader3"),
      text: t("service1:service1_newsText3"),
      image: "/Service1/NewsCard2.png",
      link: "visoka-zavzetost-sodelavcev-prinasa-organizaciji-veliko-prednost",
    },
  ];

  return (
    <>
      <div {...props} style={{ padding: "0 2.5%" }}>
        <CardSlider news={news}></CardSlider>
      </div>
    </>
  );
};

export default News_service1;
