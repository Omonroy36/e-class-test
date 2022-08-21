import { gql, useQuery } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
      }
      results {
        name
        id
        image
      }
    }
  }
`;

export { useQuery };
