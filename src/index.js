import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

import { ApolloProvider } from 'react-apollo-hooks';
import { createHttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { getMainDefinition } from 'apollo-utilities';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');
  return {
    headers: {
      ...headers,
      'x-token': token ? `Bearer ${token}` : '',
      'x-refreshToken': refreshToken ? refreshToken : ''
    }
  };
});

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/graphql',
  options: {
    reconnect: true,
    connectionParams: {
      'x-token': localStorage.getItem('token'),
      'x-refreshToken': localStorage.getItem('refreshToken')
    }
  }
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

const app = (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <>
        <GlobalStyle />
        <App />
      </>
    </ApolloProvider>
  </ThemeProvider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
