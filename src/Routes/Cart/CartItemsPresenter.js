import React from 'react';
import styled from 'styled-components';

import { toast } from 'react-toastify';

import {
  BoxWrapper,
  BoxTitle,
  BoxTableWrapper,
  TableRow,
  TableRowItem,
  BoxTotalPriceWrapper,
  BoxTitleTextWrapper,
  BoxTitleDelWrapper,
  DeleteAllButton,
} from './Component/Cart_StyledComponents';

const CartRowItemImage = styled.div`
  margin: 0 auto;
  background-size: cover;
  width: 30px;
  height: 30px;
  background-image: url(${(props) => props.url});
  border-radius: 0.2rem;
`;

const DeleteButton = styled.div`
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 20px;
  display: inline-block;
  font-size: 16px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid #393e41;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background-color: #393e41;
  }
`;

export default ({
  setCartGoodsIdState,
  cartTitle,
  setCartTitleState,
  cartBasePrice,
  setCartBasePriceState,
  cartQuantityPerGoodsIndex,
  length,
  setCartQuantityPerGoods,
  cartColorImage,
  setCartColorImage,
  cartColor,
  setCartColorState,
  cartSize,
  setCartSizeState,
  cartQuantity,
  setCartQuantityState,
  cartAddPrice,
  setCartAddPriceState,
  startIndex,
}) => {
  const deleteItemAll = (cartTitleV) => {
    try {
      let cartColorImage = JSON.parse(localStorage.getItem('cartColorImage'));
      cartColorImage.splice(startIndex, length);
      setCartColorImage([...cartColorImage]);
      localStorage.setItem('cartColorImage', JSON.stringify(cartColorImage));

      let cartColor = JSON.parse(localStorage.getItem('cartColor'));
      cartColor.splice(startIndex, length);
      setCartColorState([...cartColor]);
      localStorage.setItem('cartColor', JSON.stringify(cartColor));

      let cartSize = JSON.parse(localStorage.getItem('cartSize'));
      cartSize.splice(startIndex, length);
      setCartSizeState([...cartSize]);
      localStorage.setItem('cartSize', JSON.stringify(cartSize));

      let cartQuantity = JSON.parse(localStorage.getItem('cartQuantity'));
      cartQuantity.splice(startIndex, length);
      setCartQuantityState([...cartQuantity]);
      localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));

      let cartAddPrice = JSON.parse(localStorage.getItem('cartAddPrice'));
      cartAddPrice.splice(startIndex, length);
      setCartAddPriceState([...cartAddPrice]);
      localStorage.setItem('cartAddPrice', JSON.stringify(cartAddPrice));

      const cartGoodsId = JSON.parse(localStorage.getItem('cartGoodsId'));
      cartGoodsId.splice(cartQuantityPerGoodsIndex, 1);
      setCartGoodsIdState([...cartGoodsId]);
      localStorage.setItem('cartGoodsId', JSON.stringify(cartGoodsId));

      const cartTitle = JSON.parse(localStorage.getItem('cartTitle'));
      cartTitle.splice(cartQuantityPerGoodsIndex, 1);
      setCartTitleState([...cartTitle]);
      localStorage.setItem('cartTitle', JSON.stringify(cartTitle));

      const cartBasePrice = JSON.parse(localStorage.getItem('cartBasePrice'));
      cartBasePrice.splice(cartQuantityPerGoodsIndex, 1);
      setCartBasePriceState([...cartBasePrice]);
      localStorage.setItem('cartBasePrice', JSON.stringify(cartBasePrice));

      const cartQuantityPerGoods = JSON.parse(
        localStorage.getItem('cartQuantityPerGoods')
      );
      cartQuantityPerGoods.splice(cartQuantityPerGoodsIndex, 1);
      setCartQuantityPerGoods([...cartQuantityPerGoods]);
      localStorage.setItem(
        'cartQuantityPerGoods',
        JSON.stringify(cartQuantityPerGoods)
      );
      toast.success(cartTitleV, ' has been deleted');
    } catch (e) {
      toast.error("Can't delete, try again");
    }

    return;
  };

  const deleteItem = (itemIndex, cartTitleV) => {
    try {
      let cartColorImage = JSON.parse(localStorage.getItem('cartColorImage'));
      cartColorImage.splice(itemIndex, 1);
      setCartColorImage([...cartColorImage]);
      localStorage.setItem('cartColorImage', JSON.stringify(cartColorImage));

      let cartColor = JSON.parse(localStorage.getItem('cartColor'));
      cartColor.splice(itemIndex, 1);
      setCartColorState([...cartColor]);
      localStorage.setItem('cartColor', JSON.stringify(cartColor));

      let cartSize = JSON.parse(localStorage.getItem('cartSize'));
      cartSize.splice(itemIndex, 1);
      setCartSizeState([...cartSize]);
      localStorage.setItem('cartSize', JSON.stringify(cartSize));

      let cartQuantity = JSON.parse(localStorage.getItem('cartQuantity'));
      cartQuantity.splice(itemIndex, 1);
      setCartQuantityState([...cartQuantity]);
      localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));

      let cartAddPrice = JSON.parse(localStorage.getItem('cartAddPrice'));
      cartAddPrice.splice(itemIndex, 1);
      setCartAddPriceState([...cartAddPrice]);
      localStorage.setItem('cartAddPrice', JSON.stringify(cartAddPrice));

      const cartQuantityPerGoods = JSON.parse(
        localStorage.getItem('cartQuantityPerGoods')
      );

      length = length - 1;
      if (length <= 0) {
        const cartGoodsId = JSON.parse(localStorage.getItem('cartGoodsId'));
        cartGoodsId.splice(cartQuantityPerGoodsIndex, 1);
        setCartGoodsIdState([...cartGoodsId]);
        localStorage.setItem('cartGoodsId', JSON.stringify(cartGoodsId));

        const cartTitle = JSON.parse(localStorage.getItem('cartTitle'));
        cartTitle.splice(cartQuantityPerGoodsIndex, 1);
        setCartTitleState([...cartTitle]);
        localStorage.setItem('cartTitle', JSON.stringify(cartTitle));

        const cartBasePrice = JSON.parse(localStorage.getItem('cartBasePrice'));
        cartBasePrice.splice(cartQuantityPerGoodsIndex, 1);
        setCartBasePriceState([...cartBasePrice]);
        localStorage.setItem('cartBasePrice', JSON.stringify(cartBasePrice));

        cartQuantityPerGoods.splice(cartQuantityPerGoodsIndex, 1);
      } else {
        cartQuantityPerGoods.splice(cartQuantityPerGoodsIndex, 1, length);
      }

      cartQuantityPerGoodsIndex = cartQuantityPerGoodsIndex - 1;

      setCartQuantityPerGoods([...cartQuantityPerGoods]);
      localStorage.setItem(
        'cartQuantityPerGoods',
        JSON.stringify(cartQuantityPerGoods)
      );

      toast.success(`The item in ${cartTitleV} has been deleted`);
    } catch (e) {
      toast.error("Can't delete, try again");
    }

    return;
  };

  return (
    <BoxWrapper>
      <BoxTitle>
        <BoxTitleTextWrapper>{cartTitle}</BoxTitleTextWrapper>
      </BoxTitle>

      <BoxTableWrapper>
        {cartColorImage.map((cartColorImage, index) => {
          return (
            <TableRow key={index}>
              <TableRowItem flexIndex={1}>
                <CartRowItemImage url={cartColorImage}></CartRowItemImage>
              </TableRowItem>
              <TableRowItem flexIndex={8}>{`${cartColor[index]} / ${
                cartSize[index]
              } / ${cartQuantity[index]} / ₩${(
                cartQuantity[index] *
                (cartBasePrice + cartAddPrice[index])
              ).toLocaleString()}`}</TableRowItem>

              <TableRowItem flexIndex={1}>
                <DeleteButton
                  onClick={() => {
                    return deleteItem(startIndex + index, cartTitle);
                  }}
                >
                  DEL
                </DeleteButton>
              </TableRowItem>
            </TableRow>
          );
        })}
      </BoxTableWrapper>
      <BoxTotalPriceWrapper>
        {cartQuantity === 0 ||
        cartQuantity === undefined ||
        cartQuantity === null ||
        cartQuantity?.length === 0
          ? ''
          : `₩${cartQuantity
              .map((cartQuantity, index) => {
                return (
                  Number(cartQuantity) *
                  (Number(cartBasePrice) + Number(cartAddPrice[index]))
                );
              })
              .reduce((acc, cur, i) => {
                return acc + cur;
              })
              .toLocaleString()}`}
      </BoxTotalPriceWrapper>
      <BoxTitleDelWrapper>
        <DeleteAllButton
          onClick={() => {
            return deleteItemAll(cartTitle);
          }}
        >
          DEL ALL
        </DeleteAllButton>
      </BoxTitleDelWrapper>
    </BoxWrapper>
  );
};
