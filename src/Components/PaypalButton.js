import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useMutation } from '@apollo/react-hooks';

import { toast } from 'react-toastify';
import {
  CONFIRM_ORDER_PRIMARY_PAYMENT,
  CONFIRM_ORDER_SECONDARY_PAYMENT,
  CONFIRM_SHOP_SECONDARY_PAYMENT,
} from './PaypalButtonQueries';

export default ({
  paypal,
  shopId,
  shopEstimatesId,
  setisModalOpen,
  ShippingType,
  orderId,
  orderEstimatesId,
  checkWhichOrderConfirm,
  country,
  addresses,
  addressId,
}) => {
  const [confirmOrderPrimaryPayment] = useMutation(
    CONFIRM_ORDER_PRIMARY_PAYMENT,
    {
      variables: {
        orderId: orderId,
        ConfirmPrimaryPayment: true,
      },
    }
  );

  const [confirmOrderSecondaryPayment] = useMutation(
    CONFIRM_ORDER_SECONDARY_PAYMENT,
    {
      variables: {
        orderId: orderId,
        ConfirmSecondaryPayment: true,
        addressId: addressId,
        orderEstimatesId: orderEstimatesId,
        secondPaypal: paypal,
        ShippingType: ShippingType,
      },
    }
  );

  const [confirmSecondaryPayment] = useMutation(
    CONFIRM_SHOP_SECONDARY_PAYMENT,
    {
      variables: {
        shopId: shopId,
        ConfirmSecondaryPayment: true,
        addressId: addressId,
        ShopEstimatesId: shopEstimatesId,
        secondPaypal: paypal,
        ShippingType: ShippingType,
      },
    }
  );

  async function confirmPayment() {
    try {
      if (shopId) {
        await confirmSecondaryPayment();
      } else if (orderId) {
        if (checkWhichOrderConfirm === 'first') {
          await confirmOrderPrimaryPayment();
        } else {
          await confirmOrderSecondaryPayment();
        }

        setisModalOpen(false);
        toast.success('The payment was successful');
        toast.info('Refresh in 3 seconds');
      }
    } catch (e) {
      console.log(e);
    }
  }

  function refreshPage() {
    window.location = '/';
  }
  // Refresh in 3 seconds.

  const USD =
    'AY9oqdOPMAnfL6k_N43Vt276rBnBSDl_jShVlc7sG_7qAXbiYSqwjQVp7TTkPSUKV1fAv1GisOfBGtYW';
  const JPY =
    'AdbujqvPuQp-2og80fe1t5FCXT8X_KsmUsA_BlCZo9KWBAlZASUQtAH_YDexHi4Wa14xVZBCcVbCSN2U';

  const selectCurrency = country?.toUpperCase() === 'JP' ? JPY : USD;

  return (
    <PayPalButton
      amount={paypal}
      currency="USD"
      onSuccess={(details, data) => {
        confirmPayment();

        setTimeout(refreshPage, 3000);
      }}
      options={{
        clientId: selectCurrency,
      }}
    />
  );
};
