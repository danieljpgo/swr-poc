import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import Routes from './routes';
import { SWRConfig } from 'swr';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <SWRConfig value={{
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      shouldRetryOnError: true,
      refreshInterval: 60000,
      errorRetryInterval: 5000,
      errorRetryCount: 3
    }}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </SWRConfig>
  </ThemeProvider>
);

export default App;
