import { gql } from "@apollo/client";

export const BULLET_LIST_FIELDS = gql`
  fragment BulletListFields on Comment {
    Naslov
    Podnaslov
    Text
  }
`;
