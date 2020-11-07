import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import 'rbx/index.css';
import { Dropdown, Button, Icon } from 'rbx';
import { kg, price } from '../Help/emsData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { injectIntl } from 'react-intl';

import {
  TableStyled,
  StrongStyled,
  TableRow,
  TableRowItem,
  ShippingTableTitle,
  DropDownStyled,
} from './Component/CalculatorContainer_StyledComponents';

export default injectIntl(
  withRouter((props) => {
    const {
      exchangeRate: WON,
      selectCountry,
      InputWeight,
      setPaypal,
      intl,
    } = props;
    const [parcelShipCountry, setParcelShipCountry] = useState('AreaOne');
    const [selectES, setSelectES] = useState('BANGLADESH');

    const changPaypalEMS = (GetEMSPricePrice) => {
      setPaypal(GetEMSPricePrice || 0);
      return;
    };

    const changPaypalFlight = (GetParcelFlightPricePrice) => {
      setPaypal(GetParcelFlightPricePrice || 0);
      return;
    };

    const changPaypalShip = (GetParcelShipPricePrice) => {
      setPaypal(GetParcelShipPricePrice || 0);
      return;
    };

    const getExchangeRate = () => {
      const YEN = 100;
      const Calculate = YEN / WON;
      return Calculate;
    };

    const EMSPricePrice = function (
      selectCountry,
      InputWeight,
      getExchangeRate
    ) {
      const index = kg['EMS'].findIndex((element) => element > InputWeight);
      const get = price['EMS'][selectCountry][index];

      const PaypalCommission = (total, getExchangeRate) => {
        let ExchangeRateApplication = total * getExchangeRate;
        return (
          ExchangeRateApplication + (ExchangeRateApplication * 0.044 + 40 + 200)
        );
      };

      return get === undefined
        ? 'It can be shipped within 30kg'
        : Math.ceil(PaypalCommission(get, getExchangeRate));
    };

    const GetEMSPricePrice = EMSPricePrice(
      selectCountry,
      InputWeight,
      getExchangeRate()
    );

    const ParcelFlightPricePrice = function (
      selectCountry,
      InputWeight,
      getExchangeRate
    ) {
      const index = kg['Parcel(Flight)'].findIndex(
        (element) => element > InputWeight
      );
      const get = price['Parcel(Flight)'][selectCountry][index];

      const PaypalCommission = (total, getExchangeRate) => {
        let ExchangeRateApplication = total * getExchangeRate;
        return (
          ExchangeRateApplication + (ExchangeRateApplication * 0.044 + 40 + 200)
        );
      };

      return get === undefined
        ? 'It can be shipped within 20kg'
        : Math.ceil(PaypalCommission(get, getExchangeRate));
    };
    const GetParcelFlightPricePrice = ParcelFlightPricePrice(
      selectCountry,
      InputWeight,
      getExchangeRate()
    );

    const ParcelShipPricePrice = function (
      selectCountry,
      InputWeight,
      getExchangeRate
    ) {
      const ConvertCountryName =
        selectCountry === 'CN'
          ? 'AreaOne'
          : selectCountry === 'HK'
          ? 'AreaOne'
          : selectCountry === 'JP'
          ? 'AreaOne'
          : selectCountry === 'TW'
          ? 'AreaOne'
          : selectCountry === 'ID'
          ? 'AreaTwo'
          : selectCountry === 'MY'
          ? 'AreaTwo'
          : selectCountry === 'PH'
          ? 'AreaTwo'
          : selectCountry === 'SG'
          ? 'AreaTwo'
          : selectCountry === 'TH'
          ? 'AreaTwo'
          : selectCountry === 'VN'
          ? 'AreaTwo'
          : selectCountry === 'AU'
          ? 'AreaThree'
          : selectCountry === 'CA'
          ? 'AreaThree'
          : selectCountry === 'FR'
          ? 'AreaThree'
          : selectCountry === 'DE'
          ? 'AreaThree'
          : selectCountry === 'RU'
          ? 'AreaThree'
          : selectCountry === 'ES'
          ? 'AreaThree'
          : selectCountry === 'US'
          ? 'AreaThree'
          : selectCountry === 'GB'
          ? 'AreaThree'
          : selectCountry === 'BR'
          ? 'AreaFour'
          : false;

      const getTrue = (
        InputWeight,
        innerConvertCountryName,
        getExchangeRate
      ) => {
        const index = kg['Parcel(Ship)'].findIndex(
          (element) => element > InputWeight
        );
        const get = price['Parcel(Ship)'][innerConvertCountryName][index];

        const PaypalCommission = (total, getExchangeRates) => {
          const ExchangeRateApplication = total * getExchangeRates;
          return (
            ExchangeRateApplication + ExchangeRateApplication * 0.044 + 40 + 150
          );
        };

        return Math.ceil(PaypalCommission(get, getExchangeRate));
      };

      const getFalse = (InputWeight) => {
        const selectShipButton = () => {
          return (
            <DropDownStyled>
              <Dropdown>
                <Dropdown.Trigger>
                  <Button>
                    <span>{selectES}</span>
                    <Icon size="small"></Icon>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </Button>
                </Dropdown.Trigger>
                <Dropdown.Menu>
                  <Dropdown.Content>
                    {[
                      'BANGLADESH',
                      'FINLAND',
                      'IRELAND',
                      'NETHERLANDS',
                      'NORWAY',
                      'POLAND',
                      'SWEDEN',
                      'INDIA',
                      'REPUBIC OF SOUTH AFRICAN',
                    ].map((e, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => {
                          setSelectES(e);
                          return e === 'BANGLADESH'
                            ? setParcelShipCountry('AreaTwo')
                            : e === 'FINLAND'
                            ? setParcelShipCountry('AreaThree')
                            : e === 'IRELAND'
                            ? setParcelShipCountry('AreaThree')
                            : e === 'NETHERLANDS'
                            ? setParcelShipCountry('AreaThree')
                            : e === 'NORWAY'
                            ? setParcelShipCountry('AreaThree')
                            : e === 'POLAND'
                            ? setParcelShipCountry('AreaThree')
                            : e === 'SWEDEN'
                            ? setParcelShipCountry('AreaThree')
                            : e === 'INDIA'
                            ? setParcelShipCountry('AreaThree')
                            : e === 'REPUBIC OF SOUTH AFRICAN'
                            ? setParcelShipCountry('AreaFour')
                            : 'false';
                        }}
                      >
                        {e}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Content>
                </Dropdown.Menu>
              </Dropdown>
            </DropDownStyled>
          );
        };

        return selectShipButton();
      };

      return ConvertCountryName === false
        ? getFalse(InputWeight)
        : getTrue(InputWeight, ConvertCountryName, getExchangeRate);
    };

    const GetParcelShipPricePrice = ParcelShipPricePrice(
      selectCountry,
      InputWeight,
      getExchangeRate()
    );

    const PaypalCommission = (total, getExchangeRate) => {
      let ExchangeRateApplication = total * getExchangeRate;
      return (
        ExchangeRateApplication + ExchangeRateApplication * 0.044 + 40 + 150
      );
    };

    return (
      <>
        <ShippingTableTitle>
          {intl.messages.CALC_Shipping_Result.title}
        </ShippingTableTitle>
        <TableStyled fullwidth hoverable narrow striped>
          <TableRow>
            <TableRowItem>
              <StrongStyled>
                {intl.messages.CALC_Shipping_Result.solt}
              </StrongStyled>
            </TableRowItem>
            <TableRowItem>
              <StrongStyled>{selectCountry}</StrongStyled>
            </TableRowItem>
          </TableRow>
          <TableRow
            onClick={() => {
              if (setPaypal === undefined) {
                return;
              } else {
                changPaypalEMS(GetEMSPricePrice);
              }

              return;
            }}
          >
            <TableRowItem>
              <StrongStyled>
                EMS
                <br />
                (2~4days)
              </StrongStyled>
            </TableRowItem>
            <TableRowItem>
              <StrongStyled>
                {`${
                  selectCountry.toUpperCase() === 'JP' ? '¥' : '$'
                }${GetEMSPricePrice.toLocaleString()}`}
              </StrongStyled>
            </TableRowItem>
          </TableRow>

          <TableRow
            onClick={() => {
              if (setPaypal === undefined) {
                return;
              } else {
                changPaypalFlight(GetParcelFlightPricePrice);
              }

              return;
            }}
          >
            <TableRowItem>
              <StrongStyled>
                Parcel(Flight)
                <br />
                (7~15days)
              </StrongStyled>
            </TableRowItem>
            <TableRowItem>
              {`${
                selectCountry.toUpperCase() === 'JP' ? '¥' : '$'
              }${GetParcelFlightPricePrice.toLocaleString()}
                `}
            </TableRowItem>
          </TableRow>

          <TableRow
            onClick={() => {
              if (setPaypal === undefined) {
                return;
              } else {
                changPaypalShip(GetParcelShipPricePrice);
              }
              return;
            }}
          >
            <TableRowItem>
              <StrongStyled>
                Parcel(Ship)
                <br />
                (15~30days)
              </StrongStyled>
            </TableRowItem>
            <TableRowItem>
              {!isNaN(GetParcelShipPricePrice)
                ? `${selectCountry.toUpperCase() === 'JP' ? '¥' : '$'}` +
                  GetParcelShipPricePrice.toLocaleString()
                : GetParcelShipPricePrice}
              {!isNaN(GetParcelShipPricePrice)
                ? ''
                : Math.ceil(
                    PaypalCommission(
                      price['Parcel(Ship)'][parcelShipCountry][
                        kg['Parcel(Ship)'].findIndex(
                          (element) => element > InputWeight
                        )
                      ],
                      getExchangeRate()
                    )
                  ).toLocaleString()}
            </TableRowItem>
          </TableRow>
        </TableStyled>
      </>
    );
  })
);
