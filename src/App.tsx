import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <SignIn />
    </>
  );
};

export default App;
