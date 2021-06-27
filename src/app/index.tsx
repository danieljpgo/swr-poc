import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { SWRProvider } from './common/utils/providers/SWRProvider';
import Router from './router';

const App = () => (
  <GeistProvider>
    <CssBaseline />
    <SWRProvider>
      <Router />
    </SWRProvider>
  </GeistProvider>
);

export default App;
