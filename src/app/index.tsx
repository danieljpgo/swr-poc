import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import Routes from './routes';

const App = () => (
  <GeistProvider>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SWRConfig value={{
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        shouldRetryOnError: true,
        refreshInterval: 0,
        errorRetryInterval: 5000,
        errorRetryCount: 3,
      }}
      >
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </SWRConfig>
    </ThemeProvider>
  </GeistProvider>
);

export default App;
