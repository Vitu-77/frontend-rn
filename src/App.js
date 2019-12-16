import React from 'react';
import Routes from './routes';
import { GlobalStyle } from './global/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './global/styles/theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Routes />
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App;