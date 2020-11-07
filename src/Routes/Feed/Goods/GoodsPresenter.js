import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { injectIntl } from 'react-intl';

import FatText from '../../../Components/FatText';
import Avatar from '../../../Components/Avatar';
import {
  HeartFull,
  HeartEmpty,
  ArrowLeft,
  ArrowRight,
  ArrowDropDown,
  ArrowDropUp,
} from '../../../Components/Icons';
import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import TagCover from '../../../Components/TagCover';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DeleteIcon from '@material-ui/icons/Delete';
import { toast } from 'react-toastify';
import {
  Header,
  UserColumn,
  UserColumnItem,
  ArrowUpWrapper,
  ArrowUp,
  FilesTWrapper,
  FilesWrapper,
  Files,
  CarouselControlBox,
  ButtonIcon,
  CarouselCountBox,
  Meta,
  Buttons,
  BoxTitle,
  BoxDetailsWrapper,
  DetailsDESC,
  InfoWrapper,
  InfoDESC,
  SelectOptionBox,
  BoxPrice,
  SelectOptionBoxItemWrapper,
  SelectOptionBoxItem,
  FirstOption,
  FirstOPTIMG,
  Addprice,
  SecondOPTIMG,
  CheckSelectedOPT,
  ShowOptionSelectWrapper,
  ShowOptionRow,
  ShowOptionItem,
  CountNumWrapper,
  WrapCoutBTN,
  CountButtons,
  EmptyCountDiv,
  SizeBTNWrapper,
  SizeBTNText,
  WrapDELdBTN,
  DELdBTN,
  SeeTotal,
  SeeTotalItem,
  TotalStyled,
  ShopContents,
  Timestamp,
  TagWrapper,
  CollapseBox,
  ShopSummaryContents,
  SummaryTitle,
  SummaryFilesWrapper,
  SummaryFiles,
  ArrowDownWrapper,
  ArrowDown,
} from '../Components/StyledComponents';
import File from '../Components/file';

import SummaryFile from '../Components/SummaryFile';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default injectIntl(
  withRouter((props) => {
    const {
      id,
      files,
      title,
      tags,
      searchTags,
      searchTagsJP,
      searchTagsEng,
      Description,
      isLiked,
      likeCount,
      createdAt,
      currentItem,
      setCurrentItem,
      toggleLike,
      admin,
      price,
      color,
      size,
      productInfo,
      sizeInfo,
      setState,
      colorAddPrice,
      sizeAddPrice,
      intl,
    } = props;
    const { username, avatar } = admin;
    const confirmLang = intl.messages.lang;
    const searchTagsSplit = searchTags?.split(',') || [];
    const searchTagsJPSplit = searchTagsJP?.split(',') || [];
    const searchTagsEngSplit = searchTagsEng?.split(',') || [];
    const sizeSplit = size.split(',');
    const colorAddPriceSplit = colorAddPrice.split(',');
    const sizeAddPriceSplit = sizeAddPrice.split(',');
    const DescriptionSplit = Description.split(':n');
    const productInfoSplit = productInfo.split(':n');
    const sizeInfoSplit = sizeInfo.split(':n');
    const [count, setCount] = useState([]);
    const [selectState, setSelectState] = useState(false);
    const [colorKind, setColorKind] = useState(null);
    const [colorKindArr, setColorKindArr] = useState([]);
    const [sizeKindArr, setSizeKindArr] = useState([]);
    const [totalPrice, setTotalPrice] = useState([]);
    const [selectImageFiles, setSelectImageFiles] = useState(null);
    const [imageFiles, setImageFiles] = useState([]);
    const [addColorPrice, setAddColorPrice] = useState(0);
    const [addPrice, setAddPrice] = useState([]);
    const [collapseState, setCollapseState] = useState(false);

    const date = createdAt.split('T');
    const onClickCreateCart = async () => {
      try {
        if (
          colorKindArr.length === 0 ||
          colorKindArr === null ||
          colorKindArr === undefined
        ) {
          toast.error('Please select an option');
          return;
        }

        let cartGoodsId = localStorage.getItem('cartGoodsId');
        if (cartGoodsId === null || cartGoodsId === undefined) {
          cartGoodsId = [id];
          localStorage.setItem('cartGoodsId', JSON.stringify(cartGoodsId));
        } else {
          cartGoodsId = [...JSON.parse(cartGoodsId), id];
          localStorage.setItem('cartGoodsId', JSON.stringify(cartGoodsId));
        }

        let cartTitle = localStorage.getItem('cartTitle');
        if (cartTitle === null || cartTitle === undefined) {
          cartTitle = [title];
          localStorage.setItem('cartTitle', JSON.stringify(cartTitle));
        } else {
          cartTitle = [...JSON.parse(cartTitle), title];
          localStorage.setItem('cartTitle', JSON.stringify(cartTitle));
        }

        let cartBasePrice = localStorage.getItem('cartBasePrice');
        if (cartBasePrice === null || cartBasePrice === undefined) {
          cartBasePrice = [price];
          localStorage.setItem('cartBasePrice', JSON.stringify(cartBasePrice));
        } else {
          cartBasePrice = [...JSON.parse(cartBasePrice), price];
          localStorage.setItem('cartBasePrice', JSON.stringify(cartBasePrice));
        }

        let cartQuantityPerGoods = localStorage.getItem('cartQuantityPerGoods');
        if (
          cartQuantityPerGoods === null ||
          cartQuantityPerGoods === undefined
        ) {
          cartQuantityPerGoods = [colorKindArr.length];
          localStorage.setItem(
            'cartQuantityPerGoods',
            JSON.stringify(cartQuantityPerGoods)
          );
        } else {
          cartQuantityPerGoods = [
            ...JSON.parse(cartQuantityPerGoods),
            colorKindArr.length,
          ];
          localStorage.setItem(
            'cartQuantityPerGoods',
            JSON.stringify(cartQuantityPerGoods)
          );
        }

        let cartColorImage = localStorage.getItem('cartColorImage');
        if (cartColorImage === null || cartColorImage === undefined) {
          cartColorImage = [...imageFiles];
          localStorage.setItem(
            'cartColorImage',
            JSON.stringify(cartColorImage)
          );
        } else {
          cartColorImage = [...JSON.parse(cartColorImage), ...imageFiles];
          localStorage.setItem(
            'cartColorImage',
            JSON.stringify(cartColorImage)
          );
        }

        let cartColor = localStorage.getItem('cartColor');
        if (cartColor === null || cartColor === undefined) {
          cartColor = [...colorKindArr];
          localStorage.setItem('cartColor', JSON.stringify(cartColor));
        } else {
          cartColor = [...JSON.parse(cartColor), ...colorKindArr];
          localStorage.setItem('cartColor', JSON.stringify(cartColor));
        }

        let cartSize = localStorage.getItem('cartSize');
        if (cartSize === null || cartSize === undefined) {
          cartSize = [...sizeKindArr];
          localStorage.setItem('cartSize', JSON.stringify(cartSize));
        } else {
          cartSize = [...JSON.parse(cartSize), ...sizeKindArr];
          localStorage.setItem('cartSize', JSON.stringify(cartSize));
        }

        let cartQuantity = localStorage.getItem('cartQuantity');
        if (cartQuantity === null || cartQuantity === undefined) {
          cartQuantity = [...count];
          localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));
        } else {
          cartQuantity = [...JSON.parse(cartQuantity), ...count];
          localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));
        }

        let cartAddPrice = localStorage.getItem('cartAddPrice');
        if (cartAddPrice === null || cartAddPrice === undefined) {
          cartAddPrice = [...addPrice];
          localStorage.setItem('cartAddPrice', JSON.stringify(cartAddPrice));
        } else {
          cartAddPrice = [...JSON.parse(cartAddPrice), ...addPrice];
          localStorage.setItem('cartAddPrice', JSON.stringify(cartAddPrice));
        }

        toast.success(`added to your shopping cart`);
        setCount([]);
        setColorKindArr([]);
        setSizeKindArr([]);
        setTotalPrice([]);
        setAddPrice([]);
        setImageFiles([]);
      } catch (e) {
        console.log(e);
      }
    };

    const handleCount = (controlWord, index) => {
      if (controlWord === 'up') {
        count.splice(index, 1, count[index] + 1);

        totalPrice.splice(index, 1, (price + addPrice[index]) * count[index]);
        setCount([...count]);
        return null;
      } else if (controlWord === 'down') {
        if (count[index] <= 1) {
          return handleDelete(index);
        }
        count.splice(index, 1, count[index] - 1);
        setCount([...count]);
        totalPrice.splice(index, 1, (price + addPrice[index]) * count[index]);
        return null;
      }
      return;
    };

    const handleDelete = (index) => {
      count.splice(index, 1);
      colorKindArr.splice(index, 1);
      sizeKindArr.splice(index, 1);
      totalPrice.splice(index, 1);
      addPrice.splice(index, 1);
      imageFiles.splice(index, 1);
      return setCount([...count]);
    };

    const FNsetCurrentItem = (controlWord) => {
      if (controlWord === 'next') {
        if (currentItem >= files.length - 1) {
          return setCurrentItem(0);
        }
        return setCurrentItem(currentItem + 1);
      }

      if (controlWord === 'prev') {
        if (currentItem <= 0) {
          return setCurrentItem(files.length - 1);
        }
        return setCurrentItem(currentItem - 1);
      }
    };

    const handleColor = (addColor, colorAddPriceSplit, filesI) => {
      setSelectState(true);
      setColorKind(addColor);
      setAddColorPrice(colorAddPriceSplit);

      return setSelectImageFiles(filesI);
    };

    const handleSize = (addSize, sizeAddPriceSplit) => {
      if (selectState === false) {
        toast.error(`Please choose the first Option`);
        return null;
      } else {
        setCount([...count, 1]);

        setColorKindArr([...colorKindArr, colorKind]);
        setSizeKindArr([...sizeKindArr, addSize]);
        setAddPrice([
          ...addPrice,
          Number(addColorPrice) + Number(sizeAddPriceSplit),
        ]);

        setImageFiles([...imageFiles, selectImageFiles]);

        setTotalPrice([
          ...totalPrice,
          price + Number(addColorPrice) + Number(sizeAddPriceSplit),
        ]);
        restSelectColorAndSizeState();
      }

      return null;
    };

    const restSelectColorAndSizeState = () => {
      setSelectState(false);
      setColorKind(null);
      setSelectImageFiles(null);
      return null;
    };

    return (
      <CollapseBox collapseState={collapseState}>
        <ShopSummaryContents
          onClick={() => {
            collapseState ? setCollapseState(false) : setCollapseState(true);
            return;
          }}
          collapseState={collapseState}
        >
          <SummaryFilesWrapper>
            <SummaryFiles onDoubleClick={toggleLike}>
              {files &&
                files.map((file, index) => (
                  <SummaryFile
                    key={file.id}
                    index={index}
                    src={file.url}
                    showing={index === currentItem}
                  />
                ))}
            </SummaryFiles>
          </SummaryFilesWrapper>
          <SummaryTitle>{`${title}`}</SummaryTitle>
          <ArrowDownWrapper>
            <ArrowDown>
              <ArrowDropDown size={4} />
            </ArrowDown>
          </ArrowDownWrapper>
        </ShopSummaryContents>

        <ShopContents collapseState={collapseState}>
          <Header>
            <UserColumn>
              <UserColumnItem>
                <Avatar size="sm" url={avatar} />
              </UserColumnItem>
              <UserColumnItem>
                <FatText text={username} />
              </UserColumnItem>
              <ArrowUpWrapper>
                <ArrowUp
                  onClick={() => {
                    collapseState
                      ? setCollapseState(false)
                      : setCollapseState(true);
                    return;
                  }}
                >
                  <ArrowDropUp size={4} />
                </ArrowUp>
              </ArrowUpWrapper>
            </UserColumn>
            <TagWrapper>
              {tags ? (
                <TagCover
                  searchTagNeme={tags?.tagName}
                  tag={
                    confirmLang === 'jp' ? tags?.tagNameJp : tags?.tagNameEng
                  }
                ></TagCover>
              ) : (
                ''
              )}
              {searchTagsSplit.map((tag, index) => {
                return (
                  <TagCover
                    key={index}
                    searchTagNeme={tag}
                    tag={
                      confirmLang === 'jp'
                        ? `${searchTagsJPSplit[index]}`
                        : `${searchTagsEngSplit[index]}`
                    }
                  ></TagCover>
                );
              })}
            </TagWrapper>
          </Header>
          <FilesTWrapper>
            <FilesWrapper>
              <Files onDoubleClick={toggleLike}>
                {files &&
                  files.map((file, index) => (
                    <File
                      key={file.id}
                      index={index}
                      src={file.url}
                      showing={index === currentItem}
                    />
                  ))}
              </Files>
            </FilesWrapper>
          </FilesTWrapper>
          <CarouselControlBox>
            <ButtonIcon
              onClick={(e) => {
                setState(false);
                return FNsetCurrentItem('prev', e);
              }}
            >
              <ArrowLeft size={2} />
            </ButtonIcon>
            <CarouselCountBox>{`${currentItem + 1} / ${
              files.length
            }`}</CarouselCountBox>
            <ButtonIcon
              onClick={(e) => {
                setState(false);
                return FNsetCurrentItem('next', e);
              }}
            >
              <ArrowRight size={2} />
            </ButtonIcon>
          </CarouselControlBox>
          <Meta>
            <Buttons>
              <ButtonIcon onClick={toggleLike}>
                {isLiked ? <HeartFull /> : <HeartEmpty />}
              </ButtonIcon>
              <FatText
                text={likeCount === 1 ? '1 like' : `${likeCount} likes`}
              />
            </Buttons>

            <BoxTitle>{title}</BoxTitle>
            <BoxDetailsWrapper>
              <InfoWrapper>
                <DetailsDESC>
                  {DescriptionSplit.map((m, i) => {
                    return <span key={i}>{m}</span>;
                  })}
                </DetailsDESC>

                <InfoDESC>
                  {productInfoSplit.map((m, i) => {
                    return <span key={i}>{m}</span>;
                  })}
                </InfoDESC>
                <InfoDESC>
                  {sizeInfoSplit.map((m, i) => {
                    return <span key={i}>{m}</span>;
                  })}
                </InfoDESC>
              </InfoWrapper>

              <SelectOptionBox>
                <BoxPrice>{`₩${price.toLocaleString()}`}</BoxPrice>

                <SelectOptionBoxItemWrapper>
                  <SelectOptionBoxItem>
                    {color.map((m, index) => {
                      return (
                        <FirstOption key={m.id}>
                          <FirstOPTIMG
                            src={m.url}
                            alt="logo"
                            onClick={() => {
                              return handleColor(
                                m.color,
                                colorAddPriceSplit[index],
                                m.url
                              );
                            }}
                          />
                          <Addprice>
                            {colorAddPriceSplit[index] === undefined ||
                            colorAddPriceSplit[index] === '' ||
                            colorAddPriceSplit[index] === '0'
                              ? ''
                              : `+ ₩ ${colorAddPriceSplit[index]}`}
                          </Addprice>
                        </FirstOption>
                      );
                    })}
                  </SelectOptionBoxItem>
                </SelectOptionBoxItemWrapper>

                <SelectOptionBoxItemWrapper>
                  <SelectOptionBoxItem>
                    {sizeSplit.map((m, i) => {
                      return (
                        <SecondOPTIMG key={i}>
                          <SizeBTNWrapper
                            onClick={() => {
                              return handleSize(m, sizeAddPriceSplit[i]);
                            }}
                          >
                            <SizeBTNText>{`${m}`}</SizeBTNText>
                          </SizeBTNWrapper>
                          <Addprice>
                            {sizeAddPriceSplit[i] === undefined ||
                            sizeAddPriceSplit[i] === '' ||
                            sizeAddPriceSplit[i] === '0'
                              ? ''
                              : `+ ₩ ${sizeAddPriceSplit[i]}`}
                          </Addprice>
                        </SecondOPTIMG>
                      );
                    })}
                  </SelectOptionBoxItem>
                </SelectOptionBoxItemWrapper>
              </SelectOptionBox>

              <CheckSelectedOPT check={colorKind}>
                {colorKind === null
                  ? 'Please select the first option'
                  : `${colorKind}`}
              </CheckSelectedOPT>

              {colorKindArr.map((shopcolor, i) => {
                return (
                  <ShowOptionSelectWrapper key={i}>
                    <ShowOptionRow>
                      <ShowOptionItem>
                        <CountNumWrapper>{`${shopcolor} / ${sizeKindArr[i]} + ₩${addPrice[i]} / ${count[i]}`}</CountNumWrapper>
                      </ShowOptionItem>
                      <ShowOptionItem>
                        <WrapCoutBTN>
                          <CountButtons
                            onClick={() => {
                              handleCount('up', i);
                              return;
                            }}
                          >
                            <ArrowDropUpIcon fontSize="small" />
                          </CountButtons>
                          <EmptyCountDiv></EmptyCountDiv>
                          <CountButtons
                            onClick={() => {
                              handleCount('down', i);
                              return;
                            }}
                          >
                            <ArrowDropDownIcon fontSize="small" />
                          </CountButtons>
                        </WrapCoutBTN>
                      </ShowOptionItem>

                      <WrapDELdBTN>
                        <DELdBTN
                          onClick={() => {
                            return handleDelete(i);
                          }}
                        >
                          <DeleteIcon fontSize="small" />
                        </DELdBTN>
                      </WrapDELdBTN>
                    </ShowOptionRow>
                    <ShowOptionRow>
                      <SelectOptionBoxItem>
                        {`₩${totalPrice[i].toLocaleString()}`}
                      </SelectOptionBoxItem>
                    </ShowOptionRow>
                  </ShowOptionSelectWrapper>
                );
              })}

              {colorKindArr.length !== 0 ? (
                <>
                  <TotalStyled>
                    TOTAL :{` `}
                    {totalPrice.length === 0
                      ? '0'
                      : `₩${totalPrice
                          .reduce((acc, cur, i) => {
                            return acc + cur;
                          })
                          .toLocaleString()}`}
                  </TotalStyled>
                  <SeeTotal>
                    <SeeTotalItem onClick={onClickCreateCart}>
                      add to Cart
                    </SeeTotalItem>
                  </SeeTotal>
                </>
              ) : (
                ''
              )}

              <Timestamp>{date[0]}</Timestamp>
            </BoxDetailsWrapper>
          </Meta>
        </ShopContents>
      </CollapseBox>
    );
  })
);
