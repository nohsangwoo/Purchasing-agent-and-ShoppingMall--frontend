import React, { useState, useEffect } from 'react';
import { OrderContent, CREATE_ESTIMATE } from './OrderQueries';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';
import OrderPresenter from './OrderPresenter';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import { Button } from '@material-ui/core';
import { CountryName } from '../Help/emsData.json';
import { Menu, MenuItem } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Wrapper,
  BoxWrapper,
  CountryTitle,
  SubmitBTNWrapper,
  SubmitBTNText,
  DropDownStyled,
  DropDownListText,
  DropDownTitleWrapper,
  SelectService,
} from './Component/OrderContainer_StyledComponents';

export default withRouter(
  ({
    match: {
      params: { username },
    },
  }) => {
    const [option, setOption] = useState(['Online']);
    const [isSubmit, setIsSubmit] = useState(false);
    const [orderContentId, setOrderContentId] = useState('');
    const [state, setState] = useState(false);
    const [selectCountry, setSelectCountry] = useState('JP');
    const [anchorEl, setAnchorEl] = useState(null);
    const [check_Two, setCheck_Two] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const [nameInputValue, setNameInputValue] = useState([]);
    const [optionInputValue, setOptionInputValue] = useState([]);

    const [imageFileCheck, setImageFileCheck] = useState([]);

    const handleIsSubmit = (e) => {
      e.preventDefault();

      if (nameInputValue.includes(false)) {
        setIsSubmit(false);
        toast.error(`Fill in the "name" of the product`);
        return;
      } else {
        setIsSubmit(true);
      }

      if (optionInputValue.includes(false)) {
        setIsSubmit(false);
        toast.error(`Fill in the "option" of the product`);
        return;
      } else {
        setIsSubmit(true);
      }

      if (imageFileCheck.includes(false)) {
        setIsSubmit(false);
        toast.error('This is not an image. Please select an image.');
        return;
      } else {
        setIsSubmit(true);
        return;
      }
    };
    const [createOrderContent] = useMutation(OrderContent, {
      variables: {
        username: username,
        Stage: 1,
      },
    });

    const [createEstimate] = useMutation(CREATE_ESTIMATE, {
      variables: {
        OrderContentId: orderContentId,
        country: selectCountry,
      },
    });

    useEffect(() => {
      if (isSubmit === true) {
        toast.info('Please wait');
        async function anyNameFunction() {
          const { data } = await createOrderContent();
          setOrderContentId(data.createOrderContent.id);
          const check_Two_Temp = await createEstimate();
          setCheck_Two(check_Two_Temp?.data?.createEstimate);
          setIsSubmit(false);
        }
        anyNameFunction();
      }
      const setInputValue = () => {
        setNameInputValue([...option.map((m) => false)]);
        setOptionInputValue([...option.map((m) => false)]);
        setImageFileCheck([...option.map((m) => true)]);
      };
      return setInputValue();
    }, [createEstimate, createOrderContent, isSubmit, option]);

    return (
      <Wrapper>
        <Helmet>
          <title>ffss - Order</title>
        </Helmet>
        <BoxWrapper>
          <SelectService>
            <CountryTitle>Country</CountryTitle>
            <DropDownStyled>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <DropDownTitleWrapper>
                  <DropDownListText>{selectCountry}</DropDownListText>
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
                {CountryName['EMS'].map((CN, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      handleClose();
                      return setSelectCountry(CN);
                    }}
                  >
                    <DropDownListText>{CN}</DropDownListText>
                  </MenuItem>
                ))}
              </Menu>
            </DropDownStyled>
          </SelectService>
        </BoxWrapper>

        {option.map((m, index) => (
          <OrderPresenter
            key={index}
            index={index}
            option={option}
            setOption={setOption}
            isSubmit={isSubmit}
            setIsSubmit={setIsSubmit}
            orderContentId={orderContentId}
            setOrderContentId={setOrderContentId}
            state={state}
            setState={setState}
            nameInputValue={nameInputValue}
            setNameInputValue={setNameInputValue}
            optionInputValue={optionInputValue}
            setOptionInputValue={setOptionInputValue}
            imageFileCheck={imageFileCheck}
            setImageFileCheck={setImageFileCheck}
            selectCountry={selectCountry}
            check_Two={check_Two}
            setCheck_Two={setCheck_Two}
          />
        ))}
        <SubmitBTNWrapper>
          <SubmitBTNText onClick={handleIsSubmit}>Submit</SubmitBTNText>
        </SubmitBTNWrapper>
      </Wrapper>
    );
  }
);
