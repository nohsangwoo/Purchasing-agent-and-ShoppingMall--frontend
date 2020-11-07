import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import CartPresenter from './CartPresenter';
import { Helmet } from 'react-helmet';
import {
  Wrapper,
  BoxWrapper,
  Title,
  ArountCountryName,
  ArountCountryNameInText,
  DropDownStyled,
  DropDownTitleWrapper,
  DropDownListText,
} from './Component/Cart_StyledComponents';
import { CountryName, Country } from '../Help/emsData.json';
import { Button, Menu, MenuItem } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default withRouter(
  ({
    match: {
      params: { username },
    },
  }) => {
    const [selectCountry, setSelectCountry] = useState('JP');

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <Wrapper>
        <Helmet>
          <title>ffss - Cart</title>
        </Helmet>
        <BoxWrapper>
          <Title>Cart</Title>
          <ArountCountryName>
            {!Array.isArray(Country['EMS'][selectCountry]) ? (
              <ArountCountryNameInText>
                {Country['EMS'][selectCountry]}
              </ArountCountryNameInText>
            ) : (
              Country['EMS'][selectCountry].map((m, index) => (
                <ArountCountryNameInText key={index}>
                  {m} {' |'}{' '}
                </ArountCountryNameInText>
              ))
            )}
          </ArountCountryName>

          <DropDownStyled>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <DropDownTitleWrapper>
                <DropDownListText>
                  {selectCountry}
                  <ExpandMoreIcon />
                </DropDownListText>
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
        </BoxWrapper>
        <CartPresenter selectCountry={selectCountry} />
      </Wrapper>
    );
  }
);
