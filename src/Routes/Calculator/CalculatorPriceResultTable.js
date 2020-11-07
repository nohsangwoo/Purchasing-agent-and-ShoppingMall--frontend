import React from 'react';
import { withRouter } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import {
  TableStyled,
  TableRow,
  TableRowItem,
  PaypalFeeInfoText,
  StrongStyled,
  TableTitle,
} from './Component/CalculatorContainer_StyledComponents';

export default injectIntl(
  withRouter((props) => {
    const { exchangeRate: WON, InputPrice, country, intl } = props;

    const getExchangeRate = () => {
      const YEN = 100;
      const Calculate = YEN / WON;
      return Calculate;
    };

    const ProductPrice = Number(InputPrice);

    const getAgencyFee = (ProductPrice) => {
      let AgencyFee = 0;
      if (Number(ProductPrice) <= 5000) {
        AgencyFee = 4000;
      } else if (Number(ProductPrice) <= 100000) {
        AgencyFee = 6000;
      } else if (Number(ProductPrice) <= 300000) {
        AgencyFee = 10000;
      } else {
        AgencyFee = Number(ProductPrice) * 0.05;
      }
      return AgencyFee;
    };

    const Repacking = 5000;
    const BankCommission = 4000;
    const KrTax = InputPrice * 0.044;

    const getTotal = (
      InputPrice,
      AgencyFee,
      Repacking,
      BankCommission,
      KrTax
    ) => {
      return Math.ceil(
        InputPrice + AgencyFee + Repacking + BankCommission + KrTax
      );
    };

    const PaypalCommission = (total, getExchangeRate) => {
      let ExchangeRateApplication = total * getExchangeRate;

      const paypalFee = 7000 * getExchangeRate;

      return (
        ExchangeRateApplication + (ExchangeRateApplication * 0.044 + paypalFee)
      );
    };
    return (
      <>
        <TableTitle>{intl.messages.CALC_Price_Result.title}</TableTitle>
        <TableStyled>
          <TableRow>
            <TableRowItem>
              <StrongStyled>#</StrongStyled>
            </TableRowItem>
            <TableRowItem>
              <StrongStyled>KRW(₩)</StrongStyled>
            </TableRowItem>
          </TableRow>
          <TableRow>
            <TableRowItem>
              <StrongStyled>
                {intl.messages.CALC_Price_Result.table.product_price}
              </StrongStyled>
            </TableRowItem>
            <TableRowItem>
              <StrongStyled>{ProductPrice.toLocaleString()}</StrongStyled>
            </TableRowItem>
          </TableRow>
          <TableRow>
            <TableRowItem>
              <StrongStyled>
                {intl.messages.CALC_Price_Result.table.fee}
              </StrongStyled>
            </TableRowItem>
            <TableRowItem>
              {getAgencyFee(ProductPrice).toLocaleString()}
            </TableRowItem>
          </TableRow>
          <TableRow>
            <TableRowItem>
              <StrongStyled>
                {intl.messages.CALC_Price_Result.table.repacking}
              </StrongStyled>
            </TableRowItem>
            <TableRowItem>{Repacking.toLocaleString()}</TableRowItem>
          </TableRow>
          <TableRow>
            <TableRowItem>
              <StrongStyled>
                {intl.messages.CALC_Price_Result.table.bank_commission}
              </StrongStyled>
            </TableRowItem>
            <TableRowItem>{BankCommission.toLocaleString()}</TableRowItem>
          </TableRow>
          <TableRow>
            <TableRowItem>
              <StrongStyled>
                {intl.messages.CALC_Price_Result.table.tax}
              </StrongStyled>
            </TableRowItem>
            <TableRowItem>{KrTax.toLocaleString()}</TableRowItem>
          </TableRow>
          <TableRow>
            <TableRowItem>
              <StrongStyled>
                {intl.messages.CALC_Price_Result.table.total}
              </StrongStyled>
            </TableRowItem>
            <TableRowItem>
              {getTotal(
                ProductPrice,
                getAgencyFee(ProductPrice),
                Repacking,
                BankCommission,
                KrTax
              ).toLocaleString()}
            </TableRowItem>
          </TableRow>
        </TableStyled>

        <TableTitle>{intl.messages.CALC_Price_Result.ex_rate.title}</TableTitle>
        <TableStyled>
          <TableRow>
            <PaypalFeeInfoText>
              {country.toUpperCase() === 'JP'
                ? '(Paypal手数料を含む)'
                : '(Include Paypal fee)'}
            </PaypalFeeInfoText>
          </TableRow>
          <TableRow>
            <TableRowItem>
              <StrongStyled>#</StrongStyled>
            </TableRowItem>
            <TableRowItem>
              <StrongStyled>
                {country.toUpperCase() === 'JP' ? 'JPY' : 'USD'}
              </StrongStyled>
            </TableRowItem>
          </TableRow>
          <TableRow>
            <TableRowItem>
              <StrongStyled>
                {intl.messages.CALC_Price_Result.ex_rate.ExchangeRate}
              </StrongStyled>
            </TableRowItem>
            <TableRowItem>
              {country.toUpperCase() === 'JP' ? '¥' : '$'}100 / {`₩${WON}`}
            </TableRowItem>
          </TableRow>
          <TableRow>
            <TableRowItem>
              <StrongStyled>
                {intl.messages.CALC_Price_Result.ex_rate.Paypal}
              </StrongStyled>
            </TableRowItem>
            <TableRowItem>
              {`${country.toUpperCase() === 'JP' ? '¥' : '$'}${Math.ceil(
                PaypalCommission(
                  getTotal(
                    ProductPrice,
                    getAgencyFee(ProductPrice),
                    Repacking,
                    BankCommission,
                    KrTax
                  ),
                  getExchangeRate()
                )
              ).toLocaleString()}`}
            </TableRowItem>
          </TableRow>
        </TableStyled>
      </>
    );
  })
);
