import { gql } from 'apollo-boost';

export const OrderContent = gql`
  mutation createOrderContent($username: String!, $Stage: Int) {
    createOrderContent(username: $username, Stage: $Stage) {
      id
    }
  }
`;

export const OrderContentDetail = gql`
  mutation createOrderContentDetail(
    $OrderContent: String
    $serviceType: String!
    $productName: String!
    $productURL: String
    $productOption: String!
    $fileImageURL: String
  ) {
    createOrderContentDetail(
      OrderContent: $OrderContent
      serviceType: $serviceType
      productName: $productName
      productURL: $productURL
      productOption: $productOption
      fileImageURL: $fileImageURL
    )
  }
`;

export const CREATE_ESTIMATE = gql`
  mutation createEstimate($OrderContentId: String!, $country: String!) {
    createEstimate(OrderContentId: $OrderContentId, country: $country)
  }
`;
