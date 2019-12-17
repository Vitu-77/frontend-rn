import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap');

    *{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;

        &::selection{
            background: ${theme.secondarySystemColor};
            color: ${theme.white}
        }
    }

    html{
        margin: 0 !important;
        padding: 0 !important;
    }

    body{
        margin: 0;
        padding: 0;
        background: #fff;
    }
`;

export { GlobalStyle };