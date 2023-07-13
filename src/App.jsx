import React from 'react';
import GlobalStyle from './globalStyles';
import Router from './router';
import { ThemeProvider } from 'styled-components';
import theme from './globalStyles/common/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme['main']}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
