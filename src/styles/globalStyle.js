import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap');

    *{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    html{
        margin: 0 !important;
        padding: 0 !important;
    }

    body{
        margin: ${props => props.m || 0};
        padding: ${props => props.p || 0};
        background: ${props => props.bg || 'rgba(248, 249, 253)'};
        min-width: 100vw !important;
        max-width: 100vw !important;
    }
`;

export { GlobalStyle };