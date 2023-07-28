import gql from "graphql-tag";

export const countryQuery = gql`
  query ($continents: [String!]) {
    countries (
      filter: {
        continent: {
          in: $continents,
        }
      }
    ) {
      code
      name
      capital
      currency
      languages {
        code
        name
      }
      continent {
        code
        name
      }
      states {
        code
        name
      }
    }
  }
`;
