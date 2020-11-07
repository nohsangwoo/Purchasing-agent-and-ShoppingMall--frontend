import React from 'react';
import { withRouter } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import {
  AgnecyWrapper,
  BoxWrapper,
  BoxTitle,
  BoxContentText,
  BoxTableWrapper,
  TableTitle,
  TableTitleItem,
  TableRow,
  TableRowItem,
  BoxEmptyWrapper,
  BoxBTN,
  StrongStyled,
} from './Component/StyledComponent';

export default injectIntl(
  withRouter((props) => {
    const { setAction, intl } = props;

    return (
      <AgnecyWrapper>
        <BoxWrapper>
          <BoxTitle>{intl.messages.HelpAgencyFee['Top']['Title']}</BoxTitle>
          <BoxContentText>
            {intl.messages.HelpAgencyFee['Top']['Content']
              .split('\n')
              .map((line, index) => {
                return (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                );
              })}
          </BoxContentText>
        </BoxWrapper>

        <BoxWrapper>
          <BoxTitle>
            {intl.messages.HelpAgencyFee['DetailAgencyFee']['Title']}
          </BoxTitle>
          <BoxContentText>
            {intl.messages.HelpAgencyFee['DetailAgencyFee']['Description']
              .split('\n')
              .map((line, index) => {
                return (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                );
              })}
          </BoxContentText>

          <BoxTableWrapper>
            <TableTitle>
              {Object.values(
                intl.messages.HelpAgencyFee['DetailAgencyFee']['Table']['Title']
              ).map((TitleObJ, index) => {
                return <TableTitleItem key={index}>{TitleObJ}</TableTitleItem>;
              })}
            </TableTitle>
            {Object.values(
              intl.messages.HelpAgencyFee['DetailAgencyFee']['Table']['ROW']
            ).map((row, index) => {
              const cell = Object.values(row.CELL);

              return (
                <TableRow key={index}>
                  {cell.map((cell, index) => {
                    return <TableRowItem key={index}>{cell}</TableRowItem>;
                  })}
                </TableRow>
              );
            })}
          </BoxTableWrapper>
        </BoxWrapper>

        <BoxWrapper>
          <BoxTitle>
            {intl.messages.HelpAgencyFee['DetailServiceOption']['Title']}
          </BoxTitle>

          <BoxTableWrapper>
            <TableTitle>
              {Object.values(
                intl.messages.HelpAgencyFee['DetailServiceOption']['Table'][
                  'Title'
                ]
              ).map((TitleObJ, index) => {
                const flexIndex = index === 2 ? 7 : 1.5;
                return (
                  <TableTitleItem key={index} flexIndex={flexIndex}>
                    <StrongStyled>{TitleObJ}</StrongStyled>
                  </TableTitleItem>
                );
              })}
            </TableTitle>

            {Object.values(
              intl.messages.HelpAgencyFee['DetailServiceOption']['Table']['ROW']
            ).map((row, index) => {
              const cell = Object.values(row.CELL);

              return (
                <TableRow key={index}>
                  {cell.map((cell, index) => {
                    const cellflexIndex = index === 2 ? 7 : 1.5;

                    return (
                      <TableRowItem key={index} flexIndex={cellflexIndex}>
                        {cell.split('\n').map((line, index) => {
                          return (
                            <span key={index}>
                              {line}
                              <br />
                            </span>
                          );
                        })}
                      </TableRowItem>
                    );
                  })}
                </TableRow>
              );
            })}
          </BoxTableWrapper>
        </BoxWrapper>

        <BoxWrapper>
          <BoxTitle>
            {intl.messages.HelpAgencyFee['DetailAgencyFee']['Title']}
          </BoxTitle>
          <BoxContentText>
            {intl.messages.HelpAgencyFee['DetailAgencyFee']['Description']
              .split('\n')
              .map((line, index) => {
                return (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                );
              })}
          </BoxContentText>
          <BoxTableWrapper>
            <TableTitle>
              {Object.values(
                intl.messages.HelpAgencyFee['DetailAgencyFee']['Table']['Title']
              ).map((TitleObJ, index) => {
                return (
                  <TableTitleItem key={index}>
                    <StrongStyled>{TitleObJ}</StrongStyled>
                  </TableTitleItem>
                );
              })}
            </TableTitle>
            {Object.values(
              intl.messages.HelpAgencyFee['DetailAgencyFee']['Table']['ROW']
            ).map((row, index) => {
              const cell = Object.values(row.CELL);

              return (
                <TableRow key={index}>
                  {cell.map((cell, index) => {
                    return <TableRowItem key={index}>{cell}</TableRowItem>;
                  })}
                </TableRow>
              );
            })}
          </BoxTableWrapper>
        </BoxWrapper>

        {/* otehr service option*/}
        <BoxWrapper>
          <BoxTitle>
            {intl.messages.HelpAgencyFee['DetailOther']['Title']}
          </BoxTitle>
          <BoxContentText>
            {intl.messages.HelpAgencyFee['DetailOther']['Contents']
              .split('\n')
              .map((line, index) => {
                return (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                );
              })}
          </BoxContentText>
          <BoxEmptyWrapper onClick={() => setAction('Shipping_fee')}>
            <BoxBTN>
              {intl.messages.HelpAgencyFee['DetailOther']['BTN']
                .split('\n')
                .map((line, index) => {
                  return (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  );
                })}
            </BoxBTN>
          </BoxEmptyWrapper>
        </BoxWrapper>
      </AgnecyWrapper>
    );
  })
);
