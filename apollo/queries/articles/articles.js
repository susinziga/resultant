import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query clanek {
    clanki(pagination: { start: 0, limit: 1000 }) {
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
              id
              attributes {
                ime
              }
            }
          }
          avtors {
            data {
              id
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
          dinamicnoPolje {
            __typename
            ... on ComponentClanekVsebinaNormalText {
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
              Slika {
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
`;

// const ARTICLES_QUERY = gql`
//   query clanek($storitve: [ID], $authors: [ID]) {
//     clanki(
//       filters: {
//         kategorijas: { id: { in: $storitve } }
//         avtors: { id: { in: $authors } }
//       }
//     ) {
//       data {
//         id
//         attributes {
//           naslov
//           podnaslov
//           glavnaSlika {
//             data {
//               attributes {
//                 url
//               }
//             }
//           }
//           kategorijas {
//             data {
//               id
//               attributes {
//                 ime
//               }
//             }
//           }
//           avtors {
//             data {
//               id
//               attributes {
//                 ime
//                 slika {
//                   data {
//                     attributes {
//                       url
//                     }
//                   }
//                 }
//               }
//             }
//           }
//           dinamicnoPolje {
//             __typename
//             ... on ComponentClanekVsebinaNormalText {
//               Text
//             }
//             ... on ComponentClanekVsebinaBulletList {
//               Naslov
//               Podnaslov
//               Text
//             }
//             ... on ComponentClanekVsebinaBorderText {
//               Text
//             }
//             ... on ComponentClanekVsebinaImage {
//               Naslov
//               Slika {
//                 data {
//                   attributes {
//                     url
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// const ARTICLES_QUERY = gql`
//   query clanek {
//     clanki(sort: "createdAt:desc") {
//       data {
//         id
//         attributes {
//           naslov
//           podnaslov
//           glavnaSlika {
//             data {
//               attributes {
//                 url
//               }
//             }
//           }
//           kategorijas {
//             data {
//               attributes {
//                 ime
//               }
//             }
//           }
//           avtors {
//             data {
//               attributes {
//                 ime
//                 slika {
//                   data {
//                     attributes {
//                       url
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default ARTICLES_QUERY;
