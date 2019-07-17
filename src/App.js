import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import { Container } from './styles/app';
import { Header } from './components';
import Routes from './routes';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          {/* header */}
          <Header />

          {/* routes of application */}
          <Routes />

          {/* app styles */}
          <GlobalStyle />
        </Container>
      </BrowserRouter>
    </Provider>
  );
}
