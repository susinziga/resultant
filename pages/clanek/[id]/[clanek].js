import { useRouter } from "next/router";
import React from "react";
import ARTICLE_QUERY from "../../../apollo/queries/articles/article";
import { BodyText3, Subtitle2 } from "../../../basic_components/texts/Texts";
import Blog_page from "../../../components/blog/Blog_page";
import Border_shadow from "../../../components/blog/content_components/Border_shadow";
import Container, {
  Container_border,
} from "../../../components/blog/content_components/Container.styled";
import Image from "../../../components/blog/content_components/Image";
import NewParagraph, {
  NewRow,
} from "../../../components/blog/content_components/Margin.styled";
import Plain_text from "../../../components/blog/content_components/Plain_text";
import Share from "../../../components/blog/content_components/Share";
import Query from "../../../components/query";
import { getStrapiURL } from "../../api/strapi";

const Clanek = ({ clanek, blog_data }) => {
  const getArticleContentComponent = (item) => {
    const strapiComponent = item.__typename;

    switch (strapiComponent) {
      case "ComponentClanekVsebinaBulletList":
        return (
          <ul>
            {item.Text.split("\n").map((item) => (
              <li>
                <BodyText3>{item}</BodyText3>
              </li>
            ))}
          </ul>
        );
      case "ComponentClanekVsebinaNormalText":
        return <p>{item.Text}</p>;
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
              image:
                getStrapiURL() + avtor.attributes.slika.data.attributes.url,
            };
          });

          console.log(authors);

          const blog_data = {
            title: article.naslov,
            authors: authors,
            image: getStrapiURL() + article.glavnaSlika.data.attributes.url,
            excerpt: article.podnaslov,
          };

          return (
            <Blog_page _data={blog_data}>
              {article.dinamicnoPolje.map((c) => getArticleContentComponent(c))}
            </Blog_page>
          );
        }
      }}
    </Query>
  );
};

export default Clanek;
