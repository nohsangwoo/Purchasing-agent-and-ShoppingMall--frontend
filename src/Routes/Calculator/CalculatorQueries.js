import { gql } from 'apollo-boost';

export const Get_ExchangeRate = gql`
  query getExchangeRate($id: String!) {
    getExchangeRate(id: $id) {
      exchangeRate
      JPexchangeRate
      USDexchangeRate
    }
  }
`;
