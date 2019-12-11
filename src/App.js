import React from 'react';
import Routes from './routes';
import { GlobalStyle } from './styles/globalStyle';

const App = () => {
    return (
        <React.Fragment>
            <Routes />
            <GlobalStyle />
        </React.Fragment>
    )
}

export default App;