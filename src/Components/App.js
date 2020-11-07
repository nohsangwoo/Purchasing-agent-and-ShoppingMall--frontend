// react hooks을 사용할때는 Components를 사용하지 않음

import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import styled, { ThemeProvider } from 'styled-components';
import { HashRouter as Router } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import Routes from './Routes';
import Footer from './Footer';
import Header from './Header';
import ScrollUpButton from 'react-scroll-up-button';
import { IntlProvider } from 'react-intl';

import en from './locale/en.json';
import jp from './locale/jp.json';

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
`;

export default () => {
  const [lang, setLang] = useState('jp');

  const selectMessages = lang === 'en' ? en : lang === 'jp' ? jp : '';

  const {
    data: { isLoggedIn },
  } = useQuery(QUERY);
  return (
    <ThemeProvider theme={Theme}>
      <IntlProvider locale={'en'} messages={selectMessages}>
        <GlobalStyles />
        <Router>
          {isLoggedIn && <Header lang={lang} setLang={setLang} />}

          <ScrollUpButton
            style={{ zIndex: 10, bottom: '100px' }}
            EasingType="easeOutExpo"
            ShowAtPosition={195}
            AnimationDuration={400}
          />
          <Wrapper>
            <Routes isLoggedIn={isLoggedIn} />

            <Footer />
          </Wrapper>
        </Router>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </IntlProvider>
    </ThemeProvider>
  );
};
