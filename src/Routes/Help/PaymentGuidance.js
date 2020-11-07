import React from 'react';
import { withRouter } from 'react-router-dom';
import { injectIntl } from 'react-intl';

import {
  PayInfoWrapper,
  BoxWrapper,
  BoxTitle,
  BoxContentText,
  BRStyled,
} from './Component/StyledComponent';

export default injectIntl(
  withRouter((props) => {
    const { intl } = props;

    return (
      <PayInfoWrapper>
        {/* payment info top */}
        <BoxWrapper>
          <BoxTitle>{intl.messages.PaymentGuidance['Top']['Title']}</BoxTitle>
          <BoxContentText>
            {intl.messages.PaymentGuidance['Top']['Description']}
          </BoxContentText>
        </BoxWrapper>

        <BoxWrapper>
          <BoxTitle>
            {intl.messages.PaymentGuidance['PaypalInfo']['Title']}
          </BoxTitle>
          <BoxContentText>
            {intl.messages.PaymentGuidance['PaypalInfo']['Description']
              .split('\n')
              .map((line, index) => {
                return (
                  <span key={index}>
                    {line}
                    <BRStyled />
                  </span>
                );
              })}
          </BoxContentText>
        </BoxWrapper>

        <BoxWrapper>
          <BoxTitle>
            {intl.messages.PaymentGuidance['ETC_Info']['Title']}
          </BoxTitle>
          <BoxContentText>
            {intl.messages.PaymentGuidance['ETC_Info']['Description']}
          </BoxContentText>
        </BoxWrapper>
      </PayInfoWrapper>
    );
  })
);
