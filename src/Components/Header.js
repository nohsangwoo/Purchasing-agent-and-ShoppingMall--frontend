import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled, { keyframes } from 'styled-components';
import { withRouter } from 'react-router-dom';
import Input from './Input';
import useInput from '../Hooks/useInput';
import { ME } from '../SharedQueries';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import {
  SwipeableDrawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HeaderBottom from './HeaderBottom';
import { BackspaceIcon, FFssLogoTitle, SearchIcon, AccountIcon } from './Icons';
import SeeTag from './HeaderSeeTags';

const drawerWidth = 240;

const loadingAnimation = keyframes`
    0%{
        opacity:0
    }
    50%{
        opacity:1
    }
    100%{
        opacity:0;
    }
   
  }
`;

const Blink = styled.div`
  animation: ${loadingAnimation} 1s linear infinite;
`;

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const SearchInput = styled(Input)`
  background-color: ${(props) => props.theme.bgColor};
  padding: 5px;
  font-size: 14px;
  border-radius: 3px;
  height: auto;
  text-align: center;
  width: 100%;
  &::placeholder {
    opacity: 1;
    font-weight: 200;
  }
`;

const TopSearchWrapper = styled.div`
  display: ${(props) => (props.state === true ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  top: 50px;
  background-color: #222222;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const TopSearchInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 99;
`;

const TopSearchCancelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #7f8c8d;
  z-index: 4;
  opacity: 0.5;
`;

const TopSearch = styled.div`
  width: 100%;
  height: 5rem;
  min-height: 5rem;
  background-color: #222222;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
`;

const TopSearchTag = styled.div`
  width: 100%;
  height: 100%;
  background-color: #222222;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SearchCancelBTNWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 100%;
  cursor: pointer;
`;

const SearchInputWrapper = styled.div`
  flex-grow: 9;
  padding-left: 10px;
  padding-right: 10px;
`;

const SearchRightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-grow: 1;
  padding-right: 1rem;
`;

const TopWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #222222;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  z-index: 100;
  border-bottom: 1px solid #393e41;
`;

const TopLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  flex-grow: 1;
`;

const TopLeftItems = styled.div`
  display: flex;
  align-items: center;
`;

const TopRight = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

const TopRightItems = styled.div`
  display: flex;
  align-items: center;
`;

const TopRightItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-right: 5px;
  margin-left: 5px;
  padding-right: 5px;
  padding-left: 5px;
  cursor: pointer;
  background-color: #eeeeee;
  border-radius: 30px;
`;

const NavbarWrapper = styled.div``;

const SpanStyled = styled.span``;
export default withRouter((props) => {
  const { history, lang, setLang } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const classes = useStyles();

  const [searchState, setSearchState] = useState(false);

  const setLangFunc = (selectLang) => {
    if (selectLang === 'en') {
      setLang('en');
    } else if (selectLang === 'jp') {
      setLang('jp');
    }
  };

  const [state, setState] = useState({
    0: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => {
    return (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem
            button
            key={'Home'}
            onClick={() => {
              return onLink('Home');
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>

          <ListItem
            button
            key={'Order'}
            onClick={() => {
              return onLink('Order');
            }}
          >
            <ListItemIcon>
              <CreditCardIcon />
            </ListItemIcon>
            <ListItemText primary={'Order'} />
          </ListItem>

          <ListItem
            button
            key={'Calculator'}
            onClick={() => {
              return onLink('Calculator');
            }}
          >
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary={'Calculator'} />
          </ListItem>

          <ListItem
            button
            key={'Help'}
            onClick={() => {
              return onLink('Help');
            }}
          >
            <ListItemIcon>
              <ContactSupportIcon />
            </ListItemIcon>
            <ListItemText primary={'Help'} />
          </ListItem>

          <ListItem
            button
            key={'Profile'}
            onClick={() => {
              return onLink('Profile');
            }}
          >
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary={'My'} />
          </ListItem>
          <ListItem
            button
            key={'Cart'}
            onClick={() => {
              return onLink('Cart');
            }}
          >
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary={'Cart'} />
          </ListItem>
        </List>
        <Divider />
      </div>
    );
  };

  const search = useInput('');

  const { data, loading } = useQuery(ME);
  if (loading) return '';

  const onSearchSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?term=${encodeURI(search.value)}`);
  };

  const onLink = (Route) => {
    if (Route === 'Home') {
      history.push(`/`);
    } else if (Route === 'Order') {
      history.push(`/order/${data.me.username}`);
    } else if (Route === 'Calculator') {
      history.push('/calculator');
    } else if (Route === 'Help') {
      history.push('/help');
    } else if (Route === 'Profile') {
      history.push(`/profile/${data.me.username}`);
    } else if (Route === 'Cart') {
      history.push(`/cart/${data.me.username}`);
    }
  };

  const MobileSearchInputCtrl = () => {
    return;
  };

  return (
    <NavbarWrapper>
      <TopSearchWrapper state={searchState}>
        <TopSearchInnerWrapper>
          <TopSearch>
            <SearchCancelBTNWrapper onClick={() => setSearchState(false)}>
              <BackspaceIcon size={2} />
            </SearchCancelBTNWrapper>
            <SearchInputWrapper>
              <form onSubmit={onSearchSubmit}>
                <SearchInput
                  id={'MobileSaerchInput'}
                  value={search.value}
                  onChange={search.onChange}
                  placeholder="Search"
                />
              </form>
            </SearchInputWrapper>

            <SearchRightWrapper></SearchRightWrapper>
          </TopSearch>
          <TopSearchTag>
            <SeeTag
              lang={lang}
              searchState={searchState}
              setSearchState={setSearchState}
            ></SeeTag>
          </TopSearchTag>
        </TopSearchInnerWrapper>
        <TopSearchCancelWrapper
          onClick={() => {
            setSearchState(false);
            return;
          }}
        ></TopSearchCancelWrapper>
      </TopSearchWrapper>

      <TopWrapper>
        <TopLeft>
          <TopLeftItems>
            {['left'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Blink>
                  <Button onClick={toggleDrawer(anchor, true)}>
                    {anchor === 'left' ? <FFssLogoTitle size="large" /> : ''}
                  </Button>
                </Blink>

                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                  disableBackdropTransition={!iOS}
                  disableDiscovery={iOS}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </TopLeftItems>
        </TopLeft>
        <TopRight>
          <TopRightItems>
            <TopRightItem
              onClick={() => {
                setSearchState(true);
                MobileSearchInputCtrl();
                return;
              }}
            >
              <SearchIcon size={2} />
            </TopRightItem>
            <TopRightItem
              onClick={() => {
                return onLink('Profile');
              }}
            >
              <AccountIcon size={2} />
            </TopRightItem>

            <TopRightItem>
              <Button
                startIcon={<TranslateIcon style={{ color: grey[1000] }} />}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <SpanStyled>{lang}</SpanStyled>

                <ExpandMoreIcon />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    setLangFunc('en');

                    return handleClose();
                  }}
                >
                  English
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    setLangFunc('jp');
                    return handleClose();
                  }}
                >
                  Japaness
                </MenuItem>
              </Menu>
            </TopRightItem>
          </TopRightItems>
        </TopRight>
      </TopWrapper>
      <HeaderBottom data={data}></HeaderBottom>
    </NavbarWrapper>
  );
});
