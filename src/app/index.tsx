import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { SWRProvider } from './common/utils/providers/SWRProvider';
import Navigation from './main/layout/Navigation';
import Router from './main/router';
import './styles/global.css';

const App = () => (
  <GeistProvider>
    <CssBaseline />
    <SWRProvider>
      <Navigation>
        <Router />
      </Navigation>
    </SWRProvider>
  </GeistProvider>
);

export default App;
