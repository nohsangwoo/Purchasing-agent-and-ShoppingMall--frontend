import ApolloClient from 'apollo-boost';

import { defaults, resolvers } from './LocalState';

export default new ApolloClient({
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000'
      : 'http://121.129.151.126:802/',
  clientState: {
    defaults,
    resolvers,
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});
