import React, { useState } from 'react';

import { withRouter } from 'react-router-dom';
import { kg, Country, CountryName, price, ShippingType } from './emsData.json';
import { injectIntl } from 'react-intl';
import {
  ShippingWrapper,
  BoxWrapper,
  BoxTitle,
  BoxContentText,
  BoxTableWrapper,
  TableTitle,
  TableTitleItem,
  TableRow,
  TableRowItem,
  DropDownStyled,
  DropDownTitleWrapper,
  DropDownListText,
  BoxTableDescription,
  DivStyled,
  HeightCenter,
  HeightCenterTwo,
  ArountCountryName,
  ArountCountryNameInText,
  BRStyled,
  HRStyled,
  BoxEmptyWrapper,
  BoxBTN,
  StrongStyled,
} from './Component/StyledComponent';

import { Button, Menu, MenuItem } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default injectIntl(
  withRouter((props) => {
    const { intl, history } = props;

    const [selectCountry, setSelectCountry] = useState('JP');
    const [selectShippingType, setSelectShippingType] = useState('EMS');
    const [anchorEl, setAnchorEl] = useState(null);

    const [anchorElCountry, setAnchorElCountry] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleClickCountry = (event) => {
      setAnchorElCountry(event.currentTarget);
    };

    const handleCloseCountry = () => {
      setAnchorElCountry(null);
    };

    return (
      <ShippingWrapper>
        <BoxWrapper>
          <BoxTitle>{intl.messages.HelpShippingFee['Top']['Title']}</BoxTitle>
          <BoxContentText>
            {intl.messages.HelpShippingFee['Top']['Description']
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
          <DropDownStyled>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <DropDownTitleWrapper>
                <DropDownListText>{selectShippingType}</DropDownListText>
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
              {ShippingType?.map((ST, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    handleClose();
                    setSelectShippingType(ST);
                    ST === 'Parcel(Ship)'
                      ? setSelectCountry('AreaOne')
                      : setSelectCountry('JP');
                    return;
                  }}
                >
                  <DropDownListText>{ST}</DropDownListText>
                </MenuItem>
              ))}
            </Menu>
          </DropDownStyled>
          <BoxTitle>
            {selectShippingType === 'EMS'
              ? intl.messages.HelpShippingFee['DetailShippingType']['Title'][
                  'EMS'
                ]
              : selectShippingType === 'Parcel(Flight)'
              ? intl.messages.HelpShippingFee['DetailShippingType']['Title'][
                  'Flight'
                ]
              : selectShippingType === 'Parcel(Ship)'
              ? intl.messages.HelpShippingFee['DetailShippingType']['Title'][
                  'Ship'
                ]
              : ''}
          </BoxTitle>

          <BoxContentText>
            {selectShippingType === 'EMS' ? (
              <DivStyled>
                <BoxTableDescription>
                  {intl.messages.HelpShippingFee['DetailShippingType'][
                    'Description'
                  ]['EMS']
                    .split('\n')
                    .map((line, index) => {
                      return (
                        <span key={index}>
                          {line}
                          <BRStyled />
                        </span>
                      );
                    })}
                </BoxTableDescription>
                <BoxTableWrapper>
                  {Object.values(
                    intl.messages.HelpShippingFee['DetailShippingType'][
                      'TableEMSInfo'
                    ]['ROW']
                  ).map((row, index) => {
                    const cell = Object.values(row.CELL);

                    return (
                      <TableRow key={index}>
                        {cell.map((cell, index) => {
                          return (
                            <TableRowItem key={index}>{cell}</TableRowItem>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </BoxTableWrapper>
              </DivStyled>
            ) : selectShippingType === 'Parcel(Flight)' ? (
              <HeightCenter>
                {
                  intl.messages.HelpShippingFee['DetailShippingType'][
                    'Description'
                  ]['Flight']
                }
              </HeightCenter>
            ) : selectShippingType === 'Parcel(Ship)' ? (
              <HeightCenterTwo>
                {
                  intl.messages.HelpShippingFee['DetailShippingType'][
                    'Description'
                  ]['Ship']
                }
              </HeightCenterTwo>
            ) : (
              ''
            )}
          </BoxContentText>
          <HRStyled />

          <DropDownStyled>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClickCountry}
            >
              <DropDownTitleWrapper>
                <DropDownListText>{selectCountry}</DropDownListText>
                <ExpandMoreIcon />
              </DropDownTitleWrapper>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorElCountry}
              keepMounted
              open={Boolean(anchorElCountry)}
              onClose={handleCloseCountry}
            >
              {CountryName[selectShippingType]?.map((ST, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    handleCloseCountry();
                    setSelectCountry(ST);
                    return;
                  }}
                >
                  <DropDownListText>{ST}</DropDownListText>
                </MenuItem>
              ))}
            </Menu>
          </DropDownStyled>

          <ArountCountryName>
            {!Array.isArray(Country[selectShippingType][selectCountry]) ? (
              <h2>{Country[selectShippingType][selectCountry]}</h2>
            ) : (
              Country[selectShippingType][selectCountry].map((m, index) => (
                <ArountCountryNameInText key={index}>
                  {m} {' |'}{' '}
                </ArountCountryNameInText>
              ))
            )}
          </ArountCountryName>

          <BoxTableWrapper>
            <TableTitle>
              {Object.values(
                intl.messages.HelpShippingFee['DetailShippingType'][
                  'TableCostInfo'
                ]
              ).map((TitleObJ, index) => {
                return (
                  <TableTitleItem key={index}>
                    <StrongStyled>
                      {TitleObJ.split('\n').map((line, index) => {
                        return (
                          <span key={index}>
                            {line}
                            <BRStyled />
                          </span>
                        );
                      })}
                    </StrongStyled>
                  </TableTitleItem>
                );
              })}
            </TableTitle>
            {kg[selectShippingType].map((v1, index) => {
              return (
                <TableRow key={index}>
                  <TableRowItem>{v1}</TableRowItem>
                  <TableRowItem>
                    {price[selectShippingType][selectCountry][
                      index
                    ].toLocaleString()}
                  </TableRowItem>
                </TableRow>
              );
            })}
          </BoxTableWrapper>

          <BoxEmptyWrapper onClick={() => history.push('/calculator')}>
            <BoxBTN>
              {intl.messages.automatic_estimate
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
      </ShippingWrapper>
    );
  })
);
