import React, { useState, useEffect } from 'react';
import CartItemsPresenter from './CartItemsPresenter';

import { ShopDetail, ShopEstimate } from './CartQueries';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';
import PaypalButtonForCart from '../../Components/PaypalButtonForCart';
import { toast } from 'react-toastify';
import Loader from '../../Components/Loader';
import {
  ButtonWrapper,
  PurchaseButton,
  EmptyContents,
  TotalWrapper,
  EmptyDiv,
} from './Component/Cart_StyledComponents';
import { ArrowDownward } from '../../Components/Icons';
import { injectIntl } from 'react-intl';
export default injectIntl(
  withRouter(
    ({
      match: {
        params: { username },
      },
      intl,
      selectCountry,
    }) => {
      const cartGoodsId = JSON.parse(localStorage.getItem('cartGoodsId')) || [];
      const [cartGoodsIdState, setCartGoodsIdState] = useState([
        ...cartGoodsId,
      ]);

      const cartTitle = JSON.parse(localStorage.getItem('cartTitle')) || [];
      const [cartTitleState, setCartTitleState] = useState([...cartTitle]);

      const cartBasePrice =
        JSON.parse(localStorage.getItem('cartBasePrice')) || [];
      const [cartBasePriceState, setCartBasePriceState] = useState([
        ...cartBasePrice,
      ]);
      const cartQuantityPerGoods =
        JSON.parse(localStorage.getItem('cartQuantityPerGoods')) || [];
      const [cartQuantityPerGoodsState, setCartQuantityPerGoods] = useState([
        ...cartQuantityPerGoods,
      ]);
      const cartColorImage =
        JSON.parse(localStorage.getItem('cartColorImage')) || [];
      const [cartColorImageState, setCartColorImage] = useState([
        ...cartColorImage,
      ]);
      const cartColor = JSON.parse(localStorage.getItem('cartColor')) || [];
      const [cartColorState, setCartColorState] = useState([...cartColor]);
      const cartSize = JSON.parse(localStorage.getItem('cartSize')) || [];
      const [cartSizeState, setCartSizeState] = useState([...cartSize]);
      const cartQuantity =
        JSON.parse(localStorage.getItem('cartQuantity')) || [];
      const [cartQuantityState, setCartQuantityState] = useState([
        ...cartQuantity,
      ]);
      const cartAddPrice =
        JSON.parse(localStorage.getItem('cartAddPrice')) || [];
      const [cartAddPriceState, setCartAddPriceState] = useState([
        ...cartAddPrice,
      ]);
      let realIndex = 0;
      let realIndexT = 0;
      const [realIndexState, setRealIndexState] = useState(realIndex);

      const removeItems = () => {
        localStorage.removeItem('cartColorImage');
        localStorage.removeItem('cartColor');
        localStorage.removeItem('cartTitle');
        localStorage.removeItem('cartBasePrice');
        localStorage.removeItem('cartGoodsId');
        localStorage.removeItem('cartSize');
        localStorage.removeItem('cartQuantity');
        localStorage.removeItem('cartAddPrice');
        localStorage.removeItem('cartQuantityPerGoods');
        setCartTitleState([]);
        setCartBasePriceState([]);
        setCartQuantityPerGoods([]);
        setCartColorImage([]);
        setCartColorState([]);
        setCartSizeState([]);
        setCartQuantityState([]);
        setCartAddPriceState([]);
        setCartGoodsIdState([]);
      };

      const [paypalPrice, setPaypalPrice] = useState([]);
      const [isSubmit, setIsSubmit] = useState(false);
      const [shopId, setShopId] = useState();
      const [exchangeRate, setExchangeRate] = useState();
      const [firstPaypal, setFirstPaypal] = useState();
      function refreshPage() {
        window.location = '/';
      }
      const [state, setState] = useState(true);
      let tempArea = [];
      let totalIndex = 0;
      cartGoodsIdState.map((m, index) => {
        totalIndex = totalIndex + Number(cartQuantityPerGoodsState[index]);

        const toalQuantity = cartQuantityState.slice(
          totalIndex - cartQuantityPerGoodsState[index],
          totalIndex
        );

        return tempArea.push(
          toalQuantity
            .map((CQ, TQindex) => {
              return (
                Number(CQ) *
                (Number(cartBasePriceState[index]) +
                  Number(
                    cartAddPriceState.slice(
                      totalIndex - cartQuantityPerGoodsState[index],
                      totalIndex
                    )[TQindex]
                  ))
              );
            })
            .reduce((acc, cur, i) => {
              return acc + cur;
            })
        );
      });

      const [total, setTotal] = useState([...tempArea]);

      const [createShopDetail] = useMutation(ShopDetail, {
        variables: {
          Shop: shopId,
          imageURL: JSON.stringify(cartColorImageState),
          title: JSON.stringify(cartTitleState),
          basePrice: JSON.stringify(cartBasePriceState),
          goodsId: JSON.stringify(cartGoodsIdState),
          firstOption: JSON.stringify(cartColorState),
          secondOption: JSON.stringify(cartSizeState),
          quantity: JSON.stringify(cartQuantityState),
          addPrice: JSON.stringify(cartAddPriceState),
          quantityPerGoods: JSON.stringify(cartQuantityPerGoodsState),
        },
      });
      const [createShopEstimate] = useMutation(ShopEstimate, {
        variables: {
          Shop: shopId,
          country: selectCountry,
          firstExchangeRate: exchangeRate || 0,
          firstPaypal: firstPaypal,
        },
      });

      useEffect(() => {
        if (shopId !== undefined) {
          async function submitTrigger() {
            try {
              const { data } = await createShopDetail();

              if (data?.createShopDetail === true) {
                toast.success('Thank you. Your order has been received');
                setState(true);
              } else {
                toast.error('try agin');
              }
              const createShopEstimateData = await createShopEstimate();

              if (createShopEstimateData?.data?.createShopEstimate === true) {
                refreshPage();
              }
            } catch (e) {
              console.log(e);
            }
            setShopId();
          }

          submitTrigger();
          removeItems();
        }

        return;
      }, [createShopDetail, createShopEstimate, isSubmit, shopId]);

      return (
        <>
          {state === false ? (
            <Loader />
          ) : cartGoodsIdState === null || cartGoodsIdState.length <= 0 ? (
            <EmptyContents>Cart is empty</EmptyContents>
          ) : (
            cartGoodsIdState.map((cartGoodsIdState, index) => {
              realIndex = realIndex + Number(cartQuantityPerGoodsState[index]);
              return (
                <CartItemsPresenter
                  key={index}
                  currentCartGoodsId={cartGoodsIdState}
                  setCartGoodsIdState={setCartGoodsIdState}
                  cartTitle={cartTitleState[index]}
                  setCartTitleState={setCartTitleState}
                  cartBasePrice={cartBasePriceState[index]}
                  setCartBasePriceState={setCartBasePriceState}
                  cartQuantityPerGoodsIndex={index}
                  length={cartQuantityPerGoodsState[index]}
                  setCartQuantityPerGoods={setCartQuantityPerGoods}
                  cartColorImage={cartColorImageState.slice(
                    realIndex - cartQuantityPerGoodsState[index],
                    realIndex
                  )}
                  setCartColorImage={setCartColorImage}
                  cartColor={cartColorState.slice(
                    realIndex - cartQuantityPerGoodsState[index],
                    realIndex
                  )}
                  setCartColorState={setCartColorState}
                  cartSize={cartSizeState.slice(
                    realIndex - cartQuantityPerGoodsState[index],
                    realIndex
                  )}
                  setCartSizeState={setCartSizeState}
                  cartQuantity={cartQuantityState.slice(
                    realIndex - cartQuantityPerGoodsState[index],
                    realIndex
                  )}
                  setCartQuantityState={setCartQuantityState}
                  cartAddPrice={cartAddPriceState.slice(
                    realIndex - cartQuantityPerGoodsState[index],
                    realIndex
                  )}
                  setCartAddPriceState={setCartAddPriceState}
                  startIndex={realIndex - cartQuantityPerGoods[index]}
                  endIndex={realIndex}
                  realIndexState={realIndexState}
                  setRealIndexState={setRealIndexState}
                  paypalPrice={paypalPrice}
                  setPaypalPrice={setPaypalPrice}
                  total={total}
                  TotalIndex={index}
                  setTotal={setTotal}
                />
              );
            })
          )}

          {cartGoodsIdState === null ||
          cartGoodsIdState.length <= 0 ||
          state === false ? (
            ''
          ) : (
            <EmptyDiv>
              <TotalWrapper>
                {`₩${total
                  .reduce((acc, cur, i) => {
                    return acc + cur;
                  })
                  .toLocaleString()}`}
                <ArrowDownward size={2} />
              </TotalWrapper>
              <ButtonWrapper>
                <PurchaseButton>
                  <PaypalButtonForCart
                    country={selectCountry}
                    setFirstPaypal={setFirstPaypal}
                    setExchangeRate={setExchangeRate}
                    setState={setState}
                    isSubmit={isSubmit}
                    setIsSubmit={setIsSubmit}
                    setShopId={setShopId}
                    username={username}
                    setCartTitleState={setCartTitleState}
                    setCartBasePriceState={setCartBasePriceState}
                    setCartQuantityPerGoods={setCartQuantityPerGoods}
                    setCartColorImage={setCartColorImage}
                    setCartColorState={setCartColorState}
                    setCartSizeState={setCartSizeState}
                    setCartQuantityState={setCartQuantityState}
                    setCartAddPriceState={setCartAddPriceState}
                    setCartGoodsIdState={setCartGoodsIdState}
                    paypal={
                      cartGoodsIdState === null || cartGoodsIdState.length <= 0
                        ? []
                        : cartGoodsIdState
                            .map((cartGoodsIdState, index) => {
                              realIndexT =
                                realIndexT +
                                Number(cartQuantityPerGoodsState[index]);

                              const cartBasePrice = cartBasePriceState[index];

                              const cartQuantity = cartQuantityState.slice(
                                realIndexT - cartQuantityPerGoodsState[index],
                                realIndexT
                              );

                              const cartAddPrice = cartAddPriceState.slice(
                                realIndexT - cartQuantityPerGoodsState[index],
                                realIndexT
                              );

                              const globalTotalPrice =
                                cartQuantity === 0 ||
                                cartQuantity === undefined ||
                                (cartQuantity === null) |
                                  (cartQuantity?.length <= 0)
                                  ? null
                                  : cartQuantity
                                      .map((cartQuantity, index) => {
                                        return (
                                          Number(cartQuantity) *
                                          (Number(cartBasePrice) +
                                            Number(cartAddPrice[index]))
                                        );
                                      })
                                      .reduce((acc, cur, i) => {
                                        return acc + cur;
                                      });

                              return globalTotalPrice === 0 ||
                                globalTotalPrice === undefined ||
                                globalTotalPrice === null ||
                                globalTotalPrice?.length === 0
                                ? []
                                : globalTotalPrice;
                            })
                            .reduce((acc, cur, i) => {
                              return acc + cur;
                            })
                    }
                  />
                </PurchaseButton>
              </ButtonWrapper>
            </EmptyDiv>
          )}
        </>
      );
    }
  )
);
