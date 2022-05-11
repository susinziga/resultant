import { useRouter } from "next/router";
import React from "react";
import ARTICLE_QUERY from "../../../apollo/queries/articles/article";
import {
  BodyText3,
  Subtitle2,
  Subtitle1,
  BodyText2,
} from "../../../basic_components/texts/Texts";
import Border_shadow from "../../../components/blog/content_components/Border_shadow";
import Container, {
  Container_border,
} from "../../../components/aktualno/blog/content_components/Container.styled";
import Image from "../../../components/aktualno/blog/content_components/Image";
import NewParagraph, {
  NewRow,
} from "../../../components/blog/content_components/Margin.styled";
import Plain_text from "../../../components/blog/content_components/Plain_text";
import Share from "../../../components/blog/content_components/Share";
import Query from "../../../components/query";
import { getStrapiURL } from "../../api/strapi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Blog_page from "../../../components/aktualno/blog/Blog_page";
import mkstyle from "./markdown-styles.module.css";

const Clanek = ({ clanek, blog_data }) => {
  const getArticleContentComponent = (item) => {
    const strapiComponent = item.__typename;

    switch (strapiComponent) {
      case "ComponentClanekVsebinaBulletList":
        return (
          <>
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
          </>
        );
      case "ComponentClanekVsebinaNormalText":
        return (
          <>
            <Container>
              <Subtitle1>{item.Naslov}</Subtitle1>
              <NewRow />
              {/* <BodyText3
                dangerouslySetInnerHTML={{ __html: item.Text }}
              ></BodyText3> */}
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
          </>
        );
      case "ComponentClanekVsebinaImage":
        return (
          <>
            <Container>
              <Subtitle2>{item.Naslov}</Subtitle2>
              <NewRow></NewRow>
            </Container>
            <Image src={item.Slika.data.attributes.url}></Image>
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
          </>
        );
      case "ComponentClanekVsebinaBorderText":
        return (
          <>
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
          </>
        );
      case "ComponentClanekVsebinaPresledek":
        return <div style={{ height: "4rem" }}></div>;
      default:
        return <p>Invalid component ${strapiComponent}</p>;
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
            excerpt: article.podnaslov,
          };

          return (
            <Blog_page key={id} _data={blog_data}>
              {article.dinamicnoPolje.map((c) => getArticleContentComponent(c))}
            </Blog_page>
          );
        }
      }}
    </Query>
  );
};

export default Clanek;
