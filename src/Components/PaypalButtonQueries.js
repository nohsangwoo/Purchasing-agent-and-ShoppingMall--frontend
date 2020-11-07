import { gql } from 'apollo-boost';

export const CONFIRM_ORDER_PRIMARY_PAYMENT = gql`
  mutation confirmOrderPrimaryPayment(
    $orderId: String!
    $ConfirmPrimaryPayment: Boolean
  ) {
    confirmOrderPrimaryPayment(
      orderId: $orderId
      ConfirmPrimaryPayment: $ConfirmPrimaryPayment
    )
  }
`;

export const CONFIRM_ORDER_SECONDARY_PAYMENT = gql`
  mutation confirmOrderSecondaryPayment(
    $orderId: String!
    $ConfirmSecondaryPayment: Boolean
    $addressId: String
    $orderEstimatesId: String!
    $secondPaypal: Int
    $ShippingType: String
  ) {
    confirmOrderSecondaryPayment(
      orderId: $orderId
      ConfirmSecondaryPayment: $ConfirmSecondaryPayment
      addressId: $addressId
      orderEstimatesId: $orderEstimatesId
      secondPaypal: $secondPaypal
      ShippingType: $ShippingType
    )
  }
`;

export const CONFIRM_SHOP_SECONDARY_PAYMENT = gql`
  mutation confirmSecondaryPayment(
    $shopId: String!
    $ConfirmSecondaryPayment: Boolean
    $addressId: String
    $ShopEstimatesId: String!
    $secondPaypal: Int
    $ShippingType: String
  ) {
    confirmSecondaryPayment(
      shopId: $shopId
      ConfirmSecondaryPayment: $ConfirmSecondaryPayment
      addressId: $addressId
      ShopEstimatesId: $ShopEstimatesId
      secondPaypal: $secondPaypal
      ShippingType: $ShippingType
    )
  }
`;
