import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import { AuthConextProvider } from './hooks/useAuth';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <>
      <AuthConextProvider>
        <SignIn />
      </AuthConextProvider>
      <GlobalStyles />
    </>
  );
};

export default App;
