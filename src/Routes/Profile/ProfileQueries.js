import { gql } from "apollo-boost";

export const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      id
      avatar
      username
      fullName
      isFollowing
      isSelf
      bio
      followingCount
      followersCount
      postsCount
      addresses {
        id
        address
        post
      }
      posts {
        id
        files {
          url
        }
        likeCount
        commentCount
      }
    }
    seeOrderContents(username: $username) {
      id
      OrderContentDetailCount
      ConfirmPrimaryPayment
      ConfirmSecondaryPayment
      OrderContentDetails {
        id
        serviceType
        productName
        productPrice
        productOption
        fileImageURL
      }
      Estimates {
        id
        firstPaypal
        secondPaypal
        firstExchangeRate
        secondExchangeRate
        country
        orderWeight
        selectSecondPaypal
        shippingNumber
      }
      user {
        isSelf
      }
      createdAt
    }

    seeShops(username: $username) {
      id
      ConfirmSecondaryPayment
      ShopDetails {
        id
        imageURL
        title
        basePrice
        goodsId
        firstOption
        secondOption
        quantity
        addPrice
        quantityPerGoods
        visible
      }
      user {
        isSelf
      }
      ShopEstimates {
        id
        country
        shopWeight
        firstPaypal
        selectSecondPaypal
        secondPaypal
        secondExchangeRate
        ShippingType
        shippingNumber
      }
      createdAt
    }
  }
`;

export const LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;

export const UPDATE_SHOP_WEIGHT = gql`
  mutation updateShopEstimateWeight(
    $ShopEstimatesId: String!
    $shopWeight: String
  ) {
    updateShopEstimateWeight(
      ShopEstimatesId: $ShopEstimatesId
      shopWeight: $shopWeight
    )
  }
`;
