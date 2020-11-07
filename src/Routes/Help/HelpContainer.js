import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import HelpAgencyFeeJP from './HelpAgencyFee';
import HelpShippingFeeJP from './HelpShippingFee';
import PaymentGuidanceJP from './PaymentGuidance';
import { withRouter } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { injectIntl } from 'react-intl';

import {
  Wrapper,
  DropDownStyled,
  DropDownTitleWrapper,
  DropDownListText,
} from './Component/StyledComponent';

export default injectIntl(
  withRouter((props) => {
    const [action, setAction] = useState('agency_fee');
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const ctrlDropDown = (list) => {
      setAction(list);
    };

    const { intl } = props;

    const heplListForDropDown = ['agency_fee', 'Shipping_fee', 'payInfo'];

    return (
      <Wrapper>
        <Helmet>
          <title>ffss - Help</title>
        </Helmet>

        <DropDownStyled>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <DropDownTitleWrapper>
              <DropDownListText>
                {intl.messages.HelpContainerActionName_list[action]}
              </DropDownListText>
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
            {heplListForDropDown.map((helpMenuList, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  handleClose();
                  ctrlDropDown(helpMenuList);
                  return;
                }}
              >
                <DropDownListText>
                  {intl.messages.HelpContainerActionName_list[helpMenuList]}
                </DropDownListText>
              </MenuItem>
            ))}
          </Menu>
        </DropDownStyled>

        {action === 'agency_fee' ? (
          <>
            <HelpAgencyFeeJP setAction={setAction} />
          </>
        ) : action === 'Shipping_fee' ? (
          <>
            <HelpShippingFeeJP setAction={setAction} />
          </>
        ) : (
          <>
            <PaymentGuidanceJP setAction={setAction} />
          </>
        )}
      </Wrapper>
    );
  })
);
