import gql from "graphql-tag";

const AUTHORS_QUERY = gql`
  query avtors {
    avtors {
      data {
        id
        attributes {
          ime
        }
      }
    }
  }
`;

export default AUTHORS_QUERY;
