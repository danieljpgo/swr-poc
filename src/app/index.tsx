import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ThemeProvider>
);


export default App;
