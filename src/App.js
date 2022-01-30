import React from 'react';
import { ToastContainer } from 'react-toastify';
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
        <ToastContainer autoClose={3000} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
