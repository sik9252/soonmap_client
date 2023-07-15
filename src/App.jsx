import React from 'react';
import GlobalStyle from './styles';
import Router from './router';
import { ThemeProvider } from 'styled-components';
import theme from './styles/common/theme';

function App() {
  return (
    <ThemeProvider theme={theme['main']}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
