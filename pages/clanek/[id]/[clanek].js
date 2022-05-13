import { useRouter } from "next/router";
import React from "react";
import ARTICLE_QUERY from "../../../apollo/queries/articles/article";
import {
  BodyText3,
  Subtitle2,
  Subtitle1,
  Title2,
} from "../../../basic_components/texts/Texts";
import Container, {
  Container_border,
} from "../../../components/aktualno/blog/content_components/Container.styled";
import Image from "../../../components/aktualno/blog/content_components/Image";
import NewParagraph, {
  NewRow,
} from "../../../components/blog/content_components/Margin.styled";
import Query from "../../../components/query";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Blog_page from "../../../components/aktualno/blog/Blog_page";
import mkstyle from "./markdown-styles.module.css";
import Head from "next/head";

const Clanek = ({ clanek, blog_data }) => {
  const getArticleContentComponent = (item, index) => {
    const strapiComponent = item.__typename;

    switch (strapiComponent) {
      case "ComponentClanekVsebinaBulletList":
        return (
          <div key={index}>
            <Container>
              <Subtitle1 medium>{item.Naslov}</Subtitle1>
              <NewRow></NewRow>
              <BodyText3 style={{ fontWeight: "400" }}>
                {item.Podnaslov}
              </BodyText3>
              <NewRow></NewRow>
              <ul>
                {item.Text.split("\n").map((item) => (
                  <li style={{ marginBottom: "1.5rem" }}>
                    <BodyText3>{item}</BodyText3>
                  </li>
                ))}
              </ul>
            </Container>
            <NewParagraph></NewParagraph>
          </div>
        );
      case "ComponentClanekVsebinaNormalText":
        return (
          <div key={index}>
            <Container>
              <Title2 style={{ fontFamily: "Neusa", fontSize: "2.5rem" }}>
                {item.Naslov}
              </Title2>
              <NewRow />
              <BodyText3>
                <ReactMarkdown
                  children={item.Text}
                  remarkPlugins={[remarkGfm]}
                  skipHtml={true}
                  className={mkstyle.reactMarkDown}
                ></ReactMarkdown>
              </BodyText3>
            </Container>
            <NewParagraph></NewParagraph>
          </div>
        );
      case "ComponentClanekVsebinaImage":
        console.log(item.Slika.data.attributes);
        return (
          <div key={index}>
            <Container>
              <Subtitle2>{item.Naslov}</Subtitle2>
              <NewRow></NewRow>
            </Container>
            <Image
              src={item.Slika.data.attributes.url}
              alt={item.Slika.data.attributes.alternativeText}
            ></Image>
            <p
              style={{
                fontWeight: 300,
                fontStyle: "italic",
                width: "70%",
                textAlign: "center",
                margin: "0 auto",
                fontSize: ".8rem",
              }}
            >
              {item.Napis_pod_sliko}
            </p>
            <NewParagraph></NewParagraph>
          </div>
        );
      case "ComponentClanekVsebinaBorderText":
        return (
          <div key={index}>
            <Container_border style={{ textAlign: "center" }}>
              <BodyText3>
                <ReactMarkdown
                  children={item.Text}
                  remarkPlugins={[remarkGfm]}
                  skipHtml={true}
                  className={mkstyle.reactMarkDown}
                ></ReactMarkdown>
              </BodyText3>
            </Container_border>
            <NewParagraph></NewParagraph>
          </div>
        );
      case "ComponentClanekVsebinaPresledek":
        return <div key={index} style={{ height: "4rem" }}></div>;
      default:
        return <p key={index}>Invalid component ${strapiComponent}</p>;
    }
  };

  const router = useRouter();
  const { id } = router.query;

  return (
    <Query query={ARTICLE_QUERY} id={id}>
      {({ data: clanek }) => {
        {
          const article = clanek.clanek.data.attributes;

          const authors = article.avtors.data.map((avtor) => {
            return {
              name: avtor.attributes.ime,
              image: avtor.attributes.slika.data.attributes.url,
              resultant: avtor.attributes.resultant,
            };
          });

          const blog_data = {
            title: article.naslov,
            authors: authors,
            image: article.glavnaSlika.data.attributes.url,
            imageAlt: article.glavnaSlika.data.attributes.alternativeText,
            excerpt: article.podnaslov,
          };

          return (
            <>
              <Head>
                <title>{article.Meta_Title}</title>
                <meta name="description" content={article.Meta_Description} />
                <meta
                  key="title"
                  property="og:title"
                  content={article.Meta_Title}
                />
                <meta key="url" property="og:url" content={router.asPath} />
                <meta key="type" property="og:type" content="article" />
                <meta
                  key="description"
                  property="og:description"
                  content={article.Meta_Description}
                />
                <meta
                  key="image"
                  property="og:image"
                  content={article.glavnaSlika.data.attributes.url}
                />
              </Head>
              <Blog_page key={id} _data={blog_data}>
                {article.dinamicnoPolje.map((c, i) =>
                  getArticleContentComponent(c, i)
                )}
              </Blog_page>
            </>
          );
        }
      }}
    </Query>
  );
};

export default Clanek;
