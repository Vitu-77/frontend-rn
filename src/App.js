import React from 'react';
import Routes from './routes';
import { GlobalStyle } from './global/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './global/styles/theme';
import { UserProvider } from './global/providers/user';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <UserProvider>
                <Routes />
            </UserProvider>
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App;