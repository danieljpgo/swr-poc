import { BrowserRouter } from 'react-router-dom';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { SWRConfig } from 'swr';
import Routes from './routes';

const App = () => (
  <GeistProvider>
    <CssBaseline />
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
  </GeistProvider>
);

export default App;
