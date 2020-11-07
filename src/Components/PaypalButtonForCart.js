import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { Shop } from '../Routes/Cart/CartQueries';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

const Get_ExchangeRate = gql`
  query getExchangeRate($id: String!) {
    getExchangeRate(id: $id) {
      exchangeRate
      JPexchangeRate
      USDexchangeRate
    }
  }
`;

const PaypalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #ecf0f1;
  border-radius: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const TotalWrapper = styled.div`
  display: flex;
  font-size: 1.5rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  padding-bottom: 2rem;
  color: black;
`;

export default ({
  country,
  setState,
  setShopId,
  username,
  paypal,
  setExchangeRate,
  setFirstPaypal,
}) => {
  const [createShop] = useMutation(Shop, {
    variables: {
      username: username,
      Stage: 1,
    },
  });

  async function submitTrigger() {
    const { data } = await createShop();
    setShopId(data.createShop.id);
    // createShopDetail mutatinon 트리거
  }

  const exchangeRateID = 'ckaje521ta7nx0992hd5hy1oe';

  // JAPAN 코드
  const { data, loading } = useQuery(Get_ExchangeRate, {
    variables: { id: exchangeRateID },
  });

  const SelectExChangeRate =
    country.toUpperCase() === 'JP'
      ? data?.getExchangeRate?.JPexchangeRate
      : data?.getExchangeRate?.USDexchangeRate;

  const calcultateExChangeRate = (SelectExChangeRate) => {
    return 100 / SelectExChangeRate;
  };

  const calculator = Number(
    Math.ceil(paypal * calcultateExChangeRate(SelectExChangeRate))
  );

  const calcUSD = Number(
    Math.ceil(
      paypal * calcultateExChangeRate(data?.getExchangeRate?.USDexchangeRate)
    )
  );

  // const USD =
  //   'AY9oqdOPMAnfL6k_N43Vt276rBnBSDl_jShVlc7sG_7qAXbiYSqwjQVp7TTkPSUKV1fAv1GisOfBGtYW';
  // const JPY =
  //   'AdbujqvPuQp-2og80fe1t5FCXT8X_KsmUsA_BlCZo9KWBAlZASUQtAH_YDexHi4Wa14xVZBCcVbCSN2U';

  // live
  // const clientID =
  //   'AayhgpRMGDwzK55fEs3uJAXVrAAqzwNAopp3VDg0NVP0b3Uz1ymsSt-HFyAmiSKVjj1mZr9CQUMab85E';

  const clientID =
    'AY9oqdOPMAnfL6k_N43Vt276rBnBSDl_jShVlc7sG_7qAXbiYSqwjQVp7TTkPSUKV1fAv1GisOfBGtYW';
  return (
    <PaypalWrapper>
      {!loading && (
        <TotalWrapper>
          {`${calculator.toLocaleString()} ${
            country?.toUpperCase() === 'JP' ? 'JPY' : 'USD'
          } `}
        </TotalWrapper>
      )}

      {!loading && data && data.getExchangeRate ? (
        <PayPalButton
          // 금액
          amount={calcUSD}
          // amount={10.0}
          // 통화

          currency_code="EUR"
          // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
          onSuccess={(details, data) => {
            // alert('Transaction completed by ' + details.payer.name.given_name);

            // loading표시를 위한 처리
            setState(false);

            // createShop mutation 실행
            submitTrigger();
            setExchangeRate(SelectExChangeRate);
            setFirstPaypal(calculator);

            // OPTIONAL: Call your server to save the transaction
            // return fetch('/paypal-transaction-complete', {
            //   method: 'post',
            //   body: JSON.stringify({
            //     orderId: data.orderID,
            //   }),
            // });

            return;
          }}
          options={{
            // mode: 'sandbox', //sandbox or live
            clientId: clientID,
          }}
        />
      ) : (
        'loading'
      )}
    </PaypalWrapper>
  );
};
