import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    html {
        ${({ theme }) => theme.container.mainContainer}
    }
`;

export default GlobalStyle;
