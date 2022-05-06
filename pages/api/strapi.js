import qs from "qs";

export function getArticleFromStrapiData(article) {
  console.log(article);

  let authors = [];
  article.attributes.avtors.data.forEach((element) => {
    authors.push(element.attributes.ime);
  });

  // Turn title into link
  const link = article.attributes.naslov.replaceAll(" ", "-").toLowerCase();

  // Get link to main img
  const mainImgUrl = article.attributes.glavnaSlika.data.attributes.url;

  return {
    id: article.id,
    heading: article.attributes.naslov,
    text: article.attributes.podnaslov,
    image: mainImgUrl,
    authors: authors,
    link: link,
  };
}

export function getStrapiURL(path = "") {
  return `${
    // "http://127.0.0.1:1337"
    "https://resultant-strapi.herokuapp.com"
  }${path}`;
}

export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    options,
  };

  // Build Request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
}
