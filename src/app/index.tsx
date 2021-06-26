import { BrowserRouter } from 'react-router-dom';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { SWRProvider } from './common/utils/providers/SWRProvider';
import Routes from './routes';

const App = () => (
  <GeistProvider>
    <CssBaseline />
    <SWRProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </SWRProvider>
  </GeistProvider>
);

export default App;
