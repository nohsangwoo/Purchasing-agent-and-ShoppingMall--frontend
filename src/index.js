import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import Client from './Apollo/Client';
import { ApolloProvider } from '@apollo/react-hooks';

// import ApolloClient from 'apollo-boost';
// 새로 업데이트된 프로바이더로 감싸려면 이걸써야함 나중에 업데이트 ㄱㄱ

ReactDOM.render(
  <ApolloProvider client={Client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
