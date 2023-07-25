import gql from "graphql-tag";

export const continentQuery = gql`
  {
    continents {
      code
      name
    }
  }
`;
