import { useRouter } from "next/router";
import React from "react";
import Container from "../../components/aktualno/blog/content_components/Container.styled";
import Blog_page from "../../components/aktualno/blog/Blog_page";
import mkstyle from "./markdown-styles.module.css";
import Head from "next/head";
import { AUTHOR_IMAGES, RESULTANT } from "../../public/people";

// TODO: set this in your .env file
const WP_API_URL = process.env.WP_API_URL || "https://yourwordpresssite.com/wp-json/wp/v2";

export async function getStaticProps({ params }) {
  const id = params.clanek;

  // _embed pulls in featured image + author in one request
  const res = await fetch(`${WP_API_URL}/posts/${id}?_embed`);

  if (!res.ok) {
    return { notFound: true };
  }

  const post = await res.json();

  //console.log("ACF data:", JSON.stringify(post.acf, null, 2));

  return {
    props: {
      clanek: post,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  // Just need IDs here, so ask WP for minimal fields to keep this fast
  const res = await fetch(`${WP_API_URL}/posts?per_page=100&_fields=id`);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { clanek: String(post.id) },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

// TODO: fill in every real author name (must match ACF's "author"/"gost" values exactly)
// and the correct path to their photo in /public
const getAuthorImage = (name) => AUTHOR_IMAGES[name] || null;

const getAuthorStatus = (name) => RESULTANT[name] || false;

const Clanek = ({ clanek }) => {
  const featuredImage =
    clanek._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
  const featuredImageAlt =
    clanek._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || "";

  // Pulls a display name out of an ACF field, whatever shape it comes back as:
  // - Text field -> plain string
  // - User field (return format: Array) -> { display_name, ... }
  // - Group field with a "name"/"ime" sub-field -> { name } or { ime }
  const getAcfName = (field) => {
  if (!field) return [];

  if (Array.isArray(field)) {
    return field
      .map((author) => {
        if (typeof author === "string") return author;
        return author?.display_name || author?.name || author?.ime || null;
      })
      .filter(Boolean);
  }

  if (typeof field === "string") return [field];

  return [field.display_name || field.name || field.ime].filter(Boolean);
};

  const authorNames = getAcfName(clanek.acf?.author);
  //console.log(authorNames)

  // Blog_Header expects each author as { name, image, resultant }
  // resultant: true = Resultant employee, false = guest (shows the "Gost" badge)
  const authors = [...new Set(authorNames)].map((authorName) => ({
  name: authorName,
  image: getAuthorImage(authorName),
  resultant: getAuthorStatus(authorName),
}));

  const excerptText = clanek.excerpt.rendered.replace(/<[^>]+>/g, "").replace("&#8211;", "-"); // strip HTML tags

  const blog_data = {
    title: clanek.title.rendered,
    authors: authors,
    image: featuredImage,
    imageAlt: featuredImageAlt,
    excerpt: excerptText,
  };

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{clanek.title.rendered}</title>
        <meta name="description" content={excerptText} />
        <meta key="title" property="og:title" content={clanek.title.rendered} />
        <meta key="url" property="og:url" content={router.asPath} />
        <meta key="type" property="og:type" content="article" />
        <meta key="description" property="og:description" content={excerptText} />
        {featuredImage && (
          <>
            <meta key="image" property="og:image" content={featuredImage} />
            <meta key="twitter-image" name="twitter:image" content={featuredImage} />
          </>
        )}
      </Head>
      <Blog_page _data={blog_data}>
        <Container>
          {/* WordPress already gives us fully-formatted HTML here (headings, paragraphs,
              images, lists, etc, exactly as written in the WP editor). mkstyle applies
              your existing markdown/article styling classes to it. */}
          <div
            className={mkstyle.reactMarkDown}
            dangerouslySetInnerHTML={{ __html: clanek.content.rendered }}
          />
        </Container>
      </Blog_page>
    </>
  );
};

export default Clanek;