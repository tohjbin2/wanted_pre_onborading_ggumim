import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './utils/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './utils/styles/theme';
import Main from './pages/Main';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
