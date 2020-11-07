import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
  HomeIcon,
  OrderIcon,
  CalculatorIcon,
  HelpIcon,
  CartIcon,
} from './Icons';

const BottomWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #222222;
  border-top: 1px solid #393e41;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  overflow: hidden;
  z-index: 10;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: background-color 0.1s ease-in-out;
  margin-left: 1px;
  margin-right: 1px;
  cursor: pointer;
  &:hover {
    background-color: #eeeeee;
  }
`;

const MenuIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #eeeeee;
`;

export default withRouter(function SimpleBottomNavigation(props) {
  const { history, data } = props;

  const [active, setActive] = useState([false, false, false, false, false]);

  const controlActive = (index) => {
    let tempActive = [false, false, false, false, false, false];
    tempActive[index] = true;

    setActive([...tempActive]);
    return;
  };

  const onLink = (Route) => {
    // 버튼눌렀을때 새로고침 없어지게
    // e.preventDefault();

    if (Route === 'Home') {
      history.push(`/`);
    } else if (Route === 'Order') {
      history.push(`/order/${data.me.username}`);
    } else if (Route === 'CALC') {
      history.push('/calculator');
    } else if (Route === 'Help') {
      history.push('/help');
    } else if (Route === 'My') {
      history.push(`/profile/${data.me.username}`);
    } else if (Route === 'Cart') {
      history.push(`/cart/${data.me.username}`);
    }
    // 해당주소로 보낸다 query때문에 주소로 인자를 보낼것임
    // history.push(`/`);
  };

  return (
    <BottomWrapper>
      <MenuWrapper
        active={active[0]}
        onClick={() => {
          controlActive(0);
          onLink('Home');
          return;
        }}
      >
        <MenuIcon>
          <HomeIcon size={2} />
        </MenuIcon>
      </MenuWrapper>

      <MenuWrapper
        active={active[1]}
        onClick={() => {
          controlActive(1);
          onLink('Order');
          return;
        }}
      >
        <MenuIcon>
          <OrderIcon size={2} />
        </MenuIcon>
      </MenuWrapper>

      <MenuWrapper
        active={active[2]}
        onClick={() => {
          controlActive(2);
          onLink('CALC');
          return;
        }}
      >
        <MenuIcon>
          <CalculatorIcon size={2} />
        </MenuIcon>
      </MenuWrapper>

      <MenuWrapper
        active={active[3]}
        onClick={() => {
          controlActive(3);
          onLink('Help');
          return;
        }}
      >
        <MenuIcon>
          <HelpIcon size={2} />
        </MenuIcon>
      </MenuWrapper>

      <MenuWrapper
        active={active[4]}
        onClick={() => {
          controlActive(4);
          onLink('Cart');
          return;
        }}
      >
        <MenuIcon>
          <CartIcon size={2} />
        </MenuIcon>
      </MenuWrapper>
    </BottomWrapper>
  );
});
