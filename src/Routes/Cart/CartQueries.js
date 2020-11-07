import { gql } from 'apollo-boost';

export const Shop = gql`
  mutation createShop($username: String!, $Stage: Int) {
    createShop(username: $username, Stage: $Stage) {
      id
    }
  }
`;

export const ShopDetail = gql`
  mutation createShopDetail(
    $Shop: String!
    $imageURL: String!
    $title: String!
    $basePrice: String!
    $goodsId: String!
    $firstOption: String!
    $secondOption: String!
    $quantity: String!
    $addPrice: String!
    $quantityPerGoods: String!
    $visible: Boolean
  ) {
    createShopDetail(
      Shop: $Shop
      imageURL: $imageURL
      title: $title
      basePrice: $basePrice
      goodsId: $goodsId
      firstOption: $firstOption
      secondOption: $secondOption
      quantity: $quantity
      addPrice: $addPrice
      quantityPerGoods: $quantityPerGoods
      visible: $visible
    )
  }
`;

export const ShopEstimate = gql`
  mutation createShopEstimate(
    $Shop: String!
    $country: String!
    $firstExchangeRate: Float
    $firstPaypal: Int
  ) {
    createShopEstimate(
      Shop: $Shop
      country: $country
      firstExchangeRate: $firstExchangeRate
      firstPaypal: $firstPaypal
    )
  }
`;
