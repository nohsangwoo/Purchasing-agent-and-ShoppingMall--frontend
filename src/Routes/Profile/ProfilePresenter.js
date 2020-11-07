import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ModalMT from '../../Components/Modal';
import { toast } from 'react-toastify';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {
  Wrapper,
  BoxWrapper,
  RowBox,
  PaymentBoxWrapper,
  PaymentBoxText,
  DropDownStyled,
  DropDownTitleWrapper,
  DropDownListText,
  BoxEmptyWrapper,
  BoxBTNWrapper,
  BoxBTN,
  DateWrapper,
  ShippingNumber,
  BoxShopItems,
  BoxOrderItemWrapper,
  BoxShopItemWrapper,
  // OrderImageWrapper,
  // OrderImage,
  ShopImageWrapper,
  ShopImage,
  OrderTitle,
  ShopTitle,
  BoxState,
  BoxShopWrapper,
  ShopObjectContainer,
  ShopObjectPaypalPrice,
} from './Component/Profile_StyledComponents';

export default ({ loading, data, logOut }) => {
  const {
    seeUser: { username, addresses },
  } = data;

  const [isModalOpen, setisModalOpen] = useState(false);
  const [modalSelect, setmodalSelect] = useState('');
  const [title, setTitle] = useState('');
  const [firstExChangeRate, setFirstExChangeRate] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [selectCountry, setSelectCountry] = useState('JP');
  const [secondExChangeRate, setSecondExChangeRate] = useState(0);
  const [paypal, setPaypal] = useState(0);
  const [shopId, setShopId] = useState();
  const [shopEstimatesId, setShopEstimatesId] = useState();
  const [shopWeight, setShopWeight] = useState();
  const [paypalMount, setPaypalMount] = useState(0);
  const [orderWeight, setOrderWeight] = useState();
  const [orderSelectWeight, setOrderSelectWeight] = useState();
  const [orderSelectSecondPaypal, setOrderSelectSecondPaypal] = useState();
  const [orderId, setOrderId] = useState();
  const [orderEstimatesId, setOrderEstimatesId] = useState();
  const [selectEstimate, setSelectEstimate] = useState();
  const [selectSecondPaypal, setSelectSecondPaypal] = useState();
  const [state, setState] = useState('order');
  const selectMenu = ['order', 'shop'];

  const openModalFirstPaypal = (
    firstExchangeRateValue,
    productTotalPrice,
    firstPaypal,
    ConfirmPrimaryPayment,
    orderId,
    country
  ) => {
    if (firstPaypal === 0 || !firstPaypal) {
      toast.error('Please wait for the first estimate');
    } else if (ConfirmPrimaryPayment === true) {
      toast.info('The first payment has been completed');
      return;
    } else {
      setisModalOpen(true);
      setmodalSelect('first');
      setTitle('First Payment');
      setFirstExChangeRate(firstExchangeRateValue);
      setProductPrice(productTotalPrice);
      setPaypal(firstPaypal);
      setOrderId(orderId);
      setSelectCountry(country);
    }
  };

  const openModalSecondPaypal = (
    secondExchangeRateValue,
    country,
    secondPaypal,
    orderWeight,
    OrderSelectSecondPaypal,
    orderId,
    orderEstimatesId,
    ConfirmPrimaryPayment,
    ConfirmSecondaryPayment,
    firstPaypal
  ) => {
    if (!firstPaypal || firstPaypal === 0 || ConfirmPrimaryPayment === false) {
      toast.warning('Waiting for 1st payment');
    } else if (
      (!orderWeight ||
        orderWeight.length === 0 ||
        orderWeight === null ||
        orderWeight === [] ||
        orderWeight === '') &&
      ConfirmPrimaryPayment === true &&
      ConfirmSecondaryPayment === false
    ) {
      toast.info(
        "It's being shipped in Korea. Please wait for the second estimate"
      );
    } else if (
      (orderWeight !== 0 || orderWeight) &&
      ConfirmPrimaryPayment === true &&
      ConfirmSecondaryPayment === false
    ) {
      setisModalOpen(true);
      setmodalSelect('second');
      setTitle('Second Payment');
      setSecondExChangeRate(secondExchangeRateValue);
      setSelectCountry(country);
      setPaypal(secondPaypal);
      setOrderWeight(orderWeight);
      setOrderSelectWeight(orderWeight[0]);
      setOrderSelectSecondPaypal(OrderSelectSecondPaypal);
      setOrderId(orderId);
      setOrderEstimatesId(orderEstimatesId);
      toast('Please proceed with the payment');
    } else {
      toast.info('The Second payment has been completed');
      toast.success('Your product is being shipped home');
    }
    return;
  };

  const closeModal = () => {
    setisModalOpen(false);
    setPaypalMount(0);
    setShopId();
    setShopEstimatesId();
    setOrderId();
    setOrderEstimatesId();
    setSelectCountry();
  };

  const shopSecondPaypal = (
    secondExchangeRate,
    country,
    secondPaypal,
    ConfirmSecondaryPayment,
    shopId,
    ShopEstimatesId,
    shopWeight,
    selectSecondPaypal
  ) => {
    if (!shopWeight) {
      toast.info(
        "It's being shipped in Korea. Please wait for the second estimate"
      );
    } else if (shopWeight && ConfirmSecondaryPayment === false) {
      setisModalOpen(true);
      setmodalSelect('shopSecond');
      setTitle('Secondary Payment');
      setShopWeight(shopWeight);
      setSecondExChangeRate(secondExchangeRate);
      setSelectCountry(country);
      setPaypal(0);
      setShopId(shopId);
      setShopEstimatesId(ShopEstimatesId);
      setSelectEstimate(shopWeight[0]);
      setSelectSecondPaypal(selectSecondPaypal);
      toast('Please proceed with the payment');
    } else if (shopWeight && ConfirmSecondaryPayment) {
      toast.success('Your product is being shipped home');
    }
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Wrapper>
      <>
        <ModalMT
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          Title={title}
          firstExChangeRate={firstExChangeRate}
          InputPrice={productPrice}
          modalSelect={modalSelect}
          secondExChangeRate={secondExChangeRate}
          country={selectCountry}
          paypal={paypal}
          setPaypal={setPaypal}
          shopId={shopId}
          shopEstimatesId={shopEstimatesId}
          setisModalOpen={setisModalOpen}
          shopWeight={shopWeight}
          selectEstimate={selectEstimate}
          setSelectEstimate={setSelectEstimate}
          selectSecondPaypal={selectSecondPaypal}
          paypalMount={paypalMount}
          setPaypalMount={setPaypalMount}
          orderWeight={orderWeight}
          orderSelectWeight={orderSelectWeight}
          setOrderSelectWeight={setOrderSelectWeight}
          orderSelectSecondPaypal={orderSelectSecondPaypal}
          orderId={orderId}
          orderEstimatesId={orderEstimatesId}
          addresses={addresses}
        />
      </>
      <Helmet>
        <title>{username} - profile</title>
      </Helmet>
      <BoxEmptyWrapper>
        <BoxBTNWrapper>
          <BoxBTN onClick={logOut}>logOut</BoxBTN>
        </BoxBTNWrapper>
      </BoxEmptyWrapper>

      <DropDownStyled>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <DropDownTitleWrapper>
            <DropDownListText>{state}</DropDownListText>
            <ExpandMoreIcon />
          </DropDownTitleWrapper>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {selectMenu.map((itemList, index) => {
            return (
              <MenuItem
                key={index}
                onClick={() => {
                  handleClose();
                  return setState(itemList);
                }}
              >
                <DropDownListText>{itemList.toUpperCase()}</DropDownListText>
              </MenuItem>
            );
          })}
        </Menu>
      </DropDownStyled>

      {state === 'order' ? (
        <>
          {data?.seeOrderContents.map((OC, index) => {
            const productPriceArr = OC?.OrderContentDetails.map((m, i) => {
              return m.productPrice;
            });
            const sumPrice =
              productPriceArr === null ||
              productPriceArr === undefined ||
              productPriceArr?.length === 0
                ? []
                : productPriceArr.reduce((a, b) => a + b);
            const firstExchangeRateValue = OC?.Estimates[0]?.firstExchangeRate;
            const firstPaypal = OC?.Estimates[0]?.firstPaypal;
            const secondPaypal = OC?.Estimates[0]?.secondPaypal;
            const count = OC?.OrderContentDetailCount;
            const firstProductName = OC?.OrderContentDetails[0]?.productName;
            // const firstFileImageURL = OC?.OrderContentDetails[0]?.fileImageURL;
            const secondExchangeRateValue =
              OC?.Estimates[0]?.secondExchangeRate;
            const country = OC?.Estimates[0]?.country.toUpperCase();
            const orderId = OC?.id;
            const orderEstimatesId = OC?.Estimates[0]?.id;
            const orderWeight = OC?.Estimates[0]?.orderWeight
              ? JSON.parse(OC?.Estimates[0]?.orderWeight)
              : [];
            const OrderSelectSecondPaypal = OC?.Estimates[0]?.selectSecondPaypal
              ? JSON.parse(OC?.Estimates[0]?.selectSecondPaypal)
              : [];

            const shippingNumber = OC?.Estimates[0]?.shippingNumber;

            const ConfirmPrimaryPayment = OC?.ConfirmPrimaryPayment;
            const ConfirmSecondaryPayment = OC?.ConfirmSecondaryPayment;
            const date = OC.createdAt.replace(/-/g, '.').split('T');
            return (
              <BoxWrapper key={index}>
                <BoxOrderItemWrapper>
                  <OrderTitle>
                    {count === 1
                      ? firstProductName
                      : `${firstProductName} and ${count - 1} extras...`}
                  </OrderTitle>
                </BoxOrderItemWrapper>
                <RowBox>
                  <PaymentBoxWrapper
                    waiting={!firstPaypal || firstPaypal === 0}
                    completed={ConfirmPrimaryPayment}
                    onClick={() => {
                      openModalFirstPaypal(
                        firstExchangeRateValue,
                        sumPrice,
                        firstPaypal,
                        ConfirmPrimaryPayment,
                        orderId,
                        country
                      );
                      return;
                    }}
                  >
                    <PaymentBoxText>1st</PaymentBoxText>
                    <PaymentBoxText>
                      {`${
                        !firstPaypal || firstPaypal === 0
                          ? 'Waiting'
                          : ConfirmPrimaryPayment === true
                          ? `$${firstPaypal?.toLocaleString()}`
                          : `$${firstPaypal?.toLocaleString()}`
                      }`}
                    </PaymentBoxText>
                  </PaymentBoxWrapper>

                  <PaymentBoxWrapper
                    waiting={
                      !orderWeight ||
                      orderWeight === 0 ||
                      ConfirmPrimaryPayment === false
                    }
                    completed={ConfirmPrimaryPayment && ConfirmSecondaryPayment}
                    onClick={() => {
                      openModalSecondPaypal(
                        secondExchangeRateValue,
                        country,
                        secondPaypal,
                        orderWeight,
                        OrderSelectSecondPaypal,
                        orderId,
                        orderEstimatesId,
                        ConfirmPrimaryPayment,
                        ConfirmSecondaryPayment,
                        firstPaypal
                      );
                      return;
                    }}
                  >
                    <PaymentBoxText>2nd</PaymentBoxText>
                    <PaymentBoxText>{`${
                      !firstPaypal ||
                      firstPaypal === 0 ||
                      ConfirmPrimaryPayment === false
                        ? 'Waiting'
                        : (!orderWeight ||
                            orderWeight.length === 0 ||
                            orderWeight === null ||
                            orderWeight === [] ||
                            orderWeight === '') &&
                          ConfirmPrimaryPayment === true &&
                          ConfirmSecondaryPayment === false
                        ? 'Shipping in Korea'
                        : (orderWeight !== 0 || orderWeight) &&
                          ConfirmPrimaryPayment === true &&
                          ConfirmSecondaryPayment === false
                        ? `Paymenet`
                        : `$${Number(secondPaypal).toLocaleString()}`
                    }`}</PaymentBoxText>
                  </PaymentBoxWrapper>
                </RowBox>
                <DateWrapper>{date[0]}</DateWrapper>
                {shippingNumber && (
                  <CopyToClipboard text={shippingNumber}>
                    <ShippingNumber onClick={() => toast.success('Copied')}>
                      {shippingNumber}
                    </ShippingNumber>
                  </CopyToClipboard>
                )}
              </BoxWrapper>
            );
          })}
        </>
      ) : (
        <>
          {data?.seeShops.map((seeShops, index) => {
            const parseImage = JSON.parse(seeShops.ShopDetails[0].imageURL);
            const date = seeShops.createdAt.replace(/-/g, '.').split('T');
            const parseFirstOption = JSON.parse(
              seeShops.ShopDetails[0].firstOption
            );
            const parseSecondOption = JSON.parse(
              seeShops.ShopDetails[0].secondOption
            );
            const parseQuantity = JSON.parse(seeShops.ShopDetails[0].quantity);
            const parseAddPrice = JSON.parse(seeShops.ShopDetails[0].addPrice);
            const parseQuantityPerGoods = JSON.parse(
              seeShops.ShopDetails[0].quantityPerGoods
            );
            const ShopSelectedCountry = seeShops?.ShopEstimates[0]?.country;
            const ShopFirstEstimates = seeShops?.ShopEstimates[0]?.firstPaypal;
            const ShopSecondEstimates =
              seeShops?.ShopEstimates[0]?.secondPaypal;
            const parseTitle = JSON.parse(seeShops.ShopDetails[0].title);
            let reDesignTitle = [];
            for (let i = 0; i < parseQuantityPerGoods.length; i++) {
              for (let j = 0; j < parseQuantityPerGoods[i]; j++) {
                reDesignTitle.push(parseTitle[i]);
              }
            }
            const parseBasePrice = JSON.parse(
              seeShops.ShopDetails[0].basePrice
            );
            let reDesignPrice = [];
            for (let i = 0; i < parseQuantityPerGoods.length; i++) {
              for (let j = 0; j < parseQuantityPerGoods[i]; j++) {
                reDesignPrice.push(parseBasePrice[i]);
              }
            }
            const secondExchangeRate =
              seeShops?.ShopEstimates[0]?.secondExchangeRate;
            const country = seeShops?.ShopEstimates[0]?.country;
            const secondPaypal = seeShops?.ShopEstimates[0]?.secondPaypal;
            const ConfirmSecondaryPayment = seeShops?.ConfirmSecondaryPayment;
            const shopId = seeShops?.id;
            const ShopEstimatesId = seeShops?.ShopEstimates[0]?.id;
            const shopWeight = JSON.parse(
              seeShops?.ShopEstimates[0]?.shopWeight
            );
            const selectSecondPaypal = JSON.parse(
              seeShops?.ShopEstimates[0]?.selectSecondPaypal
            );

            const shippingNumber = seeShops?.ShopEstimates[0]?.shippingNumber;

            return (
              <BoxShopWrapper
                key={index}
                onClick={() => {
                  shopSecondPaypal(
                    secondExchangeRate,
                    country,
                    secondPaypal,
                    ConfirmSecondaryPayment,
                    shopId,
                    ShopEstimatesId,
                    shopWeight,
                    selectSecondPaypal
                  );

                  return;
                }}
                waiting={
                  !shopWeight ||
                  shopWeight === 0 ||
                  !ShopFirstEstimates ||
                  ShopFirstEstimates === 0
                }
                pending={
                  !ConfirmSecondaryPayment || ConfirmSecondaryPayment === 0
                }
              >
                <DateWrapper>{date[0]}</DateWrapper>
                {shippingNumber && (
                  <CopyToClipboard text={shippingNumber}>
                    <ShippingNumber onClick={() => toast.success('Copied')}>
                      {shippingNumber}
                    </ShippingNumber>
                  </CopyToClipboard>
                )}

                <BoxShopItems>
                  {parseImage.map((parseImage, index) => {
                    return (
                      <BoxShopItemWrapper key={index}>
                        <ShopImageWrapper>
                          <ShopImage src={parseImage}></ShopImage>
                        </ShopImageWrapper>
                        <ShopTitle>{`${reDesignTitle[index]} / ${(
                          parseAddPrice[index] + reDesignPrice[index]
                        ).toLocaleString()}(won) / ${
                          parseFirstOption[index]
                        }  / ${parseSecondOption[index]} / (QTY)${
                          parseQuantity[index]
                        } / total(${(
                          parseQuantity[index] *
                          (parseAddPrice[index] + reDesignPrice[index])
                        ).toLocaleString()})`}</ShopTitle>
                      </BoxShopItemWrapper>
                    );
                  })}
                </BoxShopItems>
                <BoxState>
                  <ShopObjectContainer>
                    <ShopObjectPaypalPrice>{`1st`}</ShopObjectPaypalPrice>
                    <ShopObjectPaypalPrice>
                      {`${
                        ShopSelectedCountry.toUpperCase() === 'JP' ? '¥' : '$'
                      }${
                        !ShopFirstEstimates || ShopFirstEstimates === 0
                          ? 'Waiting'
                          : Number(ShopFirstEstimates).toLocaleString()
                      }`}
                    </ShopObjectPaypalPrice>
                  </ShopObjectContainer>
                  <ShopObjectContainer>
                    <ShopObjectPaypalPrice>{`2nd`}</ShopObjectPaypalPrice>
                    <ShopObjectPaypalPrice>
                      {` ${
                        ShopSelectedCountry.toUpperCase() === 'JP' ? '¥' : '$'
                      } ${
                        !shopWeight || shopWeight === 0
                          ? 'Waiting'
                          : !ConfirmSecondaryPayment ||
                            ConfirmSecondaryPayment === 0
                          ? `Paymenet Pending..`
                          : Number(ShopSecondEstimates).toLocaleString()
                      }`}
                    </ShopObjectPaypalPrice>
                  </ShopObjectContainer>
                </BoxState>
              </BoxShopWrapper>
            );
          })}
        </>
      )}
    </Wrapper>
  );
};
