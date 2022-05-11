import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query clanek($id: ID!) {
    clanek(id: $id) {
      data {
        id
        attributes {
          naslov
          podnaslov
          glavnaSlika {
            data {
              attributes {
                url
              }
            }
          }
          kategorijas {
            data {
              attributes {
                ime
              }
            }
          }
          avtors {
            data {
              attributes {
                ime
                resultant
                slika {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          dinamicnoPolje {
            __typename
            ... on ComponentClanekVsebinaNormalText {
              Naslov
              Text
            }
            ... on ComponentClanekVsebinaBulletList {
              Naslov
              Podnaslov
              Text
            }
            ... on ComponentClanekVsebinaBorderText {
              Text
            }
            ... on ComponentClanekVsebinaImage {
              Naslov
              Napis_pod_sliko
              Slika {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            ... on ComponentClanekVsebinaPresledek {
              NE_IZPOLNI
            }
          }
        }
      }
    }
  }
`;

export default ARTICLE_QUERY;
