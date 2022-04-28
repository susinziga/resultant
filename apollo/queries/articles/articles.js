import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query clanek {
    clanki {
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
        }
      }
    }
  }
`;

export default ARTICLES_QUERY;
