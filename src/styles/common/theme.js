import { css } from 'styled-components';

const mainTheme = {
  container: {
    mainContainer: css`
      // ~ 320px 인 device에 대한 속성 값을 작성
      margin: 0 auto;

      @media only screen and (min-width: 320px) {
        // 320px ~ 인 device에 대한 속성 값을 작성
      }

      @media only screen and (min-width: 480px) {
        // 480px ~ 인 device에 대한 속성 값을 작성
      }

      @media only screen and (min-width: 768px) {
        // 768px ~ 인 device에 대한 속성 값을 작성
      }

      @media only screen and (min-width: 1024px) {
        // 1200px ~ 인 device에 대한 속성 값을 작성
        max-width: 1024px;
      }
    `,
  },
};

const theme = {
  main: mainTheme,
};

export default theme;
