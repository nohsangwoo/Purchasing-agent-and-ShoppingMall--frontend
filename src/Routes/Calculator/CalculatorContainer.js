import React, { useState } from 'react';
import { Get_ExchangeRate } from './CalculatorQueries';
import { useQuery } from '@apollo/react-hooks';
import { withRouter, Link } from 'react-router-dom';
import useInput from '../../Hooks/useInput';
import Loader from '../../Components/Loader';
import CalculatorPriceResultTable from './CalculatorPriceResultTable';
import CalculatorShippingResultTable from './CalculatorShippingResultTable';
import { CountryName, Country } from '../Help/emsData.json';
import { Button, Menu, MenuItem } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import {
  Wrapper,
  BoxWrapper,
  DropDownStyled,
  DropDownTitleWrapper,
  DropDownListText,
  Title,
  ArountCountryName,
  ArountCountryNameInText,
  InputValue,
  InputValueField,
  InputValueText,
  InputValueLabel,
  BoxPriceTableWrapper,
  BoxWeightTableWrapper,
  AroundLinkStyled,
} from './Component/CalculatorContainer_StyledComponents';

export default injectIntl(
  withRouter((props) => {
    const { intl } = props;
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const [selectCountry, setSelectCountry] = useState('JP');
    const InputPrice = useInput('');
    const InputWeight = useInput('');

    const { data, loading } = useQuery(Get_ExchangeRate, {
      variables: { id: 'ckaje521ta7nx0992hd5hy1oe' },
    });

    if (loading === true) {
      return (
        <Wrapper>
          <Loader />
        </Wrapper>
      );
    } else if (!loading && data && data.getExchangeRate) {
      const {
        getExchangeRate: { JPexchangeRate, USDexchangeRate },
      } = data;

      return (
        <Wrapper>
          <Helmet>
            <title>ffss - Calculator</title>
          </Helmet>
          <BoxWrapper>
            <Title>{intl.messages.automatic_estimate}</Title>
            <title>{intl.messages.automatic_estimate}</title>
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

            <InputValue>
              <InputValueField>
                <InputValueLabel>
                  {intl.messages.CALC['Top']['labelPrice']}
                </InputValueLabel>
                <InputValueText type="text" placeholder="₩" {...InputPrice} />
              </InputValueField>

              <InputValueField>
                <InputValueLabel>
                  {intl.messages.CALC['Top']['labelWeight']}
                </InputValueLabel>
                <InputValueText type="text" placeholder="Kg" {...InputWeight} />
              </InputValueField>
            </InputValue>

            {InputPrice.value === '' ? (
              ''
            ) : (
              <BoxPriceTableWrapper>
                <CalculatorPriceResultTable
                  exchangeRate={
                    selectCountry === 'JP' ? JPexchangeRate : USDexchangeRate
                  }
                  InputPrice={InputPrice.value}
                  country={selectCountry}
                />
                <br />
                <AroundLinkStyled>
                  <Link to="/help">Info</Link>
                </AroundLinkStyled>
              </BoxPriceTableWrapper>
            )}

            {InputWeight.value === '' ? (
              ''
            ) : (
              <BoxWeightTableWrapper>
                <CalculatorShippingResultTable
                  exchangeRate={
                    selectCountry === 'JP' ? JPexchangeRate : USDexchangeRate
                  }
                  selectCountry={selectCountry}
                  InputWeight={InputWeight.value}
                  country={selectCountry}
                />
                <AroundLinkStyled>
                  <Link to="/help">Info</Link>
                </AroundLinkStyled>
              </BoxWeightTableWrapper>
            )}
          </BoxWrapper>
        </Wrapper>
      );
    }
    return null;
  })
);
