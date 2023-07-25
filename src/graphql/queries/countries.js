import gql from "graphql-tag";

export const countryQuery = gql`
  {
    countries {
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
