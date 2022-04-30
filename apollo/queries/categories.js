import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
  query kategorije {
    kategorije {
      data {
        id
        attributes {
          ime
        }
      }
    }
  }
`;

export default CATEGORIES_QUERY;
