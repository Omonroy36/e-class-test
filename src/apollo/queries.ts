import { gql, useQuery } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        pages
        next
        prev
      }
      results {
        name
        id
        image
        species
        status
      }
    }
  }
`;

export const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      name
      id
      image
      status
      gender
      species
      created
      location {
        name
      }
      origin {
        name
      }
    }
  }
`;

export { useQuery };
