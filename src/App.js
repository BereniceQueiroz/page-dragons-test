import React from 'react';
import GlobalStyle from './styles/global';
import { AuthProvider } from './hooks/useAuth';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Routes from './routes';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
