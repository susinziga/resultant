import gql from "graphql-tag";
import { BULLET_LIST_FIELDS } from "../../fragments";

const ARTICLE_QUERY = gql`
  query clanek($id: ID!) {
    clanek(id: $id) {
      data {
        id
        attributes {
          naslov
          podnaslov
          Meta_Title
          Meta_Description
          glavnaSlika {
            data {
              attributes {
                url
                alternativeText
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
                    alternativeText
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
