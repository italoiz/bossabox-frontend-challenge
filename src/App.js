import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import { Container } from './styles/app';
import { Header } from './components';
import Routes from './routes';

export default function App() {
  return (
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
  );
}
